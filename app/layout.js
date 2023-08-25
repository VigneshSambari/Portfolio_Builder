import Provider from "@components/providers/Provider";
import NavigatornWrapper from "@components/navigation_wrapper/NavigatorWrapper";
import "@styles/globals.css";


export const metadata = {
  title: 'Portfolio Builder',
  description: 'Create beautiful portfolio and showcaseyour talent',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
          <Provider>
            <NavigatornWrapper>
              <div className="main">
                <div className="gradient">
                </div>
              </div>

              <main className='app'>
                {children}
              </main>
            </NavigatornWrapper>
          </Provider>
      </body>
    </html>
  )
}
