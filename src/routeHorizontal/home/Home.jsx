import { useEffect, useRef } from "react"
import "./home.scss"
import Typewriter from 'typewriter-effect/dist/core';

export default function Home() {
  const textRef = useRef();


  useEffect(()=>{
    const typewriter = new Typewriter(textRef.current,{
      strings:['ReactJs', 'HTML/CSS', 'Nextjs','AndroidStudio(Kotlin)','PHP', ],
      autoStart:true,
      loop: true,
      cursor: "",
      pauseFor: 2000
    });
    return()=>{
      typewriter.stop();
    }
  }, [])
  return (
    <div className='home'>
      <div className="mypic">
        <div className="pic">
        <img src="./assets/mypic.jpg" alt="" />
        </div>
      </div>
      <div className="mybio">
        <div className="bio">
          <h3>Hello Recruiters,</h3>
          <h4>This is Nikhil Pakhloo</h4>
          <h3>I am a <span>Software Engineer</span></h3>
         
         <br />
         <br /><br />

         <h3>I work in <span ref={textRef}></span>
</h3>


        </div>
      </div>



    </div>
  )
}
