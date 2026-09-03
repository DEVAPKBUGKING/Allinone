export default function PrivacyPage() {
  return (
    <div className="px-4 py-24 sm:py-28">
      <div className="mx-auto max-w-3xl">
        <h1 className="text-4xl font-bold">Privacy</h1>
        <p className="mt-4 text-muted">Last updated: 2026</p>

        <div className="mt-8 space-y-6 text-muted">
          <p>
            REGAL is built with privacy in mind. Most features work entirely in your browser using LocalStorage.
          </p>
          <div>
            <h2 className="text-lg font-semibold text-white">LocalStorage</h2>
            <p className="mt-1">
              Features like Favorites, Recently Used, Notes, To-Do List, and Expense Tracker store data in your browser's
              LocalStorage. This data never leaves your device.
            </p>
          </div>
          <div>
            <h2 className="text-lg font-semibold text-white">No Tracking</h2>
            <p className="mt-1">
              REGAL does not use cookies, analytics trackers, or any third-party tracking scripts.
            </p>
          </div>
          <div>
            <h2 className="text-lg font-semibold text-white">External APIs</h2>
            <p className="mt-1">
              Some features may use external APIs (e.g., media downloader). These requests are made directly from your
              browser and are subject to the respective platform's terms.
            </p>
          </div>
          <div className="border-t border-border pt-4">
            <p className="text-sm">If you have any questions, you can reach out via the GitHub repository.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
