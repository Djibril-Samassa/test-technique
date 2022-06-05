import React from "react";
import Style from "./Dashboard.module.css";
import { Icon } from '@iconify/react';
import Appointment from "./Appointment";

export default function Dashboard(){
    return(<>
        <div className={Style.container}>

            <div className={Style.profile}>
                <Icon icon="akar-icons:bell" color="black" width="30" />
                <div>
                    <Icon icon="carbon:user-avatar" color="black" width="30" />
                    <Icon icon="akar-icons:chevron-down" color="black" />
                </div>
            </div>

            <img className={Style.image} src="/astro_rocket.png"/>
            <h2>Website Redesign</h2><br/>
            <p>Ammet minim mollit non deserunt ullamco and <br/><br/>aliqua dolor do amet sint elit</p>

            <div className={Style.calendar}>
                <h3>October 2021</h3>
                <div>
                    <Icon className={Style.icon} icon="bi:chevron-left" color="black" />   
                    <Icon className={Style.icon} icon="bi:chevron-right" color="black" />
                </div>
            </div>
            <input type="date" id="start" name="trip-start"
                value="2021-07-22"
                min="2021-01-01" max="2021-12-31"/>
            <Appointment/>
            <Appointment/>

        </div>
    </>)
}