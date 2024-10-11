import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/ariel-plomero-build24/', // Asegúrate de que el nombre sea correcto
});
