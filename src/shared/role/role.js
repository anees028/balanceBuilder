import React, {useState} from "react";
import classes from "./role.module.css";
import Box from "@mui/material/Box";
// import InputLabel from '@mui/material/InputLabel';
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

import dropdownArrow from '../../assets/icons/dropdown_arrow.svg';

const Role = (props) => {
  const arr = [
    "Bianka Tufekovic (admin)",
    "User management",
    "Migration",
    "Service requests & validation",
    "Logout",
  ];
  const [menu, setMenu] = useState(arr[0]);

  const handleChange = (event) => {
    setMenu(event.target.value);
  };

  return (
    <div className={classes.main}>
      <Box sx={{ minWidth: 270 }}>
        <FormControl fullWidth>
          <Select style={classes.select}
            iconcomponent = {dropdownArrow}
            value={menu}
            onChange={handleChange}
          >
            {arr.map((x, index) => (
              <MenuItem  value={x} key={index}>{x}</MenuItem>
            ))}
          </Select>
        </FormControl>
      </Box>
    </div>
  );
};

export default Role;
