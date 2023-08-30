import React from "react";
import classes from './specificsearch.module.css';
import Searchbar from "../../../shared/seachbars/searchbar";

import flag from '../../../assets/icons/flag.svg';
import bolt from '../../../assets/icons/bolt.svg';
import frame from '../../../assets/icons/frame.svg';


const SpecificSearch = (props) => {
    const searchbarContent = {
        placeholder: "Search for a region or substation",
        styles:{
            width:'545px'
        }
    } 

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
                <Searchbar properties={searchbarContent} onUserInput={props.onUserInput}/>
            </div>
        </div>
    )
}
export default SpecificSearch;