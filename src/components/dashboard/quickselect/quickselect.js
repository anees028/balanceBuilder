import React from "react";
import classes from './quickselect.module.css'
import SwitchBtn from "../../../shared/switchbtn/switchbtn";


const QuickSelect = (props) => {

    //const badges = ['Zone S', 'Zone 1', 'Zone N', 'Zone L'];
    const badges = [
        {
            id:1,
            name:'Zone S',
            styles:{
                color: '#E75420',
                border: '0.5px solid var(--colors-orange-500, #E75420)',
                background: 'var(--colors-primary-bg-subtle, #FCEAE3)',
            }
        },
        {
            id:2,
            name:'Zone 1',
            styles:{
                color: '#258998',
                border: '0.5px solid var(--color-white-100, #ffffff)',
                background:'var(--colors-secondary-bg-subtle, #E4F0F2)',
            }
        },
        {
            id:3,
            name:'Zone N',
            styles:{
                color: 'var(--colors-success-fg-on-subtle, #138719)',
                border: '0.5px solid var(--color-white-100, #ffffff)',
                background: 'var(--colors-success-bg-subtle, #E2F0E2)',
            }
        },
        {
            id:4,
            name:'Zone L',
            styles:{
                color: 'var(--colors-crimson-500, #990035)',
                border: '0px solid var(--colors-crimson-500, #ffffff)',
                background: 'var(--colors-crimson-50, #F2DFE6)',
            }
        },
    ];

    // const myButton = styled.button`
    //     color: white;
    //     font-size: 15px;
    //     background: blue
    // `;
    // const Title2 = styled.h1`
    // font-size: 1.5em;
    // text-align: center;
    // color: #BF4F74;
    // `;

    // const buttons = badges.map(x => (
    //     <div className={classes.btndiv}>
    //         <button
    //             style={x.styles}
    //         >{x.name}</button>
    //     </div>
    // ))

    
    
    return (
        <div className={classes.main} >
            <div>
                <h3>Quick Select</h3>
            </div>
            <div style={{marginTop:'-2%'}}>
                <p>By default you’ll only get result from your zone - turn it off and you’ll see all zones</p>
                <div className={classes.btndiv}>
                    <SwitchBtn />
                    <p>Search only my zones & regions</p>
                </div>
            </div>
            <div className={classes.divSpace}>
                <p>Select a zone</p>
                <div className={classes.badge}>
                    {badges.map((x, index) => (
                        <button
                            key={index}
                            style={x.styles}
                        >{x.name}</button>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default QuickSelect;

