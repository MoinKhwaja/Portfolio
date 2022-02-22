import React from "react";

function SigmaObj(props) {
    return(
        <div>
            <div>
                <div className="model">
                    <model-viewer bounds="tight" src="/images/sigma.glb" auto-rotate ar ar-modes="webxr scene-viewer quick-look" camera-controls camera-orbit="0deg 0deg">
                    <div id="lazy-load-poster" slot="poster">
                    <div className="progress-bar" slot="progress-bar"></div>
                    </div>
                    </model-viewer>
                </div>
            </div>
            <div>
                <div className="desc">
                    <h2><a className="worklink" href="https://www.sigmaaldrich.com/US/en" target="_blank">sigma-aldrich</a></h2>
                    <h2>|</h2>
                    <h2>organic chemist</h2>
                    <h2>|</h2>
                    <h2>natick, ma</h2>
                    <h2>|</h2>
                    <h2>jun 2017-dec 2017</h2>
                </div>
            </div>
            <div>
                <div>
                    <p>sigma-aldrich (now known as Millipore-sigma) is a large pharmaceutical supply company with products ranging from glassware to cmo manufacturing. the natick site of sigma-adrich focused on bioactive small molecule synthesis, creating products for drug discovery companies. </p>
                    <p>as a chemistry co-op i got to practice my organic chemistry skills by synthesizing, purifying, and analyzing small molecules. as I became more comfortable with my skills, i was able to help in developing new products by doing route design, sourcing pre-cursors, and writing procedures for other chemists to follow. </p>
                    <p>over the course of my co-op I was able to produce 25 different small molecules using a variety of reactions. 5 of these molecules were new molecules which i had done route selection for. all of these products are now available on sigma’s website for purchase </p>
                </div>
            </div>
        </div>
    )
}

export default SigmaObj;