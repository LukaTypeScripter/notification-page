import React from 'react'
import { defaultTheme } from '../../styled/styled'
import styled from "styled-components";
export default function HeaderInf() {
  return (
    <>
     <Header>
          <Logo>Notifications</Logo>
          <Counter>0</Counter>
          <MarkRead>Mark All as read</MarkRead>
        </Header>
    </>
  )
}

export const Header = styled.header `
display: flex;
justify-content: space-around;
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