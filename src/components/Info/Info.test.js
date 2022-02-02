import { render, screen } from "@testing-library/react";
import Info from "./Info";

describe("Given Info component", () => {
  describe("When it recieves display as true", () => {
    test("Then it should render a component with the text 'Calling...'", () => {
      const text = "Calling...";
      const display = true;

      render(<Info display={display} />);

      const infoElement = screen.queryByText(text);

      expect(infoElement).toBeInTheDocument();
    });
  });

  describe("When it recieves display as false and deactivatedClass as 'off'", () => {
    test("Then it should render a component with className'message off'", () => {
      const deactivatedClass = "off";
      const text = "Calling...";
      const display = false;
      const expectedClassName = "message off";

      render(<Info display={display} deactivatedClass={deactivatedClass} />);

      const infoElement = screen.queryByText(text);

      expect(infoElement.className).toBe(expectedClassName);
    });
  });
});
