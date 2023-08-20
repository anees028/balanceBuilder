import React from "react";
import classes from './resultCard.module.css'
import arrow from '../assets/icons/arrow-right_black.svg'

const ResultCard = (props) => {

    return (
        <div className={classes.main}>
            <div className={classes.upperpart}>
                <div className={classes.section1}>
                    <img src={props.logo} alt="bolt" />
                    <p>{props.name}</p>
                </div>
                <div className={classes.section2}>
                    <a href="/#">
                        <p>{props.button}</p>
                        <img src={arrow} alt="arrow" />
                    </a>
                </div>
            </div>
            <div className={classes.zone}>
                <p style={props.zoneStyles} >{props.zone}</p>
                {props.region !== undefined && <>
                    <span className={classes.region}>
                        <img src={props.regionFlag} alt="flag" />
                        <p >{props.region}</p>
                    </span>
                </>}

            </div>
        </div>
    )
}

export default ResultCard;