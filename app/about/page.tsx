export default function AboutPage() {
  return (
    <div className="px-4 py-24 sm:py-28">
      <div className="mx-auto max-w-3xl">
        <h1 className="text-4xl font-bold">About REGAL</h1>
        <p className="mt-4 text-lg text-muted">
          REGAL is an independent all-in-one web project created to bring useful digital tools into one simple and
          modern platform.
        </p>

        <div className="mt-8 space-y-6 border-t border-border pt-8">
          <div>
            <p className="text-sm text-muted">Created</p>
            <p className="font-medium">2026</p>
          </div>
          <div>
            <p className="text-sm text-muted">Purpose</p>
            <p className="font-medium">To provide simple, useful, and accessible digital tools in one place.</p>
          </div>
        </div>

        <div className="mt-12 border-t border-border pt-8">
          <h2 className="text-2xl font-bold">Why REGAL?</h2>
          <ul className="mt-4 grid gap-3 sm:grid-cols-2">
            <li className="flex items-center gap-2 text-muted">
              <span className="text-regal">◆</span> Simple
            </li>
            <li className="flex items-center gap-2 text-muted">
              <span className="text-regal">◆</span> Fast
            </li>
            <li className="flex items-center gap-2 text-muted">
              <span className="text-regal">◆</span> Modern
            </li>
            <li className="flex items-center gap-2 text-muted">
              <span className="text-regal">◆</span> Useful
            </li>
            <li className="flex items-center gap-2 text-muted">
              <span className="text-regal">◆</span> Privacy-focused
            </li>
          </ul>
        </div>

        <div className="mt-12 border-t border-border pt-8 text-center">
          <p className="text-sm text-muted">
            REGAL<span className="text-xs">™</span> — © 2026 All Rights Reserved.
          </p>
          <p className="text-xs text-muted mt-2">
            REGAL is an independent digital project. Its original branding, interface, and source code are part of the
            REGAL project.
          </p>
        </div>
      </div>
    </div>
  );
}
