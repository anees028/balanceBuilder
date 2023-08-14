import React from "react";
import classes from './dashboard.module.css';
import hand from '../../assets/icons/hand.svg';
import ServiceCard from "../../shared/servicecard";
import bolt from '../../assets/icons/bolt.svg'

const Dashboard = (props) => {

    const serviceRequest={
        bolt: bolt,
        name: 'Substation name',
        status: 'Pending',
        date: 'Change detected - 08/06/22',
        description: 'Go to substation to review change ->',
        zone: 'Zone S',
        region: 'Region XYZ'
    }
    

    return (
        <div className={classes.container}>
            <div className={classes.topInfo}>
                <div>
                    <img src={hand} alt='hand' />&nbsp;
                    <p>Hello, Ben Van Loovere</p> 
                </div>
                {/* <div>
                    <TextField id="outlined-basic" label="Outlined" variant="outlined"/>
                </div> */}
            </div>
            <hr></hr>
            <div className={classes.downInfo} >
                <h3>Quick Select</h3>
                <p>By default you’ll only get result from your zone - turn it off and you’ll see all zones</p>
                <div style={{display:'flex', flexDirection:'row'}}>
                    <p>OnPff button</p>
                    <p>Search only my zones & regions</p>
                </div>
                <p className={classes.p2}>Select a zone</p>
            </div>
            <ServiceCard objectData={serviceRequest} />
        </div>
    )

}
export default Dashboard;