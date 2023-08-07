import { motion } from 'framer-motion';
import {Tilt} from 'react-tilt';

import { SectionWrapper } from '../hoc';
import { technologies } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';

const Tech = () => {
  return (
    <div className='flex flex-row flex-wrap justify-center gap-10'>
      {technologies.map((technology, index) => (
        <motion.div variants={fadeIn("up", "spring", index*0.15, 0.75)} key={index}>
          <Tilt
            options={{
              max: 45,
              scale: 1,
              speed: 450
            }}            
          >
            <div className='w-28 h-28 flex align-center justify-center'>          
              <img 
                src={technology.icon}
                alt={technology.name}
                className='w-[100%] h-[100%] bg-white rounded-full border-l-4 border-b-4 border-[#770de0] glassmorphism'
              />                                 
            </div>
          </Tilt>             
        </motion.div>   
      ))}
    </div>
  )
}

export default SectionWrapper(Tech,'');