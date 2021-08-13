import { render } from "@testing-library/react";
import CommentItem from "./CommentItem";

test("renders content", () => {
  const name = "This is my name";
  const body = "This is the body";
  const email = "test@test.com";

  const component = render(
    <CommentItem name={name} body={body} email={email} />
  );
  component.getByText("This is my name");
  component.getByText("This is the body");
  component.getByText("test@test.com");
});
