import { render, screen, fireEvent } from "@testing-library/react";
import Input from "./Input";

const mockedChangeHandler = jest.fn();

describe("AddInput", () => {
  test("renders input element", () => {
    render(
      <Input
        id="name"
        label="Name"
        type="text"
        required
        placeholder="Please add your name"
        value=""
        onChange={mockedChangeHandler}
      />
    );
    const inputElement = screen.getByPlaceholderText(/Please add your name/i);
    expect(inputElement).toBeInTheDocument();
  });

  test("Should be able to type in input", () => {
    render(
      <Input
        placeholder="Please add your name"
        onChange={mockedChangeHandler}
      />
    );
    const inputElement = screen.getByPlaceholderText(/Please add your name/i);
    fireEvent.change(inputElement, { target: { value: "John Doe" } });
    expect(inputElement.value).toBe("John Doe");
  });
});
