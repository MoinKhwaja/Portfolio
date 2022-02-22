import React from "react";

function NalasObj(props) {
    return(
        <div>
            <div>
                <div className="model">
                    <model-viewer bounds="tight" src="/images/nalas.glb" auto-rotate ar ar-modes="webxr scene-viewer quick-look" camera-controls camera-orbit="0deg 0deg">
                    <div id="lazy-load-poster" slot="poster">
                    <div className="progress-bar" slot="progress-bar"></div>
                    </div>
                    </model-viewer>
                </div>
            </div>
            <div>
                <div className="desc">
                    <h2><a className="worklink" href="https://www.nalasengineering.com/" target="_blank">nalas</a></h2>
                    <h2>|</h2>
                    <h2>chemical engineer</h2>
                    <h2>|</h2>
                    <h2>centerbrook, ct</h2>
                    <h2>|</h2>
                    <h2>jan 2019-jun 2019</h2>
                </div>
            </div>
            <div>
                <div>
                    <p>nalas is a chemical engineering consultancy focused on chemical process development for pharmaceutical and government partners. as a chemical engineering co-op, i spent time working under both chemists and chemical engineers to effectively scale up small molecule products.</p>
                    <p>nalas is specialized in turning batch chemistry into continuous flow processes. i used tools such as in-situ ir and automated reactors to precisely track reaction kinetics and process parameters to understand and determine how to develop continuous processes using flow reactors.</p>
                    <p>the main project i got to work on was turning a customer’s batch process which turned a liquid into a semisolid into a continuous flow process. this project had many challenges due to the phase change that took place during the reaction. this project exposed me to many key engineering skills in pumps and plumbing setup, working with sensors and pid loops, working with heat exchangers, dealing with highly toxic chemicals, and learning new analytical techniques like raman spectroscopy and rheology.</p>
                </div>
            </div>
        </div>
    )
}

export default NalasObj;