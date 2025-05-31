import { defineConfig } from 'vite';
import reactRefresh from '@vitejs/plugin-react-refresh';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  plugins: [reactRefresh(), tailwindcss()],
});
