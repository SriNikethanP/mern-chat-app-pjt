// import React, { useEffect } from "react";
// import { useSocketContext } from "../context/SocketContext";
// import useConversation from "../zustand/useConversation";

// const useListenMessages = () => {
//   const { socket } = useSocketContext();
//   const { messages, setMessages, selectedConversation } = useConversation();

//   useEffect(() => {
//     socket?.on("newMessage", (newMessage) => {
//       // add the newMessage to the messages array only if it is sent by the selectedConversation user id
//       if (selectedConversation?._id === newMessage.senderId) {
//         setMessages([...messages, newMessage]);
//       }
//     });

//     return () => socket?.off("newMessage");
//   }, [socket, setMessages, messages]);
// };

// export default useListenMessages;

import { useEffect } from "react";

import { useSocketContext } from "../context/SocketContext";
import useConversation from "../zustand/useConversation";

const useListenMessages = () => {
  const { socket } = useSocketContext();
  const { messages, setMessages } = useConversation();

  useEffect(() => {
    socket?.on("newMessage", (newMessage) => {
      setMessages([...messages, newMessage]);
    });

    return () => socket?.off("newMessage");
  }, [socket, setMessages, messages]);
};
export default useListenMessages;
