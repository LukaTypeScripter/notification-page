import React, { useState } from 'react'
import { BoldNames, Dot, InfoLiked, InfoWrapper, NotificationAbout, PostedDate, UserImg, Users, defaultTheme } from '../../styled/styled'
import styled from "styled-components";
import Jenna from "/home/luka/Desktop/notification-page/src/assets/images/avatar-angela-gray.webp"
interface Props {
    notifications:boolean
}
export default function SecondAuthor({notifications}:Props) {
    
  return (
    <>
     <Users notifications={notifications}>
          
          <UserImg src={Jenna}/>
          <InfoWrapper>
          <NotificationAbout><BoldNames>Angela Gray</BoldNames> followed you</NotificationAbout>
          <PostedDate>5m ago</PostedDate>
          </InfoWrapper>
          {notifications && (
            <>
            <span><Dot></Dot></span>
            </>
          )}
                  </Users>
    </>
  )
}
