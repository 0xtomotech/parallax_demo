"use client";

import { motion, useScroll, useTransform } from 'framer-motion';
import React, { useRef } from 'react'

const MultiLayerParallax = () => {
    const ref = useRef(null);

    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"],
    });

    const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
    const textY = useTransform(scrollYProgress, [0, 1], ["0%", "500%"]);
    const subTextY = useTransform(scrollYProgress, [0, 1], ["0%", "-60%"]);

  return (
    <div
        ref={ref}
        className='w-full h-screen overflow-hidden relative grid justify-items-center'
    >
        
        <motion.h1
            className="font-bold text-white text-7xl md:text-9xl z-10"
            style={{ y: textY }}
        >
            PARALLAX
        </motion.h1>

        <motion.div
            className="text-white text-2xl md:text-4xl font-semibold p-8 mt-3 z-30"
            style={{ y: subTextY }}
        >
            <p>Scroll down to see the effect.</p>
        </motion.div>


        <motion.div 
            className="absolute inset-0 z-0" 
            style={{
                backgroundImage: `url(/mountain-full.png)`,
                backgroundPosition: 'bottom',
                backgroundSize: 'cover',
                y: backgroundY,
            }}
        />
        <div 
            className="absolute inset-0 z-20" 
            style={{
                backgroundImage: `url(/mountain-bottom.png)`,
                backgroundPosition: 'bottom',
                backgroundSize: 'cover',
            }}
        />

        {/* <motion.div
                className="z-30 text-white text-2xl md:text-4xl font-semibold p-8 mt-3"
                style={{ y: textY }}
        >
                <p>This text is on top of everything.</p>
        </motion.div> */}

    </div>
  )
}

export default MultiLayerParallax
