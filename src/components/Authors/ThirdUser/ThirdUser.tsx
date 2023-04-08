import React from 'react'
import { BoldNames, ChessClub, Dot, InfoWrapper, NotificationAbout, PostedDate, UserImg, Users, defaultTheme } from '../../styled/styled'
import jacob from "/home/luka/Desktop/notification-page/src/assets/images/avatar-jacob-thompson.webp"
interface Props {
    notifications:boolean
}
export default function ThirdUser({notifications}:Props) {
  return (
    <>
      <Users notifications={notifications}>
          
          <UserImg src={jacob}/>
          <InfoWrapper>
          <NotificationAbout><BoldNames>Jacob Thompson</BoldNames> has joined your group<ChessClub>  Chess Club</ChessClub></NotificationAbout>
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
