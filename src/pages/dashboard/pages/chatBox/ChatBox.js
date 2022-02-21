import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../../../hooks/ProvideAuth";
import { Client } from "../../../../axios/Register";
import { Content } from "./ChatBox.style";

function ChatBox() {
  const [friends, setFriends] = useState();

  const { username } = useAuth();
  const navigate = useNavigate();

  const generateId = (name) => {
    const user = [username, name];
    console.log(username);
    const id = user.sort();
    const genId = id[0] + "$" + id[1];
    console.log(genId);
    return genId;
  };

  const chatStart = (friend) => {
    console.log(friend);
    let id = generateId(friend.friendName);
    navigate(`/message/${id}/${friend.friendName}`);
  };

  const getUserFriend = async (name) => {
    await Client.get(`/friends?username=${username}`).then((res) => {
      const data = res.data;
      if (data.length !== 0) console.log(data);
      const friendList = data[0].friends;
      setFriends(friendList);
    });
  };

  useEffect(() => {
    getUserFriend(username);
  }, []);

  return (
    <Content>
      <h4>Chat Box</h4>
      {friends?.map((friend, index) => (
        <li key={index}>
          {friend.friendName}
          <button onClick={() => chatStart(friend)}>Chat</button>
        </li>
      ))}
    </Content>
  );
}

export default ChatBox;
