import './globals.css'

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html>
      <body className="min-h-screen bg-gradient-to-b from-gray-200 to-gray-200 text-white">
        {children}
      </body>
    </html>
  )
}
