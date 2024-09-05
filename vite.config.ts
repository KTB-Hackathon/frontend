import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: 5173, // 포트 설정
    host: "0.0.0.0" // 모든 IP에서 접근 가능하도록 설정
  },
  plugins: [react()],
})
