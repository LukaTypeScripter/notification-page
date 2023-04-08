import { useState } from "react";
import MarkWebber from "./assets/images/avatar-mark-webber.webp"
import {
  GlobalStyle,
  Container,
  CardComp,

  Users,UserImg,NotificationAbout,BoldNames,PostedDate,InfoWrapper,InfoLiked
} from "./components/styled/styled";
import HeaderInf from "./components/Authors/Header/Header";
function App() {
  const [count, setCount] = useState(0);

  return (
    <Container>
      <GlobalStyle />
      <CardComp>
       <HeaderInf/>

        <Users>
          
<UserImg src={MarkWebber}/>
<InfoWrapper>
<NotificationAbout><BoldNames>Mark Webberreacted</BoldNames> to your recent post<InfoLiked> My first tournament today!</InfoLiked></NotificationAbout>
<PostedDate>3 months ago</PostedDate>
</InfoWrapper>
        </Users>
        
      </CardComp>
    </Container>
  );
}

export default App;
