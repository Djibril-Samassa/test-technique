import React from "react";
import { Icon } from "@iconify/react";
import Style from "./Appointment.module.css"

export default function Appointment(){
    return(<>
        <div className={Style.container}>
            <img src="/astro_rocket.png"/>
            <div className={Style.description}>
                <h3>Meeting with clients</h3>
                <div>
                    <Icon icon="arcticons:zoom" color="black" />
                    <p>Metting Zoom</p>
                </div>
            </div>

            <div className={Style.date}>
                <Icon icon="akar-icons:clock" color="black" />
                <p>03 am</p>
            </div>
        </div>
    </>)
}