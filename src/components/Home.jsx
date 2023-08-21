import React from 'react'
import vg from "../assets/2.webp";
import {
  AiFillGoogleCircle,
  AiFillFacebook,
  AiFillLinkedin,
  AiFillInstagram, 
} from "react-icons/ai";

const Home = () => {
  return (
    <>
    <div className='home' id='home'>
        <main>
            <h1>Harshit</h1>
            <p>solution of all your problems</p>
        </main>
    </div>
    <div className="home2">
      <img src={vg} alt="Graphics" />
      <div>
      <p>
       Hello and welcome to my portfolio website ,i am happy to serv you my Services and make your Business
        successful and Profitable .
      </p>
      </div>
    </div>

    <div className="home3" id='about'>
      <div>
        <h1>Who i am ?</h1>
        <p>
          I am a Web Designer who use  React js. framework for devloping Beautiful , Attractive , Fully Customize 
          Front-End Client side Ui also , I Love to read Money related ,Personal growth related BOOKs .
          I also Like to Entertain my Friends when we are working in a Project so they can release their
          stress releted with the project and they work with there full potential all time.
          
        </p>
       
      </div>
    </div>

    <div className="home4" id='handles'>

      <div>
        <h1>Social Media Handles</h1>
        <article>
          <div style={{
            animationDelay:"0.3s",
          }}>
            <AiFillGoogleCircle/>
            <p>Google</p>
          </div>
          <div style={{
            animationDelay:"0.5s",
          }}>
            <AiFillFacebook/>
            <p>Facebook</p>
          </div>
          <div style={{
            animationDelay:"0.7s",
          }}>
            <AiFillLinkedin/>
            <p>Linkedin</p>
          </div>
          <div style={{
            animationDelay:"1s",
          }}>
            <AiFillInstagram/>
            <p>Instagram</p>
          </div>
        </article>
      </div>
    </div>
    </>
  )
}

export default Home;
