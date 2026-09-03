export interface Tool {
  id: string;
  name: string;
  category: string;
  description?: string;
  icon: string;
  href: string;
}

export const allTools: Tool[] = [
  // Tools
  { id: "calculator", name: "Calculator", category: "Tools", icon: "🧮", href: "/tools#calculator" },
  { id: "qr-generator", name: "QR Code Generator", category: "Tools", icon: "📱", href: "/tools#qr" },
  { id: "unit-converter", name: "Unit Converter", category: "Tools", icon: "📐", href: "/tools#converter" },
  { id: "password-generator", name: "Password Generator", category: "Tools", icon: "🔑", href: "/tools#password" },
  { id: "stopwatch", name: "Stopwatch", category: "Tools", icon: "⏱️", href: "/tools#stopwatch" },
  { id: "timer", name: "Timer", category: "Tools", icon: "⏲️", href: "/tools#timer" },
  { id: "image-compressor", name: "Image Compressor", category: "Tools", icon: "🖼️", href: "/tools#image" },
  { id: "text-tools", name: "Text Tools", category: "Tools", icon: "📝", href: "/tools#text" },

  // Study
  { id: "pomodoro", name: "Pomodoro Timer", category: "Study", icon: "🍅", href: "/study#pomodoro" },
  { id: "notes", name: "Notes", category: "Study", icon: "📓", href: "/study#notes" },
  { id: "todo", name: "To-Do List", category: "Study", icon: "✅", href: "/study#todo" },
  { id: "quiz", name: "Quiz", category: "Study", icon: "🧠", href: "/study#quiz" },
  { id: "study-timer", name: "Study Timer", category: "Study", icon: "⏳", href: "/study#timer" },

  // Media
  { id: "audio-player", name: "Audio Player", category: "Media", icon: "🎵", href: "/media#player" },
  { id: "playlist", name: "Playlist", category: "Media", icon: "📋", href: "/media#playlist" },
  { id: "visualizer", name: "Audio Visualizer", category: "Media", icon: "📊", href: "/media#visualizer" },
  { id: "metadata-viewer", name: "Metadata Viewer", category: "Media", icon: "🏷️", href: "/media#metadata" },
  { id: "downloader", name: "Media Downloader", category: "Media", icon: "⬇️", href: "/media/downloader" },

  // Coding
  { id: "playground", name: "HTML/CSS/JS Playground", category: "Coding", icon: "⚡", href: "/coding#playground" },
  { id: "json-formatter", name: "JSON Formatter", category: "Coding", icon: "📦", href: "/coding#json" },
  { id: "markdown", name: "Markdown Preview", category: "Coding", icon: "📄", href: "/coding#markdown" },
  { id: "regex", name: "Regex Tester", category: "Coding", icon: "🔍", href: "/coding#regex" },
  { id: "color-converter", name: "Color Converter", category: "Coding", icon: "🎨", href: "/coding#color" },

  // Finance
  { id: "savings", name: "Savings Calculator", category: "Finance", icon: "💰", href: "/finance#savings" },
  { id: "budget", name: "Budget Calculator", category: "Finance", icon: "📊", href: "/finance#budget" },
  { id: "split-bill", name: "Split Bill", category: "Finance", icon: "🧾", href: "/finance#split" },
  { id: "expense", name: "Expense Tracker", category: "Finance", icon: "💳", href: "/finance#expense" },

  // Random
  { id: "random-number", name: "Random Number", category: "Random", icon: "🎲", href: "/random#number" },
  { id: "random-name", name: "Random Name Picker", category: "Random", icon: "👤", href: "/random#name" },
  { id: "wheel", name: "Wheel Spinner", category: "Random", icon: "🎡", href: "/random#wheel" },
  { id: "decision", name: "Decision Maker", category: "Random", icon: "🤔", href: "/random#decision" },
];

export const categories = [
  { id: "tools", name: "Tools", icon: "🛠️", description: "Everyday Utilities", href: "/tools" },
  { id: "study", name: "Study", icon: "📚", description: "Learn Smarter", href: "/study" },
  { id: "media", name: "Media", icon: "🎵", description: "Audio & Multimedia", href: "/media" },
  { id: "coding", name: "Coding", icon: "💻", description: "Build & Experiment", href: "/coding" },
  { id: "finance", name: "Finance", icon: "💰", description: "Manage Your Numbers", href: "/finance" },
  { id: "random", name: "Random", icon: "🧠", description: "Just For Fun", href: "/random" },
];
