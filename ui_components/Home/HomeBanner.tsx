import React from "react";

export default function HomeBanner() {
  return (
    <div className="flex flex-col items-center text-center">
      <h1 className="text-white text-xl md:text-5xl sm:text-3xl hidden:md:text-6xl font-bold mb-4">
        The Future of Cloud Operations
      </h1>

      <h2 className="text-text-primary-100 max-w-2xl text-lg">
        Tireless AI Agents help save time, reduce costs, and boost efficiency
        in cloud operation. Empowering your team to focus on what matters most.
      </h2>
    </div>
  );
}
