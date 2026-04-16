import React, { useState } from "react";
import axios, { AxiosError } from "axios";
import ab1 from "../../assets/logup.png";
import { Eye, EyeOff, Mail, Phone, User, Lock } from "lucide-react";
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
  const [showConfirm, setShowConfirm] = useState(false);

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
  return (
    <section className="px-6 py-12 md:py-20 font-cairo">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
        <div className="bg-white rounded-2xl p-8 ">
          <SubHeading size="4xl" weight="bold">
            Sign up
          </SubHeading>
          <p className="text-gray-600 mb-6">
            Let's get you all set up so you can access your personal account.
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
        </div>

        <div className="rounded-2xl overflow-hidden h-full">
          <img
            src={ab1}
            alt="Signup visual"
            className="w-full h-full object-cover rounded-2xl"
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
          className={`absolute inset-y-1 left-1 w-1/2 rounded-full bg-primary transition-transform duration-300 ${
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
