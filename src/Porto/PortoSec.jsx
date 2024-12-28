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
import thumb from "./thumbnail.png";
import { useEffect, useRef, useState } from "react";
import { h1, img } from "framer-motion/client";
import TextAnim, { TextAnimCountDown } from "./Component/TextAnim";
import { SkillMed, SkillSmall } from "./Skill";
import { Link, useNavigate } from "react-router-dom";

export const BirdClip = ({ item, classname }) => {
  const refclip = useRef(false);
  const clipBird = () => {
    let currentClip = b1;
    setInterval(() => {
      refclip.current.style.backgroundImage = `url(${currentClip})`;
      currentClip = currentClip === b1 ? b2 : b1;
    }, 500); // 500ms = 0.5s
  };
  // useEffect(() => {
  //   clipBird();
  // }, []);
   clipBird()
  return (
    <motion.li
      variants={item}
      transition={{ ease: "easeInOut", duration: 0.8 }}
      whileInView={"open"}
      ref={refclip}
      className={classname}
    />
  );
};

function PortoSec() {
  document.title = "Portoku";
  const [countSkills, setCountSkills] = useState({ skillUP: 2, skillDown: 4 });
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
  const listSkill = {
    open: {
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.5,
        delayChildren: 0.8,
      },
    },
    closed: {
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.5,
        delayChildren: 0.8,
      },
    },
  };
  const item = { open: { y: -15, opacity: 1 }, close: { y: 15, opacity: 0 } };
  const itemSkill = {
    open: { opacity: 1, x: 0 },
    closed: { opacity: 0, x: -100 },
  };
  const refclip = useRef(false);
const navigate = useNavigate
  // const navigo = (param)=> navigate(param)
  
  const experience = [
    {
      position: "It Support",
      institution: "Poltekkes Kemenkes Jakarta 3",
      duration_job: "14 Agu 2023 - 14 Dec 2024",
      as_work_position: "intern",
      do_work: [
        "Manage website and make loan vehicle development",
        "Problem solving hardware and computer",
      ],
    },
  ];
  const projects = [
    {
      project_name: "BEROTOT",
      image_url: "",
      link_preview: "https://musclemassapp.vercel.app",
      link_dev: "https://github.com/berotot",
      position: "fullstack",
      desc_project:
        "This website is designed as a fitness training platform utilizing a decision-making system.",
      tech: ["reactjs", "tailwindcss", "expressjs", "mongodb"],
    },
   
    {
      project_name: "MYUSIX",
      image_url: "",
      position: "frontend",
      link_preview: "https://myusix.vercel.app/",
      link_dev: "https://github.com/berotot",
      desc_project:
        "This website is built to listen to selected music using a single page, can do next music and pause",
      tech: ["react", "tailwindcss"],
    },
    {
      project_name: "MEDCOW",
      image_url: "",
      
      link_preview: "https://soerahmat69.github.io/MEDCOW/",
      link_dev: "https://github.com/berotot",
      position: "frontend",
      desc_project:
        "This website identifies diseases in cattle by looking at the symptoms experienced by cows using dataset type json.",
      tech: ["html", "tailwindcss", "javascript"],
    },
    {
      project_name: "HCLOMSTCHA",
      image_url: "",
      position: "fullstack",
      desc_project:
        "This website is built for the rental of anime costumes (cosplay), this website implements the cost of sending loans using many services that have been provided by Rajaongkir",
      tech: ["reactjs", "tailwindcss", "expressjs", "mysql"],
    },
  ];

  const skill = [
    {
      name: "tailwindcss",
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
    {
      name: "vue",
      img: react,
      value: 90,
    },
  ];

  const screenWidth = window.innerWidth;
  useEffect(() => {
    return ()=>{
    if (screenWidth >= 1280) {
      // Tailwind's xl breakpoint

      setCountSkills({ ...countSkills, skillUP: 2,skillDown:5 });
    } else if (screenWidth >= 768) {
      // Tailwind's md breakpoint

      setCountSkills({ ...countSkills, skillUP: 2,skillDown:5 });
      
    } else {
      setCountSkills({ ...countSkills, skillUP: 1,skillDown:3 });
      // Tailwind's sm and below 
    }
  }
  }, [screenWidth]);

  const clipBirds = () => {
    let currentClip = b1;
    setInterval(() => {
      document.documentElement.style.cursor = `url(${currentClip}), auto`;
      currentClip = currentClip === b1 ? b2 : b1;
    }, 100);
  };

  return (
    <main className=" overflow-x-hidden lg:mx-auto">
      <section className="text-center text-[#535353] h-screen w-screen flex flex-col justify-center">
        <motion.ul animate="close" variants={list}>
          <motion.li
            initial={"close"}
            variants={item}
            transition={{ ease: "easeInOut", duration: 0.8 }}
            whileInView={"open"}
            style={{ backgroundImage: `url(${c1})` }}
            className="bg-cover bg-center  md:w-[60px] w-[50px] h-[110px] md:h-[140px]  absolute top-20 left-20"
          />

          <motion.li
            variants={item}
            transition={{ ease: "easeInOut", duration: 0.8 }}
            whileInView={"open"}
            style={{ backgroundImage: `url(${c2})` }}
            className="bg-cover bg-center  md:w-[60px] w-[50px] h-[110px] md:h-[140px]  absolute bottom-[180px] right-[20px] md:left-[220px]"
          />
        
        </motion.ul>

        <motion.h1
          initial={{ y: 70, opacity: 0 }}
          whileInView={{ y: -70, opacity: 1 }}
          transition={{ ease: "easeInOut", duration: 0.6 }}
          className="font-['Press_Start_2P'] -mb-[60px] text-[2rem] md:text-[2.7rem] xl:text-[3.5rem] uppercase tracking-[0.2em]"
        >
          Fullstack Web Dev.
        </motion.h1>
        <motion.p
          initial={{ y: 10, opacity: 0 }}
          whileInView={{ y: -10, opacity: 1 }}
          transition={{ ease: "easeInOut", duration: 0.6 }}
          className="font-['Press_Start_2P'] sm:text-[2rem] text-[1.3rem] font-light uppercase tracking-[0.2em]"
        >
          Surahmat
        </motion.p>

        <motion.h2
          initial={{ y: -10, opacity: 0 }}
          whileInView={{ y: 10, opacity: 1 }}
          transition={{ ease: "easeInOut", duration: 0.6 }}
          className="font-['Press_Start_2P'] text-[0.8rem] md:text-[1rem] -mt-4 cursor-pointer underline tracking-[0.2em]"
        >
          Download CV
        </motion.h2>
      </section>

      <section className="text-center my-10 text-[#535353] h-screen md:h-screen w-screen flex flex-col justify-center">
        <motion.ul animate="close" className="relative" variants={list}>
          <motion.li
            initial={"close"}
            variants={item}
            transition={{ ease: "easeInOut", duration: 0.8 }}
            whileInView={"open"}
            style={{ backgroundImage: `url(${c1})` }}
            className="bg-cover bg-center  md:w-[60px] w-[50px] h-[110px] md:h-[140px]  absolute top-20  left-12"
          />

          <BirdClip
            item={item}
            classname={`bg-cover bg-center  md:w-[60px] w-[50px] h-[60px] md:h-[70px]  absolute  -inset-[200px]  mx-auto`}
          />
          <BirdClip
            item={item}
            classname={`bg-cover bg-center  md:w-[60px] w-[50px] h-[60px] md:h-[70px]  absolute  -inset-[250px] left-10 mx-auto`}
          />
          <BirdClip
            item={item}
            classname={`bg-cover bg-center  md:w-[60px] w-[50px] h-[60px] md:h-[70px]  absolute  -inset-[120px] left-10 mx-auto`}
          />

          <motion.li
            variants={item}
            transition={{ ease: "easeInOut", duration: 0.8 }}
            whileInView={"open"}
            style={{ backgroundImage: `url(${c2})` }}
            className="bg-cover bg-center  md:w-[60px] w-[50px] h-[110px] md:h-[140px]  absolute bottom-[180px] left-[220px]"
          />

          
        </motion.ul>

 
  <SkillSmall  listSkill={listSkill} itemSkill={itemSkill} position={"top"} />
 
 
  <SkillMed  listSkill={listSkill} itemSkill={itemSkill} position={"top"} />
 

        <motion.h1
          initial={{ y: 70, opacity: 0 }}
          whileInView={{ y: -70, opacity: 1 }}
          transition={{ ease: "easeInOut", duration: 0.6 }}
          className="font-['Press_Start_2P'] my-[5rem] -mb-[70px] text-[2.6rem] md:text-[3.6rem] uppercase tracking-[0.2em]"
        >
          Skill
        </motion.h1>

        <SkillSmall  listSkill={listSkill} itemSkill={itemSkill} position={"bot"} />
        <SkillMed  listSkill={listSkill} itemSkill={itemSkill} position={"bot"} />

      </section>

      <section className=" text-[#535353] h-screen w-screen flex flex-col justify-center">
        <motion.ul className="relative" animate="close" variants={list}>
          <motion.li
            initial={"close"}
            variants={item}
            transition={{ ease: "easeInOut", duration: 0.8 }}
            whileInView={"open"}
            style={{ backgroundImage: `url(${c1})` }}
            className="bg-cover bg-center  md:w-[60px] w-[50px] h-[110px] md:h-[140px]  absolute -top-24 left-20"
          />

          <BirdClip
            item={item}
            classname={`bg-cover bg-center  md:w-[60px] w-[50px] h-[60px] md:h-[70px]  absolute bottom-[10px] left-[220px]`}
          />
          <motion.li
            variants={item}
            transition={{ ease: "easeInOut", duration: 0.8 }}
            whileInView={"open"}
            style={{ backgroundImage: `url(${c2})` }}
            className="bg-cover bg-center   md:w-[60px] w-[50px] h-[110px] md:h-[140px]  absolute bottom-[180px] left-[220px]"
          />

          <motion.li
            variants={item}
            transition={{ ease: "easeInOut", duration: 0.8 }}
            whileInView={"open"}
            style={{ backgroundImage: `url(${c2})` }}
            className="bg-cover bg-center  md:w-[60px] w-[50px] h-[110px] md:h-[140px] absolute bottom-20 left-10"
          />
        </motion.ul>

        <motion.ul
          initial="closed"
          whileInView="open"
          variants={listSkill}
          className="flex mx-auto gap-4  "
        >
          {experience.map((result) => (
            <motion.li
              variants={itemSkill}
              style={{ borderColor: "#535353" }}
              className=" nes-container with-title  py-4   w-[350px]  "
            >
              <p className="title font-['Press_Start_2P']  text-[2rem]">
                4 Month
              </p>
              <h1 className="font-['Press_Start_2P']   text-[0.9rem]">
                <TextAnim
                  baseText={`${result.position}(${result.as_work_position})`}
                />
              </h1>

              <h2 className="font-['Press_Start_2P'] font-bold  text-[0.6rem]">
                <TextAnim baseText={`${result.institution}`} />
              </h2>
              <h2 className="font-['Press_Start_2P'] font-bold text-[0.5rem]">
                <TextAnim baseText={`${result.duration_job}`} />
              </h2>
              <ul className="  font-['Press_Start_2P'] text-[0.5rem]  nes-list is-circle">
                {result.do_work.map((res_do_work) => (
                  <li className="my-1">
                    <TextAnim baseText={`${res_do_work}`} />
                  </li>
                ))}
              </ul>
            </motion.li>
          ))}
        </motion.ul>

        <motion.h1
          initial={{ y: 70, opacity: 0 }}
          whileInView={{ y: -70, opacity: 1 }}
          transition={{ ease: "easeInOut", duration: 0.6 }}
          className="font-['Press_Start_2P'] text-center my-[5rem] -mb-[70px] text-[2rem] md:text-[3.3rem] uppercase tracking-[0.2em]"
        >
          Experience
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
            className="bg-cover bg-center   md:w-[60px] w-[50px] h-[110px] md:h-[140px]  absolute top-20 left-20"
          />
          <motion.li
            variants={item}
            transition={{ ease: "easeInOut", duration: 0.8 }}
            whileInView={"open"}
            ref={refclip}
            className="bg-cover bg-center   md:w-[60px] w-[50px] h-[110px] md:h-[140px]  absolute bottom-[10px] left-[220px]"
          />
          <motion.li
            variants={item}
            transition={{ ease: "easeInOut", duration: 0.8 }}
            whileInView={"open"}
            style={{ backgroundImage: `url(${c2})` }}
            className="bg-cover bg-center   md:w-[60px] w-[50px] h-[110px] md:h-[140px]  absolute bottom-[180px] left-[220px]"
          />
          <motion.li
            variants={item}
            transition={{ ease: "easeInOut", duration: 0.8 }}
            whileInView={"open"}
            style={{ backgroundImage: `url(${c2})` }}
            className="bg-cover bg-center  md:w-[60px] w-[50px] h-[110px] md:h-[140px] absolute bottom-20 right-20"
          />
        </motion.ul>

        <motion.ul
          initial="closed"
          whileInView="open"
          variants={listSkill}
          className="flex mx-auto gap-4  "
        >
          {projects.map((result) => (
            <motion.li 
            onClick={()=>navigate(result.link_preview)}
            variants={itemSkill} className="">
              {/* <Link to={result.link_preview}/> */}
              {/* <Link to={result.link_preview}> </Link> */}
                <div
           
                  style={{ borderColor: "#535353" }}
                  className="scale-[0.9] md:scale-[1] hover:scale-[1.2] transition-all delay-200  nes-container with-title  py-4   w-[19rem]"
                >
                  <a href={`${result.link_preview}`} rel="noopener noreferrer" target="_blank">
                    <p className="title decoration font-['Press_Start_2P'] text-[1rem]">
                  <TextAnim baseText={`${result.position} dev`} />
                </p>
                <div
                  style={{
                    borderColor: "#535353",
                    padding: "0px 0px 0px 0px",
                    backgroundImage: `url('${thumb}')`,
                  }}
                  className="nes-container  	 mb-4 flex flex-col justify-center w-full is-rounded   h-[16rem]  "
                >
                  <div className="w-full h-full bg-black opacity-60"></div>

                  <div className="absolute ">
                    <h1 className="font-['Press_Start_2P']  text-[0.9rem]  text-white">
                      <TextAnim baseText={`${result.project_name}`} />
                    </h1>
                    <p className="text-[0.6rem]   text-white">
                      <TextAnim baseText={result.desc_project} />
                    </p>
                  </div>
                </div>

                <ul
                  style={{
                    padding: "0 0 0 0",
                    borderColor: "red",
                    backgroundColor: "#535353",
                    marginTop: "10px",
                  }}
                  className=" w-full   nes-container is-rounded is-dark font-['Press_Start_2P'] flex"
                >
                  {result.tech.map((tech) => (
                    <li className="py-3 px-5 text-[0.5rem]  ">
                      <TextAnim baseText={`${tech}`} />
                    </li>
                  ))}
                </ul>
                </a>
              </div>

            </motion.li>
          ))}
        </motion.ul>

        <motion.h1
          initial={{ y: 70, opacity: 0 }}
          whileInView={{ y: -70, opacity: 1 }}
          transition={{ ease: "easeInOut", duration: 0.4 }}
          className="font-['Press_Start_2P'] text-center my-[5rem] -mb-[70px] text-[2rem] md:text-[3.3rem] uppercase tracking-[0.2em]"
        >
          Project
        </motion.h1>
      </section>

      <footer className="w-full  md:text-[1rem] text-[0.5rem] text-[white] py-10 px-10 md:px-40 font-['Press_Start_2P'] bg-[#535353] h-auto]">
        <div className="w-full ">
          <h1 className=" ">Surahmat</h1>
        </div>
        <div className="flex gap-4 ">
          <h2>Follow me: </h2> 
          <a
            className="w-4 md:w-6"
            href="https://github.com/soerahmat69"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
              <path
                fill="white"
                d="M448 96c0-35.3-28.7-64-64-64H64C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V96zM265.8 407.7c0-1.8 0-6 .1-11.6c.1-11.4 .1-28.8 .1-43.7c0-15.6-5.2-25.5-11.3-30.7c37-4.1 76-9.2 76-73.1c0-18.2-6.5-27.3-17.1-39c1.7-4.3 7.4-22-1.7-45c-13.9-4.3-45.7 17.9-45.7 17.9c-13.2-3.7-27.5-5.6-41.6-5.6s-28.4 1.9-41.6 5.6c0 0-31.8-22.2-45.7-17.9c-9.1 22.9-3.5 40.6-1.7 45c-10.6 11.7-15.6 20.8-15.6 39c0 63.6 37.3 69 74.3 73.1c-4.8 4.3-9.1 11.7-10.6 22.3c-9.5 4.3-33.8 11.7-48.3-13.9c-9.1-15.8-25.5-17.1-25.5-17.1c-16.2-.2-1.1 10.2-1.1 10.2c10.8 5 18.4 24.2 18.4 24.2c9.7 29.7 56.1 19.7 56.1 19.7c0 9 .1 21.7 .1 30.6c0 4.8 .1 8.6 .1 10c0 4.3-3 9.5-11.5 8C106 393.6 59.8 330.8 59.8 257.4c0-91.8 70.2-161.5 162-161.5s166.2 69.7 166.2 161.5c.1 73.4-44.7 136.3-110.7 158.3c-8.4 1.5-11.5-3.7-11.5-8zm-90.5-54.8c-.2-1.5 1.1-2.8 3-3.2c1.9-.2 3.7 .6 3.9 1.9c.3 1.3-1 2.6-3 3c-1.9 .4-3.7-.4-3.9-1.7zm-9.1 3.2c-2.2 .2-3.7-.9-3.7-2.4c0-1.3 1.5-2.4 3.5-2.4c1.9-.2 3.7 .9 3.7 2.4c0 1.3-1.5 2.4-3.5 2.4zm-14.3-2.2c-1.9-.4-3.2-1.9-2.8-3.2s2.4-1.9 4.1-1.5c2 .6 3.3 2.1 2.8 3.4c-.4 1.3-2.4 1.9-4.1 1.3zm-12.5-7.3c-1.5-1.3-1.9-3.2-.9-4.1c.9-1.1 2.8-.9 4.3 .6c1.3 1.3 1.8 3.3 .9 4.1c-.9 1.1-2.8 .9-4.3-.6zm-8.5-10c-1.1-1.5-1.1-3.2 0-3.9c1.1-.9 2.8-.2 3.7 1.3c1.1 1.5 1.1 3.3 0 4.1c-.9 .6-2.6 0-3.7-1.5zm-6.3-8.8c-1.1-1.3-1.3-2.8-.4-3.5c.9-.9 2.4-.4 3.5 .6c1.1 1.3 1.3 2.8 .4 3.5c-.9 .9-2.4 .4-3.5-.6zm-6-6.4c-1.3-.6-1.9-1.7-1.5-2.6c.4-.6 1.5-.9 2.8-.4c1.3 .7 1.9 1.8 1.5 2.6c-.4 .9-1.7 1.1-2.8 .4z"
              />
            </svg>
          </a>
          <a
            className="w-4 md:w-6"
            href="https://www.linkedin.com/in/surahmat"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
              <path
                fill="white"
                d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"
              />
            </svg>
          </a>
          <a
            className="w-4 md:w-6"
            href="https://www.instagram.com/soxo_soerahmat"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
              <path
                fill="white"
                d="M194.4 211.7a53.3 53.3 0 1 0 59.3 88.7 53.3 53.3 0 1 0 -59.3-88.7zm142.3-68.4c-5.2-5.2-11.5-9.3-18.4-12c-18.1-7.1-57.6-6.8-83.1-6.5c-4.1 0-7.9 .1-11.2 .1c-3.3 0-7.2 0-11.4-.1c-25.5-.3-64.8-.7-82.9 6.5c-6.9 2.7-13.1 6.8-18.4 12s-9.3 11.5-12 18.4c-7.1 18.1-6.7 57.7-6.5 83.2c0 4.1 .1 7.9 .1 11.1s0 7-.1 11.1c-.2 25.5-.6 65.1 6.5 83.2c2.7 6.9 6.8 13.1 12 18.4s11.5 9.3 18.4 12c18.1 7.1 57.6 6.8 83.1 6.5c4.1 0 7.9-.1 11.2-.1c3.3 0 7.2 0 11.4 .1c25.5 .3 64.8 .7 82.9-6.5c6.9-2.7 13.1-6.8 18.4-12s9.3-11.5 12-18.4c7.2-18 6.8-57.4 6.5-83c0-4.2-.1-8.1-.1-11.4s0-7.1 .1-11.4c.3-25.5 .7-64.9-6.5-83l0 0c-2.7-6.9-6.8-13.1-12-18.4zm-67.1 44.5A82 82 0 1 1 178.4 324.2a82 82 0 1 1 91.1-136.4zm29.2-1.3c-3.1-2.1-5.6-5.1-7.1-8.6s-1.8-7.3-1.1-11.1s2.6-7.1 5.2-9.8s6.1-4.5 9.8-5.2s7.6-.4 11.1 1.1s6.5 3.9 8.6 7s3.2 6.8 3.2 10.6c0 2.5-.5 5-1.4 7.3s-2.4 4.4-4.1 6.2s-3.9 3.2-6.2 4.2s-4.8 1.5-7.3 1.5l0 0c-3.8 0-7.5-1.1-10.6-3.2zM448 96c0-35.3-28.7-64-64-64H64C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V96zM357 389c-18.7 18.7-41.4 24.6-67 25.9c-26.4 1.5-105.6 1.5-132 0c-25.6-1.3-48.3-7.2-67-25.9s-24.6-41.4-25.8-67c-1.5-26.4-1.5-105.6 0-132c1.3-25.6 7.1-48.3 25.8-67s41.5-24.6 67-25.8c26.4-1.5 105.6-1.5 132 0c25.6 1.3 48.3 7.1 67 25.8s24.6 41.4 25.8 67c1.5 26.3 1.5 105.4 0 131.9c-1.3 25.6-7.1 48.3-25.8 67z"
              />
            </svg>
          </a>
          <a
            className="w-4 md:w-6"
            href="https://www.linkedin.com/in/surahmat-azis-454a72238/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
              {" "}
              <path
                fill="white"
                d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48L48 64zM0 176L0 384c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-208L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z"
              />
            </svg>{" "}
          </a>
        </div>
        <h1 className="text-[0.8rem] mt-10 text-center">@Copyright in 2024</h1>
      </footer>
    </main>
  );
}

export default PortoSec;
