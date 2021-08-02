import React from "react";
import { useSelector } from "react-redux";

const Header = () => {
  const selectedPost = useSelector((state) => state.posts.selectedPost);

  return (
    <h1 style={{ textAlign: "center" }}>
      {selectedPost ? "COMMENTS" : "POSTS"}
    </h1>
  );
};

export default Header;
