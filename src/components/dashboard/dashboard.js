import React from "react";
import classes from './dashboard.module.css';


import bolt from '../../assets/icons/bolt.svg'
import frame from '../../assets/icons/frame.svg'
import flag from '../../assets/icons/flag.svg'
import Topbar from "./topbar/topbar";
import QuickSelect from "./quickselect/quickselect";
import ServiceRequest from "./servicerequest/servicerequest";
import SpecificSearch from "./specificsearch/specificsearch";
import SearchResult from "./searchresults/searchresult";

const Dashboard = (props) => {

    const toptitle = 'Hello, Ben Van Loovere';

    const serviceRequest = [
        {
            logo: bolt,
            name: 'Substation name',
            status: 'Pending',
            date: 'Change detected - 08/06/22',
            description: 'Go to substation to review change',
            zone: 'Zone S',
            region: 'Region XYZ'
        }, {
            logo: frame,
            name: 'Balance name',
            status: 'Pending',
            date: 'Error detected - 08/06/22',
            description: 'Go to substation to review change',
            zone: 'Zone S',
            region: 'Region XYZ'
        },
        {
            logo: frame,
            name: 'NA-VI4',
            status: 'Cancel',
            date: 'Error detected - 08/06/22',
            description: 'Go to substation to review change',
            zone: 'Zone S',
            region: 'Region XYZ'
        }, {
            logo: bolt,
            name: 'NA-VI5',
            status: 'Pending',
            date: 'Change detected - 08/06/22',
            description: 'Go to substation to review change',
            zone: 'Zone S',
            region: 'Region XYZ'
        },
    ]

    const results = [
        {
            logo:bolt,
            name: 'SUBSTATION 70',
            button: 'Go to substation',
            zone: 'Zone N',
            region: 'Region XYZ',
            regionFlag: flag,
        },
        {
            logo:flag,
            name: 'Region A',
            button: 'Go to region',
            zone: 'Zone S',
        },
        {
            logo:flag,
            name: 'Region B',
            button: 'Go to region',
            zone: 'Zone S',
        },
        {
            logo:flag,
            name: 'Region C',
            button: 'Go to region',
            zone: 'Zone S',
        },
        {
            logo:flag,
            name: 'Region D',
            button: 'Go to region',
            zone: 'Zone S',
        },
        {
            logo:flag,
            name: 'Region W',
            button: 'Go to region',
            zone: 'Zone S',
        },
        {
            logo:flag,
            name: 'Region X',
            button: 'Go to region',
            zone: 'Zone S',
        },
        {
            logo:bolt,
            name: 'SUBSTATION',
            button: 'Go to substation',
            zone: 'Zone S',
            region: 'Region XYZ',
            regionFlag: flag,
        },
    ]


    return (
        <div className={classes.container}>
            <Topbar title={toptitle} />
            <hr></hr>
            <QuickSelect />
            <ServiceRequest objectData={serviceRequest} />
            <SpecificSearch />
            <SearchResult results={results} />
        </div>
    )

}
export default Dashboard;