import React from "react";
import { useSelector } from "react-redux";

import CommentItem from "./CommentItem";
import classes from "./CommentsList.module.css";

const CommentsList = ({ selectedPost }) => {
  const comments = useSelector((state) => state.comments.comments);

  // agregar useMemo
  const filteredComments = comments.filter(
    (comment) => comment.postId === selectedPost
  );
 
  return (
    <ul className={classes["comments-list"]}>
      {filteredComments.map((comment) => (
        <CommentItem 
          key={comment.id}
          name={comment.name}
          body={comment.body}
          email={comment.email}
        />
      ))}
    </ul>
  );
};

export default CommentsList;
