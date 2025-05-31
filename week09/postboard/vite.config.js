import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/boards': {
        target: 'http://api.efub-seminar.kro.kr:8080',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/boards/, '/boards'),
      },
    },
  },
});
