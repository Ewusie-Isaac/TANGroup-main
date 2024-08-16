'use client';
import {
  motion,
  useInView,
  useAnimation,
  AnimatePresence,
  easeIn,
} from 'framer-motion';
import React, { useEffect, useRef } from 'react';

const Wrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const controls = useAnimation();
  useEffect(() => {
    if (inView) {
      // Do something when element enters the viewport
      controls.start('visible');
    } else {
      // Do something when element leaves the viewport
    }
  }, [inView]);
  return (
    <div ref={ref}>
      <AnimatePresence>
        <motion.div
          variants={{
            hidden: { opacity: 0, y: 75 },
            visible: { opacity: 1, y: 0 },
          }}
          // initial={{ opacity: 0, y: 15 }}
          // animate={{ opacity: 1, y: 0 }}
          initial="hidden"
          animate={controls}
          transition={{ delay: 0.25, ease: easeIn, duration: 0.25 }}
        >
          {children}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default Wrapper;
