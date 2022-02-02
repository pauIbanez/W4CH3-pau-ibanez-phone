import { render, screen } from "@testing-library/react";
import Info from "./Info";

describe("Given Info component", () => {
  describe("When it recieves the number display as true", () => {
    test("Then it should render a component with the text 'Calling...'", () => {
      const text = "Calling...";
      const display = true;

      render(<Info display={display} />);

      const numberElement = screen.queryByText(text);

      expect(numberElement).toBeInTheDocument();
    });
  });
});
