import React from "react";
import classes from './servicecard.module.css';

const ServiceCard = (props) => {

    const data = props.objectData;

    return(
        <>
            <div>
                <span>
                    <p className={classes.heading}>Your Service Request</p>
                </span>
            </div>
            <div className={classes.main}>
                <div className={classes.statusHeading}>
                    <img className={classes.icon} src={data.bolt} alt='bolt' />
                    <h2 className={classes.head}>{data.name}</h2>
                    <p className={classes.status}>{data.status}</p>
                </div>
                <div className={classes.date}>{data.date}</div>
                <div className={classes.description} >
                    {data.description}
                </div>
                <div style={{display:'flex', flexDirection:'row'}}>
                    <p className={classes.zone}>{data.zone}</p>
                    <p className={classes.region}>{data.region}</p>
                </div>
            </div>
        </>
    )
}

export default ServiceCard;


