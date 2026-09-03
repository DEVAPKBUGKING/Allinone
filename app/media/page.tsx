"use client";

import { useState, useRef } from "react";

export default function MediaPage() {
  const [audioFile, setAudioFile] = useState<File | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setAudioFile(file);
      const url = URL.createObjectURL(file);
      if (audioRef.current) {
        audioRef.current.src = url;
        audioRef.current.load();
      }
    }
  };

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div className="px-4 py-24 sm:py-28">
      <div className="mx-auto max-w-7xl">
        <h1 className="text-4xl font-bold">Media</h1>
        <p className="mt-2 text-muted">Audio & Multimedia tools.</p>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {/* Audio Player */}
          <div className="rounded-2xl border border-border bg-background-card p-6">
            <h2 className="text-xl font-semibold">🎵 Audio Player</h2>
            <p className="text-sm text-muted">Select an audio file to play.</p>
            <input
              type="file"
              accept="audio/*"
              onChange={handleFileChange}
              className="mt-4 w-full text-sm text-muted file:mr-4 file:rounded-full file:border-0 file:bg-regal file:px-4 file:py-2 file:text-white"
            />
            <audio ref={audioRef} className="hidden" />
            {audioFile && (
              <div className="mt-4">
                <p className="text-sm truncate">{audioFile.name}</p>
                <button
                  onClick={togglePlay}
                  className="mt-2 rounded-full bg-regal px-6 py-2 text-white transition hover:bg-regal-dark"
                >
                  {isPlaying ? "⏸️ Pause" : "▶️ Play"}
                </button>
              </div>
            )}
          </div>

          {/* Playlist placeholder */}
          <div className="rounded-2xl border border-border bg-background-card p-6">
            <h2 className="text-xl font-semibold">📋 Playlist</h2>
            <p className="text-sm text-muted">Manage your audio playlist.</p>
            <p className="mt-4 text-xs text-muted">(Feature coming soon)</p>
          </div>

          {/* Visualizer placeholder */}
          <div className="rounded-2xl border border-border bg-background-card p-6">
            <h2 className="text-xl font-semibold">📊 Audio Visualizer</h2>
            <p className="text-sm text-muted">Visualize audio in real-time.</p>
            <p className="mt-4 text-xs text-muted">(Feature coming soon — uses Web Audio API)</p>
          </div>
        </div>
      </div>
    </div>
  );
}
