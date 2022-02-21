import styled from "styled-components";

export const HeaderStyle = styled.ul`
  display: flex;
  padding-top: 0.5em;
  padding-bottom: 0.5em;
  justify-content: flex-start;
  margin: 0px;
  background-color: #4f545c;
  border-bottom: 2px solid #36393f;
  li {
    margin-inline: 0.5em;
    padding-inline: 0.8em;
    margin: 2px;
  }

  @media only screen and (min-width: 815px) {
    padding-inline: 0.2em;
  }
`;
export const ListStyle = styled.li`
  list-style: none;
  color: ${(props) => props.color || "#fff"};
  cursor: pointer;

  a {
    color: #fff;
    text-decoration: none;
  }
`;

export const Button = styled.button`
  background-color: #3ba55d;
  color: #fff;
  border: none;
  border-radius: 5px;
  padding: 3px 5px;
  cursor: pointer;
`;
