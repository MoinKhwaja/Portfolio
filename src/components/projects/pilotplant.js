import React from "react";
import './projects.css'
import PilotPlant from "./pilotplant.mp4"
import Github from "./github.png"

function PilotPlantObj() {
    return(
        <div className="projectBlock">
            <div className="projectsObjBlock">
                <div className="projectsPhoto">
                <video alt="moin.fun" id="portfolioPic"  autoplay="true" loop="true" muted="true">
                    <source src={PilotPlant} type="video/mp4"/>
                </video>
                </div>
                <div className="projectsDesc">
                    <h2 className="projectName"><span style={{color:'#537AD9'}}>pilot plant web app</span></h2>
                    <p className="projectPara">web app built to monitor and control elektrofis pilot system. built using flask where a python backend passes data between a plc system and a javascript frontend. frontend allows operators to quickly use the equipment without having to learn the complex plc ladder logic.</p>
                    <p className="projectStack">flask | python | javascript | ladder logic </p>
                    <div className="projectLink"><a href="https://github.com/MoinKhwaja/pilot-plant-web-app" target="_blank"><img id="github" src={Github} alt="github"></img></a></div>
                </div>
            </div>
        </div>
    )
}; 

export default PilotPlantObj;