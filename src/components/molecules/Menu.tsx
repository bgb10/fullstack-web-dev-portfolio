import { ReactNode } from 'react'
import { LinkProps } from 'next/link'
import { useRouter } from 'next/router'
import styled from 'styled-components'
import MenuLink from '@components/atoms/MenuLink'

const MenuContainer = styled.ul`
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
`

const MenuItem = styled.li<{ active: boolean }>`
  margin-right: 2rem;

  a {
    color: ${({ active }) => (active ? '#1C35EC' : '#666')};

    &:hover {
      color: #2429af;
    }
  }

  &:last-child {
    margin-right: 0;
  }
`

type MenuProps = {
  items: MenuItemProps[]
}

export type MenuItemProps = {
  name: string
  icon?: ReactNode
  target?: '_self' | '_blank' | undefined
} & LinkProps

export const Menu: React.FC<MenuProps> = ({ items }) => {
  const router = useRouter()

  let menuItems = items.map((item, index) => (
    <MenuItem key={index} active={item.href === router.pathname}>
      <MenuLink href={item.href} target={item.target ?? '_self'}>
        {item.icon ?? item.name}
      </MenuLink>
    </MenuItem>
  ))

  return <MenuContainer>{menuItems}</MenuContainer>
}
