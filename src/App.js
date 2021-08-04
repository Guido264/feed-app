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
  return <h1>LOADING....</h1>;
};

function App() {
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
          <Route path="*">
            <h1>Page not Found</h1>
          </Route>
        </Switch>
      </Suspense>
    </div>
  );
}

export default App;
