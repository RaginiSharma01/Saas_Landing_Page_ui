import React from "react";

interface ISignupSection {
  setOnboardingView: (view: "login" | "signUp") => void;
}

const SignupSection = ({ setOnboardingView }: ISignupSection) => {
  return (
    <div className="w-full flex flex-col gap-6">
      <div className="text-center">
        <h2 className="text-xl font-semibold text-white">
          Sign up to your account
        </h2>
        <p className="text-sm text-gray-400 mt-1">
          Register your account
        </p>
      </div>

      <form className="flex flex-col gap-4">
        <div className="flex flex-col gap-1">
          <label className="text-sm text-gray-400">Name</label>
          <input
            type="text"
            placeholder="IronMan"
            className="px-3 py-2 rounded-lg bg-card-bg2 border border-gray-700 text-white"
          />
        </div>

        <div className="flex flex-col gap-1">
          <label className="text-sm text-gray-400">Email</label>
          <input
            type="email"
            placeholder="m@example.com"
            className="px-3 py-2 rounded-lg bg-card-bg2 border border-gray-700 text-white"
          />
        </div>

        <div className="flex flex-col gap-1">
          <label className="text-gray-400 text-sm">Password</label>
          <input
            type="password"
            placeholder="enter your password"
            className="px-3 py-2 rounded-lg bg-card-bg2 border border-gray-700 text-white"
          />
        </div>

        <button
          type="submit"
          className="mt-2 bg-bg-primary text-white py-2 rounded-lg font-medium bg-[linear-gradient(263deg,#10F9F1_0.3%,#2CC0F2_50.15%,#54F3A6_100%)]"
        >
          Sign up
        </button>
      </form>

      <p className="text-center text-sm text-gray-400">
        Go to login page{" "}
        <button
          className="text-white underline"
          onClick={() => setOnboardingView("login")}
        >
          Log in
        </button>
      </p>
    </div>
  );
};

export default SignupSection;
