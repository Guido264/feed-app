import React from "react";
import { useSelector } from "react-redux";

import PostsList from "./PostsList";

const Posts = () => {
  const posts = useSelector((state) => state.posts.posts);
  const error = useSelector((state) => state.error.error);
  let content = <p>No posts found.</p>;

  if (posts.length > 0) {
    content = <PostsList />;
  }

  if (error) {
    content = (
      <p className="w-full z-10 text-8xl bg-gray-100 dark:bg-gray-800 dark:text-purple-300 text-purple-600 p-5">
        {error}
      </p>
    );
  }

  return <section>{content}</section>;
};

export default Posts;
