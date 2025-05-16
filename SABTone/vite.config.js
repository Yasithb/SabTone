import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  
  
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        "brandPrimary": "#4CAF4F",
        "neutralDGrey": "#4D4D4D",
        "neutralGrey": "#717171",
        "neutralSilver": "#F5F7FA",
        "gray900": "#18191F",
        "neutralBlack": "#263238",
      }
    },
  },
  
  
  
  plugins: [react(),tailwindcss(),],
})
