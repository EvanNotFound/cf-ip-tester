/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
	],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        gh: {
          gray: {
            0: "#f6f8fa",
            1: "#eaeef2",
            2: "#d0d7de",
            3: "#afb8c1",
            4: "#8c959f",
            5: "#6e7781",
            6: "#57606a",
            7: "#424a53",
            8: "#32383f",
            9: "#24292f",
          },
          blue: {
            0: "#ddf4ff",
            1: "#b6e3ff",
            2: "#80ccff",
            3: "#54aeff",
            4: "#218bff",
            5: "#0969da",
            6: "#0550ae",
            7: "#033d8b",
            8: "#0a3069",
            9: "#002155",
          },
          green: {
            0: "#dafbe1",
            1: "#aceebb",
            2: "#6fdd8b",
            3: "#4ac26b",
            4: "#2da44e",
            5: "#1a7f37",
            6: "#116329",
            7: "#044f1e",
            8: "#003d16",
            9: "#002d11",
          },
          yellow: {
            0: "#fff8c5",
            1: "#fae17d",
            2: "#eac54f",
            3: "#d4a72c",
            4: "#bf8700",
            5: "#9a6700",
            6: "#7d4e00",
            7: "#633c01",
            8: "#4d2d00",
            9: "#3b2300",
          },
          orange: {
            0: "#fff1e5",
            1: "#ffd8b5",
            2: "#ffb77c",
            3: "#fb8f44",
            4: "#e16f24",
            5: "#bc4c00",
            6: "#953800",
            7: "#762c00",
            8: "#5c2200",
            9: "#471700",
          },
          red: {
            0: "#ffebe9",
            1: "#ffcecb",
            2: "#ffaba8",
            3: "#ff8182",
            4: "#fa4549",
            5: "#cf222e",
            6: "#a40e26",
            7: "#82071e",
            8: "#660018",
            9: "#4c0014",
          },
          purple: {
            0: "#fbefff",
            1: "#ecd8ff",
            2: "#d8b9ff",
            3: "#c297ff",
            4: "#a475f9",
            5: "#8250df",
            6: "#6639ba",
            7: "#512a97",
            8: "#3e1f79",
            9: "#2e1461",
          },
          pink: {
            0: "#ffeff7",
            1: "#ffd3eb",
            2: "#ffadda",
            3: "#ff80c8",
            4: "#e85aad",
            5: "#bf3989",
            6: "#99286e",
            7: "#772057",
            8: "#611347",
            9: "#4d0336",
          },
          coral: {
            0: "#fff0eb",
            1: "#ffd6cc",
            2: "#ffb4a1",
            3: "#fd8c73",
            4: "#ec6547",
            5: "#c4432b",
            6: "#9e2f1c",
            7: "#801f0f",
            8: "#691105",
            9: "#510901",
          },
          border: "#d0d7de", //same as gray-2
          bg: "#f6f8fa", //same as gray-0
          darkbg: "#24292f", //same as gray-9
          subtledarkbg: "#32383f", //same as gray-8
          darkborder: "#424a53", //same as gray-7
          text: {
            primary: "#24292f", //same as gray-9
            secondary: "#57606a", //same as gray-6
            tertiary: "#6e7781", //same as gray-5
          },
          dark: {
            border: "#424a53", //same as gray-7
            bg: "#24292f", //same as gray-9
            text: {
              primary: "#f6f8fa", //same as gray-0
              secondary: "#afb8c1", //same as gray-3
              tertiary: "#8c959f", //same as gray-4
            },
          },
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}