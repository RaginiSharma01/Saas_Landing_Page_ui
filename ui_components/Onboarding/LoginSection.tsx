"use client";

import React, { useActionState, useEffect } from "react";
import axios from "axios";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

interface ILoginSection {
  setOnboardingView: (view: "login" | "signUp") => void;
}

type LoginState = {
  success?: boolean;
  error?: string;
};

async function loginAction(
  prevState: LoginState | null,
  formData: FormData
): Promise<LoginState> {
  const email = formData.get("email");
  const password = formData.get("password");

  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

  try {
    const response = await axios.post(`${baseUrl}/api/auth/login`, {
      email,
      password,
    });

    if (response.data.token) {
      localStorage.setItem("token", response.data.token);
    }

    return { success: true };
  } catch (err: any) {
    return {
      error: err.response?.data?.message || "Login failed",
    };
  }
}

const LoginSection = ({ setOnboardingView }: ILoginSection) => {
  const [state, formAction, pending] = useActionState<LoginState, FormData>(
    loginAction,
    {}
  );

  const router = useRouter();

  useEffect(() => {
    if (state?.success) {
      toast.success("Login successful!");
      router.push("/dashboard");
    }

    if (state?.error) {
      toast.error(state.error);
    }
  }, [state, router]);

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

      <form className="flex flex-col gap-4" action={formAction}>
        <div className="flex flex-col gap-1">
          <label className="text-sm text-gray-400">Email</label>
          <input
            name="email"
            type="email"
            placeholder="name@gmail.com"
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
            name="password"
            type="password"
            placeholder="enter your password"
            className="px-3 py-2 rounded-lg bg-card-bg2 border border-gray-700 text-white"
          />
        </div>

        <button
          type="submit"
          disabled={pending}
          className="mt-2 text-white py-2 rounded-lg font-medium bg-[linear-gradient(263deg,#10F9F1_0.3%,#2CC0F2_50.15%,#54F3A6_100%)] disabled:opacity-50"
        >
          {pending ? "Logging in..." : "Login"}
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
