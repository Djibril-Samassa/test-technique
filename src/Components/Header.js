import React from "react";
import Style from "./Header.module.css";
import { Icon } from '@iconify/react';

export default function Header(){
    const test = <Icon icon="carbon:search" />
    return(<div className={Style.main}>
        <div className={Style.searcher}>
            <h3 className="title">Remaining tasks</h3>
            <label for="search"></label>
            <input type="text" placeholder="Search anything ..."/>
        </div>
        <div className={Style.line}></div>
        <div className={Style.filters_main}>
            <div className={Style.text_filter}>
                <h1>Active Tasks</h1>
                <p>You can edit all the stuff as you wish</p>
            </div>
           <div className={Style.filters}>
                <div className={Style.filter}>
                    <Icon icon="ic:outline-date-range" />
                    <p>Today</p>
                    <Icon icon="akar-icons:arrow-down" />
                </div>
                <div  className={Style.filter}>
                    <Icon icon="akar-icons:filter" />
                    <p>Filters</p>
                    <Icon icon="akar-icons:arrow-down" />
                </div>
           </div>
        </div>
        </div>)
}