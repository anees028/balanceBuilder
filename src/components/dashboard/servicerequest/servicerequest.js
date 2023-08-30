import React, { useEffect, useReducer, useState } from "react";
import classes from "./servicerequest.module.css";
import bolt from "../../../assets/icons/bolt.svg";
import frame from "../../../assets/icons/frame.svg";
import history from "../../../assets/icons/history.svg";
import ServiceCard from "../../../shared/servicecard";

const ServiceRequest = (props) => {
  const data = props.objectData;
  // const selectedBadge = props.selectBadge;
  debugger
  // console.log('Data in service : ',data)
  
  const card= data.map((x, index) => (
    <ServiceCard key={index} logo={x.logo} name={x.name} status={x.status} date={x.date} button={x.description} zone={x.zone} region={x.region} balance={x.balance} />
  ))
  const [cardData, setCardData] = useState(card);
    
  useEffect(() => {
    debugger
    console.log('Updated Data : ', data)
    const card2= data.map((x, index) => (
      <ServiceCard key={index} logo={x.logo} name={x.name} status={x.status} date={x.date} button={x.description} zone={x.zone} region={x.region} balance={x.balance} />
    ))
    setCardData(card2)
  },[data])
  
  
  return (
    <div>
      <div className={classes.main}>
        <div className={classes.section}>
          <h1>Your Service Requests</h1>
          <div className={classes.vl}></div>
          <p>Filter: &nbsp;</p>
          <img src={bolt} alt="bolt" />
          &nbsp;
          <img src={frame} alt="frame" />
          &nbsp;
          <p>{data[0].status}</p>
        </div>
        <div className={classes.section2}>
          <button>See History
            <img src={history} alt="history" width='16px' height='16px'/>
          </button>
        </div>
      </div>
      <div style={{ display: "flex", flexDirection: "row", flexWrap:'wrap' }}>
        {cardData}
      </div>
    </div>
  );
};
export default ServiceRequest;
