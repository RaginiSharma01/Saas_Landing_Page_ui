"use client";

import React, { useActionState, useEffect } from "react";
import axios from "axios";
import { toast } from "sonner";

interface ISignupSection {
  setOnboardingView: (view: "login" | "signUp") => void;
}

type SignupState = {
  success?: boolean;
  error?: string;
};

async function signupAction(
  prevState: SignupState | null,
  formData: FormData
): Promise<SignupState> {
  const name = formData.get("name");
  const email = formData.get("email");
  const password = formData.get("password");

  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

  try {
    const response = await axios.post(`${baseUrl}/api/auth/register`, {
      name,
      email,
      password,
    });

    console.log("Success:", response.data);

    return { success: true };
  } catch (err: any) {
    const message =
      err.response?.data?.message ||
      err.response?.data?.error ||
      "Signup failed";

    return { error: message };
  }
}

const SignupSection = ({ setOnboardingView }: ISignupSection) => {
  const [state, formAction, pending] = useActionState<SignupState, FormData>(
    signupAction,
    {}
  );

  useEffect(() => {
    if (state?.success) {
      toast.success("Account created successfully!");

      // Switch to login after success
      setTimeout(() => {
        setOnboardingView("login");
      }, 1200);
    }

    if (state?.error) {
      toast.error(state.error);

      // If account already exists, switch to login
      if (state.error.toLowerCase().includes("exist")) {
        setTimeout(() => {
          setOnboardingView("login");
        }, 1500);
      }
    }
  }, [state, setOnboardingView]);

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

      <form className="flex flex-col gap-4" action={formAction}>
        <div className="flex flex-col gap-1">
          <label className="text-sm text-gray-400">Name</label>
          <input
            name="name"
            type="text"
            placeholder="IronMan"
            className="px-3 py-2 rounded-lg bg-card-bg2 border border-gray-700 text-white"
          />
        </div>

        <div className="flex flex-col gap-1">
          <label className="text-sm text-gray-400">Email</label>
          <input
            name="email"
            type="email"
            placeholder="m@example.com"
            className="px-3 py-2 rounded-lg bg-card-bg2 border border-gray-700 text-white"
          />
        </div>

        <div className="flex flex-col gap-1">
          <label className="text-gray-400 text-sm">Password</label>
          <input
            name="password"
            type="password"
            placeholder="enter your password"
            className="px-3 py-2 rounded-lg bg-card-bg2 border border-gray-700 text-white"
          />
        </div>

        <button
          type="submit"
          disabled={pending}
          className="
            mt-2
            text-white
            py-2
            rounded-lg
            font-medium
            bg-[linear-gradient(263deg,#10F9F1_0.3%,#2CC0F2_50.15%,#54F3A6_100%)]
            disabled:opacity-50
            disabled:cursor-not-allowed
          "
        >
          {pending ? "Signing up..." : "Sign up"}
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
