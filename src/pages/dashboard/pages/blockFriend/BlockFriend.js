import React,{useEffect,useState} from 'react';
import {Client} from '../../../../axios/Register';
import {useAuth} from '../../../../hooks/ProvideAuth';
import {BlockList,BlockStyle} from './BlockFriend.style.js';


function BlockFriend(){
const {username}=useAuth();
const [blockFriend,setBlockFriend]=useState();



const getBlockFriend=()=>{

Client.get(`/blockFriend?blockedBy=${username}`)
.then(res=>{
	let data=res.data;
	console.log(data);
	setBlockFriend(data);

})

}


const unBlock=(id)=>{

	Client.delete(`/blockFriend/${id}`)
	console.log("deleted");
	setBlockFriend([]);
	getBlockFriend();
}

useEffect(()=>{

getBlockFriend();

},[setBlockFriend]);
	return (

<BlockStyle>Block
<BlockList>
{
	blockFriend?.map((block,index)=>(
    <li key={index}>{block.blockedTo}<button onClick={()=>unBlock(block.id)}>Unblock</button></li>

		))
}
</BlockList>




</BlockStyle>


		)
} 


export default BlockFriend;