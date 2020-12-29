import Link from 'next/link'

import { useState } from 'react'
import { Menu2 as MenuIcon } from '@styled-icons/remix-fill/Menu2'
import { ShoppingCart as ShoppingCartIcon } from '@styled-icons/material-outlined'
import { Search as SearchIcon } from '@styled-icons/material-outlined'
import { Close as CloseIcon } from '@styled-icons/material-outlined/Close'

import Logo from '../Logo'
import * as S from './styles'
import Button from 'components/Button'
import MediaMatch from 'components/MediaMatch'

export type MenuProps = {
  username?: string
}

const Menu = ({ username }: MenuProps) => {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <S.Wrapper>
      <MediaMatch lessThan="medium">
        <S.IconWrapper onClick={() => setIsOpen(true)}>
          <MenuIcon aria-label="Open Menu" />
        </S.IconWrapper>
      </MediaMatch>

      <S.LogoWrapper>
        <Link href="/">
          <a>
            <Logo hiddeOnMobile />
          </a>
        </Link>
      </S.LogoWrapper>

      <MediaMatch greaterThan="medium">
        <S.MenuNav>
          <Link href="/">
            <S.MenuLink>Home</S.MenuLink>
          </Link>
          <S.MenuLink>Explore</S.MenuLink>
        </S.MenuNav>
      </MediaMatch>

      <S.MenuWrapper>
        <S.IconWrapper>
          <Link href="/search">
            <a>
              <SearchIcon aria-label="Search" />
            </a>
          </Link>
        </S.IconWrapper>
        <S.IconWrapper>
          <Link href="/wishlist">
            <a>
              <ShoppingCartIcon aria-label="Open Shopping Cart" />
            </a>
          </Link>
        </S.IconWrapper>
        {!username && (
          <MediaMatch greaterThan="medium">
            <Link href="/signin" passHref>
              <Button as="a">Sign In</Button>
            </Link>
          </MediaMatch>
        )}
      </S.MenuWrapper>

      <S.MenuFull aria-hidden={!isOpen} isOpen={isOpen}>
        <CloseIcon onClick={() => setIsOpen(false)} aria-label="Close Menu" />
        <S.MenuNav>
          <S.MenuLink href="/">Home</S.MenuLink>
          <S.MenuLink href="/">Explore</S.MenuLink>
          {!!username && (
            <>
              <S.MenuLink href="/">My account</S.MenuLink>
              <S.MenuLink href="/">Wishlist</S.MenuLink>
            </>
          )}
        </S.MenuNav>
        {!username && (
          <S.RegisterBox>
            <Link href="/signin">
              <Button fullWidth size="large">
                Log in now
              </Button>
            </Link>
            <span>or</span>
            <Link href="/signup">
              <S.CreateACount href="" title="Sign Up">
                Sign Up
              </S.CreateACount>
            </Link>
          </S.RegisterBox>
        )}
      </S.MenuFull>
    </S.Wrapper>
  )
}

export default Menu
