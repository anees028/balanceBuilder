import React from "react";
import classes from './specificsearch.module.css';

import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

import flag from '../../../assets/icons/flag.svg';
import bolt from '../../../assets/icons/bolt.svg';
import frame from '../../../assets/icons/frame.svg';
import search from '../../../assets/icons/search.svg';

const SpecificSearch = () => {

    return (
        <div className={classes.main}>
            <div >
                <p>Search for a specific</p>
                <img src={flag} alt="flag" />
                <p>region,</p>
                <img src={bolt} alt="bolt" /> 
                <p>substation or</p>
                <img src={frame} alt="frame" />
                <p>balance</p>
            </div>
            <div className={classes.searchbar}>
                <img src={search} alt='search' />
                <Box
                    sx={{
                        width: 530,
                        maxWidth: '100%',
                    }}
                >
                    <TextField fullWidth label="Search for a region or substation" id="fullWidth" />
                </Box>
            </div>
        </div>
    )
}
export default SpecificSearch;