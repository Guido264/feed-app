import React from "react";
import { useDispatch } from "react-redux";

import { postActions } from "../../store/post";
import classes from "./PostItem.module.css";

const PostItem = (props) => {
  const dispatch = useDispatch();

  const onSelect = () => {
    dispatch(postActions.selectedPost(props.id));
  };

  return (
    <li className={classes.post} onClick={onSelect}>
      <h2>{props.title}</h2>
      <p>{props.body}</p>
    </li>
  );
};

export default PostItem;
