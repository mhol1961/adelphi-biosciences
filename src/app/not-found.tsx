import Link from "next/link";
import { Home, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-cloud">
      <div className="max-w-md mx-auto px-4 text-center">
        <div className="mb-8">
          <span className="text-8xl font-bold text-navy/20">404</span>
        </div>
        <h1 className="text-3xl font-bold text-navy mb-4">Page Not Found</h1>
        <p className="text-charcoal/70 mb-8">
          Sorry, we couldn&apos;t find the page you&apos;re looking for. It may have been moved or
          doesn&apos;t exist.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button asChild className="bg-navy hover:bg-steel">
            <Link href="/">
              <Home className="mr-2 h-4 w-4" />
              Back to Home
            </Link>
          </Button>
          <Button asChild variant="outline">
            <Link href="/contact">
              Contact Support
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
