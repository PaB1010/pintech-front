import StyledComponentsRegistry from './registry'
import Header from './global/ui/outlines/Header'
import Footer from './global/ui/outlines/Footer'
// import { styled } from 'styled-components'
import './globals.css'

// const MainContent = styled.main`
//   min-height: 600px;
// `

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ko">
      <body>
        <StyledComponentsRegistry>
          <Header />
          <main className="main-content">{children}</main>
          <Footer />
        </StyledComponentsRegistry>
      </body>
    </html>
  )
}
