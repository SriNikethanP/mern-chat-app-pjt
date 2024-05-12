import React, { useState } from "react";
import SearchInput from "./SearchInput";
import Conversations from "./Conversations";
import LogoutButton from "./LogoutButton";

const SideBar = () => {
  return (
    <div className="border-r border-slate-500 p-4 flex flex-col min-w-80">
      <h1 className="text-3xl font-semibold text-blue-500">ChatApp</h1>
      {/* <SearchInput /> */}
      <div className="divider px-3"></div>
      <Conversations />
      <LogoutButton />
    </div>
  );
};

export default SideBar;
