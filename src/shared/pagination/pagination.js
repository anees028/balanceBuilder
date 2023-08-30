import React from "react";
import classes from './pagination.module.css';
import arrow from '../../assets/icons/arrow-right_black.svg'

const Pagination = (props) => {

    const numbers = ['2', '3', '...', '8', '9', '10']

    return (
        <div className={classes.main}>
            <div className={classes.pages}>
                <button className={classes.pageButton} style={{ border: '1px solid', background: 'var(--colors-neutral-bg-surface-hover, #d0d0d0)', color: 'black' }}>1</button>
                {numbers.map(x => (
                    <button className={classes.pageButton}>{x}</button>
                ))}
            </div>
            <div className={classes.next}>
                <a href="/#">
                    <p>Next</p>
                    <img src={arrow} alt="arrow" />
                </a>
            </div>
        </div>
    )

}
export default Pagination;

