import React from "react";
import Style from "./Navbar.module.css"

export default function(){
    return(
        <div className={Style.container}>
            <div className={Style.content}>
                <p>Logo</p>
                <nav className={Style.navbar}>   
                    <li>A</li>
                    <li>A</li>
                    <li>A</li>
                    <li>A</li>
                    <li>A</li>
                    <li>A</li>
                </nav>
            </div>
        </div>
    )
}