"use client";

import { useEffect } from "react";
import { useRouter, usePathname, useSearchParams } from "next/navigation";

export default function AgeVerification() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    // Skip if we're already on the age gate page
    if (pathname === "/age-gate") {
      return;
    }

    // Check if user has confirmed age
    const is21Confirmed = localStorage.getItem("is21Confirmed");
    
    if (!is21Confirmed) {
      // Store the current path with query params for redirect after age gate
      const queryString = searchParams.toString();
      const currentPath = queryString ? `${pathname}?${queryString}` : pathname;
      localStorage.setItem("postAgeGateRedirect", currentPath);
      
      // Redirect to age gate
      router.push("/age-gate");
    }
  }, [pathname, searchParams, router]);

  return null; // This component doesn't render anything
} 