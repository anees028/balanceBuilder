import React from "react";
import classes from './servicecard.module.css';
import flag from '../assets/icons/flag.svg';
import arrow from '../assets/icons/arrow-right_white.svg';
import loading from '../assets/icons/loading_yellow.svg';
import alert from '../assets/icons/alert_red.svg';
import info from '../assets/icons/info_grey.svg';

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
                    {props.status === 'Pending' &&
                        <div className={classes.statusdetail}>
                            <img src={loading} alt="loading" />
                            <p>{props.status}</p>
                        </div>
                    }
                </div>

            </div>
            <div className={classes.datesection}>
                <img src={alert} alt="alert_red" />
                <p>{props.date}</p>
            </div>
            <div className={classes.button}>
                <a href="/#">
                    <p>{props.button}</p>
                    <img src={arrow} alt="arrow" />
                </a>
            </div>
            <div className={classes.zone}>
                <div className={classes.zonecontainer}>
                    <p className={classes.zonetitle}>{props.zone}</p>
                </div>
                <span className={classes.region}>
                    <img src={flag} alt="flag" />
                    <p >{props.region}</p>
                </span>
                {props.balance!==undefined &&
                    <div className={classes.balance}>
                        <img src={info} alt="info"/>
                        <p>{props.balance}</p>
                    </div>
                }
            </div>
        </div>
    )
}

export default ServiceCard;


