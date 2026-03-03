import './globals.css'

export const metadata = {
  title: 'Alas de Regreso RD',
  description: 'Estructura tecnológica para el regreso a la plenitud',
}

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className="antialiased">{children}</body>
    </html>
  )
}