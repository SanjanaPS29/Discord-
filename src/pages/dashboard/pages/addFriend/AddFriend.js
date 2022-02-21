import React from "react";
import {
  Input,
  AddFriendStyle,
  SearchStyle,
  Form,
  Content,
  SearchList,
} from "./AddFriend.style";
import { useEffect, useState } from "react/cjs/react.development";
import axios from "axios";
import { useAuth } from "../../../../hooks/ProvideAuth";
import { Client } from "../../../../axios/Register";

function AddFriend() {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState([]);
  const [addFriend, setaddFriend] = useState("");
  const [friendStatus, setFriendStatus] = useState(false);
  const [text, setText] = useState();

  const { username } = useAuth();

  const [notFriend, setNotFriend] = useState([]);
  //const [friends,setFriends]=useState([]);

  //  const getUserFriend= async(name)=>{
  //   await Client.get(`/friends?username=${username}`)
  //   .then(res=>{
  //    const data=res.data;
  //   if(data.length !== 0)
  //    console.log(data);
  //   const friendList=data;
  //    setFriends(friendList.friends);
  //    return friendList;
  //    }
  //   );
  // }

  const getData = async () => {
    await axios.get("http://localhost:3001/registration").then((res) => {
      const d = res.data;

      setData(d);
      console.log(data);
      //  return d;
    });
  };

  const filterData = (searchTerm) => {
    //  let a=notFriend;
    const search = searchTerm.target.value;
    setaddFriend(search);

    if (search === "") {
      setSearch([]);
    } else {
      var newData = data.filter((user) =>
        user.username.toLowerCase().includes(search.toLowerCase())
      );
      if (newData.length === 0) {
        //setSearch()
      }
      setSearch(newData);
    }
  };

  // const check= async()=>{
  // const fri= getUserFriend(username);
  //   const d=getData();
  // console.log(d);
  //   const li= d?.filter((list) => {
  //     // findIndex return array index if found else return -1 if not found
  //     return fri.findIndex(genere => genere.friendName !== list.username) > -1;
  //   })?.map(list => list);

  // var arrayOfValues = await Promise.all(li);
  // setNotFriend(arrayOfValues);
  // }

  const sendFriendRequest = (e) => {
    e.preventDefault();

    const { search } = e.target;
    console.log(e.target);
    if (search.value != "") {
      const sendReq = {
        sourceUsername: username,
        targetUsername: search.value,
        status: "sendedRequest",
      };
      console.log(sendReq);
      Client.post("/friendRequest", sendReq);
      setText("Successfully Friend Request Send");
      setTimeout(() => {
        setText(null);
      }, 2000);
    }
  };

  useEffect(() => {
    getData();
  }, [setData, setSearch, setaddFriend]);

  const add = (user) => {
    setaddFriend(user.username);
    console.log(user);
  };

  return (
    <AddFriendStyle>
      <div>
        <h3>Add Friend</h3>
      </div>
      <div>
        {" "}
        <p>
          {" "}
          You can add a friend with their Discord Tag. It's cAsE sEnsitivE!
        </p>
      </div>
      <SearchStyle>
        <Form onSubmit={(e) => sendFriendRequest(e)}>
          <Input
            type="text"
            name="search"
            value={addFriend}
            onChange={(e) => filterData(e)}
          ></Input>
          <button>Send Friend Request</button>
        </Form>
      </SearchStyle>
      <SearchList>
        {search?.map((user) => (
          <React.Fragment key={user.id}>
            <li>
              {user.username} <button onClick={() => add(user)}>Add</button>
            </li>
          </React.Fragment>
        ))}
        <p>{text}</p>
      </SearchList>
      <Content></Content>
    </AddFriendStyle>
  );
}

export default AddFriend;
