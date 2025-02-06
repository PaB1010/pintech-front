import StyledComponentsRegistry from './registry'
import Header from './global/ui/outlines/Header'
import Footer from './global/ui/outlines/Footer'
import { CommonProvider } from './global/contexts/CommonContext'
import { Metadata } from 'next'

// import { styled } from 'styled-components'
import 'react-datepicker/dist/react-datepicker.css'
import './globals.css'

// const MainContent = styled.main`
//   min-height: 600px;
// `

export const metadata: Metadata = {
  title: 'Pintech Project',
  description: '카드 & 대출 추천 사이트',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ko">
      <body>
        <StyledComponentsRegistry>
          <CommonProvider>
            <Header />
            <main className="main-content">{children}</main>
            <Footer />
          </CommonProvider>
        </StyledComponentsRegistry>
      </body>
    </html>
  )
}
