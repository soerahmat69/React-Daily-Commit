import { motion, useMotionValue, useTransform, animate, useInView } from "framer-motion";
import { useEffect, useRef } from "react";
import React from 'react'

export const TextAnimCountDown = ({lastCount}) => {
  const count = useMotionValue(0)
  const ref = useRef(null);
  const rounded = useTransform(count, latest => Math.round(latest))
  const isInView = useInView(ref, { once: false });

  useEffect(() => {
    let controls 
    if (isInView) {
      controls = animate(count, lastCount,{duration:4,})
    }else{
    controls = animate(count, 0,{duration:1,})
    }
    return () => controls.stop()
  }, [isInView])
  
  return <span>
    <motion.span ref={ref}>{rounded}</motion.span>
    </span>
}

export default function TextAnim({ baseText }) {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));
  const displayText = useTransform(rounded, (latest) =>
    baseText.slice(0, latest)
  );

  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });

  useEffect(() => {
    let controls;
    if (isInView) {
      controls = animate(count, baseText.length, {
        type: "tween",
        duration: 3,
        ease: "easeInOut",
      });
    } else {
      controls = animate(count, 0, {
        type: "tween",
        duration: 1,
        ease: "easeInOut",
      });
    }

    return () => controls?.stop();
  }, [isInView]);

  return (
    <span ref={ref}>
      <motion.span>{displayText}</motion.span>
    </span>
  );
}
