import React, { useState } from "react";
import ab1 from "../../assets/login.png";
import { Eye, EyeOff, Mail, Lock, Phone } from "lucide-react";
import Button from "../../components/Button";
import SubHeading from "../../components/sharedui/SubHeading";
import { TextField } from "../../components/sharedui/Input";
import axios, { AxiosError } from "axios";
// https://aigenix-api-app-services.three-shelves.com/auth/login
import { Link, useNavigate } from "react-router-dom";

//? INTERFACE
interface LoginResponse {
  success: boolean;

  data?: {
    subscription: string;
    token: string;
  };
  msg?: string;
}

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  //? STATES
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");

  const navigate = useNavigate();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    // Basic validation
    if (!email || !password) {
      setError("Email and password are required");
      return;
    }

    try {
      setLoading(true);
      setError("");

      const response = await axios.post<LoginResponse>(
        "https://aigenix-api-app-services.three-shelves.com/auth/login",
        {
          email,
          password,
        },
        {
          headers: {
            "x-account-id": "aigenix-uat",
          },
        },
      );

      // ✅ Success
      const data = response.data;

      // Store token (choose your strategy)
      // localStorage.setItem("accessToken", data.accessToken);

      console.log("Login Success:", data);

      // TODO: redirect user
      if (data.success) {
        localStorage.setItem("accessToken", data.data?.token || "");
        navigate("/admin/dashboard");
      }
    } catch (err) {
      // ✅ Handle errors properly
      const error = err as AxiosError<any>;

      if (error.response) {
        // Server responded with error
        setError(error.response.data?.msg || "Login failed");
      } else if (error.request) {
        // No response from server
        setError("No response from server. Please try again.");
      } else {
        // Something else
        setError("Something went wrong");
      }
    } finally {
      setLoading(false);
    }
  };
  return (
    <section className="px-6 py-12 md:py-20 font-cairo">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
          <div className="bg-white rounded-2xl p-8 ">
            <SubHeading size="4xl" weight="bold">
              Login to Your Account
            </SubHeading>
            <p className="text-gray-600 mb-6">
              Login to access your GenixDrive account
            </p>
            <form className="space-y-4">
              <TextField
                type="email"
                placeholder="Email"
                leftIcon={<Phone className="w-5 h-5" />}
                onChange={(e) => setEmail(e.target.value)}
                value={email}
              />
              <TextField
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                leftIcon={<Lock className="w-5 h-5" />}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                rightIcon={
                  <button
                    type="button"
                    className="text-gray-500"
                    onClick={() => setShowPassword((v) => !v)}
                  >
                    {showPassword ? (
                      <EyeOff className="w-5 h-5" />
                    ) : (
                      <Eye className="w-5 h-5" />
                    )}
                  </button>
                }
              />
              {error && <p className="text-red-500 text-sm">{error}</p>}
              <div className="flex items-center justify-between">
                <label className="flex items-center gap-2 text-sm text-gray-600">
                  <input type="checkbox" className="rounded border-gray-300" />
                  Remember me
                </label>
                <Link
                  to="/admin/forget-password"
                  className="text-secondary text-sm"
                >
                  Forgot Password
                </Link>
              </div>
              <Button
                size="lg"
                variant="secondary"
                isFullBtn={true}
                className="w-full"
                onClick={handleLogin}
                type="button"
                disabled={loading}
              >
                {loading ? "Logging in..." : "Login"}
              </Button>
              <p className="text-center text-sm text-gray-600">
                Don't have an account?{" "}
                <Link className="text-primary" to="/admin/signup">
                  Sign up
                </Link>
              </p>
              <div className="pt-4">
                <p className="text-center text-sm text-gray-500 mb-3">
                  Or login with
                </p>
                <div className="grid grid-cols-3 gap-3">
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
              alt="Login visual"
              className="w-full h-full object-cover rounded-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
