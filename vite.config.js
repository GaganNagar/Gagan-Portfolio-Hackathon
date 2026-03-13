import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
  // Aap chaho toh local server ka port yahan fix kar sakte ho, 
  // waise default bhi sahi chalega.
  server: {
    port: 3000, 
  }
});