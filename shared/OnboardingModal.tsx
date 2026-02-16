"use client";

import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@/shared/Modal";

import LoginSection from "@/ui_components/Onboarding/LoginSection";
import SignupSection from "@/ui_components/Onboarding/SignupSection";

interface IOnboardingModal {
  trigger: React.ReactNode;
  defaultView?: "login" | "signUp";
}

export default function OnboardingModal({
  trigger,
  defaultView = "login",
}: IOnboardingModal) {
  const [view, setView] = useState<"login" | "signUp">(defaultView);

  return (
    <Dialog>
      <DialogTrigger asChild>{trigger}</DialogTrigger>

      <DialogContent className="bg-black border border-gray-800 text-white max-w-md">
        {view === "login" ? (
          <LoginSection setOnboardingView={setView} />
        ) : (
          <SignupSection setOnboardingView={setView} />
        )}
      </DialogContent>
    </Dialog>
  );
}
