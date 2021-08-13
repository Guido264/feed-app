import React from "react";

import classes from "./CommentItem.module.css";

const CommentItem = (props) => {
  return (
    <li className={`${classes.comment} dark:bg-gray-700`}>
      <h2>{props.name}</h2>
      <h3>{props.body}</h3>
      <p className="dark:text-white">{props.email}</p>
    </li>
  );
};

export default CommentItem;
