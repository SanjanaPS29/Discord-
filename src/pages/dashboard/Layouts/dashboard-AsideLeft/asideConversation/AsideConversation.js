import React from 'react'
import ChatBox from '../../../pages/chatBox/ChatBox';
import {AsideConversationStyle,Messages,Content,DirectMessage,LinkStyle,InputSearch} from './AsideConversation.style'

function AsideConversation() {
  return (
    <AsideConversationStyle>
      <Content><InputSearch></InputSearch></Content>
  <Content> 
    <LinkStyle>Friends</LinkStyle>
    <LinkStyle>Stage Discovery</LinkStyle>
    <LinkStyle>Nitro</LinkStyle>
 </Content>
 <Content>
 <Messages>
    <DirectMessage>
    <div>Direct</div>
    <div>+</div>
    </DirectMessage>
    <div><ChatBox/></div>
  </Messages>
 </Content>
  
    </AsideConversationStyle>
  )
}


export default AsideConversation;