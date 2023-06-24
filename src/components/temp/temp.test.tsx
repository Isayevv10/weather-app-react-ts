import { describe, expect, it } from "vitest";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import { render, screen, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import Temp from "./temp";

const initialState = {
  current: {
    feelslike_c: 30,
    temp_c: 30,
    humidity: 30,
    wind_mph: 30,
    cloud: 30,
  },
};
const mockStore = configureStore();
let store = mockStore(initialState);

describe("temp component", () => {
  it("should be pass temp comp", async () => {
    render(
      <Provider store={store}>
        <Temp />
      </Provider>
    );

    expect(screen.getByTestId("temp-component")).toBeInTheDocument();
  });

  it("should pass temp component", async () => {
    render(
      <Provider store={store}>
        <Temp />
      </Provider>
    );

    const weatherApp = screen.getByTestId("weather");
    await waitFor(() => expect(weatherApp.textContent).toHaveValue("Baku"));
  });
});
