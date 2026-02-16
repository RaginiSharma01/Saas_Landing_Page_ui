import React, { useState } from "react";
import axios from "axios";

interface ILoginSection {
  setOnboardingView: (view: "login" | "signUp") => void;
}

const LoginSection = ({ setOnboardingView }: ILoginSection) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

  const submitForm = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const response = await axios.post(
        `${baseUrl}/api/auth/login`,
        {
          email,
          password,
        }
      );

      console.log("Login success:", response.data);

      
      if (response.data.token) {
        localStorage.setItem("token", response.data.token);
      }


    } catch (err: any) {
      const message =
        err.response?.data?.message || "Login failed";
      setError(message);
      console.error("Login error:", err.response?.data || err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full flex flex-col gap-6">
      <div className="text-center">
        <h2 className="text-xl font-semibold text-white">
          Login to your account
        </h2>
        <p className="text-sm text-gray-400 mt-1">
          Enter your email below to login to your account
        </p>
      </div>

      <form className="flex flex-col gap-4" onSubmit={submitForm}>
        <div className="flex flex-col gap-1">
          <label className="text-sm text-gray-400">Email</label>
          <input
            type="email"
            placeholder="name@gmail.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="px-3 py-2 rounded-lg bg-card-bg2 border border-gray-700 text-white"
          />
        </div>

        <div className="flex flex-col gap-1">
          <div className="flex justify-between text-sm">
            <label className="text-gray-400">Password</label>
            <button
              type="button"
              className="text-gray-400 hover:text-white"
            >
              Forgot your password?
            </button>
          </div>

          <input
            type="password"
            placeholder="enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="px-3 py-2 rounded-lg bg-card-bg2 border border-gray-700 text-white"
          />
        </div>

        {error && (
          <p className="text-black text-sm">{error}</p>
        )}

        <button
          type="submit"
          disabled={loading}
          className="mt-2 text-white py-2 rounded-lg font-medium bg-[linear-gradient(263deg,#10F9F1_0.3%,#2CC0F2_50.15%,#54F3A6_100%)] disabled:opacity-50"
        >
          {loading ? "Logging in..." : "Login"}
        </button>
      </form>

      <p className="text-center text-sm text-gray-400">
        Don’t have an account?{" "}
        <button
          className="text-white underline"
          onClick={() => setOnboardingView("signUp")}
        >
          Sign up
        </button>
      </p>
    </div>
  );
};

export default LoginSection;
