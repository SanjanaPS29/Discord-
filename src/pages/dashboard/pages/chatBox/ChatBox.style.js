import styled from "styled-components";

export const Content=styled.ul` 


overflow-y: auto; 
scrollbar-width: 3px;
::-webkit-scrollbar {
    width: 8px;
}
::-webkit-scrollbar-thumb {
    -webkit-border-radius: 10px;
    background: rgb(149 156 167 / 80%);
}

list-style:none;
margin-top:1em;
li{
    display:flex;
    justify-content: space-between;
    background-color:#0a132754;
    border-radius:4px;
    padding:0.5em;
    margin-bottom:0.4em;
}
button{
    padding:0.3em 1em;
    border-radius:4px;
    border:none;
    color:#fff;
    background-color:green;
    cursor:pointer;
    margin:1px;
}
`