import React from "react";
import SideBar from "../../components/sidebar/SideBar";
import MessageContainer from "../../components/messagecontainer/MessageContainer";

const Home = () => {
  return (
    <div className="flex sm:h-[450px] md:h-[550px] overflow-hidden bg-purple-800 rounded-md bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-10">
      <SideBar />
      <MessageContainer />
    </div>
  );
};

export default Home;
