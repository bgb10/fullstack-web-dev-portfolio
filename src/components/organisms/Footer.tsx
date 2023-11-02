import styled from 'styled-components'
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa'
import { Menu, MenuItemProps } from '@components/molecules/Menu'
import Container from '@components/atoms/Container'

const FooterContainer = styled.footer`
  display: flex;
  position: relative;
  width: 100%;
  max-width: 100%;
  overflow: hidden;
  padding: 0 0 2rem 0;
  margin-top: 2rem;
`

const FooterWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  border-top: 1px solid #ccc;
  padding: 2rem;
  margin: 3rem 2rem;
`

const menuItems: Array<MenuItemProps> = [
  {
    href: 'https://github.com/bgb10',
    name: 'Github',
    icon: <FaGithub />,
    target: '_blank'
  },
  {
    href: 'https://www.linkedin.com/in/gwan-bin-park-624b05259',
    name: 'LinkedIn',
    icon: <FaLinkedin />,
    target: '_blank'
  },
  {
    href: 'https://www.instagram.com/baggwanbin/',
    name: 'Instagram',
    icon: <FaInstagram />,
    target: '_blank'
  }
]

const Footer = () => (
  <FooterContainer>
    <FooterWrapper>
      <Menu items={menuItems} />
    </FooterWrapper>
  </FooterContainer>
)

export default Footer
