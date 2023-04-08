import { useState } from "react";

import {
  GlobalStyle,
  Container,
  CardComp,
} from "./components/styled/styled";
import HeaderInf from "./components/Authors/Header/Header";
import FirstUser from "./components/Authors/FirstUser/FirstUser";
import SecondAuthor from "./components/Authors/SecondAuthor/SecondAuthor";
import ThirdUser from "./components/Authors/ThirdUser/ThirdUser";
import ForthUser from "./components/Authors/ForthUser/ForthUser";
import FifthUser from "./components/Authors/FifthUser/FifthUser";
import nathan from '/home/luka/Desktop/notification-page/src/assets/images/avatar-nathan-peterson.webp'
import SixtUser from "./components/Authors/SixthUser/SixtUser";
import SeventUser from "./components/Authors/SeventhUser/SeventUser";
function App() {
  const [notifications,setNotifications] = useState(true)
  const [counter,setCounter] = useState(3)

  const HandleClear = () => {
    setCounter(0)
    setNotifications(false)
  }
  return (
    <Container>
      <GlobalStyle />
      <CardComp>
       <HeaderInf counter={counter} HandleClear={HandleClear}/>
      <FirstUser notifications={notifications}/>
     <SecondAuthor notifications={notifications}/>
    <ThirdUser notifications={notifications}/>
   <ForthUser/>
  <FifthUser/>
    <SixtUser/>
   <SeventUser/>
      </CardComp>
    </Container>
  );
}

export default App;
