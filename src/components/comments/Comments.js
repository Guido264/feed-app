import React from "react";
import { useSelector } from "react-redux";

import PostItem from "../posts/PostItem";
import Card from "../UI/Card";
import CommentsList from "./CommentsList";

import classes from './Comments.module.css';

const Comments = () => {
  const posts = useSelector((state) => state.posts.posts);
  const selectedPost = useSelector((state) => state.posts.selectedPost);

  return (
    <Card className={classes["comments"]}>
      <PostItem
        title={posts[selectedPost - 1].title}
        body={posts[selectedPost - 1].body}
      />
      <CommentsList />
    </Card>
  );
};

export default Comments;
