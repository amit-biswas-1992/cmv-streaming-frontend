import React from 'react'
import images from '../images'
import {motion} from 'framer-motion'
import{useState,useEffect,useRef} from'react'
import style from './Corasoul.module.css'
import Image from 'next/image'

function Corasoul() {
  const[width,setWidth]=useState(0)
  const carousal = useRef()

  useEffect(()=>{
    
    setWidth(carousal.current.scrollWidth - carousal.current.offsetWidth)
  },[])
  
  return (
    
      <div>
        <motion.div ref={carousal} className={style.carousal}>
            <motion.div 
              drag='x' 
              dragConstraints={{right:0, left: -width }}
              className={style.inner_carousal}>
              {images.map(image=>{
                return(
                  
                  <motion.div className={style.item} key={image}>
                    <Image className={style.img} src={image} alt='' />
                  </motion.div>
                )
              })}

            </motion.div>
        </motion.div>
      </div>
       
     
    
  )
}

export default Corasoul