import styled from "styled-components";

export const BlockList = styled.ul`
  list-style: none;
  margin-top: 1em;

  li {
    display: flex;
    justify-content: space-between;
    background-color: #0a132754;
    border-radius: 4px;
    padding: 0.5em;
    margin-bottom: 0.4em;
    div {
      float: right;
    }
  }
  button {
    padding: 0.3em 1em;
    border-radius: 4px;
    border: none;
    color: #fff;
    background-color: green;
    cursor: pointer;
    margin: 1px;
  }
`;

export const BlockStyle = styled.div`
  padding: 1em;
  width: -webkit-fill-available;
`;
