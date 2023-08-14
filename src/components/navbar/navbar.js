import React from "react";
import classes from './navbar.module.css'

import balancebuilder from '../../assets/icons/balancebuilder.svg'
import setting from '../../assets/icons/setting.svg'
import reports from '../../assets/icons/reports.svg'
import grid from '../../assets/icons/grid.svg'
import logout from '../../assets/icons/logout.svg'


const Navbar = () => {

    return (
        <div className={classes.nav}>
            <a href='/#'><img src={balancebuilder} alt='balancebuilder' /></a>
            <div style={{ display: 'flex', flexDirection: 'row' }}>
                <ul >
                    <li><a href='/#'><img src={setting} alt='setting' /></a></li>
                    <li><a href='/#'><img src={reports} alt='reports' /></a></li>
                    <li><a href='/#'><img src={grid} alt='grid' /></a></li>
                    <li><p className={classes.title}>Ben Van Looveren</p></li>
                    <li><a href='/#'><img src={logout} alt='logout' /></a></li>
                </ul>
            </div>
        </div>
    )

}
export default Navbar;
