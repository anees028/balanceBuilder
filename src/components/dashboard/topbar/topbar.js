import React from "react";
import classes from './topbar.module.css'
import TopSearch from "../../../shared/seachbars/topsearch";
import hand from '../../../assets/icons/hand.svg';
import question from '../../../assets/icons/question.svg'

const Topbar = (props) => {

    const inputLabel = 'Search for assets by name - you’ll be redirected to the diagram view'

    return (
        <div className={classes.topInfo}>
            <div>
                <img className={classes.image} src={hand} alt='hand'/>&nbsp;
                <p>{props.title}</p>
            </div>
            <div >
                <img className={classes.image2} src={question} alt='question'/>
                <TopSearch label={inputLabel}/>
            </div>

        </div>

    )
}

export default Topbar;