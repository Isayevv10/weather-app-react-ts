import { screen, render, fireEvent } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import Search from "./search";
import { BrowserRouter } from "react-router-dom";

describe("search component", () => {
  render(
    <BrowserRouter>
      <Search />
    </BrowserRouter>
  );
  const input = screen.getByTestId("search-input");

  it("should pass if exist in DOM", () => {
    expect(input).toBeInTheDocument();
  });

  it("should pass if no value entered", () => {
    fireEvent.change(input, { target: { value: "ganja" } });
    expect(input).toHaveValue("ganja");
  });
});
