import styled from "styled-components";
import Friends1 from "../../assets/discord-background.svg";

export const MainContainer = styled.div`
  text-align: center;
`;

export const Container = styled.div`
  align-items: center;
`;
export const HomeStyle = styled.div`
  background-color: #404eed;
  background-image: url(${Friends1});
  background-size: cover;

  min-height: 500px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-inline: 1em;
  color: #fff;

  div {
    max-width: 800px;
  }

  @media only screen and (max-width: 200px) {
     {
      font-size: 2em;
    }
  }
`;

export const ButtonStyle = styled.div`
  // text-align:center;
`;

export const Button = styled.button`
  align=items: center;
  border-radius: 20px;
  border: none;
  padding: 1em;
  background-color: ${(props) => (props.bg === "dark" ? "#2f3136" : "#fff")};
  color: ${(props) => (props.bg === "dark" ? "#fff" : "#2f3136")};
  margin: 1em;
  cursor: pointer;
  width: 35%;

  @media only screen and (width: 600px) width:10%;
  margin: 0.5em;
  padding: 0.5em;
`;

export const Title = styled.h1`
  font-familty: Ginto, "Helvetica Neue", Helvetica, Arial, sans-serif;
  font-size: 4em;
  font-style: normal;
  text-transform: uppercase;
  font-weight: 700;

  text-align: center;
`;

export const MainContent = styled.div`
  // @media only screen and (min-width: 660px){
  //     {
  //        width:100%;
  //     }
  // }
`;

export const ImageText = styled.div` 

    text-align: -webkit-match-parent;
    align-items:center;
   

     @media only screen and(max-width:900px){
    max-width:80%
    font-size:3em;
     padding-inline:5em;
     }
`;

export const Invite = styled.div`
  display: flex;
  padding-top: 2em;
  padding-inline: 4em;

  align-items: center;

  margin-inline: auto;
  margin-bottom: 1em;
  background-color: ${(props) => props.bg || "#fff"};

  div {
    width: 100%;
  }
`;

export const ReliableTech = styled.div`
  background-color: #f6f6f6;
  padding-inline: 4em;
  align-items: center;
  text-align: center;
  padding-bottom: 2em;

  button {
    color: #fff;
    background-color: #5865f2;
    border-radius: 20px;
    padding-inline: 2em;
    padding: 1em 8em;
    border: none;
    margin-top: 1em;
  }

  div {
    text-align: center;
    margin-inline: auto;
    max-width: 80%;
  }
`;
