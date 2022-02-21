import styled from "styled-components";
import loginbackground from '../../assets/login-image.svg';

export const Input=styled.input` 
color:#fff;
background-color:#2f3136;
width:100%;
margin-bottom:2em;
margin:1em 0em;
padding:.8em 0em;
border:none;
`

export const Label=styled.label` 
text-transform:uppercase;
color:#8e9297;
margin:1em 0em;
`

export const RegisterStyle=styled.div` 
background-image:url(${loginbackground});
align-item:center;
display:flex;
justify-content:center;
align-items: center;
height:100vh;
background-size:cover;

`

export const Container=styled.div`
max-width:500px;
margin:1em;

 `
export const FormStyle=styled.form` 

margin-inline: auto;
background-color:#36393f;
background-color: #36393f;
border-radius: 5px;
padding: 2em;


`

export const Title=styled.div`
color:#fff;
font-height:16px;
font-size:20px;
color:#fff;
text-align:center;

`

export const RegisterButton=styled.button` 
cursor: pointer;
background-color: #5865f2;
padding: 1em 0em;
width: 100%;
margin-top: 1.5em;
color: white;
border:none;
`
export const Error=styled.h3`
color: red;
fontSize:4em;
font-weight:500;
margin-bottom:5px;
height:1em;
text-align:center;
`

export const PasswordInput=styled.div`
display:flex;
justify-content: space-between;
background-color:#2f3136;
align-items: center;
margin-bottom:1em;
margin-top:1em;
padding: 0.5em;
color:#fff;
input{
    background-color:#2f3136;
    color:#fff;
    border:none;
    width: -webkit-fill-available;
    margin-right:1em;
}
`