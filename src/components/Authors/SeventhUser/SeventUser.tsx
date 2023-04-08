import React from 'react'
import { BoldNames, ChessClub, InfoLiked, InfoWrapper, Kim, NotificationAbout, PostedDate, PriveteMsg, UserImg, Users, defaultTheme } from '../../styled/styled'
import ann from '/home/luka/Desktop/notification-page/src/assets/images/avatar-anna-kim.webp'

export default function SeventUser() {
  return (
    <>
     <Users>
          
          <UserImg src={ann}/>
          <InfoWrapper>
          <NotificationAbout><BoldNames>Anna Kim</BoldNames> left the group<ChessClub>  Chess Club</ChessClub></NotificationAbout>
          <PostedDate>2 weeks ago</PostedDate>
          </InfoWrapper>
                  </Users>
    </>
  )
}
