"use client";

import { useState, useEffect } from "react";

export default function StudyPage() {
  // Pomodoro state
  const [minutes, setMinutes] = useState(25);
  const [seconds, setSeconds] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [mode, setMode] = useState<"work" | "break">("work");

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isRunning) {
      interval = setInterval(() => {
        if (seconds === 0) {
          if (minutes === 0) {
            setIsRunning(false);
            alert(mode === "work" ? "Work session complete! Take a break." : "Break over! Back to work.");
            setMode(mode === "work" ? "break" : "work");
            setMinutes(mode === "work" ? 5 : 25);
            setSeconds(0);
            return;
          }
          setMinutes(minutes - 1);
          setSeconds(59);
        } else {
          setSeconds(seconds - 1);
        }
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isRunning, minutes, seconds, mode]);

  const resetPomodoro = () => {
    setIsRunning(false);
    setMinutes(25);
    setSeconds(0);
    setMode("work");
  };

  return (
    <div className="px-4 py-24 sm:py-28">
      <div className="mx-auto max-w-7xl">
        <h1 className="text-4xl font-bold">Study</h1>
        <p className="mt-2 text-muted">Tools designed to make studying, organizing tasks, and managing learning sessions easier.</p>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {/* Pomodoro Card */}
          <div className="rounded-2xl border border-border bg-background-card p-6">
            <h2 className="text-xl font-semibold">🍅 Pomodoro Timer</h2>
            <p className="text-sm text-muted">{mode === "work" ? "Focus" : "Break"}</p>
            <div className="mt-4 text-center">
              <span className="text-5xl font-mono font-bold">
                {String(minutes).padStart(2, "0")}:{String(seconds).padStart(2, "0")}
              </span>
            </div>
            <div className="mt-4 flex gap-2">
              <button
                onClick={() => setIsRunning(!isRunning)}
                className="flex-1 rounded-full bg-regal py-2 text-white transition hover:bg-regal-dark"
              >
                {isRunning ? "Pause" : "Start"}
              </button>
              <button
                onClick={resetPomodoro}
                className="flex-1 rounded-full border border-border py-2 text-muted transition hover:border-white hover:text-white"
              >
                Reset
              </button>
            </div>
          </div>

          {/* Notes placeholder */}
          <div className="rounded-2xl border border-border bg-background-card p-6">
            <h2 className="text-xl font-semibold">📓 Notes</h2>
            <p className="text-sm text-muted">Create, edit, delete, and search notes.</p>
            <p className="mt-4 text-xs text-muted">(Feature coming soon — uses LocalStorage)</p>
          </div>

          {/* To-Do placeholder */}
          <div className="rounded-2xl border border-border bg-background-card p-6">
            <h2 className="text-xl font-semibold">✅ To-Do List</h2>
            <p className="text-sm text-muted">Add, complete, and delete tasks.</p>
            <p className="mt-4 text-xs text-muted">(Feature coming soon — uses LocalStorage)</p>
          </div>
        </div>
      </div>
    </div>
  );
}
