import React from 'react'
import { BoldNames, ChessClub, InfoLiked, InfoWrapper, Kim, NotificationAbout, PostedDate, PriveteMsg, UserImg, Users, defaultTheme } from '../../styled/styled'
import nathan from '/home/luka/Desktop/notification-page/src/assets/images/avatar-nathan-peterson.webp'

export default function SixtUser() {
  return (
    <>
     <Users>
          
          <UserImg src={nathan}/>
          <InfoWrapper>
          <NotificationAbout><BoldNames>Nathan Peterson</BoldNames> reacted to your recent post<InfoLiked>  5 end-game strategies to increase your win rate</InfoLiked></NotificationAbout>
          <PostedDate>2 weeks ago</PostedDate>
          </InfoWrapper>
                  </Users>
    </>
  )
}
