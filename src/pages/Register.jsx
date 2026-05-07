import { useNavigate } from "react-router-dom";
import { Eye, EyeOff } from "lucide-react";
import { useState } from "react";

export default function Register() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/dashboard");
  };

  return (
    <div className="min-h-screen bg-[#dfe5eb] flex items-center justify-center px-4 py-10">
      <div className="w-full max-w-sm rounded-[35px] overflow-hidden shadow-2xl bg-white">
        
        {/* Top Section */}
        <div className="relative bg-[#ea8668] h-52 flex items-center justify-center">
          
          {/* Decorative Shapes */}
          <div className="absolute left-0 top-16 w-28 h-28 bg-[#d9c78d] rounded-r-full opacity-80"></div>

          <div className="absolute right-0 bottom-0 w-24 h-24 bg-[#67d1b2] rounded-tl-full"></div>

          {/* Heading */}
          <h1 className="text-white text-4xl font-bold leading-tight text-center z-10">
            Create an <br /> account
          </h1>
        </div>

        {/* Form Section */}
        <div className="bg-white rounded-t-[35px] -mt-8 px-7 pt-8 pb-6">
          
          {/* Google Button */}
          <button
            className="w-full border border-gray-300 rounded-full py-3 flex items-center justify-center gap-3 text-gray-700 font-medium hover:bg-gray-50 transition"
          >
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg"
              alt="google"
              className="w-5 h-5"
            />
            Sign in with Google
          </button>

          {/* OR */}
          <div className="text-center text-gray-400 text-sm my-5">or</div>

          <form onSubmit={handleSubmit} className="space-y-4">

            {/* Full Name */}
            <input
              type="text"
              placeholder="Enter your full name"
              className="w-full bg-gray-100 rounded-full px-4 py-3 outline-none text-sm placeholder:text-gray-400"
              required
            />

            {/* Company Email */}
            <input
              type="email"
              placeholder="example@company.com"
              pattern="^[a-zA-Z0-9._%+-]+@company\.com$"
              title="Please enter a valid company email (example@company.com)"
              className="w-full bg-gray-100 rounded-full px-4 py-3 outline-none text-sm placeholder:text-gray-400"
              required
            />

            {/* Password */}
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$"
                title="Password must contain at least 8 characters, one uppercase letter, one lowercase letter, one number and one special character"
                className="w-full bg-gray-100 rounded-full px-4 py-3 outline-none text-sm placeholder:text-gray-400"
                required
              />

              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500"
              >
                {showPassword ? (
                  <EyeOff size={18} />
                ) : (
                  <Eye size={18} />
                )}
              </button>
            </div>

            {/* Password Hint */}
            <p className="text-xs text-gray-400 px-2">
              Password must contain uppercase, lowercase, number and special character.
            </p>

            {/* Create Account Button */}
            <button
              type="submit"
              className="w-full bg-black text-white py-3 rounded-full font-semibold mt-2 hover:opacity-90 transition"
            >
              Create account
            </button>
          </form>

          {/* Terms */}
          <p className="text-[12px] text-gray-400 text-center mt-6 leading-5">
            Signing up for a Webflow account means you agree to the{" "}
            <span className="underline cursor-pointer">
              Privacy Policy
            </span>{" "}
            and{" "}
            <span className="underline cursor-pointer">
              Terms of Service
            </span>
            .
          </p>

          {/* Login */}
          <p className="text-center text-sm text-gray-600 mt-6">
            Have an account?{" "}
            <button
              onClick={() => navigate("/login")}
              className="underline font-medium"
            >
              Log in here
            </button>
          </p>
        </div>
      </div>
    </div>
  );
}