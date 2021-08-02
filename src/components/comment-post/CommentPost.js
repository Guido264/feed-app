import React from "react";
import { useSelector, useDispatch } from "react-redux";

import { inputActions } from "../../store/input";
import { commentActions } from "../../store/comment";

import Button from "../UI/Button";
import Input from "../UI/Input";
import Card from "../UI/Card";

import classes from "./CommentPost.module.css";

const CommentPost = () => {
  const name = useSelector((state) => state.input.name);
  const email = useSelector((state) => state.input.email);
  const body = useSelector((state) => state.input.body);
  const selectedPost = useSelector((state) => state.posts.selectedPost);
  const dispatch = useDispatch();

  const nameChangeHandler = (event) => {
    dispatch(inputActions.name(event.target.value));
  };

  const emailChangeHandler = (event) => {
    dispatch(inputActions.email(event.target.value));
  };

  const bodyChangeHandler = (event) => {
    dispatch(inputActions.body(event.target.value));
  };

  const submitHandler = (event) => {
    event.preventDefault();

    dispatch(
      commentActions.newComment({
        postId: selectedPost,
        name: name,
        email: email,
        body: body,
      })
    );
  };

  return (
    <Card className={classes["comment-post"]}>
      <form onSubmit={submitHandler}>
        <Input
          id="name"
          label="Name"
          type="text"
          required
          value={name}
          onChange={nameChangeHandler}
        />
        <Input
          id="email"
          label="E-mail"
          type="email"
          required
          value={email}
          onChange={emailChangeHandler}
        />
        <Input
          id="body"
          label="Comment"
          type="text"
          required
          value={body}
          onChange={bodyChangeHandler}
        />
        <div className={classes.actions}>
          <Button type="submit" className={classes.btn}>
            Leave a comment!
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default CommentPost;
