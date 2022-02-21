import React from 'react'

import { ActiveStyle,Activety } from './ActiveNow.style';
import axios from 'axios';
import { useEffect , useState} from 'react/cjs/react.development';

 function ActiveNow() {
const [data,setData ]=useState({});

  const getData=async()=>{
  await axios.get("http://localhost:3001/registration")
  .then (res =>{
    const data=res.data;
    console.log(data);
  })
  }


useEffect(()=>{
  getData()
},[])

  return (
    <ActiveStyle>
        <div><h3>Active Now</h3></div>
    <Activety>
         <h4>It's quite for now...</h4>
         <p>when a friend starts an activity--Like playing a game or hanging out on voice--we'll show it here?
             
         </p>
    </Activety>
    </ActiveStyle>
  )
}

export default ActiveNow;
