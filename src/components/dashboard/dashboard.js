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
            date: 'Change detected - 08/06/23',
            description: 'Go to substation to review change',
            zone: 'Zone S',
            region: 'Region XYZ',
            balance: 'Other balances affected'
        }, {
            logo: frame,
            name: 'Balance name',
            date: 'Error detected - 08/06/23',
            description: 'Go to substation to review change',
            zone: 'Zone S',
            region: 'Region XYZ',
            balance: 'Other balances affected'
        },
        {
            logo: frame,
            name: 'NA-VI4',
            date: 'Error detected - 08/06/23',
            description: 'Go to substation to review change',
            zone: 'Zone S',
            region: 'Region XYZ',
            // balance: 'Other balances affected'
        }, {
            logo: bolt,
            name: 'NA-VI5',
            date: 'Change detected - 08/06/23',
            description: 'Go to substation to review change',
            zone: 'Zone S',
            region: 'Region XYZ',
            // balance: 'Other balances affected'
        },
    ]

    const results = [
        {
            logo:bolt,
            name: 'SUBSTATION 70',
            button: 'Go to substation',
            zone: 'Zone N',
            zonestyle:{
                color: 'var(--colors-success-fg-on-subtle, #138719)',
                background: 'var(--colors-success-bg-subtle, #E2F0E2)'
            },
            region: 'Region XYZ',
            regionFlag: flag,
        },
        {
            logo:flag,
            name: 'Region A',
            button: 'Go to region',
            zone: 'Zone S',
            zonestyle:{
                color: 'var(--colors-primary-fg-on-subtle, #E75420)',
                background: 'var(--colors-primary-bg-subtle, #FCEAE3)'
            },
        },
        {
            logo:flag,
            name: 'Region B',
            button: 'Go to region',
            zone: 'Zone S',
            zonestyle:{
                color: 'var(--colors-primary-fg-on-subtle, #E75420)',
                background: 'var(--colors-primary-bg-subtle, #FCEAE3)'
            },
        },
        {
            logo:flag,
            name: 'Region C',
            button: 'Go to region',
            zone: 'Zone S',
            zonestyle:{
                color: 'var(--colors-primary-fg-on-subtle, #E75420)',
                background: 'var(--colors-primary-bg-subtle, #FCEAE3)'
            },
        },
        {
            logo:flag,
            name: 'Region D',
            button: 'Go to region',
            zone: 'Zone S',
            zonestyle:{
                color: 'var(--colors-primary-fg-on-subtle, #E75420)',
                background: 'var(--colors-primary-bg-subtle, #FCEAE3)'
            },
        },
        {
            logo:flag,
            name: 'Region W',
            button: 'Go to region',
            zone: 'Zone S',
            zonestyle:{
                color: 'var(--colors-primary-fg-on-subtle, #E75420)',
                background: 'var(--colors-primary-bg-subtle, #FCEAE3)'
            },
        },
        {
            logo:flag,
            name: 'Region X',
            button: 'Go to region',
            zone: 'Zone S',
            zonestyle:{
                color: 'var(--colors-primary-fg-on-subtle, #E75420)',
                background: 'var(--colors-primary-bg-subtle, #FCEAE3)'
            },
        },
        {
            logo:bolt,
            name: 'SUBSTATION',
            button: 'Go to substation',
            zone: 'Zone S',
            zonestyle:{
                color: 'var(--colors-primary-fg-on-subtle, #E75420)',
                background: 'var(--colors-primary-bg-subtle, #FCEAE3)'
            },
            region: 'Region XYZ',
            regionFlag: flag,
        },
    ]

    const tooltip={
        place:"left",
        text:`Search for specific assets ( switches, transformers, lines, telemeters, counters and busbars). Click on the name of the asset from the dropdownlist and you’ll be redirected to the diagram view.`
    }


    return (
        <div className={classes.container}>
            <Topbar title={toptitle} tooltip={tooltip}/>
            <hr></hr>
            <QuickSelect />
            <ServiceRequest objectData={serviceRequest} />
            <SpecificSearch />
            <SearchResult results={results} />
        </div>
    )

}
export default Dashboard;