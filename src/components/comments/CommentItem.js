import React from "react";

import classes from "./CommentItem.module.css";

const CommentItem = (props) => {
  return (
    <li className={classes.comment}>
      <h2>{props.name}</h2>
      <h3>{props.body}</h3>
      <p>{props.email}</p>
    </li>
  );
};

export default CommentItem;
