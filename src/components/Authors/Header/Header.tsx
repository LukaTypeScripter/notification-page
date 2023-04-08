import React, { useState } from 'react'
import { defaultTheme } from '../../styled/styled'
import styled from "styled-components";
interface Props {
    counter:number
    HandleClear: () => void
}
export default function HeaderInf({counter,HandleClear}:Props) {
    

  return (
    <>
     <Header>
      <HeaderCon>
          <Logo>Notifications</Logo>
          <Counter>{counter}</Counter>
          </HeaderCon>
          <MarkRead onClick={HandleClear}>Mark All as read</MarkRead>
        </Header>
    </>
  )
}

export const Header = styled.header `
display: flex;
justify-content: space-around;
`
export const HeaderCon = styled.header `
display: flex;
column-gap: 6px;
`
export const HeaderComp = styled.div`

`
export const Logo = styled.h1 `
font-size: 24px;
font-weight: ${defaultTheme.FontWeigh.weigh800};
`
export const Counter = styled.div `
width: 25px;
height: 25px;
border-radius: 5px;
background-color: ${defaultTheme.PrimaryColor.Blue};
text-align: center;
color: ${defaultTheme.NeutralColor.White};
margin-left: 5px;
`
export const MarkReadrCont = styled.div `
display: flex;
justify-content: space-around;
`
export const MarkRead = styled.p `
margin-left: 35px;
font-size: 13px;
background-color: transparent;
`