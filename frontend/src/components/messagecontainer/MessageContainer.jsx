import React, { useEffect } from "react";
import MessageInput from "./MessageInput";
import Messages from "./messages";
import { IoIosChatbubbles } from "react-icons/io";
import useConversation from "../../zustand/useConversation";
import { useAuthContext } from "../../context/AuthContext";

const MessageContainer = () => {
  const { selectedConversation, setSelectedConversation } = useConversation();

  useEffect(() => {
    return () => setSelectedConversation(null);
  }, [setSelectedConversation]);
  return (
    <div className="md:min-w-[450px] flex flex-col ">
      {!selectedConversation ? (
        <NoChatSelected />
      ) : (
        <>
          <div className="px-4 py-2 mb-2 flex gap-2 justify-start w-full bg-slate-500">
            <span className="text-lg text-gray-200">To:</span>
            <span className=" text-black font-bold text-lg">
              {selectedConversation.fullName}
            </span>
          </div>
          <Messages />
          <MessageInput />
        </>
      )}
    </div>
  );
};

export default MessageContainer;

const NoChatSelected = () => {
  const { authUser } = useAuthContext();
  return (
    <div className="flex items-center justify-center w-full h-full">
      <div className="px-4 text-center sm:text-lg md:text-xl text-white font-bold flex flex-col items-center gap-2">
        <p>Welcome {authUser.fullName}</p>
        <p>Select a chart to start messaging</p>
        <IoIosChatbubbles className="w-10 h-10" />
      </div>
    </div>
  );
};
