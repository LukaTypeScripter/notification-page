import React from 'react'
import rizky from "/home/luka/Desktop/notification-page/src/assets/images/avatar-rizky-hasanuddin.webp"
import { BoldNames, ChessClub, InfoWrapper, NotificationAbout, PostedDate, PriveteMsg, UserImg, Users, defaultTheme } from '../../styled/styled'

export default function ForthUser() {
  return (
    <>
     <Users>
          
          <UserImg src={rizky}/>
          <InfoWrapper>
          <NotificationAbout><BoldNames>Rizky Hasanuddin</BoldNames>sent you a private message</NotificationAbout>
          <PostedDate>5 days ago</PostedDate>
          <PriveteMsg>Hello, thanks for setting up the Chess Club. I've been a member for a few weeks now and I'm already having lots of fun and improving my game.</PriveteMsg>
          </InfoWrapper>
          
                  </Users>
          
    </>
  )
}
