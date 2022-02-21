import React from 'react'
import {DashboardHomeStyle,Content} from './DashboardHome.style';
import  NooneAround from '../../../../assets/image-dashboard/no_online_friends.svg'
import  AddFriend from '../addFriend/AddFriend';
import { useParams} from "react-router-dom";


 function DashboardHome() {


  return (
    <DashboardHomeStyle>
    <Content>
         <img src={NooneAround}  width="50%" alt="No one around"/>
         <p>No one's around to play with Wumpus.</p>
    </Content>
    {/* <Content>
        <AddFriend/>
    </Content> */}

    </DashboardHomeStyle>
  )
}


export default DashboardHome;