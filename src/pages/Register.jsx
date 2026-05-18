import { useNavigate } from "react-router-dom";
import { Eye, EyeOff } from "lucide-react";
import { useState } from "react";

export default function Register() {
  const navigate = useNavigate();

  const [showPassword, setShowPassword] =
    useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/dashboard");
  };

  return (
    <div
      className="
        min-h-screen
        relative
        overflow-hidden
        flex
        items-center
        justify-center
        bg-gradient-to-br
        from-[#eff6ff]
        via-[#f8fafc]
        to-[#e0f2fe]
        px-4
        py-3
      "
    >
      {/* BACKGROUND LIGHTS */}
      <div className="absolute top-[-120px] left-[-120px] w-[350px] h-[350px] bg-[#8b5cf6]/20 rounded-full blur-3xl"></div>

      <div className="absolute bottom-[-100px] right-[-100px] w-[300px] h-[300px] bg-[#06b6d4]/20 rounded-full blur-3xl"></div>

      <div className="absolute inset-0 opacity-[0.04]">
        <div className="h-full w-full bg-[linear-gradient(to_right,#64748b_1px,transparent_1px),linear-gradient(to_bottom,#64748b_1px,transparent_1px)] bg-[size:60px_60px]" />
      </div>

      {/* MAIN CARD */}
      <div
        className="
          relative
          z-10
          w-full
          max-w-[380px]
          rounded-[36px]
          overflow-hidden
          bg-white/80
          backdrop-blur-2xl
          border
          border-white/40
          shadow-[0_20px_60px_rgba(0,0,0,0.15)]
        "
      >
        {/* TOP SECTION */}
        <div
          className="
            relative
            h-40
            bg-gradient-to-br
            from-[#242525]
            via-[#1e293b]
            to-[#0f172a]
            flex
            items-center
            justify-center
            overflow-hidden
          "
        >
          {/* DESIGN SHAPES */}
          <div className="absolute -top-10 -left-10 w-44 h-44 rounded-full bg-white/10"></div>

          <div className="absolute bottom-0 right-0 w-40 h-40 rounded-tl-[100px] bg-white/10"></div>

          <div className="absolute top-10 right-12 w-20 h-20 border border-white/10 rounded-3xl rotate-12"></div>

          {/* LOGO */}
          {/* <div className="absolute top-6 left-6">
            <div
              className="
                px-4
                py-2
                rounded-full
                bg-white/10
                backdrop-blur-xl
                border
                border-white/10
                text-white
                text-xs
                font-semibold
                tracking-wide
              "
            >
              PROPOSIFY AI
            </div>
          </div> */}

          {/* TITLE */}
          <div className="relative z-10 text-center">
            <h1
              className="
                text-white
                text-3xl
                font-black
                leading-tight
                tracking-tight
              "
            >
              Create Your
              <br />
              Account
            </h1>

            <p className="text-white/70 mt-3 text-sm">
              AI Proposal Management Platform
            </p>
          </div>
        </div>

        {/* FORM SECTION */}
        <div
          className="
            bg-white/90
            backdrop-blur-xl
            rounded-t-[36px]
            -mt-6
            px-6
            pt-5
            pb-5
          "
        >
          {/* GOOGLE BUTTON */}
          <button
            className="
              w-full
              h-12
              rounded-2xl
              border
              border-[#dbe2ea]
              bg-white
              flex
              items-center
              justify-center
              gap-3
              font-medium
              text-[#242525]
              transition-all
              duration-300
              hover:scale-[1.02]
              hover:shadow-lg
            "
          >
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg"
              alt="google"
              className="w-5 h-5"
            />

            Continue with Google
          </button>

          {/* DIVIDER */}
          <div className="flex items-center gap-4 my-4">
            <div className="flex-1 h-[1px] bg-gray-300"></div>

            <span className="text-gray-400 text-sm">
              OR
            </span>

            <div className="flex-1 h-[1px] bg-gray-300"></div>
          </div>

          {/* FORM */}
          <form
            onSubmit={handleSubmit}
            autoComplete="off"
            className="space-y-3"
          >
            {/* FULL NAME */}
            <div>
              <label className="block mb-2 text-sm font-medium text-[#242525]">
                Full Name
              </label>

                <input
                type="text"
                autoComplete="off"
                placeholder="Enter your full name"
                pattern="^[A-Za-z ]+$"
                title="Name should contain only alphabets"
                className="
                  w-full
                  h-12
                  rounded-2xl
                  border
                  border-[#dbe2ea]
                  bg-white/80
                  px-5
                  outline-none
                  text-[#242525]
                  placeholder:text-[#94a3b8]
                  transition-all
                  duration-300
                  focus:border-[#6366f1]
                  focus:ring-4
                  focus:ring-indigo-100
                "
                required
              />
            </div>

            {/* EMAIL */}
            <div>
              <label className="block mb-2 text-sm font-medium text-[#242525]">
                Company Email
              </label>

              <input
                type="email"
                autoComplete="off"
                placeholder="example@company.com"
                pattern="^[a-zA-Z0-9._%+-]+@company\.com$"
                title="Please enter a valid company email"
                className="
                  w-full
                  h-12
                  rounded-2xl
                  border
                  border-[#dbe2ea]
                  bg-white/80
                  px-5
                  outline-none
                  text-[#242525]
                  placeholder:text-[#94a3b8]
                  transition-all
                  duration-300
                  focus:border-[#6366f1]
                  focus:ring-4
                  focus:ring-indigo-100
                "
                required
              />
            </div>

            {/* PASSWORD */}
            <div>
              <label className="block mb-2 text-sm font-medium text-[#242525]">
                Password
              </label>

              <div className="relative">
                <input
                  type={
                    showPassword
                      ? "text"
                      : "password"
                  }
                  autoComplete="new-password"
                  placeholder="Create strong password"
                  pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$"
                  title="Password must contain uppercase, lowercase, number and special character"
                  className="
                    w-full
                    h-12
                    rounded-2xl
                    border
                    border-[#dbe2ea]
                    bg-white/80
                    px-5
                    pr-14
                    outline-none
                    text-[#242525]
                    placeholder:text-[#94a3b8]
                    transition-all
                    duration-300
                    focus:border-[#6366f1]
                    focus:ring-4
                    focus:ring-indigo-100
                  "
                  required
                />

                <button
                  type="button"
                  onClick={() =>
                    setShowPassword(
                      !showPassword
                    )
                  }
                  className="
                    absolute
                    right-4
                    top-1/2
                    -translate-y-1/2
                    text-[#64748b]
                    hover:text-[#242525]
                    transition
                  "
                >
                  {showPassword ? (
                    <EyeOff size={20} />
                  ) : (
                    <Eye size={20} />
                  )}
                </button>
              </div>

              <p className="text-xs text-[#64748b] mt-2 leading-relaxed">
                Must contain uppercase,
                lowercase, number and special
                character.
              </p>
            </div>

            {/* BUTTON */}
            <button
              type="submit"
              className="
                w-full
                h-12
                rounded-2xl
                bg-[#242525]
                text-white
                font-semibold
                text-lg
                transition-all
                duration-300
                hover:scale-[1.02]
                hover:bg-black
                hover:shadow-[0_15px_35px_rgba(0,0,0,0.2)]
                active:scale-95
              "
            >
              Create Account
            </button>
          </form>

          {/* LOGIN */}
          <p className="text-center text-sm text-[#64748b] mt-5">
            Already have an account?{" "}

            <button
              onClick={() => navigate("/login")}
              className="
                text-[#242525]
                font-semibold
                hover:underline
              "
            >
              Log in here
            </button>
          </p>
        </div>
      </div>
    </div>
  );
}