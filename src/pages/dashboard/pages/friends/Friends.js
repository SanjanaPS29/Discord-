import React, { useState, useEffect } from "react";
import { Client } from "../../../../axios/Register";
import { Content, FriendStyle } from "./Friends.style";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../../../hooks/ProvideAuth";
function Friends() {
  const [friends, setFriends] = useState();
  const [receivedRequest, setReceivedRequest] = useState();
  const [text, setText] = useState();
  const navigate = useNavigate();
  const { username } = useAuth();
  const [idgen, setIdgen] = useState();
  const [blockFriendList, setBlockFriendList] = useState([]);
  const [unblockedFriend, setUnblockedFriend] = useState([]);
  const [userFriendId, setUserFriendId] = useState();

  const generateId = (name) => {
    const user = [username, name];
    console.log(username);
    const id = user.sort();
    const genId = id[0] + "$" + id[1];
    console.log(genId);
    return genId;
  };

  const postNewFriend = (f) => {
    //  console.log("new"+f);
    Client.post(`/friends`, f);
  };

  const updateFriends = async (data, newData, generatedId) => {
    console.log("updateFriends " + data + " " + newData);

    let friendList = data.friends;
    console.log("alredy" + friendList);

    friendList.push(newData);
    let newFriendList = { friends: friendList };
    console.log("updateFriends " + newFriendList);
    await Client.patch(`/friends/${data.id}`, newFriendList);
  };

  const AddNewFriend = async (name, frin, generatedId) => {
    const firstFriendrequest = {
      username: name,
      friends: [
        {
          friendName: frin,
          friendId: generatedId,
          status: "friend",
        },
      ],
    };
    const newFriend = firstFriendrequest;
    console.log();
    Client.post(`/friends`, newFriend);
  };

  const addFriend = (friend) => {
    console.log(friend);
    // const genId=Idgenerate;
    const f1 = friend.sourceUsername;
    const f2 = friend.targetUsername;

    // check if the friend is alreadt exist for both
    const generatedId = generateId(friend.sourceUsername);

    checkUserFriend(f1, f2, generatedId);
    checkUserFriend(f2, f1, generatedId);
    //AddUser(data,f1);

    // AddNewFriend(f1,f2);
    // AddNewFriend(f2,f1);
  };

  const AddingExistingFriend = async (data, frin, generatedId) => {
    const newdata = {
      friendName: frin,
      friendId: generatedId,
      status: "friend",
    };

    updateFriends(data, newdata);
  };

  const checkUserFriend = async (name, frin, generatedId) => {
    await Client.get(`/friends?username=${name}`).then((res) => {
      let data = res.data;
      console.log(data.length);
      if (data.length !== 0) {
        //  setFriends(data.friends);
        data = data[0];
        console.log("check" + data);
        AddingExistingFriend(data, frin, generatedId);
        console.log("check" + data);
      } else {
        AddNewFriend(name, frin, generatedId);
        console.log(" no friends");
      }
    });
  };

  const acceptFriendRequest = (friend) => {
    console.log(friend);
    const updatedValue = { status: "accepted" };
    Client.patch(`/friendRequest/${friend.id}`, updatedValue);
    setText("Friend request is accepted");

    addFriend(friend);
    setTimeout(() => {
      setText(null);
    }, 2000);
    getUserFriend();
    getReceivedRequest();
  };

  const getReceivedRequest = async () => {
    await Client.get(
      `/friendRequest?targetUsername=${username}&status=sendedRequest`
    ).then((res) => {
      const data = res.data;

      if (data != []) setReceivedRequest(data);
    });
  };

  const checkUserBlocked = () => {
    //  genreList.filter((list) => {
    //   // findIndex return array index if found else return -1 if not found
    //   return blockFriendList.findIndex(genere => genere === list.id) > -1;
    // }).map(list => list.name);
  };

  const blockUserFriend = (friend) => {
    Client.get(
      `/blockFriend?blockedBy=${username}&blockedTo=${friend.friendName}`
    ).then((res) => {
      let data = res.data;
      if (data == [] || data.length == 0) {
        const block = {
          blockedBy: username,
          blockedTo: friend.friendName,
        };
        Client.post(`/blockFriend`, block);

        console.log("blocked them");
        unBlockedFriendList();
      } else {
        console.log("already blocked");
      }
    });

    //navigate(`/message/${id}/${friend.friendName}`)
  };

  const check = async (block, frien) => {
    // unBlockedFriendList();
    // getUserFriend();
    var li = [];
    console.log(blockFriendList);
    li = frien
      ?.filter((list) => {
        // findIndex return array index if found else return -1 if not found
        return block.findIndex((genere) => genere !== list.friendName) > -1;
      })
      ?.map((list) => list);

    if (li.length != 0) {
      var arrayOfValues = await Promise.all(li);
      setUnblockedFriend(arrayOfValues);
      // console.log("sssssssssssss"+arrayOfValues);
    } else {
      setUnblockedFriend(frien);
    }

    console.log("end");
  };

  const getUserFriend = async (block) => {
    await Client.get(`/friends?username=${username}`).then((res) => {
      const data = res.data;
      if (data !== [] && data.length !== 0) console.log(data);
      const friendList = data[0];
      const frien = friendList.friends;
      // setUserFriendId(friendList.id);
      setFriends(frien);
      check(block, frien);
    });
  };

  const unBlockedFriendList = async () => {
    // getUserFriend(username);
    let block = [];
    await Client.get(`/blockFriend?blockedBy=${username}`).then((res) => {
      var data = res.data;
      if (res.data !== [] || data.length !== 0) {
        console.log("details" + data[0]);
        data = data;
        data.map((user) => {
          block.push(user.blockedTo);
        });
        setBlockFriendList(block);
        getUserFriend(block);
      } else {
        setBlockFriendList([]);
        getUserFriend(block);
      }
    });
  };

  const unFriend = async (friendN) => {
    console.log("firend " + friends);
    // console.log(friendN);
    const unfriendName = [friendN];
    const friendL = friends;
    const id = userFriendId;
    const filteredList = friendL
      .filter((list) => {
        return unfriendName.findIndex((f) => f !== list.friendName) > -1;
      })
      .map((list) => list);

    // const updatedVal={friends:filteredList}
    // await Client.patch(`/friends/${id}`,updatedVal)
  };

  const deleteFriendlist = (friendName) => {
    const n1 = username;
    const n2 = friendName;
    deleteFriend(n1, n2);
    deleteFriend(n2, n1);
  };

  const deleteFriend = async (name, unfriendname) => {
    var filteredList, id;
    const unfriend = [unfriendname];
    await Client.get(`/friends?username=${name}`).then((res) => {
      const data = res.data;
      if (data !== [] && data.length !== 0) console.log(data);
      const friendList = data[0];
      const friendName = friendList.friends;
      id = friendList.id;

      filteredList = friendName
        .filter((list) => {
          return unfriend.findIndex((f) => f !== list.friendName) > -1;
        })
        .map((list) => list);
    });
    const updatedVal = { friends: filteredList };
    Client.patch(`/friends/${id}`, updatedVal);
  };

  useEffect(() => {
    getReceivedRequest();
    unBlockedFriendList();
    //getUserFriend();
  }, [setIdgen, setFriends, setReceivedRequest, setBlockFriendList]);

  return (
    <FriendStyle>
      Friends
      <Content>
        {unblockedFriend?.map((friend, index) => (
          <li key={index}>
            {friend.friendName}
            <div>
              <button onClick={() => blockUserFriend(friend)}>Block</button>
              <button onClick={() => deleteFriendlist(friend.friendName)}>
                unFriend
              </button>
            </div>
          </li>
        ))}
      </Content>
      <Content>
        Accept Request
        {receivedRequest?.map((friend) => (
          <li key={friend.id}>
            {friend.sourceUsername}
            <button onClick={() => acceptFriendRequest(friend)}>
              {friend.status == "sendedRequest" ? "Accept" : "Accepted"}
            </button>
          </li>
        ))}
      </Content>
      <p>{text}</p>
    </FriendStyle>
  );
}

export default Friends;
