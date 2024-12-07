import React, { useEffect, useRef } from "react";
import Message from "./Message";
import useGetMessages from "../../hooks/useGetMessages";
import useListenMessages from "../../hooks/useListenMessages";
import io from "socket.io-client";

const socket = io("https://mern-chat-app-pjt.onrender.com");

const Messages = () => {
  const { loading, messages, setMessages } = useGetMessages(); // Ensure `useGetMessages` supports updating messages dynamically
  useListenMessages();
  const lastMessageRef = useRef();

  useEffect(() => {
    // Listen for incoming messages
    socket.on("receiveMessage", (newMessage) => {
      setMessages((prevMessages) => [...prevMessages, newMessage]);
    });

    return () => {
      // Clean up listener on component unmount
      socket.off("receiveMessage");
    };
  }, [setMessages]);

  useEffect(() => {
    // Scroll to the latest message whenever the `messages` array updates
    setTimeout(() => {
      lastMessageRef.current?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  }, [messages]);

  return (
    <div className="px-4 flex-1 overflow-auto">
      {!loading &&
        messages.length > 0 &&
        messages.map((message, index) => {
          const isLastMessage = index === messages.length - 1;
          return (
            <div key={message._id} ref={isLastMessage ? lastMessageRef : null}>
              <Message message={message} />
            </div>
          );
        })}
      {!loading && messages.length === 0 && (
        <p className="text-center">Send a message to start the conversation</p>
      )}
    </div>
  );
};

export default Messages;
