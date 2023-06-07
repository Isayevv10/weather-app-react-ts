import { FC, useState, ChangeEvent } from "react";
import { useSearchParams } from "react-router-dom";
import Box from "@mui/material/Box";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import SearchIcon from "@mui/icons-material/Search";
import TextField from "@mui/material/TextField";

const Search: FC = () => {
    const [inputValue, setInputValue] = useState<string | null>();
    const [searchSelectParams, setSearchSelectParams] = useSearchParams();

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        setInputValue(event.target.value);

        if (inputValue?.trim()) {
            searchSelectParams.set("q", event.target.value);
            setSearchSelectParams(searchSelectParams);
        }
        if (searchSelectParams.get("q") == "") {
            searchSelectParams.delete("q");
            setSearchSelectParams(searchSelectParams);
        }
    };

    return (
        <Box
            sx={{
                display: "flex",
                justifyContent: "center",
                marginBottom: "3px",
            }}
        >
            <FormControl variant="standard" sx={{ width: 400, borderRadius: "24px" }}>
                <TextField
                    placeholder="Search city, country or location"
                    onChange={handleChange}
                    id="outlined-size-small"
                    size="small"
                    type="search"
                    sx={{ borderRadius: "24px" }}
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                                <SearchIcon />
                            </InputAdornment>
                        ),
                    }}
                />
            </FormControl>
        </Box>
    );
};

export default Search;
