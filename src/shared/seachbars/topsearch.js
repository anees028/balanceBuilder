import React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

const TopSearch = (props) => {
    return (<Box
        sx={{
          width: 596,
          height: 30,
          maxWidth: '100%',
        }}
      >
        <TextField fullWidth label={props.label} id="fullWidth" />
      </Box>)
}
export default TopSearch;