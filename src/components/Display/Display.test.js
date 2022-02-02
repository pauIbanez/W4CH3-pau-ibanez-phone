import { render, screen } from "@testing-library/react";
import Display from "./Display";

describe("Given Display component", () => {
  describe("When it recieves the number '123456789'", () => {
    test("Then it should render a component with the text '123456789'", () => {
      const number = 123456789;

      render(<Display number={number} />);

      const numberElement = screen.queryByText(number);

      expect(numberElement).toBeInTheDocument();
    });
  });
});
