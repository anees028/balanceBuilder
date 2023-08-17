import React from "react";
import classes from './servicecard.module.css';
import flag from '../assets/icons/flag.svg';
import bolt from '../assets/icons/bolt.svg';
import arrow from '../assets/icons/arrow-right.svg'
import history from '../assets/icons/history.svg'

const ServiceCard = (props) => {


    return (
        <div className={classes.main}>
            <div className={classes.statusHeading}>
                <div className={classes.statuscontent}>
                    <div className={classes.icon}>
                        <img src={props.logo} alt='bolt' />
                    </div>
                    <h2 className={classes.head}>{props.name}</h2>
                </div>
                <div className={classes.statuscontent2}>
                    <p className={classes.status}>{props.name}</p>
                </div>
            </div>
            <div className={classes.date}>{props.date}</div>
            <div className={classes.button}>
                <a href="/#">
                    <p>{props.button}</p>
                    <img src={arrow} alt="arrow" />
                </a>
            </div>
            <div className={classes.zone}>
                <p className={classes.zonetitle}>{props.zone}</p>
                <span className={classes.region}>
                    <img src={flag} alt="flag" />
                    <p >{props.region}</p>
                </span>
            </div>
        </div>
    )
}

export default ServiceCard;


