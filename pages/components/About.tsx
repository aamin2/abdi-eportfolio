import { motion } from 'framer-motion'
import React from 'react'

type Props = {}

function About({}: Props) {
  return (
    <motion.div 
    initial={{opacity: 0}}
    whileInView={{opacity: 1}}
    transition={{duration: 1.5}}
    className='flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl pzx-10 justify-evenly mx-auto items-center'>
      <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'> About</h3>

      <motion.img 
      initial={{
        x: -200,
        opacity:0
      }}
      transition={{
        duration:1.2
      }}
      whileInView={{opacity:1, x:0}}
      viewport={{once: true}}
      src="https://i.pinimg.com/736x/1d/a9/f6/1da9f6aec8840eb7836812ff5ec70391.jpg" 
      className='-mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover
       md:rounded-lg md:w-64 md:h-95 xl:w-[500px] xl:h-[600px]'
       />
       <div className='space-y-10 px-0 md:px-10'>
        <h4 className='text-4xl font-semibold'>Here is a{" "}  
        <span className='underline decoration-[#f7ab0a]'>little</span> background of {" "}
        <span className='underline decoration-[#f7ab0a] '>Myself</span>
        </h4>
        <p className='text-base'>A solution-driven web developer adept at contributing to highly collabrative
        work environment and finding solutions. With my proven experience developing consumer-focused websites
        as a react developer, senior developer and typical frontend developer, developing websites
        using HTML, CSS, JavaScript, React etc. With a good knowledge of the best practices for web design, user experience and
        doing so in a timely manner to provide not only sustainabilty in the team of devs but fufilment of content to the organization
        and they consumers. I am determined to continue to grow in learn in this fast-paced environment and I am itching to learn
        the newest updates and ways to make easier cleaner code to give to consumers on a daily basis. Blends detailed knowledge
        of programming aspects with interpersonal, communicative nature. Solid comprehension of problematic SEO, marketing
        and security obstacles. Id like to thank you for taking the time to site through this paragraph and through my Portfolio
        displaying not only the type of programmer I am but the type of person I am aswell!</p>
       </div>
      </motion.div>
  )
}

export default About