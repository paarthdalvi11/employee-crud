import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],

  server: {
    proxy: {
      // Map requests from the frontend to the backend
      '/api': {
        target: 'http://localhost:3000', // Backend server URL
        changeOrigin: true, // Changes the origin of the host header to the target
        rewrite: (path) => path.replace(/^\/api/, ''), // Removes '/api' from the request path
      },
    },
  },
})
