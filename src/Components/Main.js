import React from "react";
import Style from "./Main.module.css";
import Header from "./Header";
import Status from "./Status";
import Task from "./Task";
import Dashboard from "./Dashboard";

export default function Main(){
    return(
        <div className={Style.main_container}>
            <div className={Style.main}>
                <Header/>
                <div className={Style.content}>
                <div className={Style.tasks_container}>   
                    <div>
                        <h3>Milestones</h3>
                        <div className={Style.milestones}>
                            <img src="/astro_rocket.png" className={Style.image}/>
                            <h3>There are no Milestones for today</h3>
                            <p>You can create Milestones.</p>
                            <div><p>+ Create Milestones</p></div>
                        </div>
                    </div>

                    <div>   
                        <h3>Task Summary</h3>
                        <div className={Style.summary}>
                            <div className={Style.project}>
                                <h3>Project estimable</h3>
                                <div className={Style.status_container}>
                                    <Status
                                        container={{backgroundColor : "black"}}
                                        name={{color: "#fff"}}
                                        number={{color: "#fff"}}
                                        color={{color : "#fff"}}
                                    />
                                    <Status
                                        container={{backgroundColor : "#1da7ff"}}
                                        name={{color: "#fff"}}
                                        number={{color: "#fff"}}
                                        color={{color : "#fff"}}
                                        circle={{color : "#c3e8ff"}}
                                        />
                                    <Status
                                        container={{backgroundColor : "lightgray"}}
                                        name={{color: "black"}}
                                        number={{color: "#6162fa"}}
                                    />
                                </div>
                                <div className={Style.bottom}>
                                    <p>On time completion rate :</p>
                                    <p>94%</p>
                                    <p className={Style.progression}>2,3%</p>
                                </div>
                            </div>
                            
                            <div className={Style.line}></div>                

                            <div className={Style.team}>
                                <h3>Our team</h3>
                            </div>
                        </div>
                    </div>

                </div>
                
                <h1>Tasks</h1>
                <Task/>
                <Task/>
                </div>
            </div>
            <Dashboard/>
        </div>
    )
}