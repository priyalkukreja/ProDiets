"use client";

import { useEffect } from "react";

export default function RecipesPage() {
  useEffect(() => {
    // Navigate to the recipes section within the full app
    window.location.href = "/prodiets-app.html#recipes";
  }, []);

  return (
    <div className="flex items-center justify-center min-h-screen bg-[#F8FAF8]">
      <div className="text-center">
        <div className="text-4xl mb-4">🍽️</div>
        <p style={{ fontFamily: "var(--font-syne), sans-serif" }} className="font-semibold text-[#1A2E1A]">
          Loading Recipes...
        </p>
      </div>
    </div>
  );
}
