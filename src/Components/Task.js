import React from "react";
import { Icon } from '@iconify/react';
import Style from "./Task.module.css"

export default function Taks(){
    return(<>
        <div className={Style.container}>

            <div className={Style.time}>       
                <Icon icon="bi:play-fill" color="white" className={Style.play} width="30" height="30"/>
                <div className={Style.date}>
                    <h3>Start from</h3>
                    <div className={Style.hour}>
                        <Icon icon="ant-design:clock-circle-outlined" color="gray" />
                        <p> 9.00 am</p>
                    </div>
                </div>
            </div>

            <div className={Style.title}>
                <h3>Search Inspiration for Project</h3>
                <div className={Style.subtitles}>
                    <div>   
                        <Icon icon="eva:attach-fill" color="gray" />
                        <p>www.dribbble.com</p>
                    </div>

                    <div>
                        <Icon icon="icons8:comments" color="gray" />
                        <p>8 comments</p>
                    </div>
                </div>
            </div>

            <div className={Style.progression}>
                <p>24% complete</p>
                <div className={Style.level}>
                    <div className={Style.progressbar}>
                    </div>
                </div>
            </div>

            <div className={Style.reminder}>
                <Icon icon="clarity:alarm-clock-solid" color="#6364f9" />
                <p>Reminder</p>
            </div>
            
        </div>
    </>)
}