// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'

// // https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [react()],
// })

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import ts from '@rollup/plugin-typescript';

export default defineConfig({
  plugins: [
    react(),
    ts({
      tsconfig: './tsconfig.json',
      sourceMap: true,
      inlineSources: true,
    }),
  ],
  build: {
    outDir: 'dist'
  }
});
