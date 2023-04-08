import React from 'react'
import chess from '/home/luka/Desktop/notification-page/src/assets/images/image-chess.webp'
import kimberly from '/home/luka/Desktop/notification-page/src/assets/images/avatar-kimberly-smith.webp'

import { BoldNames, ChessClub, InfoWrapper, Kim, NotificationAbout, PostedDate, PriveteMsg, UserImg, Users, defaultTheme } from '../../styled/styled'
export default function FifthUser() {
  return (
    <>
     <Users>
          
          <UserImg src={kimberly}/>
          <InfoWrapper>
          <NotificationAbout><BoldNames>Kimberly Smith</BoldNames> commented on your picture</NotificationAbout><Kim src={chess}/>
          <PostedDate>1 week ago</PostedDate>
          </InfoWrapper>
                  </Users>
    </>
  )
}
