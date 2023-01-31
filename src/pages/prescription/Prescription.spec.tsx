import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import renderer from "react-test-renderer";
import Prescription from "./Prescription";

describe("prescription form", () => {
  it("should display required error when value is empty", async () => {
    render(<Prescription />);
    fireEvent.submit(
      screen.getByRole("button", { name: "Confirm your order" })
    );
    // fireEvent.submit(screen.getByText("Confirm your order"));
    expect(await screen.findAllByTestId("error-message")).toHaveLength(5);
  });

  it("renders correctly", () => {
    const tree = renderer.create(<Prescription />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
