import styled from "styled-components";


export const PendingStyle=styled.div`
display:flex;
flex-direction:column;
padding:2em;
width:100%;
justify-content: flex-start;

button{
    padding:0.3em 1em;
    border-radius:4px;
    border:none;
    color:#fff;
    background-color:#3a6d3a;
    cursor:pointer;
}

`

export const Content=styled.ul` 
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