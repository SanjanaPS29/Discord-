import React,{useState} from 'react'
import { useEffect } from 'react';
import {PendingStyle,Content} from './Pending.style';
import {baseURL,Client} from '../../../../axios/Register';
import {useAuth} from '../../../../hooks/ProvideAuth';

function Pending() {
const [requestFriend,setRequestFriend]=useState();
const {username}=useAuth();

  useEffect(()=>{
  Client.get(`/friendRequest?sourceUsername=${username}&status=sendedRequest`)
  .then(res=>{
    const data=res.data;
      setRequestFriend(data);    
  });
  console.log(requestFriend);
  },[setRequestFriend])
 
  return (
    <PendingStyle>
      Sended Friend Request
      <Content>
      {
         requestFriend?.map((friend)=>(
           <li key={friend.id}>{friend.targetUsername}<button>request Sended</button></li>
         ))
      }
      </Content>
    </PendingStyle>
  )
 
}



export default Pending