import { useState } from "react";
import styled from "styled-components";
import { createGlobalStyle } from "styled-components";
interface UsersProps extends React.HTMLAttributes<HTMLElement> {
  notifications?: boolean;
}
export const defaultTheme = {
  PrimaryColor: {
    Red: "hsl(1, 90%, 64%)",
    Blue: "hsl(219, 85%, 26%)",
  },
  NeutralColor: {
    White: "hsl(0, 0%, 100%)",
    VeryLightGrayishBlue: "hsl(210, 60%, 98%)",
    LightGrayishBlue1: "hsl(211, 68%, 94%)",
    LightGrayishBlue2: "hsl(205, 33%, 90%)",
    GrayishBlue: "hsl(219, 14%, 63%)",
    DarkGrayishBlue: "hsl(219, 12%, 42%)",
    VeryDarkBlue: "hsl(224, 21%, 14%)",
  },
  FontWeigh: {
    weigh400: "400",
    weigh800: "800",
  },
};

export const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;800&display=swap');
 *,*::before,*::after {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
 }
 body {
    font-family: 'Plus Jakarta Sans', sans-serif;
    background-color: ${defaultTheme.NeutralColor.VeryLightGrayishBlue};
 }
`;

export const Container = styled.div`
  @media only screen and (min-width: 1440px) {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
  }
`;

export const CardComp = styled.div`
  background-color: ${defaultTheme.NeutralColor.White};
  display: flex;
  flex-direction: column;
  box-shadow: 0 8px 16px #0000001a;
  padding: 34px 30px 0;
  border-radius: 16px;
  max-width: 730px;
  min-height: 840px;
  box-sizing: border-box;
`;

export const Users = styled.article<UsersProps>`
  padding: 18px;
  display: flex;

  width: 100%;
  border-radius: 12px;
  margin-bottom: 4px;
  background-color: ${(props) =>
    props.notifications
      ? defaultTheme.NeutralColor.VeryLightGrayishBlue
      : defaultTheme.NeutralColor.White};
  gap: 18px;
  position: relative;
`;
export const Dot = styled.div`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background-color: ${defaultTheme.PrimaryColor.Red};
  display: flex;
`;
export const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
export const UserImg = styled.img`
  width: 46px;
  height: 46px;
  border-radius: 50%;
`;
export const NotificationAbout = styled.p``;
export const BoldNames = styled.span`
  font-weight: ${defaultTheme.FontWeigh.weigh800};
  color: #000;
  margin-right: 3px;
  &:hover {
    color: ${defaultTheme.PrimaryColor.Blue};
  }
`;
export const PostedDate = styled.p`
  color: ${defaultTheme.NeutralColor.GrayishBlue};
`;
export const InfoLiked = styled.span`
  color: ${defaultTheme.NeutralColor.DarkGrayishBlue};
  &:hover {
    color: ${defaultTheme.PrimaryColor.Blue};
  }
`;
export const ChessClub = styled.span`
  color: ${defaultTheme.PrimaryColor.Blue};
  font-weight: ${defaultTheme.FontWeigh.weigh800};
`;
export const PriveteMsg = styled.p`
  margin-top: 12px;
  border: ${defaultTheme.NeutralColor.LightGrayishBlue1} 1px solid;
  color: ${defaultTheme.NeutralColor.GrayishBlue};
  border-radius: 8px;
  padding: 18px;
`;
export const Kim = styled.img`
  height: 45px;
  width: 45px;
  border-radius: 5px;
  position: absolute;
  right: 18px;
`;
