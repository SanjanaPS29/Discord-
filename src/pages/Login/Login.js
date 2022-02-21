import React from 'react';
import {LoginStyle,Container,Background} from './Login.style'
import MainLogin from './MainLogin.js/MainLogin';
import QRcode from './QRCode/QRcode';


function Login() {
  return (
    <Background>
    <Container>
    <LoginStyle>
   <MainLogin/>
   <QRcode/>
    </LoginStyle>
    </Container>
    </Background>
  );
}

export default Login;