import React from 'react'
import Card from './Card';
import restaurant from"./images/ivan-stern-LOLSb7m6XkU-unsplash.jpg"
import chess from"./images/chess.jpg"
import snake from "./images/snake.jpg"
import wise_way from"./images/wise_way.jpg"
import { motion } from 'framer-motion';

const Projects = () => {
    const cards = [
        {
          imageUrl: restaurant,
          altText: 'Resataurant website',
          title: 'Restaurant Website',
          description: 'A dynamic and responsive restaurant website showcasing menu, online reservations, customer reviews, and contact information.',
          explore:"#"
        },
        {
          imageUrl:chess,
          altText: 'Chess',
          title: 'Chess image recognizer',
          description: '"An AI-powered chess system that recognizes physical pieces and plays autonomously using computer vision and advanced game algorithms."',
          explore:"#"

        },
        {
          imageUrl: snake,
          altText: 'Canyons',
          title: 'Gesture Snake Game',
          description: "an innovative twist on the classic snake game, allowing players to control the snake's movements through hand gestures, providing an engaging and interactive gaming experience.",
          explore:"#"
        },
        {
            imageUrl: wise_way,
            altText: 'wise_way',
            title: 'WiseWay',
            description: "a web application that uses advanced algorithms to calculate the most cost-effective route between two points.",
            explore:"#"
          }
      ];

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
        margin:"-100px",
      once:true
     }} className="up_gap " id="project">
        <h2 className='heading1 down_gap'>Projects</h2>
        <div className="completely">
        
    <div className="grid" >
        
      {cards.map((card, index) => (
        
        <Card
          key={index}
          imageUrl={card.imageUrl}
          altText={card.altText}
          title={card.title}
          description={card.description}
          explore={card.explore}
        />
      ))}
    </div>
    </div>
    </motion.div>
  )
}

export default Projects
