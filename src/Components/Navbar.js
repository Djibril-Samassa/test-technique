import React from "react";
import Style from "./Navbar.module.css";
import { Icon } from '@iconify/react';

export default function(){
    return(
        <div className={Style.container}>
            <div className={Style.content}>
                <p>Logo</p>
                <nav className={Style.navbar}>   
                    <li><Icon className={Style.active}icon="fluent:cellular-data-2-20-filled" width="25" height="25"/></li>
                    <li><Icon icon="bi:display" width="25" height="25"/></li>
                    <li><Icon icon="ant-design:message-outlined"width="25" height="25"/></li>
                    <li><Icon icon="fa-solid:user-friends" width="25" height="25"/></li>
                    <li><Icon icon="fluent:tasks-app-20-regular" width="25" height="25"/></li>
                    <li><Icon icon="carbon:settings" width="25" height="25" /></li>
                </nav>
            </div>
        </div>
    )
}