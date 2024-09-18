import { Box, Select, MenuItem } from "@mui/material";
import React, { useState } from "react";

function Dropdown() {
    const [selectedOption, setSelectedOption] = useState("");

    const handleChange = (event) => {
        setSelectedOption(event.target.value);
    };

    return (
        <Box sx={{ marginTop: "5%", width: { xs: "80%", sm: "70%", md: "16%", lg: "42%", xl: "32%" } }}>
            <Select
                value={selectedOption}
                onChange={handleChange}
                displayEmpty
                inputProps={{
                    style: {
                        height: "3rem",
                        width: "100%",
                        backgroundColor: "#6373810F",
                        border: `1px solid ${selectedOption ? "#637381" : "rgba(99,115,129,0.06)"}`,
                        color: "#637381",
                        fontSize: '15px',
                        paddingLeft: '3%',
                    },
                }}
            >
                <MenuItem value="" disabled>
                    Select an option
                </MenuItem>
                <MenuItem value="a">Option A</MenuItem>
                <MenuItem value="b">Option B</MenuItem>
                <MenuItem value="c">Option C</MenuItem>
                <MenuItem value="d">Option D</MenuItem>
            </Select>
        </Box>
    );
}

export default Dropdown;
