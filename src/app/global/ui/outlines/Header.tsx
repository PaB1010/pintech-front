'use client'

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { styled } from 'styled-components'
import { RiLoginBoxLine } from 'react-icons/ri'
import { FaUserPlus, FaHome, FaSearch } from 'react-icons/fa'
import colors from '../../styles/colors'
import sizes from '../../styles/sizes'
import logo from '../../assets/images/logo.jpg'

const { white, primary, light, dark } = colors
const { medium, big } = sizes

// scss 문법
const StyledHeader = styled.header`
  .site-top {
    background: ${light};
    height: 45px;

    .layout-width {
      display: flex;
      justify-content: space-between;

      & > div {
        display: flex;
        align-items: center;
        height: 45px;

        a + a {
          margin-left: 10px;
        }
      }

      svg {
        font-size: ${big};
      }
    }
  }

  .logo-search {
    .layout-width {
      display: flex;
      justify-content: space-between;
      height: 150px;
      align-items: center;
    }
  }
`

const StyledForm = styled.form`
  width: 350px;
  display: flex;
  border: 3px solid ${dark};

  button {
    width: 45px;
    background: ${dark};
    color: ${white};
    border: 0;
    cursor: pointer;

    svg {
      font-size: ${big};
    }
  }

  input {
    flex-grow: 1;
    border: 0;
    padding: 10px;
    font-size: ${medium};
  }
`

const StyledMenu = styled.nav`
  background: ${primary};

  .layout-width {
    display: flex;
    height: 50px;

    a {
      color: ${light};
      font-size: ${medium};
      padding: 0 40px;
      line-height: 50px;

      &:hover,
      &.on {
        background: ${dark};
      }
    }
  }
`

const Header = () => {
  return (
    <StyledHeader>
      <div className="site-top">
        <div className="layout-width">
          {/* 컨텐츠 영역 */}
          <div className="left">
            <Link href="/" className="logo">
              <FaHome />
            </Link>
          </div>
          <div className="right">
            <Link href="/member/join">
              <FaUserPlus /> 회원 가입
            </Link>
            <Link href="/member/login">
              <RiLoginBoxLine /> 로그인
            </Link>
          </div>
        </div>
      </div>
      {/* site-top */}
      <div className="logo-search">
        <div className="layout-width">
          {/* 컨텐츠 영역 */}
          <Link href="/">
            <Image src={logo} alt="로고" />
          </Link>

          <StyledForm method="GET" action="/board/search" autoComplete="off">
            <input
              type="text"
              name="skey"
              placeholder="검색어를 입력하세요"
            ></input>
            <button type="submit">
              <FaSearch />
            </button>
          </StyledForm>
        </div>
      </div>
      {/* logo-search */}
      <StyledMenu>
        <div className="layout-width">
          <Link href="#">메뉴1</Link>
          <Link href="#">메뉴2</Link>
          <Link href="#">메뉴3</Link>
        </div>
      </StyledMenu>
    </StyledHeader>
  )
}

export default React.memo(Header)
