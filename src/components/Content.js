import React, {useState, useRef} from 'react';
import './content.css';
import Moin from './files/moin.jpg'
import {CSSTransition} from 'react-transition-group';
import WorkHolder from './work/WorkHolder';
import ElekObj from './work/ElekObj';
import NalasObj from './work/nalasObj';
import SigmaObj from './work/sigmaObj';

function Content() {

    const [activeObj, setActiveObj] = useState('main')
    

    function NavItem(props) {

        return (
            <button  className="workButton" id={props.id} onClick={() => setActiveObj(props.goToObj)}>
              {props.icon}
            </button>
        );
      }
     
    return(
        <div>
        <div className="contents">
            <section className="hi">
                <div className="animated one animatedFadeInUp fadeInUp"><h1>hi! my name is</h1></div>
                <div className="animated two animatedFadeInUp fadeInUp"><h1 className="twoText">moin khwaja</h1></div>
                <div className="animated three animatedFadeInUp fadeInUp"><h1>i’m an interdisciplinary <span style={{color:'#EEA579'}}>engineer</span> with experience in <span style={{color:'#9A8BC9'}}>process development</span>, <span style={{color:'#A5D6AF'}}>biologics</span>, <span style={{color:'#F591CD'}}>automation</span>, <span style={{color:'#869F9F'}}>flow chemistry</span>, and <span style={{color:'#ED6572'}}>software development</span>. Currently I’m working on <span style={{color:'#A1A6C2'}}>microparticle drug product development</span> at <span style={{color:'#76CBF0'}}>elektrofi</span></h1></div>
                <div className="animated four animatedFadeInUp fadeInUp"><h1>scroll down to learn more about me!</h1></div>
            </section>
            <section className="about">
                <h2>about.</h2>
                    <div className="aboutText">
                        <p>hey! my name’s moin and i’m a <span style={{color:'#11CE8A'}}>chemical engineer</span> looking to expand my work experience in biotech and software development. i studied chemical engineering at <a href="https://google.com/" target="_blank"><span style={{color:'#D95D6A'}}>northeastern university</span></a> and spent two six-month co-ops working on <span style={{color:'#537AD9'}}>small molecule synthesis</span> and <span style={{color:'#5B2392'}}>continuous flow chemistry</span>.</p>
                        <p>since 2019 i’ve been working as a <span style={{color:' #803D4A'}}>microparticle engineer</span> developing a new <span style={{color:'#EEA579'}}>drug delivery platform</span> to help patients receive life-saving biologics. due to the small team size, i’ve had my feet in many different aspects of engineering from <span style={{color:'#757943'}}>biologics formulations</span> to <span style={{color:'#9F83A9'}}>pilot plant automation</span>.</p>
                        <p>in my free time, i study <span style={{color:'#F57A67'}}>web development</span> as an creative outlet, getting to combine my love of building something thats both visually pleasing and functional.</p>
                        <p>i feel that for the next steps of my career i want to jump into something new to expand my skill set, whether it be <span style={{color:'#513B63'}}>upstream biologics development</span> or working on a <span style={{color:'#798759'}}>full stack web application</span>, if you’re interested in working with me please reach out!</p>
                    </div>
                    <div className="aboutSide">
                        <div className="aboutPic">
                            <img src={Moin} alt="moin" id="moin"></img>
                        </div>
                        <div className="aboutScroll" id="scroll">
                            <h2>engineer | chemist | musician | biker | gamer | dj | skier | aquarist | traveler | barista | 日本語 | اُردُو | engineer | chemist | musician | biker | gamer | dj | skier | aquarist | traveler | barista | 日本語 | اُردُو | engineer | chemist | musician | biker | gamer | dj | skier | aquarist | traveler | barista | 日本語 | اُردُو | engineer | chemist | musician | biker | gamer | dj | skier | aquarist | traveler | barista | 日本語 | اُردُو | engineer | chemist | musician | biker | gamer | dj | skier | aquarist | traveler | barista | 日本語 | اُردُو | engineer | chemist | musician | biker | gamer | dj | skier | aquarist | traveler | barista | 日本語 | اُردُو | engineer | chemist | musician | biker | gamer | dj | skier | aquarist | traveler | barista | 日本語 | اُردُو | engineer | chemist | musician | biker | gamer | dj | skier | aquarist | traveler | barista | 日本語 | اُردُو </h2>
                        </div>
                    </div>  
            </section>
            <section className="work">
                <h2>work.</h2>
                <div className="workList">
                    <NavItem icon="elektrofi" id="elek" goToObj="elekObj"/>
                    <NavItem icon="nalas" id="nalas" goToObj="nalasObj"/>
                    <NavItem icon="sigma-aldrich" id="sigma" goToObj="sigmaObj"/>
                </div>
                <div>
                    <CSSTransition in={activeObj === 'main'} classNames="obj-primary" timeout={0} unmountOnExit >
                        <div>
                            <ElekObj />
                        </div>
                    </CSSTransition>
                    <CSSTransition in={activeObj === 'elekObj'} classNames="obj-secondary"  unmountOnExit >
                        <div>
                            <ElekObj />
                        </div>
                    </CSSTransition>
                    <CSSTransition in={activeObj === 'nalasObj'} classNames="obj-secondary" timeout={0} unmountOnExit >
                        <div>
                            <NalasObj />
                        </div>
                    </CSSTransition>
                    <CSSTransition in={activeObj === 'sigmaObj'} classNames="obj-secondary" timeout={0} unmountOnExit >
                        <div>
                            <SigmaObj />
                        </div>
                    </CSSTransition>
                </div>
            </section>
            <section className="projects">
                <h2>projects.</h2>
                <h1>👷🚧</h1>
            </section>
        </div>
        </div>
    )
}

export default Content;