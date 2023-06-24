import { describe, expect, it } from "vitest";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import Today from "./today";

describe("today component", () => {
  it("should be pass test", () => {
    const initialState = {
      feelslike_c: 30,
      temp_c: 30,
      humidity: 30,
      wind_mph: 30,
      cloud: 30,
    };
    const mockStore = configureStore();
    let store = mockStore(initialState);

    render(
      <Provider store={store}>
        <Today />
      </Provider>
    );

    expect(screen.getByTestId("today-component")).toBeInTheDocument();
    expect(screen.getByText("Today")).toBeInTheDocument();
  });
});
