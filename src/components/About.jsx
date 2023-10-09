import React from 'react';
import { Tilt }  from 'react-tilt'; 
import { motion } from 'framer-motion';

import { styles } from '../styles';
import { services } from '../constants';

import { fadeIn, textVariant } from '../utils/motion';

import { SectionWrapper } from '../hoc';



const ServiceCard = ({index, title, icon}) => { 
  return (
    <Tilt className="xs:w-[250px] w-full">
      <motion.div
        variants={fadeIn("right", "spring", 0.5 * index, 0.74)}   // direction, type, delay, duration
        className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
      >
       <div 
         options={{ 
          max: 45, 
          scale: 1,
          speed: 450
        }}
        className="bg-tertiary rounded-[20px] py-5 px-1 min-h-[280px] flex justify-evenly items-center flex-col"
        >
        <img src={icon} alt={title}
        className="w-16 h-16 object-contain" />
        <h3 className="text-white text-[20px] font-bold text-center">{title}</h3>
       </div> 
        
      </motion.div>
    </Tilt>
  )
}

const About = () => {
  return (
   <>
    <motion.div variants={textVariant()}> 
      <p className={styles.sectionSubText}>Introduction</p>
      <h2 className={styles.sectionHeadText}>About Me.</h2>
    </motion.div>

    <motion.p
      variants={fadeIn("","",0.1,1)}     // 4 parameters - { direction, type, delay, duration } related to animation 
      className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
    >
      I'm beginning myself as a data science fresher and am currently developing machine learning models for various offline projects.
      With good knowledge of supervised and unsupervised machine learning algorithms,
      I got trained on the basics by doing internships. After I completed my training,
      I contributed to a solo as well as a team project that encouraged and motivated me to work in the relevant field.
      I developed a model that predicted the minimum ticket fare for a customer who wanted to travel by air.
      Churn prediction encouraged me to think about a variety of factors that could lead to business failure. So by developing models that could predict the cause of respective failures, we could give rise to various insights that
      will definitely be useful for business growth and consumer segmentation. After all, customers are
      the market, and business is made up of the market.
      'm dynamically energetic in my learning and aim to progress towards the objective.
      "A fast-paced, articulated environment suits me to progress with my skills".


    </motion.p>

    <div className="mt-20 flex flex-wrap gap-10">
      {services.map((service,index) => (
        <ServiceCard key={service.title} index={index} {...service} />
      ))}
    </div>
   </>
  )
}

export default SectionWrapper(About, "about")