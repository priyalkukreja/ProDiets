"use client";

import { useEffect } from "react";

export default function ToolsPage() {
  useEffect(() => {
    window.location.href = "/prodiets-app.html#tools";
  }, []);

  return (
    <div className="flex items-center justify-center min-h-screen bg-[#F8FAF8]">
      <div className="text-center">
        <div className="text-4xl mb-4">📊</div>
        <p style={{ fontFamily: "var(--font-syne), sans-serif" }} className="font-semibold text-[#1A2E1A]">
          Loading Daily Tools...
        </p>
      </div>
    </div>
  );
}
