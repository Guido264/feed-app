import React from "react";
import { useSelector } from "react-redux";

import PostsList from "./PostsList";

const Posts = () => {
  const posts = useSelector((state) => state.posts.posts);
  // const loading = useSelector((state) => state.loading.loading);
  const error = useSelector((state) => state.error.error);
  let content = <p>No posts found.</p>;

  if (posts.length > 0) {
    content = <PostsList />;
  }

  if (error) {
    content = <p>{error}</p>;
  }

  // if (loading) {
  //   content = <p>Loading...</p>;
  // }

  return <section>{content}</section>;
};

export default Posts;
