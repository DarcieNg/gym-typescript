import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: { // shorten the directory path for imported functions
    alias: [{find: "@", replacement: path.resolve(__dirname, "src")}]
  },
})
