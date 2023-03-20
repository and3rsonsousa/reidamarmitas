/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
	theme: {
		extend: {
			colors: {
				brand: "#FF8000",
				accent: "#FFD500",
				support: "#472B1E",
			},
		},
	},
	plugins: [],
};
