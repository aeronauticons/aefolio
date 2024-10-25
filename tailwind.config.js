/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ae_background_color: "rgba(var(--ae_background_color))",
        ae_logo_color: "rgba(var(--ae_logo_color))",
        ae_ring_color: "rgba(var(--ae_ring_color))",
        ae_modal_color: "rgba(var(--ae_modal_color))",
        ae_hover_modal: "rgba(var(--ae_hover_modal))",
        ae_quote_bg_color: "rgba(var(--ae_quote_bg_color))",
        ae_quote_ring: "rgba(var(--ae_quote_ring))",
        ae_quote_shadow: "rgba(var(--ae_quote_shadow))",
        ae_keypoints_bg_color: "rgba(var(--ae_keypoints_bg_color))",

      }
    },
  },
  plugins: [],
}

