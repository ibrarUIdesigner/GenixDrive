import React, { useState } from "react";
import axios, { AxiosError } from "axios";
import ab1 from "../../assets/ab1.jpg";
import { Eye, EyeOff, Mail, Phone, User, Lock } from "lucide-react";
import Button from "../../components/Button";
import SubHeading from "../../components/sharedui/SubHeading";
import { TextField } from "../../components/sharedui/Input";

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
  message: string;
  user?: {
    id: string;
    email: string;
  };
}

const Signup = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();

    // Basic validation
    if (!form.email || !form.password || !form.userName) {
      setError("Required fields are missing");
      return;
    }

    try {
      setLoading(true);
      setError("");
      setSuccess("");

      // Optional: auto-generate fullName
      const payload = {
        ...form,
        fullName: `${form.firstName} ${form.lastName}`.trim(),
      };

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
      setSuccess(response.data.message || "Signup successful");

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
              <TextField
                placeholder="User Name"
                leftIcon={<User className="w-5 h-5" />}
                value={form.userName}
                onChange={handleChange}
                name="userName"
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <TextField
                type="email"
                placeholder="Email"
                leftIcon={<Mail className="w-5 h-5" />}
                value={form.email}
                onChange={handleChange}
                name="email"
              />
              <TextField
                type="tel"
                placeholder="Phone Number"
                leftIcon={<Phone className="w-5 h-5" />}
                value={form.phone}
                onChange={handleChange}
                name="phone"
              />
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
            <TextField
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
            />
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
              <a className="text-primary" href="/admin/login">
                Login
              </a>
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
