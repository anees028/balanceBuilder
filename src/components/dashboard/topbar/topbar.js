import React from "react";
import classes from './topbar.module.css';
import Tooltip from '@mui/material/Tooltip';

import Searchbar from "../../../shared/seachbars/searchbar";
import hand from '../../../assets/icons/hand.svg';
import question from '../../../assets/icons/question.svg'


const Topbar = (props) => {

    const searchbarContent = {
        placeholder: `Search for assets by name - you’ll be redirected to the diagram view`,
        styles:{
            width:'596px',
            marginLeft:'8px'
        }
    }
    const tooltipcontent = `Search for specific assets ( switches, transformers, lines, telemeters, counters and busbars). Click on the name of the asset from the dropdownlist and you’ll be redirected to the diagram view.`
    return (
        <div className={classes.topInfo}>
            <div>
                <img className={classes.image} src={hand} alt='hand' />&nbsp;
                <p>{props.title}</p>
            </div>
            <div >
                <Tooltip title={tooltipcontent} placement="left-end">
                    <img className={classes.image2} src={question} alt='question' />
                </Tooltip>
                {/* <Tooltip content={tooltipcontent} direction="left">
                    <img className={classes.image2} src={question} alt='question' />
                </Tooltip> */}
                <Searchbar properties={searchbarContent}/>
            </div>

        </div>
    )
}

export default Topbar;