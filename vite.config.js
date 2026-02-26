import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

/**
 * ARCHIVO: vite.config.js
 * FUNCIÓN: Motor de Ignición de la Plataforma
 * ESTRATEGIA: Optimización de recursos para asegurar el Aterrizaje Exitoso ($A_x$)
 */
export default defineConfig({
  plugins: [react()],
  build: {
    // Definimos el directorio de salida para que Vercel lo encuentre sin errores
    outDir: 'dist',
    // Limpiamos la carpeta de construcción en cada proceso para mantener la pureza del sistema
    emptyOutDir: true,
    // Optimizamos la carga de estilos para reflejar la transparencia del cristal
    cssCodeSplit: true,
  },
  server: {
    // Puerto estándar para el desarrollo en el laboratorio
    port: 5173,
    strictPort: true,
  }
})