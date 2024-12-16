import { Hamburger, NavDrawer, NavItem } from '@fluentui/react-nav-preview'
import { useState } from 'react'
import { pages } from '../Routes'

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const openBtn = <Hamburger onClick={() => setIsOpen(!isOpen)} />
  return (
    <>
      {!isOpen && openBtn}
      <NavDrawer open={isOpen}>
        {openBtn}
        {pages.map((p, i) => (
          <NavItem key={p.display} icon={null} href={p.path} value={String(i)}>
            {p.display}
          </NavItem>
        ))}
      </NavDrawer>
    </>
  )
}

export default NavBar
