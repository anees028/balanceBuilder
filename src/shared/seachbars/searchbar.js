import React, { useState } from "react";
import classes from './searchbar.module.css';
import search from '../../assets/icons/search.svg'

const Searchbar = (props) => {

    const [userInput, setUserInput] = useState('')

    const handleInputChange= (event) => {
        //console.log(event.target.value);
        setUserInput(event.target.value)
        props.onUserInput(userInput);
    }
    
    // const userEntered = (event) => {
    //     console.log(event.target.value)
    // }

    return (
        <div className={classes.main} style={props.properties.styles}>
            <form  style={{width:'100%'}}>
                <input type="text" placeholder={props.properties.placeholder} style={{ backgroundImage:`url(${search})` }} value={userInput} onChange={handleInputChange}  />
            </form>
        </div>
    )
}

export default Searchbar;
