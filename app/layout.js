import "@styles/globals.css"

import NavBar from "@components/NavBar"



export const metadata = {
  title: 'Portfolio Builder',
  description: 'Create beautiful portfolio and showcaseyour talent',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
          <main className="flex flex-col items-center justify-start">
            <NavBar />
            {children}
          </main>
      </body>
    </html>
  )
}
