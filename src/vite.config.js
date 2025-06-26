import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
    plugins: [react()],
    root: 'public', // Chỉ định thư mục gốc là 'public'
    base: '/digital-cv-portfolio/',
    build: {
        outDir: 'dist', // Đảm bảo output directory vẫn là 'dist'
    }
});