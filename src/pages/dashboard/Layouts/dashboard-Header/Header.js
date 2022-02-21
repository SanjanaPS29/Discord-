import React from 'react'
import { Link } from 'react-router-dom';
import {HeaderStyle,Button,ListStyle} from './Header.style'
import { useAuth } from '../../../../hooks/ProvideAuth';


 function Header() {

const {logout,username} = useAuth();


  return (
    <HeaderStyle>
   <ListStyle color={"#fff"}><Link to="/friends">Icon Friends</Link></ListStyle>
   {/* <ListStyle color={"#fff"}><Link to="/online">Online</Link></ListStyle> */}
   {/* <ListStyle color={"#fff"}><Link to="/message">Message</Link></ListStyle> */}
   <ListStyle color={"#8e9297"}><Link to="/all">All</Link></ListStyle>
   <ListStyle color={"#8e9297"}><Link to="/pending">Pending</Link></ListStyle>
   <ListStyle color={"#8e9297"}><Link to="/blockFriend">Blocked</Link></ListStyle>
   <ListStyle> <Button color={"#fff"}><Link to="/addFriend">Add Friend</Link></Button></ListStyle>
   <ListStyle> <Button color={"Blue"} onClick={logout}>LogOut</Button></ListStyle>
<ListStyle>{username}</ListStyle>
    </HeaderStyle>
  )
}


export default Header;