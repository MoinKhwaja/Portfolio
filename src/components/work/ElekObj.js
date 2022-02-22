import React from "react";

function ElekObj(props) {
    return(
        <div>
            <div>
                <div className="model">
                    <model-viewer bounds="tight" src="/images/elekrotate.glb" auto-rotate ar ar-modes="webxr scene-viewer quick-look" camera-controls camera-orbit="0deg 0deg">
                    <div id="lazy-load-poster" slot="poster">
                    <div className="progress-bar" slot="progress-bar"></div>
                    </div>
                    </model-viewer>
                </div>
            </div>
            <div>
                <div className="desc">
                    <h2><a className="worklink" href="https://elektrofi.com/" target="_blank">elektrofi</a></h2>
                    <h2>|</h2>
                    <h2>engineer 2</h2>
                    <h2>|</h2>
                    <h2>boston, ma</h2>
                    <h2>|</h2>
                    <h2>sept 2019-now</h2>
                </div>
            </div>
            <div>
                <div>
                    <p>elektrofi is drug delivery biotech startup focused on turning aqueous mABs into high concentration microparticle suspensions. since joining elektrofi in 2019, i’ve worked on the process development and the process development teams working to improve the suspensions properties while scaling up manufacturing to produce material for larger and larger translational studies.     </p>
                    <p>drug product development means creating the best possible formulation for drug dosage. i have spent time learning protein formulations, suspension formulations, surface chemistry, and colloidal science to help create an easy to deliver product.</p>
                    <p>process development means creating the best possible process for manufacturing our product. i got to focus on unit operation design and optimization to scale up a small lab bench setup into an efficient and robust pilot scale process. i also focused on controls engineering working on hardware to collect important process parameters and wrote software to monitor and control the system. </p>
                </div>
            </div>
        </div>
    )
}

export default ElekObj;