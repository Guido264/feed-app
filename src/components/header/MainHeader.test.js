import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import MainHeader from "./MainHeader";

const MockMainHeader = () => {
  return (
    <BrowserRouter>
      <MainHeader />
    </BrowserRouter>
  );
};

test('should render "Back to Posts" button', () => {
  render(<MockMainHeader />);

  const buttonElement = screen.getByText("Back to Posts");
  expect(buttonElement).toBeInTheDocument();
});
