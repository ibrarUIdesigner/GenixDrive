import React, { useState } from "react";
import ab1 from "../../assets/ab1.jpg";
import { Eye, EyeOff, Mail, Phone, User, Lock } from "lucide-react";
import Button from "../../components/Button";
import SubHeading from "../../components/sharedui/Subheading";
import { TextField } from "../../components/sharedui/Input";

const Signup = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
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
              />
              <TextField
                placeholder="Last Name"
                leftIcon={<User className="w-5 h-5" />}
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <TextField
                type="email"
                placeholder="Email"
                leftIcon={<Mail className="w-5 h-5" />}
              />
              <TextField
                type="tel"
                placeholder="Phone Number"
                leftIcon={<Phone className="w-5 h-5" />}
              />
            </div>
            <TextField
              type={showPassword ? "text" : "password"}
              placeholder="Password"
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
            <Button
              size="lg"
              variant="secondary"
              isFullBtn={true}
              className="w-full"
            >
              Create account
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
