/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "var(--primary)",
        "primary-foreground": "var(--primary-foreground)",
        foreground: "var(--foreground)",
        background: "var(--background)",
        card: "var(--card)",
        border: "var(--border)",
      },
    },
  },
  plugins: [],
};
