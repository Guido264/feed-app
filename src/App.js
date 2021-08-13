import React, { useEffect, Suspense, lazy } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import { useDispatch } from "react-redux";

import { postActions } from "./store/post";
import { commentActions } from "./store/comment";

import useHttp from "./hooks/use-http";
import "./App.css";

const Header = lazy(() => import("./components/header/Header"));
const Posts = lazy(() => import("./components/posts/Posts"));
const Comments = lazy(() => import("./components/comments/Comments"));

const Loading = () => {
  return (
    <h1 className="text-purple-600 dark:text-purple-300 text-4xl font-semibold mt-20">
      LOADING....
    </h1>
  );
};

function App() {
  const dispatch = useDispatch();
  const { sendRequests: fetchPosts } = useHttp();
  const { sendRequests: fetchComments } = useHttp();

  useEffect(() => {
    const getPosts = (postsFetched) => {
      const localPosts = JSON.parse(localStorage.getItem("localState")).posts
        .posts;
      const posts = localPosts.length > 0 ? localPosts : postsFetched;
      dispatch(postActions.posts(posts));
    };
    fetchPosts({ url: "https://jsonplaceholder.typicode.com/posts" }, getPosts);
  }, [fetchPosts, dispatch]);

  useEffect(() => {
    const getComments = (commentsFetched) => {
      const localComments = JSON.parse(localStorage.getItem("localState"))
        .comments.comments;
      const comments =
        localComments.length > 0 ? localComments : commentsFetched;
      dispatch(commentActions.comments(comments));
    };
    fetchComments(
      { url: "https://jsonplaceholder.typicode.com/comments" },
      getComments
    );
  }, [fetchComments, dispatch]);

  return (
    <div className="flex items-center justify-center dark:bg-black transition duration-500 z-0">
      <Suspense fallback={<Loading />}>
        <Header />
        <Switch>
          <Route path="/posts/:postId">
            <Comments />
          </Route>
          <Route path="/posts">
            <Posts />
          </Route>
          <Route path="/" exact>
            <Redirect to="/posts" />
          </Route>
          <Route path="/post" exact>
            <Redirect to="/posts" />
          </Route>
          <Route path="*">
            <h1 className="w-full z-10 text-8xl bg-gray-100 dark:bg-gray-800 dark:text-purple-300 text-purple-600 p-5">
              Not found
            </h1>
          </Route>
        </Switch>
      </Suspense>
    </div>
  );
}

export default App;
