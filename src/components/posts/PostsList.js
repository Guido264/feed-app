import React from "react";
import { useSelector } from "react-redux";

import PostItem from "./PostItem";
import classes from "./PostsList.module.css";

const PostsList = () => {
  const posts = useSelector((state) => state.posts.posts);

  return (
    <ul className={classes["posts-list"]}>
      {posts.map((post) => (
        <PostItem
          key={post.id}
          id={post.id}
          title={post.title}
          body={post.body}
        />
      ))}
    </ul>
  );
};

export default PostsList;
