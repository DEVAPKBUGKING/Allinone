import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-border bg-background/50 py-8">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <p className="text-sm text-muted">
            © 2026 REGAL <span className="text-xs">™</span> — All Rights Reserved.
          </p>
          <p className="text-xs text-muted">
            Created in 2026 · An independent digital project.
          </p>
          <div className="flex gap-4 text-xs text-muted">
            <Link href="/privacy" className="hover:text-white">
              Privacy
            </Link>
            <Link href="/settings" className="hover:text-white">
              Settings
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
