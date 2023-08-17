import React from "react";
import classes from './quickselect.module.css'
import SwitchBtn from "../../../shared/switchbtn/switchbtn";

const QuickSelect = (props) => {

    const badges = ['Zone S', 'Zone 1', 'Zone N', 'Zone L'];
    // const badges = [
    //     {
    //         id:1,
    //         name:'Zone S',
    //         color: '#E75420',
    //         background: 'var(--colors-primary-bg-subtle, #FCEAE3);',
    //         border: '0.5px solid var(--colors-orange-500, #E75420);',
    //         bgcolor: '#FCEAE3'
    //     },
    //     {
    //         id:2,
    //         name:'Zone 1',
    //         color: '#258998',
    //         background:'var(--colors-secondary-bg-subtle, #E4F0F2);',
    //         border: '0.5px solid var(--colors-orange-500, #E4F0F2);',
    //         bgcolor: '#E4F0F2'
    //     },
    // ];
    
    return (
        <div className={classes.main} >
            <div>
                <h3>Quick Select</h3>
            </div>
            <div>
                <p>By default you’ll only get result from your zone - turn it off and you’ll see all zones</p>
                <div className={classes.btndiv}>
                    <SwitchBtn />
                    <p>Search only my zones & regions</p>
                </div>
            </div>
            <div className={classes.divSpace}>
                <p>Select a zone</p>
                <div className={classes.badge}>
                    {badges.map(x => (
                        <button
                            // style={{
                            //     color:x.color,
                            //     background: x.background,
                            // }}
                        >{x}</button>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default QuickSelect;

