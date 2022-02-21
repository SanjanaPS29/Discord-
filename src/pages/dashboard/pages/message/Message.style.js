import styled from 'styled-components'

export const MessageStyle=styled.div`
padding:1em;
width: -webkit-fill-available;
`

export const ConversationStyle=styled.ul` 

overflow-y: auto; 
scrollbar-width: 3px;
::-webkit-scrollbar {
    width: 8px;
}
::-webkit-scrollbar-thumb {
    -webkit-border-radius: 10px;
    background: rgb(149 156 167 / 80%);
}
max-height:500px;
li{
    color:#fff;
    display:flex;
    justify-content: space-between;
    background-color:#0a132754;
    border-radius:4px;
    padding:0.5em;
    margin-bottom:0.4em;
}

`
export const Received=styled.div` 
li{
    color:#fff;
    display:flex;
    justify-content: space-between;
    background-color:#0a132721;
    border-radius:4px;
    padding:0.5em;
    margin-bottom:0.4em;
}
`

export const MessageBox=styled.div` 
display:flex;
flex-direction:column;
margin-top:10px;

button{
    padding:0.3em 1em;
    border-radius:4px;
    border:none;
    color:#fff;
    background-color:#296bdab3;
    cursor:pointer;
    margin:3px;
    width:30%;
}

`

export const Input=styled.input` 
background-color:#363434;
width: -webkit-fill-available;
height: 2em;
color:#fff;
`