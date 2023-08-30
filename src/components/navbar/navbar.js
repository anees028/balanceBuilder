import React from "react";
import classes from './navbar.module.css'

import balancebuilder from '../../assets/icons/balancebuilder.svg'
import setting from '../../assets/icons/setting.svg'
import reports from '../../assets/icons/reports.svg'
import grid from '../../assets/icons/grid.svg'
import Role from "../../shared/role/role";


const Navbar = () => {

    return (
        <div className={classes.nav} >
            <div className={classes.navicon}>
                <a href='/#'><img src={balancebuilder} alt='balancebuilder' /></a>
            </div>
            <div className={classes.navmenu} >
                <ul >
                    <li><a href='/#'><img src={setting} alt='setting' /></a></li>
                    <li><a href='/#'><img src={reports} alt='reports' /></a></li>
                    <li><a href='/#'><img src={grid} alt='grid' /></a></li>
                    <li>
                        <Role />
                    </li>
                </ul>
            </div>
        </div>
    )

}
export default Navbar;
