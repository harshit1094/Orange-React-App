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
            <h1>Orenge</h1>
            <p>solution of all your problems</p>
        </main>
    </div>
    <div className="home2">
      <img src={vg} alt="Graphics" />
      <div>
      <p>
        Hello,welcome to Orange Technology the one and only  Ai boat company which can give you the best  result of your need.
      </p>
      </div>
    </div>

    <div className="home3" id='about'>
      <div>
        <h1>Who we are ?</h1>
        <p>
          We are the future of india, the biggest Artificial Inteligent company founded by Harshit Patel in 2030,we are really excited to serv you our services
          ,we are the no 1 company in Artificial Inteligent in India the next generation Ai boat and Robot manufacturer in India ,the way our companyes members 
          desing and creat the Ai chat boats and Roboats are just insane,Co Founder Mr Prakash Patel is the best Marketing expert in our incredible company He 
          love to encourage our employees for doing more marketing of our products and provide new techniks.
          
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
