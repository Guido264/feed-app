import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { postActions } from "./store/post";
import { commentActions } from "./store/comment";

import useHttp from "./hooks/use-http";

import Header from "./components/header/Header";
import Posts from "./components/posts/Posts";
import Comments from "./components/comments/Comments";

import "./App.css";
import CommentPost from "./components/comment-post/CommentPost";

function App() {
  const selectedPost = useSelector((state) => state.posts.selectedPost);
  const dispatch = useDispatch();
  const { sendRequests: fetchPosts } = useHttp();
  const { sendRequests: fetchComments } = useHttp();

  useEffect(() => {
    const getPosts = (postsFetched) => {
      dispatch(postActions.posts(postsFetched));
    };
    fetchPosts({ url: "https://jsonplaceholder.typicode.com/posts" }, getPosts);
  }, [fetchPosts, dispatch]);

  useEffect(() => {
    const getComments = (commentsFetched) => {
      dispatch(commentActions.comments(commentsFetched));
    };
    fetchComments(
      { url: "https://jsonplaceholder.typicode.com/comments" },
      getComments
    );
  }, [fetchComments, dispatch]);

  return (
    <div>
      <Header />
      {!selectedPost && <Posts />}
      {selectedPost && (
        <>
          <Comments />
          <CommentPost />
        </>
      )}
    </div>
  );
}

export default App;
