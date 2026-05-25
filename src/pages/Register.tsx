import { useNavigate } from "react-router-dom";
import type { FormEvent } from "react";

export default function Register() {
  const navigate = useNavigate();

  const handleSubmit = (
    e: FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();
    navigate("/dashboard");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-yellow via-primary-coral to-primary-teal flex items-center justify-center px-4">
      <div className="bg-white rounded-lg shadow-xl p-8 w-full max-w-md">
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-2 mb-4">
            <span className="text-4xl">🤖</span>
            <h1 className="text-3xl font-bold text-primary-navy">PropoAI</h1>
          </div>
          <h2 className="text-2xl font-bold text-gray-800 mb-2">Create your account</h2>
          <p className="text-gray-600">Start creating winning proposals today</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Full Name
            </label>
            <input
              type="text"
              placeholder="John Doe"
              className="input"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Email Address
            </label>
            <input
              type="email"
              placeholder="you@example.com"
              className="input"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Password
            </label>
            <input
              type="password"
              placeholder="Create a strong password"
              className="input"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Confirm Password
            </label>
            <input
              type="password"
              placeholder="Confirm your password"
              className="input"
              required
            />
          </div>

          <div className="flex items-start">
            <input type="checkbox" className="w-4 h-4 mt-1 mr-2" required />
            <span className="text-sm text-gray-600">
              I agree to the{" "}
              <a href="#" className="text-primary-navy hover:underline">
                Terms of Service
              </a>{" "}
              and{" "}
              <a href="#" className="text-primary-navy hover:underline">
                Privacy Policy
              </a>
            </span>
          </div>

          <button type="submit" className="btn w-full">
            Create Account
          </button>
        </form>

        <div className="mt-6 text-center">
          <p className="text-sm text-gray-600">
            Already have an account?{" "}
            <button
              onClick={() => navigate("/login")}
              className="text-primary-navy font-medium hover:underline"
            >
              Sign in
            </button>
          </p>
        </div>
      </div>
    </div>
  );
}