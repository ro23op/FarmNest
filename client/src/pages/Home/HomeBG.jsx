
import { GiChicken } from 'react-icons/gi';
import { GiCircle } from 'react-icons/gi';
import { GiLeafSkeleton } from 'react-icons/gi';
import {motion} from "motion/react";

const HomeBG = () => {
  return (
  <div className="backdrop-blur-lg absolute top-0 left-0 w-full h-full bg-[#bafac129] -z-10 pointer-events-none overflow-hidden">
      <div className="absolute -bottom-[2%] -left-[5%] w-96 h-96 bg-[#1DD3B0] rounded-full blur-3xl opacity-30 -z-20" />

      <motion.div
      animate={{ rotate: 20, scale: 1.1,x: 30,y:5
      }}
        transition={{ duration: 10, repeat: Infinity, repeatType: 'reverse' }}
      className="hidden absolute top-[20%] blur-[1px] left-[5%] md:block text-[red] text-8xl opacity-60">
        <GiChicken />
        
      </motion.div>
      <div className="absolute top-[10%] blur-[2px] right-[5%] text-[#FDCB6E] text-8xl opacity-85">
        <GiCircle/>
      </div>
<div className="absolute top-[30%] blur-[2px] right-[20%] text-[#F88379] text-8xl opacity-85">
        <GiCircle/>
      </div>
      <div className="absolute top-[20%] blur-[2px] right-[50%] text-[#91F291] text-9xl opacity-85">
        <GiCircle/>
      </div>

      {/* Additional Balls */}
      <div className="absolute top-5 left-1/2 w-30 h-30 bg-[#F88379] rounded-full blur-xl opacity-75" />
      <div className="absolute top-24 left-1/3 w-12 h-12 bg-[#91F291] rounded-full blur-md opacity-70" />

      
      <motion.div 
      animate={{ rotate: 20, scale: 1.1,x: -30,y:-50
      }}
        transition={{ duration: 10, repeat: Infinity, repeatType: 'reverse' }}
      className="absolute top-[40%] rotate-180  left-[5%] blur-[2px] text-[green] text-7xl opacity-85">
        <GiLeafSkeleton />
      </motion.div>


      <div className="absolute top-[20%] right-[5%] w-90 h-90 bg-[#FDCB6E] rounded-full blur-3xl opacity-60 -z-20" />
    </div>
  );
};

export default HomeBG;
