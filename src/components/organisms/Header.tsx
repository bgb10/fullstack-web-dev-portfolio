import Container from '@components/atoms/Container'
import { useEffect, useState } from 'react'
import styled from 'styled-components'
import Navbar from '@components/molecules/Navbar'

const HeaderContainer = styled.header`
  display: flex;
  position: relative;
  width: 100%;
  max-width: 100%;
  overflow: hidden;
`

const FixedTop = styled.div<{ isscrolly: Boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background-color: #fafafa;
  box-shadow: ${(props) =>
    props.isscrolly
      ? '0 1px 3px rgba(0, 0, 0, 0.06), 0 1px 2px rgba(0, 0, 0, 0.12)'
      : 'none'};
  z-index: 3000;
  transition: background 0.3s ease, box-shadow 0.3s ease;
`

const navItems = [
  {
    href: '/About',
    name: 'About'
  },
  {
    href: '/Experience',
    name: 'Experience'
  },
  {
    href: '/Education',
    name: 'Education'
  },
  {
    href: '/Project',
    name: 'Project'
  },
  {
    href: '/Skill',
    name: 'Skill'
  },
  {
    href: '/Contact',
    name: 'Contact'
  }
]

const Header = () => {
  const [isScrolledY, setisscrolly] = useState<Boolean>(false)

  // Handle scroll event to update style of the fixed header.
  const handleScroll = () => {
    if (window.scrollY >= 90) {
      setisscrolly(true)
    } else {
      setisscrolly(false)
    }
  }

  useEffect(() => {
    // Add scroll event listener to handle scroll behavior.
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <HeaderContainer>
      <FixedTop isscrolly={isScrolledY}>
        <Navbar links={navItems} />
      </FixedTop>
    </HeaderContainer>
  )
}

export default Header
