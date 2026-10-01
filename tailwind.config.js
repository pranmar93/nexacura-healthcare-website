/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "#f3f7f8",
        foreground: "#0e1a24",
        paper: "#fbfcfd",
        ink: "#0e1a24",
        "ink-soft": "#2a3d4a",
        muted: "#e4eef1",
        "muted-foreground": "#5a6e78",
        primary: {
          DEFAULT: "#2573a3",
          foreground: "#f7fbfc",
        },
        secondary: {
          DEFAULT: "#d7ebf1",
          foreground: "#0e1a24",
        },
        accent: "#3dbcda",
        border: "#c9dbe2",
        ring: "#2573a3",
        destructive: "#7a1f2b",
        mist: "#99c3d3",
        "mist-deep": "#5e93a8",
        cyan: "#3dbcda",
        ice: "#caeff9",
        nexa: "#2573a3",
        physiology: "#2573a3",
        bone: "#f3f7f8",
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
        display: ["Newsreader", "Times New Roman", "serif"],
        mono: ["IBM Plex Mono", "ui-monospace", "SFMono-Regular", "monospace"],
      },
      borderRadius: {
        "2xl": "1.75rem",
      },
      boxShadow: {
        border:
          "0 0 0 1px rgb(14 26 36 / 0.06), 0 1px 2px -1px rgb(14 26 36 / 0.06), 0 2px 8px 0 rgb(14 26 36 / 0.04)",
      },
      transitionTimingFunction: {
        clinical: "cubic-bezier(0.22, 1, 0.36, 1)",
      },
    },
  },
  plugins: [],
};
