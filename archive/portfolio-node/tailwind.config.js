/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#09090b", // zinc-950
        foreground: "#f4f4f5", // zinc-100
        primary: "#10b981",    // emerald-500
        primaryDark: "#059669",
        secondary: "#3b82f6",  // blue-500
        accent: "#f43f5e",     // rose-500
        muted: "#a1a1aa",      // zinc-400
        surface: "rgba(24, 24, 27, 0.7)", // zinc-900 with opacity
        border: "#27272a",     // zinc-800
        // Syntax Highlighting Colors
        syntax: {
          keyword: "#c678dd", // purple
          string: "#98c379",  // green
          function: "#61afef",// blue
          variable: "#e06c75",// red
          comment: "#5c6370", // gray
          number: "#d19a66",  // orange
          operator: "#56b6c2",// cyan
        }
      },
      fontFamily: {
        mono: ['"Fira Code"', '"JetBrains Mono"', "monospace"],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      }
    },
  },
  plugins: [],
};
