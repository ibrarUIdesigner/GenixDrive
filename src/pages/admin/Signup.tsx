import React, { useState } from "react";
import ab1 from "../../assets/ab1.jpg";
import { Eye, EyeOff, Mail, Phone, User, Lock } from "lucide-react";
import Button from "../../components/Button";
import SubHeading from "../../components/sharedui/Subheading";

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
              <div className="relative">
                <User className="w-5 h-5 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  placeholder="First Name"
                  className="w-full pl-10 rounded-lg border border-gray-300 px-4 py-3 outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
              <div className="relative">
                <User className="w-5 h-5 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  placeholder="Last Name"
                  className="w-full pl-10 rounded-lg border border-gray-300 px-4 py-3 outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="relative">
                <Mail className="w-5 h-5 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full pl-10 rounded-lg border border-gray-300 px-4 py-3 outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
              <div className="relative">
                <Phone className="w-5 h-5 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                <input
                  type="tel"
                  placeholder="Phone Number"
                  className="w-full pl-10 rounded-lg border border-gray-300 px-4 py-3 outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
            </div>
            <div className="relative">
              <Lock className="w-5 h-5 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                className="w-full pl-10 pr-10 rounded-lg border border-gray-300 px-4 py-3 outline-none focus:ring-2 focus:ring-primary"
              />
              <button
                type="button"
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500"
                onClick={() => setShowPassword((v) => !v)}
                aria-label="Toggle password visibility"
              >
                {showPassword ? (
                  <EyeOff className="w-5 h-5" />
                ) : (
                  <Eye className="w-5 h-5" />
                )}
              </button>
            </div>
            <div className="relative">
              <Lock className="w-5 h-5 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
              <input
                type={showConfirm ? "text" : "password"}
                placeholder="Confirm Password"
                className="w-full pl-10 pr-10 rounded-lg border border-gray-300 px-4 py-3 outline-none focus:ring-2 focus:ring-primary"
              />
              <button
                type="button"
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500"
                onClick={() => setShowConfirm((v) => !v)}
                aria-label="Toggle confirm password visibility"
              >
                {showConfirm ? (
                  <EyeOff className="w-5 h-5" />
                ) : (
                  <Eye className="w-5 h-5" />
                )}
              </button>
            </div>
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
