import React,{createContext,useState , useContext} from 'react';
import { useEffect } from 'react';

const AuthContext = createContext({});

 function ProvideAuth({children}) {

  const sleep=miliseconds=>{

  };

  const [loggedIn,setLoggnedIn]=useState(false);
 const[username,setUsername]=useState();
const login=()=>{
// sleep(2000).then(() => setLoggnedIn(true));
setTimeout(()=>{ setLoggnedIn(true);
console.log(username);
},2000)
}

const logout=()=>{
 
  setTimeout(() => { setLoggnedIn(false);
  setUsername(null); }, 2000);
}

const authContextValue={
  login,
  loggedIn,
  logout,
  setUsername,
  username
};

  return (
    <AuthContext.Provider value={authContextValue}>
        {children}
    </AuthContext.Provider>
  );
}

const useAuth=()=> React.useContext(AuthContext);
export {ProvideAuth,useAuth};