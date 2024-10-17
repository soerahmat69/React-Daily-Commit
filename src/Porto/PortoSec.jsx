import { motion, useInView } from "framer-motion";
import "../App.css";
import c1 from "./cactus1.png";
import c2 from "./cactus2.png";
import b1 from "./bird.png";
import b2 from "./bird2.png";
import c3 from "./cactus3.png";
import { useEffect, useRef } from "react";

function PortoSec() {
  document.title = "Portoku";
  const list = {
    hidden: {
      transition: {
        // type: "spring",
        // bounce: 0,
        // duration: 0.7,
        delayChildren: 1.8,
        staggerChildren: 0.1,
      },
    },
  };
  const item = { open: { y: -15, opacity: 1 }, close: { y: 15, opacity: 0 } };
  const refclip = useRef(false);
  const clipBird = () => {
    let currentClip = b1;
    setInterval(() => {
      refclip.current.style.backgroundImage = `url(${currentClip})`;
      currentClip = currentClip === b1 ? b2 : b1;
    }, 100); // 500ms = 0.5s
  };
  useEffect(() => {
    clipBird();
  }, []);
  return (
    <div className=" overflow-x-hidden">
      <section className="text-center text-[#535353] h-screen w-screen flex flex-col justify-center">
        <motion.ul animate="close" variants={list}>
          <motion.li
            initial={"close"}
            variants={item}
            transition={{ ease: "easeInOut", duration: 0.8 }}
            whileInView={"open"}
            style={{ backgroundImage: `url(${c1})` }}
            className="bg-cover bg-center  w-[60px] h-[140px]  absolute top-20 left-20"
          />
             <motion.li
            variants={item}
            transition={{ ease: "easeInOut", duration: 0.8 }}
            whileInView={"open"}
            ref={refclip}
           
         
            className="bg-cover bg-center  w-[60px] h-[70px]  absolute bottom-[10px] left-[220px]"
          />
          <motion.li
            variants={item}
            transition={{ ease: "easeInOut", duration: 0.8 }}
            whileInView={"open"}
            style={{ backgroundImage: `url(${c2})` }}
            className="bg-cover bg-center  w-[50px] h-[120px]  absolute bottom-[180px] left-[220px]"
          />
          <motion.li
            variants={item}
            transition={{ ease: "easeInOut", duration: 0.8 }}
            whileInView={"open"}
            style={{ backgroundImage: `url(${c2})` }}
            className="bg-cover bg-center w-[60px] h-[140px] absolute bottom-20 right-20"
          />
        </motion.ul>

        <motion.h1
          initial={{ y: 70, opacity: 0 }}
          whileInView={{ y: -70, opacity: 1 }}
          transition={{ ease: "easeInOut", duration: 0.6 }}
          className="font-['vt323'] -mb-[70px] text-[93px] uppercase tracking-[0.2em]"
        >
          Fullstack Web Dev.
        </motion.h1>
        <motion.h2
          initial={{ y: 10, opacity: 0 }}
          whileInView={{ y: -10, opacity: 1 }}
          transition={{ ease: "easeInOut", duration: 0.6 }}
          className="font-['vt323'] -mt-5 text-[43px] uppercase tracking-[0.2em]"
        >
          Surahmat
        </motion.h2>

        <motion.h2
          initial={{ y: -10, opacity: 0 }}
          whileInView={{ y: 10, opacity: 1 }}
          transition={{ ease: "easeInOut", duration: 0.6 }}
          className="font-['vt323'] text-[23px] -mt-4 cursor-pointer underline tracking-[0.2em]"
        >
          Download CV
        </motion.h2>
      </section>
      <section className="text-center text-[#535353] h-screen w-screen flex flex-col justify-center">
        <motion.h1
          initial={{ y: 70, opacity: 0 }}
          whileInView={{ y: -70, opacity: 1 }}
          transition={{ ease: "easeInOut", duration: 0.6 }}
          className="font-['vt323'] -mb-[70px] text-[73px] uppercase tracking-[0.2em]"
        >
          Skill.
        </motion.h1>
      </section>
      <section className="text-center text-[#535353] h-screen w-screen flex flex-col justify-center">
        <motion.h1
          initial={{ y: 70, opacity: 0 }}
          whileInView={{ y: -70, opacity: 1 }}
          transition={{ ease: "easeInOut", duration: 0.6 }}
          className="font-['vt323'] -mb-[70px] text-[73px] uppercase tracking-[0.2em]"
        >
          Experience.
        </motion.h1>
      </section>
      <section className="text-center text-[#535353] h-screen w-screen flex flex-col justify-center">
        <motion.h1
          initial={{ y: 70, opacity: 0 }}
          whileInView={{ y: -70, opacity: 1 }}
          transition={{ ease: "easeInOut", duration: 0.6 }}
          className="font-['vt323'] -mb-[70px] text-[73px] uppercase tracking-[0.2em]"
        >
        Project.        </motion.h1>
      </section>
    </div>
  );
}

export default PortoSec;
