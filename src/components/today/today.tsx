import { FC } from "react";
import { useAppSelector } from "../../redux/store/store";
import Box from "@mui/material/Box";
import { month, d } from "../../constants/months";

const Today: FC = () => {
  const showData = useAppSelector((state) => state.getDatas);

  return (
    <Box
      sx={{
        width: 400,
        height: 180,
        backgroundColor: "#2359B0",
        color: "#fff",
        margin: "auto",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          marginBottom: "12px",
          padding: "0 20px",
        }}
      >
        <Box>Today</Box>
        <Box>
          {month}, {d.getDate()}
        </Box>
      </Box>

      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          textAlign: "center",
        }}
      >
        {showData?.forecast?.forecastday?.map((item) => {
          return (
            <Box key={item.date}>
              <Box margin={"4px"}>{item?.date}</Box>
              <Box>
                <img
                  src={item?.day?.condition?.icon}
                  width={"30px"}
                  height={"30px"}
                />
              </Box>
              <Box>{Math.round(item?.day?.avgtemp_c)}°</Box>
            </Box>
          );
        })}
      </Box>
    </Box>
  );
};

export default Today;
