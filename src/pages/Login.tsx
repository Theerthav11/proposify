import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import type { FormEvent } from "react";
import VariableProximity from "../components/layout/VariableProximity.js";



export default function Login() {
  const navigate = useNavigate();
  const containerRef = useRef(null);

  // STATE
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  // COMPANY EMAIL VALIDATION
  const validateCompanyEmail = (email: string): boolean => {
    return /^[a-zA-Z0-9._%+-]+@company\.com$/.test(email);
  };

  const validatePassword = (password: string): boolean => {
    return /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).{8,}$/.test(password);
  };

  // SUBMIT
  const handleSubmit = (
      e: React.FormEvent<HTMLFormElement>
    ) => {
    e.preventDefault();

    setEmailError("");
    setPasswordError("");

    if (!email || !password) {
      alert("Please fill all fields");
      return;
    }

    if (!validateCompanyEmail(email)) {
      setEmailError(
        "Use valid company email (example@company.com)"
      );
      return;
    }

    if (!validatePassword(password)) {
      setPasswordError(
        "Password must contain uppercase, lowercase, number, special character and minimum 8 characters."
      );
      return;
    }

    console.log("LOGIN SUCCESS:", {
      email,
      password,
    });

    setEmail("");
    setPassword("");

    navigate("/dashboard", { replace: true });
  };

  // GOOGLE LOGIN
  const handleGoogleLogin = () => {
    window.open(
      "https://accounts.google.com/",
      "_blank"
    );
  };

  return (
    <div className="min-h-screen relative overflow-hidden flex items-center justify-center p-6 bg-gradient-to-br from-[#f8fafc] via-[#eef2ff] to-[#e0f2fe]">

      {/* BACKGROUND LIGHTS */}
      <div className="absolute -top-40 -left-40 w-[600px] h-[600px] bg-[#a78bfa]/25 rounded-full blur-3xl"></div>

      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#60a5fa]/20 rounded-full blur-3xl"></div>

      <div className="absolute -bottom-40 left-1/3 w-[500px] h-[500px] bg-[#22d3ee]/20 rounded-full blur-3xl"></div>

      <div className="absolute top-1/2 left-1/2 w-[450px] h-[450px] bg-white/40 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>

      {/* GRID */}
      <div className="absolute inset-0 opacity-[0.05]">
        <div className="h-full w-full bg-[linear-gradient(to_right,#94a3b8_1px,transparent_1px),linear-gradient(to_bottom,#94a3b8_1px,transparent_1px)] bg-[size:70px_70px]" />
      </div>

      {/* MAIN CONTAINER */}
      <div
        className="
          relative
          z-10
          w-full
          max-w-6xl
          h-[650px]
          bg-white/80
          backdrop-blur-2xl
          rounded-[36px]
          border
          border-white/40
          shadow-[0_20px_60px_rgba(0,0,0,0.15)]
          grid
          grid-cols-1
          lg:grid-cols-2
          overflow-hidden
        "
      >

        {/* LEFT SIDE */}
        <div className="flex flex-col justify-center px-10 py-10 lg:px-14 bg-white/70 backdrop-blur-xl">

          {/* LOGO */}
          <div className="mb-10">
            <h1 className="text-5xl font-black tracking-tight text-[#242525]">
              Proposify
            </h1>

            <p className="text-[#797979] mt-3 text-sm tracking-wide">
              AI Proposal Management Platform
            </p>
          </div>

          {/* FORM */}
          <form
            onSubmit={handleSubmit}
            autoComplete="off"
            className="space-y-5"
          >

            {/* EMAIL */}
            <div>
              <label className="block mb-2 text-sm font-medium text-[#242525]">
                Company Email
              </label>

              <input
                type="email"
                name="email"
                autoComplete="off"
                spellCheck="false"
                placeholder="hello@company.com"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  setEmailError("");
                }}
                className="
                  w-full
                  border
                  border-[#d1d5db]
                  bg-white/90
                  rounded-2xl
                  px-5
                  py-4
                  outline-none
                  text-[#242525]
                  placeholder:text-[#797979]
                  transition-all
                  duration-300
                  focus:border-[#6366f1]
                  focus:ring-4
                  focus:ring-indigo-100
                "
                required
              />

              {emailError && (
                <p className="text-red-500 text-sm mt-2">
                  {emailError}
                </p>
              )}
            </div>

            {/* PASSWORD */}
            <div>
              <label className="block mb-2 text-sm font-medium text-[#242525]">
                Password
              </label>

              <input
                type="password"
                name="password"
                autoComplete="new-password"
                spellCheck="false"
                placeholder="Example@123"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                  setPasswordError("");
                }}
                className="
                  w-full
                  border
                  border-[#d1d5db]
                  bg-white/90
                  rounded-2xl
                  px-5
                  py-4
                  outline-none
                  text-[#242525]
                  placeholder:text-[#797979]
                  transition-all
                  duration-300
                  focus:border-[#6366f1]
                  focus:ring-4
                  focus:ring-indigo-100
                "
                required
              />

              {passwordError && (
                <p className="text-red-500 text-sm mt-2">
                  {passwordError}
                </p>
              )}
            </div>

            {/* SIGN IN BUTTON */}
            <button
              type="submit"
              className="
                w-full
                bg-[#242525]
                text-white
                py-4
                rounded-2xl
                font-semibold
                text-lg
                shadow-lg
                transition-all
                duration-300
                hover:scale-[1.03]
                hover:bg-black
                hover:shadow-[0_15px_35px_rgba(0,0,0,0.25)]
                active:scale-95
              "
            >
              Sign In
            </button>

            {/* DIVIDER */}
            <div className="flex items-center gap-4">
              <div className="flex-1 h-[1px] bg-[#d1d5db]"></div>

              <span className="text-[#797979] text-sm">
                or
              </span>

              <div className="flex-1 h-[1px] bg-[#d1d5db]"></div>
            </div>

            {/* GOOGLE BUTTON */}
            <button
              type="button"
              onClick={handleGoogleLogin}
              className="
                w-full
                border
                border-[#d1d5db]
                bg-white/90
                rounded-2xl
                py-4
                font-medium
                flex
                items-center
                justify-center
                gap-3
                transition-all
                duration-300
                hover:scale-[1.02]
                hover:shadow-lg
                hover:bg-white
              "
            >
              <img
                src="https://www.svgrepo.com/show/475656/google-color.svg"
                alt="Google"
                className="w-5 h-5"
              />

              Continue with Google
            </button>
          </form>

          {/* REGISTER */}
          <p className="text-center text-[#797979] mt-8">
            Don’t have an account?{" "}

            <button
              onClick={() => navigate("/register")}
              className="
                text-[#242525]
                font-semibold
                hover:underline
              "
            >
              Create Account
            </button>
          </p>
        </div>

        {/* RIGHT SIDE */}
        <div className="hidden lg:flex relative overflow-hidden">

          {/* RIGHT BACKGROUND */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#dbeafe] via-[#ede9fe] to-[#cffafe]" />

          {/* LIGHTS */}
          <div className="absolute top-[-100px] right-[-80px] w-[320px] h-[320px] bg-[#8b5cf6]/30 rounded-full blur-3xl"></div>

          <div className="absolute bottom-[-100px] left-[-80px] w-[320px] h-[320px] bg-[#06b6d4]/30 rounded-full blur-3xl"></div>

          {/* GLASS OVERLAY */}
          <div className="absolute inset-6 rounded-[32px] bg-white/20 backdrop-blur-2xl border border-white/40"></div>

          {/* CONTENT */}
          <div className="relative z-10 flex flex-col justify-center w-full px-12 py-12">

            {/* LABEL */}
            <div className="mb-6">
              <span
                className="
                  bg-white/70
                  backdrop-blur-xl
                  border
                  border-white
                  text-[#242525]
                  px-5
                  py-2
                  rounded-full
                  text-xs
                  font-semibold
                  shadow-md
                "
              >
                ✨ AI Proposal Platform
              </span>
            </div>

            {/* TITLE */}
            <div
              ref={containerRef}
              className="max-w-lg leading-tight space-y-1 "
            >
             <VariableProximity
                label="AI Revolutionizing"
                className="
                  block
                  text-[#242525]
                  text-5xl
                  font-black
                  cursor-pointer
                  select-none
                "
              />

              <VariableProximity
                label="Proposal Creation "
                className="
                  block
                  text-[#242525]
                  text-5xl
                  font-black
                  cursor-pointer
                  select-none
                "
              />

              <VariableProximity
                label="& Documentation."
                className="
                  block
                  text-[#242525]
                  text-5xl
                  font-black
                  cursor-pointer
                  select-none
                "
              />
            </div>

            {/* DESCRIPTION */}
            <p className="mt-6 text-[#5f5f5f] text-sm leading-relaxed max-w-md">
              Build intelligent RFPs, RFIs, and automated proposal workflows
              using AI-powered document generation.
            </p>

            {/* FEATURE CARDS */}
            <div className="grid grid-cols-2 gap-5 mt-10 max-w-lg">

              {/* CARD 1 */}
              <div
                className="
                  bg-white/50
                  backdrop-blur-2xl
                  border
                  border-white/60
                  rounded-3xl
                  p-5
                  shadow-xl
                  transition-all
                  duration-500
                  hover:scale-105
                  hover:-translate-y-2
                "
              >

                <div className="w-12 h-12 rounded-2xl bg-[#242525] text-white flex items-center justify-center text-xl shadow-lg">
                  🤖
                </div>

                <h3 className="mt-4 text-lg font-bold text-[#242525]">
                  AI Generated
                </h3>

                <p className="mt-2 text-sm text-[#5f5f5f] leading-relaxed">
                  Generate proposal sections automatically.
                </p>
              </div>

              {/* CARD 2 */}
              <div
                className="
                  bg-white/50
                  backdrop-blur-2xl
                  border
                  border-white/60
                  rounded-3xl
                  p-5
                  shadow-xl
                  transition-all
                  duration-500
                  hover:scale-105
                  hover:-translate-y-2
                "
              >

                <div className="w-12 h-12 rounded-2xl bg-[#242525] text-white flex items-center justify-center text-xl shadow-lg">
                  📄
                </div>

                <h3 className="mt-4 text-lg font-bold text-[#242525]">
                  Smart Workflow
                </h3>

                <p className="mt-2 text-sm text-[#5f5f5f] leading-relaxed">
                  Manage revisions and final proposal documents.
                </p>
              </div>
            </div>

            {/* STATUS */}
            <div className="flex flex-wrap gap-4 mt-10">

              <div
                className="
                  bg-white/50
                  backdrop-blur-xl
                  border
                  border-white/60
                  rounded-full
                  px-5
                  py-3
                  shadow-lg
                  flex
                  items-center
                  gap-2
                "
              >
                <div className="w-3 h-3 rounded-full bg-green-400 animate-pulse"></div>

                <span className="text-[#242525] text-sm font-medium">
                  AI Engine Active
                </span>
              </div>

              <div
                className="
                  bg-white/50
                  backdrop-blur-xl
                  border
                  border-white/60
                  rounded-full
                  px-5
                  py-3
                  shadow-lg
                "
              >
                <span className="text-[#242525] text-sm font-medium">
                  Proposal Automation
                </span>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}