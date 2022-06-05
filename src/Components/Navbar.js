import React from "react";
import Style from "./Navbar.module.css";
import { Icon } from '@iconify/react';
import {useState} from "react";

export default function(){
    const [menu, setMenu] = useState()

    return(
        <div className={Style.container}>
            <div className={Style.content}>
                <img src="/astro_rocket.png"/>
                <nav className={Style.navbar}>   
                    {menu === 1 ? <li><Icon className={Style.active} icon="fluent:cellular-data-2-20-filled" width="25" height="25"/></li> : <li onClick={()=>{setMenu(1)}}><Icon className={Style.icon} icon="fluent:cellular-data-2-20-filled" width="25" height="25"/></li>}
                    {menu === 2 ? <li><Icon className={Style.active} icon="bi:display" width="25" height="25"/></li> : <li onClick={()=>{setMenu(2)}}><Icon className={Style.icon} icon="bi:display" width="25" height="25"/></li>}
                    {menu === 3 ? <li><Icon className={Style.active} icon="ant-design:message-outlined"width="25" height="25"/></li> :<li onClick={()=>{setMenu(3)}}><Icon className={Style.icon} icon="ant-design:message-outlined"width="25" height="25"/></li>}
                    {menu === 4 ? <li><Icon className={Style.active} icon="fa-solid:user-friends" width="25" height="25"/></li> :<li onClick={()=>{setMenu(4)}}><Icon className={Style.icon} icon="fa-solid:user-friends" width="25" height="25"/></li>}
                    {menu === 5 ? <li><Icon className={Style.active} icon="fluent:tasks-app-20-regular" width="25" height="25"/></li> : <li onClick={()=>{setMenu(5)}}><Icon className={Style.icon} icon="fluent:tasks-app-20-regular" width="25" height="25"/></li>}
                    {menu === 6 ? <li><Icon className={Style.active} icon="carbon:settings" width="25" height="25" /></li> :<li onClick={()=>{setMenu(6)}}><Icon className={Style.icon} icon="carbon:settings" width="25" height="25" /></li>}
                </nav>
            </div>
        </div>
    )
}