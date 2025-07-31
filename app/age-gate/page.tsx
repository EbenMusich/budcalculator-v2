"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function AgeGatePage() {
  const router = useRouter();

  useEffect(() => {
    // Check if user has already confirmed age
    if (localStorage.getItem("is21Confirmed") === "true") {
      router.push("/");
    }
  }, [router]);

  const handleConfirm = () => {
    // Set age confirmation in localStorage
    localStorage.setItem("is21Confirmed", "true");
    
    // Get the stored redirect path, default to "/" if not found
    const redirectPath = localStorage.getItem("postAgeGateRedirect") || "/";
    
    // Clear the stored redirect path
    localStorage.removeItem("postAgeGateRedirect");
    
    // Redirect to the stored path or home page
    window.location.href = redirectPath;
  };

  const handleLeave = () => {
    window.location.href = "https://www.google.com";
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-background p-4">
      <Card className="w-full max-w-sm">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl font-bold">Welcome to BUD Calculator</CardTitle>
          <CardDescription className="pt-2">
            This website is intended for users 21 years of age or older.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-center text-sm text-muted-foreground">
            Please verify your age to continue.
          </p>
        </CardContent>
        <CardFooter className="flex flex-col gap-4">
          <Button className="w-full" onClick={handleConfirm}>
            I am 21 or older
          </Button>
          <Button className="w-full" variant="outline" onClick={handleLeave}>
            Leave
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
} 