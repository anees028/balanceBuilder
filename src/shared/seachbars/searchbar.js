import React from "react";
import classes from './searchbar.module.css';
import search from '../../assets/icons/search.svg'

const Searchbar = (props) => {



    return (
        <div className={classes.main} style={props.properties.styles}>
            <input type="text" placeholder={props.properties.placeholder} style={{ backgroundImage:`url(${search})` }} />
        </div>
    )
}

export default Searchbar;
