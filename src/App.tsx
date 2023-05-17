import { FC, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import Temp from "./components/temp/temp";
import Search from "./components/search/search";
import Today from "./components/today/today";
import Summary from "./components/summary/summary";
import { useAppDispatch } from "./redux/store/store";
import { getWeather } from "./redux/reducer/queryReducer";
import useDebounce from "./hooks/useDebounce";
import axios from "axios";

const App: FC = () => {
  const dispatch = useAppDispatch();
  let [searchParams] = useSearchParams();
  const debouncedValue = useDebounce<string | null>(
    searchParams.get("q"),
    1200
  );

  const fetchData = async () => {
    if (searchParams.has("q")) {
      let { data } = await axios.get(
        `http://api.weatherapi.com/v1/forecast.json?key=${
          import.meta.env.VITE_SOME_KEY
        }&q=${searchParams.get("q")}&days=7`
      );
      dispatch(getWeather(data));
    } else {
      let { data } = await axios.get(
        `http://api.weatherapi.com/v1/forecast.json?key=${
          import.meta.env.VITE_SOME_KEY
        }&q=Baku&days=7`
      );
      dispatch(getWeather(data));
    }
  };

  useEffect(() => {
    fetchData();
  }, [debouncedValue]);

  return (
    <>
      <Search />
      <Temp />
      <Today />
      <Summary />
    </>
  );
};
export default App;
