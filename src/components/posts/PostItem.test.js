import { render } from "@testing-library/react";
import PostItem from "./PostItem";

test("renders content", () => {
  const title = "This is the title";
  const body = "This is the body";

  const component = render(
    <PostItem title={title} body={body} />
  );
  component.getByText("This is the title");
  component.getByText("This is the body");
});
