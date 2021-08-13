import React from "react";
import { useHistory } from "react-router";

import classes from "./PostItem.module.css";

const PostItem = ({ id, title, body }) => {
  const history = useHistory();

  const onSelect = () => {
    if (id) history.push(`/posts/${id}`);
  };

  return (
    <li className={`${classes.post} dark:bg-gray-600`} onClick={onSelect}>
      <h2 className="dark:text-purple-300">{title}</h2>
      <p className="dark:text-gray-300">{body}</p>
    </li>
  );
};

export default PostItem;
