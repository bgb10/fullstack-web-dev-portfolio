import { ReactNode } from 'react'
import styled from 'styled-components'
import Header from '@components/organisms/Header'
import Footer from '@components/organisms/Footer'
import Main from '@components/organisms/Main'

const LayoutContainer = styled.div`
  min-height: 100vh;
  max-width: 100%;
  margin: 0 auto;
  padding: 0;
`

type LayoutProps = {
  children: ReactNode
}

const Layout = ({ children }: LayoutProps) => (
  <LayoutContainer>
    <Header />
    <Main> {children} </Main>
    <Footer />
  </LayoutContainer>
)

export default Layout
