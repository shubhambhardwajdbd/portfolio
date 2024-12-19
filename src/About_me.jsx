import React from 'react'
import './about_me.css'
import { motion } from 'framer-motion';

const AboutMe = () => {
  return (
    <motion.div
    initial={{
     opacity:0,
     y:40
    }} 
    whileInView={
     {
       opacity:1,
       y:0
     }
    }
    
    transition={{
     delay:0.2,
     duration:0.5
    }}
    viewport={{
      once:true
     }}
      className='about_me'  id="aboutMey">
      <h2 className='heading'>About Me</h2>
    <div className="about_me_info">
        <p className='about_me_left'>Hello! I'm Shubham bhardwaj, a budding Full Stack Developer. I am diving into front-end and back-end technologies, as well as exploring AI and machine learning tools like TensorFlow and PyTorch. Excited to connect and collaborate on innovative projects!</p>
        <div className="about_me_right"></div>
    </div>

    </motion.div>
    
  )
}

export default AboutMe
