import type { Config } from "tailwindcss";
const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: { extend: { colors: { forest: "#123f35", ocean: "#087e8b", sand: "#f4efe4" } } },
  plugins: []
};
export default config;
