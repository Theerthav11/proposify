import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();

  // STATE
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  // COMPANY EMAIL VALIDATION
  const validateCompanyEmail = (email) => {
    return /^[a-zA-Z0-9._%+-]+@company\.com$/.test(email);
  };

  // PASSWORD VALIDATION
  const validatePassword = (password) => {
    return /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).{8,}$/.test(
      password
    );
  };

  // SUBMIT
  const handleSubmit = (e) => {
    e.preventDefault();

    // RESET ERRORS
    setEmailError("");
    setPasswordError("");

    // EMPTY CHECK
    if (!email || !password) {
      alert("Please fill all fields");
      return;
    }

    // EMAIL CHECK
    if (!validateCompanyEmail(email)) {
      setEmailError(
        "Use valid company email (example@company.com)"
      );
      return;
    }

    // PASSWORD CHECK
    if (!validatePassword(password)) {
      setPasswordError(
        "Password must contain uppercase, lowercase, number, special character and minimum 8 characters."
      );
      return;
    }

    // SUCCESS
    console.log("LOGIN SUCCESS:", {
      email,
      password,
    });

    // CLEAR INPUTS
    setEmail("");
    setPassword("");

    // REDIRECT
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
    <div className="min-h-screen bg-[#F4F7FB] flex items-center justify-center p-4 overflow-hidden">

      {/* CONTAINER */}
      <div className="w-full max-w-5xl h-[620px] bg-white rounded-[32px] overflow-hidden shadow-2xl grid grid-cols-1 lg:grid-cols-2">

        {/* LEFT SIDE */}
        <div className="flex flex-col justify-center px-8 py-8 lg:px-12 bg-white">

          {/* LOGO */}
          <div className="mb-8">
            <h1 className="text-4xl font-bold text-[#303C6C]">
              Proposify
            </h1>

            <p className="text-gray-500 mt-2 text-sm">
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
              <label className="block mb-2 text-sm font-medium text-gray-600">
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
                className="w-full border border-gray-300 rounded-2xl px-5 py-4 outline-none focus:ring-2 focus:ring-[#58C4DD] transition"
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
              <label className="block mb-2 text-sm font-medium text-gray-600">
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
                className="w-full border border-gray-300 rounded-2xl px-5 py-4 outline-none focus:ring-2 focus:ring-[#58C4DD] transition"
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
              className="w-full bg-[#303C6C] hover:bg-[#26345f] transition text-white py-4 rounded-2xl font-semibold text-lg shadow-lg"
            >
              Sign In
            </button>

            {/* DIVIDER */}
            <div className="flex items-center gap-4">
              <div className="flex-1 h-[1px] bg-gray-200"></div>

              <span className="text-gray-400 text-sm">
                or
              </span>

              <div className="flex-1 h-[1px] bg-gray-200"></div>
            </div>

            {/* GOOGLE BUTTON */}
            <button
              type="button"
              onClick={handleGoogleLogin}
              className="w-full border border-gray-300 rounded-2xl py-4 font-medium flex items-center justify-center gap-3 hover:bg-gray-50 transition"
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
          <p className="text-center text-gray-500 mt-8">
            Don’t have an account?{" "}

            <button
              onClick={() => navigate("/register")}
              className="text-[#58C4DD] font-semibold hover:underline"
            >
              Create Account
            </button>
          </p>
        </div>

        {/* RIGHT SIDE */}
        <div className="hidden lg:flex relative overflow-hidden min-h-full">

          {/* BACKGROUND */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#B4DFE5] via-[#D2FDFF] to-[#FBE8A6]" />

          {/* BLUR EFFECTS */}
          <div className="absolute top-0 right-0 w-52 h-52 bg-white/20 rounded-full blur-3xl"></div>

          <div className="absolute bottom-0 left-0 w-60 h-60 bg-[#58C4DD]/20 rounded-full blur-3xl"></div>

          {/* CONTENT */}
          <div className="relative z-10 flex flex-col justify-center w-full px-10 py-10">

            {/* LABEL */}
            <div className="mb-5">
              <span className="bg-white/40 backdrop-blur-md border border-white/30 text-[#303C6C] px-5 py-2 rounded-full text-xs font-semibold shadow-sm">
                ✨ AI Proposal Platform
              </span>
            </div>

            {/* TITLE */}
            <h2 className="text-[#303C6C] text-4xl font-bold leading-tight max-w-lg">
              AI Revolutionizing
              <br />
              Proposal Creation &
              <br />
              Documentation.
            </h2>

            {/* DESCRIPTION */}
            <p className="mt-5 text-[#303C6C]/80 text-sm leading-relaxed max-w-md">
              Build intelligent RFPs, RFIs, and automated proposal workflows
              using AI-powered document generation.
            </p>

            {/* FEATURE CARDS */}
            <div className="grid grid-cols-2 gap-4 mt-8 max-w-lg">

              {/* CARD 1 */}
              <div className="bg-white/35 backdrop-blur-xl border border-white/30 rounded-2xl p-5 shadow-lg">

                <div className="w-12 h-12 rounded-2xl bg-[#303C6C] flex items-center justify-center text-xl text-white">
                  🤖
                </div>

                <h3 className="mt-4 text-lg font-bold text-[#303C6C]">
                  AI Generated
                </h3>

                <p className="mt-2 text-sm text-[#303C6C]/70 leading-relaxed">
                  Generate proposal sections automatically.
                </p>
              </div>

              {/* CARD 2 */}
              <div className="bg-white/35 backdrop-blur-xl border border-white/30 rounded-2xl p-5 shadow-lg">

                <div className="w-12 h-12 rounded-2xl bg-[#58C4DD] flex items-center justify-center text-xl text-white">
                  📄
                </div>

                <h3 className="mt-4 text-lg font-bold text-[#303C6C]">
                  Smart Workflow
                </h3>

                <p className="mt-2 text-sm text-[#303C6C]/70 leading-relaxed">
                  Manage revisions and final proposal documents.
                </p>
              </div>
            </div>

            {/* STATUS */}
            <div className="flex flex-wrap gap-4 mt-8">

              <div className="bg-white/40 backdrop-blur-md border border-white/30 rounded-full px-5 py-3 flex items-center gap-2 shadow-md">
                <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse"></div>

                <span className="text-[#303C6C] text-sm font-medium">
                  AI Engine Active
                </span>
              </div>

              <div className="bg-white/40 backdrop-blur-md border border-white/30 rounded-full px-5 py-3 shadow-md">
                <span className="text-[#303C6C] text-sm font-medium">
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