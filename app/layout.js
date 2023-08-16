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
          <div className="main">
            <div className="gradient">
            </div>
          </div>

          <main className='app'>
            <NavBar />
            {children}
        </main>
      </body>
    </html>
  )
}
