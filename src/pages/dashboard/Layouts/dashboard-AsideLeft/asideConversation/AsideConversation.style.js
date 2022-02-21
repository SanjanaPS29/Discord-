import styled from "styled-components";

export const AsideConversationStyle=styled.div`
display:flex;
flex-direction:column;
background-color:#292b2f;
padding-inline:1em;
color:#fff;
width:200px;
`

export const Messages=styled.div` 
display:flex;
flex-direction:column;
padding:0px;
div{
    padding:0px;
}
`

export const Content=styled.div`
margin-top:5px;
div{
    margin-bottom:5px;
    margin-top:5px;
}

`

export const DirectMessage=styled.div`
display:flex;
justify-content: space-between;
cursor:pointer;
`

export const LinkStyle=styled.div` 
padding-top:0.5em;
padding-botton:1em;
cursor:pointer;
`

export const InputSearch=styled.input.attrs({type:'text' ,placeholder:'Find or start a conversations'})` 
margin-top:10px;
padding:0.5em;
background-color:#202225;
border:none;
color:#fff;
`