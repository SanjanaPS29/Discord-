import styled from "styled-components";

export const DashboardStyle = styled.div`
  display: flex;
  height: 100vh;
`;

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: -webkit-fill-available;
  height: 100vh;

  @media only screen and(min-width:830px) {
    min-width: 100%;
  }
`;
export const MainContent = styled.div`
  display: flex;
  height: -webkit-fill-available;
  padding: 0em;
  align-items: center;
  width: -webkit-fill-available;
  background-color: #4f545c;
  color: #8e9297;
  justify-content: flex-start;
`;
export const MainContent1 = styled.div`
  display: flex;
  width: -webkit-fill-available;
  padding: 0em;
  // align-items:center;
  height: -webkit-fill-available;
  background-color: #4f545c;
  color: #8e9297;
`;
export const MainContent2 = styled.div`
  height: -webkit-fill-available;
  color: #fff;
  width: 40%;
`;
