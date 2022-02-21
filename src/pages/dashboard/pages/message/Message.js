import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import {
  MessageStyle,
  Input,
  MessageBox,
  Form,
  ConversationStyle,
  Received,
} from "./Message.style";
import { Client } from "../../../../axios/Register";
import { useParams } from "react-router-dom";
import { useAuth } from "../../../../hooks/ProvideAuth";

function Message() {
  const [message, setMessage] = useState();

  const [data, setData] = useState([]);
  var { friendId, friendName } = useParams();
  const { username } = useAuth();
  const [id, setId] = useState("");
  const [blockFriend, setBlockFriend] = useState([]);
  const [sendText, setSendText] = useState();

  const getFriendMessages = async () => {
    await Client.get(`/chatDetails?chatId=${friendId}`).then((res) => {
      let data = res.data;
      if (data.length != 0) {
        let d = data[0].messages;
        setData(d);
        setId(data[0].id);
        // msg=res.data;
        // console.log(data);
      }
    });
  };

  const getBlockFriend = () => {
    Client.get(
      `/blockFriend?blockedBy=${username}&blockedTo=${friendName}`
    ).then((res) => {
      let bockedName = res.data;
      console.log(data);
      setBlockFriend(bockedName);
      if (bockedName.length !== 0) {
        // setSendText(false);
      }
      // else{
      //   setSendText(true);
      // }
    });
  };

  const userBlockFriend = async () => {
    await Client.get(
      `/blockFriend?blockedBy=${friendName}&blockedTo=${username}`
    ).then((res) => {
      let bockedName = res.data;
      console.log(bockedName);
      if (bockedName.length === 0) {
        setSendText(true);
      } else {
        setSendText(false);
      }
    });
  };

  const sendMessage = async (e) => {
    userBlockFriend();
    if (sendText) {
      if (message != "") {
        const messageDetails = {
          message: message,
          senderName: username,
          receiverName: friendName,
        };
        console.log(messageDetails);
        console.log(data);
        let old;
        //  await Client.get("/messages/1")
        // .then(res=>{
        console.log(data);

        // });
        if (data != undefined && data.length != 0) {
          old = data;
          old.push(messageDetails);
          const updatedMsg = { messages: old };
          await Client.patch(`/chatDetails/${id}`, updatedMsg);
        } else {
          const newChat = {
            chatId: friendId,
            messages: [messageDetails],
          };
          await Client.post("/chatDetails", newChat);
        }
        console.log(old);

        getFriendMessages();
        setMessage("");
      }
    } else {
      console.log("commit");
    }
  };

  const handleMessage = (e) => {
    const msg = e.target.value;
    setMessage(msg);
  };

  useEffect(() => {
    // getConversation();
    getFriendMessages();
    getBlockFriend();
    //getAllMessage();
  }, [setData, setId, sendText, setMessage]);

  return (
    <MessageStyle>
      <div>Message Area</div>
      <MessageBox>
        <Input
          type="text"
          name="message"
          placeholder="Message Area"
          value={message}
          onChange={(e) => handleMessage(e)}
        ></Input>
        <button onClick={(e) => sendMessage(e)}>Send Message</button>
      </MessageBox>
      <ConversationStyle>
        {data?.map((msg, index) => (
          <React.Fragment key={index}>
            <p>{msg.senderName}</p>
            <li>{msg.message}</li>
          </React.Fragment>
        ))}
      </ConversationStyle>
    </MessageStyle>
  );
}

export default Message;
