import React from 'react'
import { motion, useAnimationControls } from 'framer-motion'
import { useState } from 'react'
const TextSpan = ({ children }) => {
  const controls = useAnimationControls()
  const [isPlaying, setIsPlaying] = useState(false)
  const rubberBand = () => {
    controls.start({
      transform: [
        'scale3d(1,1,1)',
        'scale3d(1.4,.55,1)',
        'scale3d(.75,1.25,1)',
        'scale3d(1.25,.85,1)',
        'scale3d(.9,1.05,1)',
        'scale3d(1,1,1)',
      ],
      transition: {
        time: [0, 0.4, 0.6, 0.7, 0.8, 0.9],
      },
    })
    setIsPlaying(true)
  }
  return (
    <>
      <motion.h1
        animate={controls}
        onMouseOver={() => {
          if (!isPlaying) rubberBand()
        }}
        onAnimationComplete={() => setIsPlaying(false)}
      >
        {children}
      </motion.h1>
    </>
  )
}

export default TextSpan
