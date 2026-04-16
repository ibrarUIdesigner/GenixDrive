import React, { useState } from "react";
import axios, { AxiosError } from "axios";
import ab1 from "../../assets/logup.png";
import {
  Eye,
  EyeOff,
  Mail,
  Phone,
  User,
  Lock,
  RectangleEllipsis,
} from "lucide-react";
import Button from "../../components/Button";
import SubHeading from "../../components/sharedui/SubHeading";
import { TextField } from "../../components/sharedui/Input";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

interface SignupPayload {
  email: string;
  userName: string;
  firstName: string;
  lastName: string;
  fullName: string;
  password: string;
  gender: string;
  phone: string;
  tracking: boolean;
  status: string;
}

interface SignupResponse {
  msg: string;
  user?: {
    id: string;
    email: string;
  };
  success?: boolean;
}

const Signup = () => {
  const [showPassword, setShowPassword] = useState(false);
  // const [showConfirm, setShowConfirm] = useState(false);
  const [isSuccess, setIsSuccess] = useState<boolean>(false);
  const [email, setEmail] = useState("");
  const [otpCode, setOTPCode] = useState("");

  const navigate = useNavigate();

  const [form, setForm] = useState<SignupPayload>({
    email: "",
    userName: "",
    firstName: "",
    lastName: "",
    fullName: "",
    password: "",
    gender: "",
    phone: "",
    tracking: true,
    status: "ACTIVE",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [data, setData] = useState<string>("email");

  const [signupPayload, setSignupPayload] = useState(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleToggle = (data: string) => {
    console.log("Toggle : ", data);
    setData(data);
  };

  // handle generate OTP
  const handleGenerateOTP = async () => {
    if (!form.phone.trim()) {
      setError("Phone is required");
      return;
    }
    const password = form.password;

    // Required
    if (!password || !password.trim()) {
      setError("Password is required");
      return;
    }

    // Min length 8
    if (password.length < 8) {
      setError("Password must be at least 8 characters long");
      return;
    }

    // At least 1 uppercase
    if (!/[A-Z]/.test(password)) {
      setError("Password must contain at least 1 uppercase letter");
      return;
    }

    // At least 1 lowercase
    if (!/[a-z]/.test(password)) {
      setError("Password must contain at least 1 lowercase letter");
      return;
    }

    // At least 1 special character
    if (!/[!@#$%^&*(),.?":{}|<>]/.test(password)) {
      setError("Password must contain at least 1 special character");
      return;
    }

    try {
      setLoading(true);
      setError("");

      const res = await axios.post(
        "https://aigenix-api-app-services.three-shelves.com/auth/generate-otp",
        { phone: form.phone },
        {
          headers: {
            "x-account-id": "aigenix-uat",
          },
        },
      );

      // ✅ API success response
      const generatedUsername = res.data?.msg;
      setEmail("");

      const payload = {
        userName: form.userName,
        password: form.password,
        firstName: form.firstName,
        lastName: form.lastName,
        fullName: `${form.firstName} ${form.lastName}`.trim(),
        gender: form.gender,
        tracking: form.tracking,
        status: form.status,

        // ✅ Conditional field
        ...(data === "email" ? { email: form.email } : { phone: form.phone }),
      };

      setSignupPayload(payload);

      toast.success(`Username: ${generatedUsername}`);
      if (res.data?.success) {
        setTimeout(() => {}, 2000); // match toast duration
        setIsSuccess(true);
      } else {
        setIsSuccess(false);
      }
    } catch (err) {
      const error = err as AxiosError<any>;
      setIsSuccess(false);
      if (error.response) {
        const resData = error.response.data;

        if (Array.isArray(resData?.msg)) {
          setError(resData.msg.join(", "));
        } else {
          setError(resData?.message || "Failed to generate username");
        }
      } else if (error.request) {
        setError("No response from server");
      } else {
        setError("Something went wrong");
      }
    } finally {
      setLoading(false);
    }
  };

  // handle verify otp code
  const handleVerifyOTPcode = async () => {
    // ✅ Frontend validation
    if (!email.trim()) {
      toast.error("Email is required");
      return;
    }

    if (!otpCode.trim()) {
      toast.error("OTP is required");
      return;
    }

    if (otpCode.length > 6) {
      toast.error("OTP must be at most 6 characters");
      return;
    }

    console.log("paylaod to signup:", signupPayload);

    try {
      setLoading(true);
      setError("");

      const res = await axios.post(
        "https://aigenix-api-app-services.three-shelves.com/auth/verify-otp",
        {
          phone: email,
          otp: otpCode,
        },
        {
          headers: {
            "x-account-id": "aigenix-uat",
          },
        },
      );

      // ✅ Success
      setOTPCode("");

      toast.success("OTP verified successfully 🎉");

      if (res.data?.success) {
        await callSignUpAPI();
        setTimeout(() => {
          // navigate("/admin/signup");
        }, 2000); // match toast duration
      }
    } catch (err) {
      const error = err as AxiosError<any>;

      let message = "Verification failed";

      if (error.response) {
        const resData = error.response.data;

        // ✅ Your backend format
        if (Array.isArray(resData?.msg)) {
          message = resData.msg.join(", ");
        } else {
          message = resData?.msg || resData?.message || "Verification failed";
        }
      } else if (error.request) {
        message = "No response from server";
      }

      // ❌ Show error via toast (better UX)
      toast.error(message);

      // Optional: keep state if you still want inline error
      setError(message);
    } finally {
      setLoading(false);
    }
  };

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();

    // Basic validation
    if (!form.password || !form.userName) {
      setError("Required fields are missing");
      return;
    }

    if (data === "email" && !form.email) {
      setError("Email is required");
      return;
    }

    if (data === "phone" && !form.phone) {
      setError("Phone is required");
      return;
    }

    await callSignUpAPI();
    return;

    try {
      setLoading(true);
      setError("");
      setSuccess("");

      // Optional: auto-generate fullName

      const payload = {
        userName: form.userName,
        password: form.password,
        firstName: form.firstName,
        lastName: form.lastName,
        fullName: `${form.firstName} ${form.lastName}`.trim(),
        gender: form.gender,
        tracking: form.tracking,
        status: form.status,

        // ✅ Conditional field
        ...(data === "email" ? { email: form.email } : { phone: form.phone }),
      };

      console.log("payload :", payload);

      const response = await axios.post<SignupResponse>(
        "https://aigenix-api-app-services.three-shelves.com/auth/signup",
        payload,
        {
          headers: {
            "x-account-id": "aigenix-uat",
          },
        },
      );

      // ✅ Success
      setSuccess(response.data?.msg || "Signup successful");

      // Optional: clear form
      setForm({
        email: "",
        userName: "",
        firstName: "",
        lastName: "",
        fullName: "",
        password: "",
        gender: "",
        phone: "",
        tracking: true,
        status: "active",
      });

      if (response.data.success) {
        toast.success(response.data.msg);
        setTimeout(() => {
          navigate("/admin/login");
        }, 2000);
      } else {
        toast.error(response.data.msg);
      }

      console.log("Signup Success:", response.data);
    } catch (err) {
      const error = err as AxiosError<any>;

      console.log("API ERROR:", error.response?.data);

      if (error.response) {
        const resData = error.response.data;

        // ✅ Handle array of errors
        if (Array.isArray(resData?.msg)) {
          setError(resData.msg.join(", "));
        }
        // fallback
        else if (resData?.msg) {
          setError(resData.msg);
        } else {
          setError("Signup failed");
        }
      } else if (error.request) {
        setError("No response from server. Try again.");
      } else {
        setError("Something went wrong");
      }
    } finally {
      setLoading(false);
    }
  };

  const callSignUpAPI = async () => {
    try {
      setLoading(true);
      setError("");

      const payload = {
        userName: form.userName,
        password: form.password,
        firstName: form.firstName,
        lastName: form.lastName,
        fullName: `${form.firstName} ${form.lastName}`.trim(),
        gender: form.gender,
        tracking: form.tracking,
        status: form.status,

        ...(data === "email" ? { email: form.email } : { phone: form.phone }),
      };

      console.log("Signup payload:", payload);

      const response = await axios.post<SignupResponse>(
        "https://aigenix-api-app-services.three-shelves.com/auth/signup",
        payload,
        {
          headers: {
            "x-account-id": "aigenix-uat",
          },
        },
      );

      if (response.data.success) {
        toast.success(response.data.msg);

        setForm({
          email: "",
          userName: "",
          firstName: "",
          lastName: "",
          fullName: "",
          password: "",
          gender: "",
          phone: "",
          tracking: true,
          status: "active",
        });

        setTimeout(() => {
          navigate("/admin/login");
        }, 2000);
      } else {
        toast.error(response.data.msg);
      }
    } catch (err) {
      const error = err as AxiosError<any>;

      let message = "Signup failed";

      if (error.response) {
        const resData = error.response.data;

        if (Array.isArray(resData?.msg)) {
          message = resData.msg.join(", ");
        } else {
          message = resData?.msg || "Signup failed";
        }
      }

      toast.error(message);
      setError(message);
    } finally {
      setLoading(false);
    }
  };
  return (
    <section className="px-6 py-12 md:py-20 font-cairo">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
        {/* left section */}
        <div className="bg-white rounded-2xl p-8 ">
          {isSuccess && data === "phone" ? (
            <>
              <SubHeading size="4xl" weight="bold">
                Verify Your Phone
              </SubHeading>
              <p className="text-gray-600 mb-6">
                Enter the 6-digit verification code sent to your phone number to
                continue.
              </p>
              <TextField
                type="tel"
                placeholder="Phone"
                leftIcon={<Phone className="w-5 h-5" />}
                onChange={(e) => setEmail(e.target.value)}
                value={email}
              />
              <TextField
                maxLength={6}
                type="text"
                placeholder="Enter OTP code"
                leftIcon={<RectangleEllipsis className="w-5 h-5" />}
                onChange={(e) => setOTPCode(e.target.value)}
                value={otpCode}
              />

              <Button
                size="lg"
                variant="secondary"
                isFullBtn={true}
                className="w-full mt-5"
                onClick={handleVerifyOTPcode}
                type="button"
                disabled={loading}
              >
                {loading ? "Wait..." : "Verify"}
              </Button>
            </>
          ) : (
            <>
              <SubHeading size="4xl" weight="bold">
                Sign up
              </SubHeading>
              <p className="text-gray-600 mb-6">
                Let's get you all set up so you can access your personal
                account.
              </p>

              <Switch onClick={handleToggle} />

              <form className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <TextField
                    placeholder="First Name"
                    leftIcon={<User className="w-5 h-5" />}
                    value={form.firstName}
                    onChange={handleChange}
                    name="firstName"
                  />
                  <TextField
                    placeholder="Last Name"
                    leftIcon={<User className="w-5 h-5" />}
                    value={form.lastName}
                    onChange={handleChange}
                    name="lastName"
                  />
                </div>
                <div>
                  <TextField
                    placeholder="User Name"
                    leftIcon={<User className="w-5 h-5" />}
                    value={form.userName}
                    onChange={handleChange}
                    name="userName"
                  />
                </div>
                <div className="">
                  {data === "email" && (
                    <TextField
                      type="email"
                      placeholder="Email"
                      leftIcon={<Mail className="w-5 h-5" />}
                      value={form.email}
                      onChange={handleChange}
                      name="email"
                    />
                  )}
                  {data === "phone" && (
                    <>
                      <TextField
                        type="tel"
                        placeholder="Phone Number"
                        leftIcon={<Phone className="w-5 h-5" />}
                        value={form.phone}
                        onChange={handleChange}
                        name="phone"
                      />
                      <span className="text-[10px]">
                        Phone number must start with +92
                      </span>
                    </>
                  )}
                </div>
                <TextField
                  type={showPassword ? "text" : "password"}
                  placeholder="Password"
                  value={form.password}
                  onChange={handleChange}
                  name="password"
                  leftIcon={<Lock className="w-5 h-5" />}
                  rightIcon={
                    <button
                      type="button"
                      className="text-gray-500"
                      onClick={() => setShowPassword((v) => !v)}
                      aria-label="Toggle password visibility"
                    >
                      {showPassword ? (
                        <EyeOff className="w-5 h-5" />
                      ) : (
                        <Eye className="w-5 h-5" />
                      )}
                    </button>
                  }
                />
                {/* <TextField
              type={showConfirm ? "text" : "password"}
              placeholder="Confirm Password"
              leftIcon={<Lock className="w-5 h-5" />}
              rightIcon={
                <button
                  type="button"
                  className="text-gray-500"
                  onClick={() => setShowConfirm((v) => !v)}
                  aria-label="Toggle confirm password visibility"
                >
                  {showConfirm ? (
                    <EyeOff className="w-5 h-5" />
                  ) : (
                    <Eye className="w-5 h-5" />
                  )}
                </button>
              }
            /> */}
                <label className="flex items-center gap-2 text-sm text-gray-600">
                  <input type="checkbox" className="rounded border-gray-300" />I
                  agree to all the{" "}
                  <a href="#" className="text-primary">
                    Terms
                  </a>{" "}
                  and{" "}
                  <a href="#" className="text-primary">
                    Privacy Policies
                  </a>
                </label>
                {error && <p className="text-red-500 text-sm">{error}</p>}
                {success && <p className="text-green-500 text-sm">{success}</p>}

                {data === "email" ? (
                  <Button
                    size="lg"
                    variant="secondary"
                    isFullBtn={true}
                    className="w-full"
                    disabled={loading}
                    type="button"
                    onClick={handleSignup}
                  >
                    {loading ? "Creating account..." : "Sign Up"}
                  </Button>
                ) : (
                  <Button
                    size="lg"
                    variant="secondary"
                    isFullBtn={true}
                    className="w-full"
                    disabled={loading}
                    type="button"
                    onClick={handleGenerateOTP}
                  >
                    {loading ? "Sending.." : "Send OTP"}
                  </Button>
                )}

                <p className="text-center text-sm text-gray-600">
                  Already have an account?{" "}
                  <Link className="text-primary" to="/admin/login">
                    Login
                  </Link>
                </p>
                <p className="text-center text-sm text-gray-600">
                  Dont have username?{" "}
                  <Link className="text-primary" to="/admin/generate-username">
                    Generate username
                  </Link>
                </p>
                <div className="pt-4">
                  <div className="flex items-center gap-4">
                    <div className="flex-1 h-px bg-gray-200"></div>
                    <p className="text-xs md:text-sm text-gray-500">
                      Or Sign up with
                    </p>
                    <div className="flex-1 h-px bg-gray-200"></div>
                  </div>
                  <div className="grid grid-cols-3 gap-3 mt-3">
                    <button className="border rounded-lg py-2 text-sm">
                      Facebook
                    </button>
                    <button className="border rounded-lg py-2 text-sm">
                      Google
                    </button>
                    <button className="border rounded-lg py-2 text-sm">
                      Apple
                    </button>
                  </div>
                </div>
              </form>
            </>
          )}
        </div>

        {/* right section */}
        <div className="rounded-2xl overflow-hidden h-full">
          <img
            src={ab1}
            alt="Signup visual"
            className={`w-full ${isSuccess ? "h-[410px]" : "h-full"} object-cover rounded-2xl`}
          />
        </div>
      </div>
    </section>
  );
};

export default Signup;

type Props = {
  onClick: (data: string) => void;
};

const Switch = ({ onClick }: Props) => {
  const [mode, setMode] = useState<"with" | "without">("with");
  return (
    <div className="flex items-center justify-center mb-5">
      <div className="relative inline-flex items-center w-[420px] h-14 rounded-full border border-black/10 bg-white shadow-sm p-1">
        <div
          className={`absolute inset-y-1 left-1 w-1/2 rounded-full bg-secondary transition-transform duration-300 ${
            mode === "with" ? "translate-x-0" : "translate-x-full"
          }`}
        />
        <button
          type="button"
          onClick={() => {
            (setMode("with"), onClick("email"));
          }}
          className={`relative z-10 w-1/2 text-xs font-bold uppercase tracking-widest ${
            mode === "with" ? "text-white" : "text-black"
          }`}
        >
          Signup with email
        </button>
        <button
          type="button"
          onClick={() => {
            (setMode("without"), onClick("phone"));
          }}
          className={`relative z-10 w-1/2 text-xs font-bold uppercase tracking-widest ${
            mode === "without" ? "text-white" : "text-black"
          }`}
        >
          signup with phone
        </button>
      </div>
    </div>
  );
};
