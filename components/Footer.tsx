import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-secondary text-foreground border-t border-border">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <nav className="flex flex-wrap justify-center -mx-5 -my-2">
          <div className="px-5 py-2">
            <Link href="/" className="text-base text-muted-foreground hover:text-foreground transition-colors">
              Home
            </Link>
          </div>
          <div className="px-5 py-2">
            <Link href="/calculators" className="text-base text-muted-foreground hover:text-foreground transition-colors">
              Calculators
            </Link>
          </div>
          <div className="px-5 py-2">
            <Link href="/resources" className="text-base text-muted-foreground hover:text-foreground transition-colors">
              Resources
            </Link>
          </div>
          <div className="px-5 py-2">
            <Link href="/contact" className="text-base text-muted-foreground hover:text-foreground transition-colors">
              Contact
            </Link>
          </div>
          <div className="px-5 py-2">
            <Link href="/terms" className="text-base text-muted-foreground hover:text-foreground transition-colors">
              Terms
            </Link>
          </div>
          <div className="px-5 py-2">
            <Link href="/privacy" className="text-base text-muted-foreground hover:text-foreground transition-colors">
              Privacy
            </Link>
          </div>
        </nav>
        <p className="mt-8 text-center text-muted-foreground">
          &copy; 2025 BUD Calculator. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
