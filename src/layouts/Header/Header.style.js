import styled from "styled-components";

export const HeaderStyle=styled.div`
display:flex;
justify-content: space-around;
height:4em;
background-color:#5865f2;
align-items: center;
color:#fff;

@media only screen and (max-width:800px){
min-width:100%;
font-size:14px;
font-weight:1em;
height:4em;
padding-right:1em;
button{
    padding:0.2em ;
 }
}

@media only screen and (min-width:1200px){
     min-width:100%;
font-size:1em;
height:3em;

button{
    padding:0.5em 1em;
 }
}
`

export const ButtonStyle=styled.button`
border-radius:20px;
border:none;
padding: 0.5em 1em;
cursor:pointer;

`

export const IconStyle=styled.div`
div{
    display:inline;
   
}
`

export const Logo=styled.div` 
display:flex;
margin:0px;
max-width:140px;
padding:0px;
align-items:center;
flex-direction: row-reverse;
div{
    display:inline;
}

`

    