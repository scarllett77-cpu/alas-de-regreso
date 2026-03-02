export const metadata = {
  title: 'Alas de Regreso RD',
  description: 'Tecnología como estructura para la humanidad',
}

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  )
}