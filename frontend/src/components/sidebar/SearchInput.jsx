import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import useGetConversations from "../../hooks/useGetConversations";
import toast from "react-hot-toast";

const SearchInput = () => {
  const { conversations, search, setSearch, setConversations } =
    useGetConversations();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!search) return;
    const filteredConversations = conversations.filter((c) =>
      c.fullName
        .toLowerCase()
        .replace(" ", "")
        .includes(search.toLowerCase().replace(" ", ""))
    );
    if (filteredConversations) {
      console.log(filteredConversations);
      setConversations(filteredConversations);
      setSearch("");
    } else {
      toast.error("No such user found!");
    }
  };
  return (
    <form onSubmit={handleSubmit} className="flex items-center gap-2">
      <input
        type="text"
        placeholder="Search..."
        value={search}
        onChange={(e) => {
          setSearch(e.target.value);
        }}
        className="input input-bordered rounded-full w-full max-w-xs"
      />
      <button type="submit" className="btn btn-circle bg-sky-500 text-white">
        <FaSearch />
      </button>
    </form>
  );
};

export default SearchInput;
