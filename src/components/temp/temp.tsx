import { FC } from "react";
import Box from "@mui/material/Box";
import forecast from "../../assets/forecast.png";
import { useAppSelector } from "../../redux/store/store";
import drop from "../../assets/drop.png";
import rain from "../../assets/rain.png";
import wind from "../../assets/wind.png";

const Temp: FC = () => {
  const showData = useAppSelector((state) => state.getDatas);

  return (
    <Box
      sx={{
        width: 400,
        height: 300,
        backgroundColor: "#2359B0",
        color: "#fff",
        textAlign: "center",
        margin: "auto",
        borderTopLeftRadius: "8px",
        borderTopRightRadius: "8px",
      }}
    >
      <img src={forecast} alt="forecast" width="120px" height="120px" />
      <Box sx={{ fontSize: "45px" }}>
        {Math.round(showData?.current?.feelslike_c)}°
      </Box>
      <Box sx={{ marginTop: "8px", fontSize: "25px" }}>
        {showData?.location?.name}
      </Box>
      <Box sx={{ margin: "8px 0" }}>
        <span>H : {showData?.current?.feelslike_c}°</span>{" "}
        <span>L : {showData?.current?.temp_c}°</span>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          borderRadius: "24px",
          width: 296,
          margin: "auto",
          bgcolor: "rgba(255, 255, 255, 0.1)",
        }}
      >
        <Box component="span" sx={{ display: "flex" }}>
          <img src={drop} alt="drop" />
          <div>{showData?.current?.cloud}%</div>
        </Box>
        <Box
          component="span"
          sx={{ display: "flex", marginLeft: "7px", marginRight: "7px" }}
        >
          <img src={rain} alt="" />
          <div>{showData?.current?.humidity}%</div>
        </Box>
        <Box component="span" sx={{ display: "flex" }}>
          <img src={wind} alt="" />
          <div>{showData?.current?.wind_mph} km/h</div>
        </Box>
      </Box>
    </Box>
  );
};

export default Temp;
