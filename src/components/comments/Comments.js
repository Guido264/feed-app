import React, { useMemo } from "react";
import { useParams } from "react-router";
import { useSelector } from "react-redux";

import Card from "../UI/Card";
import PostItem from "../posts/PostItem";
import CommentsList from "./CommentsList";
import CommentPost from "../comment-post/CommentPost";

import classes from "./Comments.module.css";

const Comments = () => {
  const { postId } = useParams();
  const error = useSelector((state) => state.error.error);
  const posts = useSelector((state) => state.posts.posts);
  const selectedPost = Number(postId);
  const post = useMemo(
    () => posts.find((post) => post.id === selectedPost),
    [posts, selectedPost]
  );

  if (error) {
    return <p>{error}</p>;
  }

  if (!post) {
    return <h1>Post Not found</h1>;
  }

  const { title, body } = post;

  return (
    <Card className={classes["comments"]}>
      <PostItem title={title} body={body} />
      <CommentsList selectedPost={selectedPost} />
      <CommentPost selectedPost={selectedPost} />
    </Card>
  );
};

export default Comments;
