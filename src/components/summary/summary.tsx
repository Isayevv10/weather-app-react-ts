import { FC } from "react";
import { useAppSelector } from "../../redux/store/store";
import Box from "@mui/material/Box";
import temp from "../../assets/temp.png";
import rain from "../../assets/rain.png";
import wind from "../../assets/wind.png";
import sun from "../../assets/sun.png";
import drop from "../../assets/drop.png";
import { month, d } from "../../constants/months";

const Summary: FC = () => {
    const showData = useAppSelector((state) => state.getDatas);
    return (
        <Box
            sx={{
                width: 368,
                height: 200,
                backgroundColor: "#2359B0",
                color: "#fff",
                margin: "auto",
                borderBottomLeftRadius: "8px",
                borderBottomRightRadius: "8px",
                padding: "0 16px",
            }}
        >
            <Box
                sx={{
                    bgcolor: "rgba(255, 255, 255, 0.1)",
                    borderRadius: "8px",
                    padding: "8px",
                }}
            >
                <Box
                    component="div"
                    sx={{
                        display: "flex",
                        justifyContent: "space-between",
                    }}
                >
                    <Box component="div">Summary</Box>
                    <Box component="div">
                        {month}, {d.getDate()}
                    </Box>
                </Box>

                <Box
                    sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        textAlign: "center",
                        marginTop: "12px",
                        fontSize: "15px",
                    }}
                >
                    <Box>
                        <img src={temp} alt="temp" />
                        <Box>Min/Max</Box>
                        <Box>
                            {showData?.current?.feelslike_c}/ {showData?.current?.temp_c}
                        </Box>
                    </Box>
                    <Box>
                        <img src={rain} alt="temp" />
                        <Box>Cloud</Box>
                        <Box>{showData?.current?.cloud}</Box>
                    </Box>
                    <Box>
                        <img src={wind} alt="temp" />
                        <Box>Haze</Box>
                        <Box>{showData?.current?.wind_mph}</Box>
                    </Box>
                </Box>

                <Box
                    sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        marginTop: "10px",
                        textAlign: "center",
                    }}
                >
                    <Box>
                        <img src={sun} alt="sun" />
                        <Box>Sun raise</Box>
                        <Box>{showData?.forecast?.forecastday?.[0].astro.sunrise}</Box>
                    </Box>
                    <Box>
                        <img src={sun} alt="sun" />
                        <Box>Sun set</Box>
                        <Box>{showData?.forecast?.forecastday?.[0].astro.sunset}</Box>
                    </Box>

                    <Box>
                        <img src={drop} alt="sun" />
                        <Box>Drop</Box>
                        <Box>
                            {showData?.forecast?.forecastday?.[0].day.daily_chance_of_rain}%
                        </Box>
                    </Box>
                </Box>
            </Box>
        </Box>
    );
};

export default Summary;
