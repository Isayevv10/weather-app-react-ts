import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { describe, expect, it, vi } from "vitest";
import Summary from "./summary";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import * as queries from "../../redux/reducer/queryReducer";

const initialState = {
  current: {
    feelslike_c: 30,
    temp_c: 30,
    humidity: 30,
    wind_mph: 30,
    cloud: 30,
  },
  location: {
    name: "salam",
    localtime: "salam",
    localtime_epoch: 30,
  },
  forecast: {
    forecastday: [
      {
        astro: {
          sunrise: "salam",
          sunset: "salam",
        },
        date: "salam",
        day: {
          avgtemp_c: 30,
          daily_chance_of_rain: 30,
          condition: {
            icon: "salam",
          },
        },
        hour: [
          {
            time: "salam",
          },
        ],
      },
    ],
  },
};
const mockStore = configureStore();
let store = mockStore(initialState);

describe("summary component", () => {
  it("should pass summary test", () => {
    // const spy = vi.spyOn(queries, "getWeather").mockImplementation(() => {
    //   return initialState;
    // });

    render(
      <Provider store={store}>
        <Summary />
      </Provider>
    );

    expect(screen.getByTestId("summary-component")).toBeInTheDocument();
  });
});
