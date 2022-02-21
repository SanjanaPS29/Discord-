import styled from "styled-components";
import { Link } from "react-router-dom";

export const FooterStyle = styled.div`
  background-color: #23272a;
  display: flex;
  flex-direction: column;
  color: #fff;
  padding: 1em;
  @media only screen and(min-width:500px) {
    width: 100%;
    padding: 0em;
  }
`;

export const LinkStyle = styled.a`
  color: #fff;
  text-decoration: none;
`;
export const FooterLinks = styled.div`
  display: flex;
  width: 100%;
`;
export const MainFooter = styled.div`
  display: flex;
`;

export const FlexBox = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  text-align: initial;
  margin-inline: 8px;
`;

export const PStyle = styled.h1`
  text-transform: uppercase;
  color: #5865f2;
`;
export const SocailMedia = styled.div`
  margin-top: 0.5em;
  div {
    display: inline;
    padding-inline: 0.5em;
  }
`;
export const MainLeftStyle = styled.div`
  padding-right: 2em;
`;
export const Icon = styled.div`
  padding-right: 0px;
  display: inline;
`;

export const SingUp = styled.button`
  cursor: pointer;
  background-color: #5865f2;
  padding: 0.2em 1em;
  border-radius: 10px;
  color: #fff;
  margin-top: 4px;
  border: none;
`;

export const SingUpStyle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
