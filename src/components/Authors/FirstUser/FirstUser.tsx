import React from 'react'
import { BoldNames, Dot, InfoLiked, InfoWrapper, NotificationAbout, PostedDate, UserImg, Users, defaultTheme } from '../../styled/styled'
import styled from "styled-components";
import MarkWebber from "/home/luka/Desktop/notification-page/src/assets/images/avatar-mark-webber.webp"
interface Props {
    notifications:boolean
}
export default function FirstUser({notifications}:Props) {
  return (
    <>
    <Users notifications={notifications}>
          
          <UserImg src={MarkWebber}/>
          <InfoWrapper>
          <NotificationAbout><BoldNames>Mark Webberreacted</BoldNames> to your recent post<InfoLiked> My first tournament today!</InfoLiked></NotificationAbout>
          <PostedDate>3 months ago</PostedDate>
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

