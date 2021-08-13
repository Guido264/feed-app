import { render, screen } from "@testing-library/react";
import { createMemoryHistory } from "history";
import { Router } from "react-router-dom";
import Header from "./Header";

test('rendering "POSTS" title', () => {
  const history = createMemoryHistory();
  const route = "/posts";
  history.push(route);
  render(
    <Router history={history}>
      <Header />
    </Router>
  );

  expect(screen.getByText("POSTS"));
});

test('rendering "COMMENTS" title', () => {
  const history = createMemoryHistory();
  const route = "/posts/34";
  history.push(route);
  render(
    <Router history={history}>
      <Header />
    </Router>
  );

  expect(screen.getByText("COMMENTS"));
});

test("landing on a bad page", () => {
  const history = createMemoryHistory();
  history.push("/post/");
  render(
    <Router history={history}>
      <Header />
    </Router>
  );

  expect(screen.queryByRole("heading")).toBeTruthy();
});
