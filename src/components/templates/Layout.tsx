import { ReactNode } from 'react'
import styled from 'styled-components'
import Header from '@components/organisms/Header'

const Container = styled.div`
  min-height: 100vh;
  max-width: 100%;
  margin: 0 auto;
  padding: 0;
`

type LayoutProps = {
  children: ReactNode
}

const Layout = ({ children }: LayoutProps) => (
  <Container>
    <Header />
  </Container>
)

export default Layout
