'use client'

import { styled } from 'styled-components'

// children = 사이트 제목
const _MainTitle = ({ children, className }) => {
  return <h1 className={className}>{children}</h1>
}

export const MainTitle = styled(_MainTitle)``
