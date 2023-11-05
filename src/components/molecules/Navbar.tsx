import { useState, useEffect } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import styled from 'styled-components'
import { Menu, MenuItemProps } from '@components/molecules/Menu'

const NavbarWrapper = styled.div`
  display: flex;
  flex-direction: rows;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 68px;
`

const LogoLink = styled(Link)`
  display: flex;
  font-family: 'Inter', san-serif;
  font-size: 1.625rem;
  font-weight: bold;
  color: #000;
  text-decoration: none;
`

const MenuWrapper = styled.div<{ isOpen: boolean }>`
  display: flex;

  @media (max-width: 768px) {
    display: ${(props) => (props.isOpen ? 'flex' : 'none')};
    background-color: #fafafa;
    flex-direction: column;
    z-index: 50;
    position: absolute;
    top: 65px;
    right: 0;
    left: 0;
    height: 100vh;
    padding: 1rem 1.25rem;

    ul {
      flex-direction: column;
    }

    li {
      margin-right: 0;
      border-bottom: 1px #ccc;
      border-bottom-style: solid;
      padding: 1rem 0;

      a {
        font-size: 1.25rem;
        justify-content: flex-end;
      }
    }
  }
`

const HamburgerIcon = styled.div`
  display: none;
  flex-direction: column;
  justify-content: space-around;
  width: 24px;
  height: 18px;
  cursor: pointer;

  div {
    width: 100%;
    height: 2px;
    background: #000;
  }

  @media (max-width: 768px) {
    display: flex;
  }
`

type NavbarProps = {
  links: MenuItemProps[]
}

const Navbar: React.FC<NavbarProps> = ({ links }) => {
  const [isOpen, setIsOpen] = useState(false)

  const router = useRouter()

  useEffect(() => {
    setIsOpen(false)
  }, [router])

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  return (
    <NavbarWrapper>
      <HamburgerIcon onClick={toggleMenu}>
        <div />
        <div />
        <div />
      </HamburgerIcon>
      <MenuWrapper isOpen={isOpen}>
        <Menu items={links} />
      </MenuWrapper>
    </NavbarWrapper>
  )
}

export default Navbar
