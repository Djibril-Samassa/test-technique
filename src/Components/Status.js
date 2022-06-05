import React from "react";
import Style from "./Status.module.css";
import { Icon } from '@iconify/react';


export default function Status(props){
    return(<>
        <div className={Style.container}style={props.container}>
            <div className={Style.circle}style={props.circle}>
                <Icon icon="ant-design:fund-projection-screen-outlined" width="30" height="30" style={props.color} />
            </div>
            <p style={props.name}>Projects</p>
            <p style={props.number}>23</p>
        </div>
    </>)
}