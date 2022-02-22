import React, {useEffect, useState} from "react";



function Splash() {

  const [loading,setLoading] = useState(false);
  let intro = document.querySelector('.intro')
  let logoSpan = document.querySelectorAll('.logo')



   
  useEffect(() => {
    setLoading(true)
    setTimeout(()=>{
      logoSpan.forEach((span,idx)=>{
        setTimeout(()=>{
          span.classList.add('active');
        }, (idx+1)*400)
      });
      setTimeout(()=>{
        logoSpan.forEach((span,idx)=>{
          setTimeout(()=>{
            span.classList.remove('active');
            span.classList.add('fade');
          },(idx+1)*50)
        })
      },2000);
      setTimeout(()=>{
        intro.style.top='-100vh';
      },2300)
    })
  },[logoSpan])
  


 

  return(
    <div className="intro">
        <h1 className="logo-header">
          <span className="logo">moin</span><span className="logo">.fun</span>
        </h1>
    </div>  
    )
};




export default Splash