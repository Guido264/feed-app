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
    return (
      <p className="w-full z-10 text-8xl bg-gray-100 dark:bg-gray-800 dark:text-purple-300 text-purple-600 p-5">
        {error}
      </p>
    );
  }

  if (!post) {
    return (
      <h1 className="w-full z-10 text-8xl bg-gray-100 dark:bg-gray-800 dark:text-purple-300 text-purple-600 p-5">
        No posts found
      </h1>
    );
  }

  const { title, body } = post;

  return (
    <Card className={`${classes["comments"]} dark:bg-gray-800`}>
      <PostItem title={title} body={body} />
      <CommentsList selectedPost={selectedPost} />
      <CommentPost selectedPost={selectedPost} />
    </Card>
  );
};

export default Comments;
