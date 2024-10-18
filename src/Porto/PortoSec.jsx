import { motion, useInView } from "framer-motion";
import "../App.css";
import c1 from "./cactus1.png";
import c2 from "./cactus2.png";
import b1 from "./bird.png";
import b2 from "./bird2.png";
import js from "./JavaScript.png";
import html from "./Html.png";
import php from "./PHP.png";
import react from "./React.png";
import { useEffect, useRef } from "react";
import { h1, img } from "framer-motion/client";

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
  const refclip1 = useRef(false);
  const refclip2 = useRef(false);
  const skill = [
    {
      name: "css",
      img: html,
      value: 80,
    },
    {
      name: "javascript",
      img: js,
      value: 90,
    },
    {
      name: "php",
      img: php,
      value: 80,
    },
    {
      name: "react",
      img: react,
      value: 90,
    },
  ];
  const experience = [
    {
      position: "It Support",
      institution:"Poltekkes Kemenkes Jakarta 3",
      duration_job:"14 Agu 2023 - 14 Dec 2024",
      as_work_position:"intern",
      do_work:["Manage website and make loan vehicle development",
        "Problem solving hardware and computer"
      ]
    }
  ]
  const clipBird = () => {
    let currentClip = b1;
    let currentClip1 = b1;
    let currentClip2 = b1;
    setInterval(() => {
      refclip.current.style.backgroundImage = `url(${currentClip})`;
      currentClip = currentClip === b1 ? b2 : b1;
    }, 100); // 500ms = 0.5s
    setInterval(() => {
      refclip1.current.style.backgroundImage = `url(${currentClip})`;
      currentClip1 = currentClip1 === b1 ? b2 : b1;
    }, 100);
    setInterval(() => {
      refclip2.current.style.backgroundImage = `url(${currentClip})`;
      currentClip2 = currentClip2 === b1 ? b2 : b1;
    }, 100); 
  };
  const clipBirds = () => {
    let currentClip = b1;
    setInterval(() => {
      document.documentElement.style.cursor = `url(${currentClip}), auto`;
      currentClip = currentClip === b1 ? b2 : b1;
    }, 100);
  };
  useEffect(() => {
    clipBird();
    clipBirds();
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
      <section className="text-center my-10 text-[#535353] h-screen w-screen flex flex-col justify-center">
        <motion.ul animate="close" className="relative" variants={list}>
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
            ref={refclip1}
            className="bg-cover bg-center  w-[80px] h-[90px]  absolute  -inset-[200px]  mx-auto"
          />
              <motion.li
            variants={item}
            transition={{ ease: "easeInOut", duration: 0.8 }}
            whileInView={"open"}
            ref={refclip}
            className="bg-cover bg-center  w-[80px] h-[90px]  absolute  -inset-[250px] left-10 mx-auto"
          />
           <motion.li
            variants={item}
            transition={{ ease: "easeInOut", duration: 0.8 }}
            whileInView={"open"}
            ref={refclip2}
            className="bg-cover bg-center  w-[80px] h-[90px]  absolute  -inset-[120px] left-10 mx-auto"
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

        <ul className="flex mx-auto gap-4  ">
          {skill.map((result) => (
            <li className=" ring-2 ring-[#535353]   rounded-[21px] w-[130px]  ">
              <img className="w-full" src={result.img} alt="js" srcset="" />
              <p className="font-['vt323'] font-bold py-4 text-[2rem]">
                {result.name}
              </p>
            </li>
          ))}
        </ul>

        <motion.h1
          initial={{ y: 70, opacity: 0 }}
          whileInView={{ y: -70, opacity: 1 }}
          transition={{ ease: "easeInOut", duration: 0.6 }}
          className="font-['vt323'] my-[5rem] -mb-[70px] text-[73px] uppercase tracking-[0.2em]"
        >
          Skill.
        </motion.h1>

        <ul className="flex mx-auto gap-4  ">
          {skill.map((result) => (
            <li className=" ring-2 ring-[#535353]   rounded-[16px] w-[130px]  ">
              <p className="font-['vt323'] font-bold py-0 text-[2rem]">
                {result.value}%
              </p>
            </li>
          ))}
        </ul>
      </section>
      <section className=" text-[#535353] h-screen w-screen flex flex-col justify-center">
      <motion.ul className="relative" animate="close" variants={list}>
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
      <ul className="flex mx-auto gap-4  ">
          {experience.map((result) => (
            <li className=" ring-2 ring-[#535353] px-3 py-4  rounded-[16px] w-[340px]  ">
              <h1 className="font-['vt323'] font-bold text-[2rem]">
                {result.position}({result.as_work_position})
              </h1>
              <h2 className="font-['vt323'] font-bold -mt-2 text-[1.5rem]">{result.institution}</h2>
              <h2 className="font-['vt323'] font-medim -mt-2 text-[1.2rem]">{result.duration_job}</h2>
              <ul className="font-['vt323'] text-[1.3rem] list-disc list-inside text-wrap">
                 {result.do_work.map((res_do_work)=>
                <li >
                 {res_do_work} 
          
                  </li>
                )}
              </ul>
            </li>
          ))}
        </ul>

        <motion.h1
          initial={{ y: 70, opacity: 0 }}
          whileInView={{ y: -70, opacity: 1 }}
          transition={{ ease: "easeInOut", duration: 0.6 }}
          className="font-['vt323'] text-center my-[5rem] -mb-[70px] text-[73px] uppercase tracking-[0.2em]"
        >
          Experience.
        </motion.h1>
      </section>
      <section className="text-center text-[#535353] h-screen w-screen flex flex-col justify-center">
      <motion.ul className="relative" animate="close" variants={list}>
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
      <ul className="flex mx-auto gap-4  ">
          {experience.map((result) => (
            <li className=" ring-2 ring-[#535353] px-3 py-4  rounded-[16px] w-[340px]  ">
              <h1 className="font-['vt323'] font-bold text-[2rem]">
                {result.position}({result.as_work_position})
              </h1>
              <h2 className="font-['vt323'] font-bold -mt-2 text-[1.5rem]">{result.institution}</h2>
              <h2 className="font-['vt323'] font-medim -mt-2 text-[1.2rem]">{result.duration_job}</h2>
              <ul className="font-['vt323'] text-[1.3rem] list-disc list-inside text-wrap">
                 {result.do_work.map((res_do_work)=>
                <li >
                 {res_do_work} 
          
                  </li>
                )}
              </ul>
            </li>
          ))}
        </ul>
        <motion.h1
          initial={{ y: 70, opacity: 0 }}
          whileInView={{ y: -70, opacity: 1 }}
          transition={{ ease: "easeInOut", duration: 0.6 }}
          className="font-['vt323'] my-[5rem] -mb-[70px] text-[73px] uppercase tracking-[0.2em]"
        >
          Project.{" "}
        </motion.h1>
      </section>
      <footer className="w-full font-['vt323'] bg-[#535353] h-auto]">
        <div className="">
          <h1 className="text-[white]">Surahmat</h1>
        </div>
      </footer>
    </div>
  );
}

export default PortoSec;
