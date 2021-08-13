import React from "react";
import { useSelector, useDispatch } from "react-redux";

import { inputActions } from "../../store/input";
import { commentActions } from "../../store/comment";

import Button from "../UI/Button";
import Input from "../UI/Input";
import Card from "../UI/Card";

import classes from "./CommentPost.module.css";

const CommentPost = ({ selectedPost }) => {
  const name = useSelector((state) => state.input.name);
  const email = useSelector((state) => state.input.email);
  const body = useSelector((state) => state.input.body);
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
      commentActions.newComments({
        postId: selectedPost,
        name: name,
        email: email,
        body: body,
      })
    );
    dispatch(inputActions.resetInput());
  };

  return (
    <Card className={`${classes["comment-post"]} dark:bg-gray-600`}>
      <form onSubmit={submitHandler}>
        <Input
          id="name"
          label="Name"
          type="text"
          required
          placeholder="Please add your name"
          value={name}
          onChange={nameChangeHandler}
        />
        <Input
          id="email"
          label="E-mail"
          type="email"
          required
          placeholder="Please add your email"
          value={email}
          onChange={emailChangeHandler}
        />
        <Input
          id="body"
          label="Comment"
          type="text"
          required
          placeholder="Please add a comment"
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
