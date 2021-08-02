import React from "react";
import { useSelector } from "react-redux";
 
import CommentItem from "./CommentItem";
import classes from "./CommentsList.module.css";

const CommentsList = () => {
  const comments = useSelector((state) => state.comments.comments);
  const selectedPost = useSelector((state) => state.posts.selectedPost);

  const filteredComments = comments.filter(
    (comment) => comment.postId === selectedPost
  );

  console.log(filteredComments);
  
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
