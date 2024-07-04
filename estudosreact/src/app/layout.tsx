import './globals.css'

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html>
      <body className="h-screen  bg-gray-800">{children}</body>
    </html>
  )
}
