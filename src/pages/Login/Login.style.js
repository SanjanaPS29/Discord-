import styled from "styled-components";
import loginbackground from '../../assets/login-bg.PNG';


export const Container=styled.div` 

max-width:660px;
margin:1em;

`

export const LoginStyle=styled.div` 
 display:flex;
max-width:100%;
 background-color: #36393f;
 padding:2em 1em;
 border-radius:10px;
`
export const Background=styled.div` 
background-image:url(${loginbackground});
background-size: cover;
height:100vh;
justify-content:center;
display:flex;
align-items:center;

`

