import React from "react";
import './projects.css'
import Portfoliowebsite from "./portfolio.mp4"
import Github from "./github.png"

function PortfolioObj() {
    return(
        <div className="projectBlock">
            <div className="projectsObjBlock">
                <div className="projectsPhoto">
                <video alt="moin.fun" id="portfolioPic"  autoplay="true" loop="true" muted="true">
                    <source src={Portfoliowebsite} type="video/mp4"/>
                </video>
                </div>
                <div className="projectsDesc">
                    <h2 className="projectName"><span style={{color:'#537AD9'}}>portfolio website</span></h2>
                    <p className="projectPara">personal portfolio website built using <span style={{color:'#EEA579'}}>react</span> and <span style={{color:'#11CE8A'}}>netlify</span>, uses state changes and is <span style={{color:'#9F83A9 '}}>responsive</span> for browsers, tables, and mobile.</p>
                    <p className="projectStack">react | jsx | css | javascript | netlify</p>
                    <div className="projectLink"><a href="https://github.com/MoinKhwaja/portfolioV3" target="_blank"><img id="github" src={Github} alt="github"></img></a></div>
                </div>
            </div>
        </div>
    )
}; 

export default PortfolioObj;