import React, { useState } from "react";
import ab1 from "../../assets/ab1.jpg";
import { Eye, EyeOff, Mail, Lock } from "lucide-react";
import Button from "../../components/Button";
import SubHeading from "../../components/sharedui/Subheading";
import { TextField } from "../../components/sharedui/Input";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
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
                leftIcon={<Mail className="w-5 h-5" />}
              />
              <TextField
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                leftIcon={<Lock className="w-5 h-5" />}
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
              <div className="flex items-center justify-between">
                <label className="flex items-center gap-2 text-sm text-gray-600">
                  <input type="checkbox" className="rounded border-gray-300" />
                  Remember me
                </label>
                <a href="#" className="text-secondary text-sm">
                  Forgot Password
                </a>
              </div>
              <Button
                size="lg"
                variant="secondary"
                isFullBtn={true}
                className="w-full"
              >
                Login
              </Button>
              <p className="text-center text-sm text-gray-600">
                Don't have an account?{" "}
                <a className="text-primary" href="/admin/signup">
                  Sign up
                </a>
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
