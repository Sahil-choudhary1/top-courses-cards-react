import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default {
  base: "/top-courses-cards-react/",
};  

export default defineConfig({
  plugins: [react()],
})
