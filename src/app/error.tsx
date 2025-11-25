"use client";

import { useEffect } from "react";
import Link from "next/link";
import { RefreshCcw, Home } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error("Application error:", error);
  }, [error]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-cloud">
      <div className="max-w-md mx-auto px-4 text-center">
        <div className="w-16 h-16 mx-auto mb-6 bg-destructive/10 rounded-full flex items-center justify-center">
          <span className="text-2xl">⚠️</span>
        </div>
        <h1 className="text-3xl font-bold text-navy mb-4">Something Went Wrong</h1>
        <p className="text-charcoal/70 mb-8">
          We apologize for the inconvenience. An unexpected error has occurred. Please try again
          or contact us if the problem persists.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button onClick={reset} className="bg-navy hover:bg-steel">
            <RefreshCcw className="mr-2 h-4 w-4" />
            Try Again
          </Button>
          <Button asChild variant="outline">
            <Link href="/">
              <Home className="mr-2 h-4 w-4" />
              Go Home
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
