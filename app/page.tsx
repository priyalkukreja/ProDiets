"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    // Redirect to the full ProDiets app
    router.replace("/app");
  }, [router]);

  return (
    <div className="flex items-center justify-center min-h-screen bg-[#F8FAF8]">
      <div className="text-center">
        <div className="text-4xl mb-4">🌿</div>
        <p
          className="font-semibold text-[#1A2E1A]"
          style={{ fontFamily: "var(--font-syne), sans-serif" }}
        >
          Loading ProDiets...
        </p>
      </div>
    </div>
  );
}
