import React, { useState,useContext,useCallback  } from "react";
import { useAuth } from "../../../hooks/ProvideAuth";
import {AiOutlineEye} from 'react-icons/ai';

import {
  MainForm,
  FormArea,
  Input,
  Label,
  LoginButton,
  PStyle,
  PLast,
  Error,
  PasswordInput
} from "./MainLogin.style";

import { Link } from "react-router-dom";
import axios from "axios";
import { useEffect } from "react/cjs/react.development";
import { useNavigate } from "react-router-dom";

function MainLogin() {
const {login,setUsername} = useAuth();


console.log('loggedIn '+ login)

  const baseURL="http://localhost:3001/registration"
  const navigate = useNavigate();
const [showPassword,setShowPassword]=useState(false);

  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const loginUser = useCallback((u) => setUsername(u), []);
  const log = useCallback(() => login(), []);
  const [text, setText] = useState();

  const b = async (id, password) => {
    await axios.get(baseURL+"/"+ id).then((res) => {
      const details = res.data;
      if (details.password == password) {
        setText("Successfully Logged In");
        setTimeout(() => {
          setText(null);
          loginUser(details.username);
          log();
        }, 1000);
      } else {
        setText("User name or password is wrong");
        setTimeout(() => {
          setText(null);
        }, 1000);
      }
    });
  };

  const checkUser = async (user) => {
    let id;
    await axios
    .get(baseURL+"?email=" + user.email)
      .then((res) => {
        res = res.data;
        if(res.length!=0){
          const a = res[0].id;
          id = a;
            b(id, user.password);
          return id;
        }
        else{
          setText("Email Id Doesn't Exist");
          setTimeout(() => {
            setText(null);
          }, 1000);
        }

      });   
  };
  function onSubmit(e) {
    e.preventDefault();
    const { email, password } = e.target;

    if (email.value != "" && password.value != "") {
      // setUser({
      //   email: email.value,
      //   password: password.value,
      // });
      //console.log(user);
      const user = {
        email: email.value,
        password: password.value,
      };
      checkUser(user);
    } else {
      setText("Please Enter all the Details");
      setTimeout(() => {
        setText(null);
      }, 1000);
    }
  }

  const handlePassword=()=>{
    if(showPassword){
      setShowPassword(false);
    }
    else{
      setShowPassword(true);
    }
  }

  useEffect(() => {
    // loginUser("navi");
    //  log();
  }, []);

  return (
    <FormArea>
{/* <button onClick={login}>Login</button> */}

      <h3>Welcome Back!</h3>
      <p>We're so excited to see you again!</p>
      {/* {values.showPassword ? "text" : "password"}  */}
      <MainForm onSubmit={(e) => onSubmit(e)}>
        <>
          <Label>Email</Label>
          <Input type="text" name="email"></Input>
          <Label>Password</Label>
         <PasswordInput><input type={showPassword ? "text": "password"} name="password" ></input><AiOutlineEye onClick={(e)=>handlePassword()}/></PasswordInput>
          <PStyle>Forgot your password?</PStyle>
          <LoginButton>Login</LoginButton>

          <Error>{text}</Error>
        </>
      </MainForm>

      <PLast>
        <p>
          {" "}
          Need an account?{" "}
          <Link to="/register">
            <span>Register</span>
          </Link>
        </p>
      </PLast>
    </FormArea>
  );
}

export default MainLogin;