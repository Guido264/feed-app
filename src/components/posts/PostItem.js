import React from "react";
import { useHistory } from "react-router";

import classes from "./PostItem.module.css";

const PostItem = ({ id, title, body }) => {
  const history = useHistory();

  const onSelect = () => {
    if (id) history.push(`/posts/${id}`);
  };

  return (
    <li className={classes.post} onClick={onSelect}>
      <h2>{title}</h2>
      <p>{body}</p>
    </li>
  );
};

export default PostItem;
