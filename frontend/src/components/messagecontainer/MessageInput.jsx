import React from "react";
import { IoIosSend } from "react-icons/io";

const MessageInput = () => {
  return (
    <form className="px-4 my-3">
      <label className="input input-bordered flex items-center gap-2">
        <input type="text" className="grow" placeholder="Send a message" />
        <IoIosSend className="w-6 h-6 text-white cursor-pointer" />
      </label>
    </form>
  );
};

export default MessageInput;
