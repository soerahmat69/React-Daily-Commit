import React from 'react'
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
const skill = [
  {
    name: "react",
    img: react,
    value: 90,
  },
    {
      name: "javascript",
      img: js,
      value: 90,
    },
    
    {
      name: "tailwindcss",
      img: html,
      value: 80,
    },
    {
      name: "php",
      img: php,
      value: 80,
    },
  
    {
      name: "vue",
      img: react,
      value: 90,
    },
  ];
export const ProjectSmall = ({listSkill,itemSkill,position}) => {
    
  const [countSkills, setCountSkills] = useState({ skillUP: 0, skillDown: 1 });
    
  return (
    <>
      {position === "top" ? (
        <motion.ul
        initial="closed"
        whileInView="open"
        variants={listSkill}
        className="flex mx-auto gap-4 md:hidden "
      >
        {skill.map((result) =>
          skill.indexOf(result) <= countSkills.skillUP ? (
            <motion.li
         
              variants={itemSkill}
              style={{ borderColor: "#535353" }}
              className=" nes-container   w-[190px] with-title  "
            >
              <p className=" title font-['Press_Start_2P']  text-center text-[0.9rem] ">
                <TextAnimCountDown lastCount={result.value} /> %
              </p>
              <img className="w-full" src={result.img} alt="js" srcset="" />
              <p className=" font-bold font-['Press_Start_2P']  text-center text-[0.9rem] ">
                <TextAnim baseText={result.name} />
              </p>
            </motion.li>
          ) : (
            ""
          )
        )}
      </motion.ul>
      ) : (
        <motion.ul
        initial="closed"
        whileInView="open"
        variants={listSkill}
        className="flex mx-auto gap-4 md:hidden  "
      >
        {skill.map((result) =>
          skill.indexOf(result) > countSkills.skillUP && skill.indexOf(result) <= countSkills.skillDown ? (
            <motion.li
         
              variants={itemSkill}
              style={{ borderColor: "#535353" }}
              className=" nes-container   w-[190px] with-title  "
            >
              <p className=" title font-['Press_Start_2P']  text-center text-[0.9rem] ">
                <TextAnimCountDown lastCount={result.value} /> %
              </p>
              <img className="w-full" src={result.img} alt="js" srcset="" />
              <p className=" font-bold font-['Press_Start_2P']  text-center text-[0.9rem] ">
                <TextAnim baseText={result.name} />
              </p>
            </motion.li>
          ) : (
            ""
          )
        )}
      </motion.ul>
      )}
    </>
  );
}

export const SkillMed = ({listSkill,itemSkill,position}) => {
    
    const [countSkills, setCountSkills] = useState({ skillUP: 2, skillDown: 5 });
      
    return (
      <>
        {position === "top" ? (
          <motion.ul
          initial="closed"
          whileInView="open"
          variants={listSkill}
          className="hidden md:flex mx-auto gap-4   "
        >
          {skill.map((result) =>
            skill.indexOf(result) <= countSkills.skillUP ? (
              <motion.li
           
                variants={itemSkill}
                style={{ borderColor: "#535353" }}
                className=" nes-container   w-[190px] with-title  "
              >
                <p className=" title font-['Press_Start_2P']  text-center text-[0.9rem] ">
                  <TextAnimCountDown lastCount={result.value} /> %
                </p>
                <img className="w-full" src={result.img} alt="js" srcset="" />
                <p className=" font-bold font-['Press_Start_2P']  text-center text-[0.9rem] ">
                  <TextAnim baseText={result.name} />
                </p>
              </motion.li>
            ) : (
              ""
            )
          )}
        </motion.ul>
        ) : (
          <motion.ul
          initial="closed"
          whileInView="open"
          variants={listSkill}
          className="hidden md:flex  mx-auto gap-4    "
        >
          {skill.map((result) =>
            skill.indexOf(result) > countSkills.skillUP && skill.indexOf(result) <= countSkills.skillDown ? (
              <motion.li
           
                variants={itemSkill}
                style={{ borderColor: "#535353" }}
                className=" nes-container   w-[190px] with-title  "
              >
                <p className=" title font-['Press_Start_2P']  text-center text-[0.9rem] ">
                  <TextAnimCountDown lastCount={result.value} /> %
                </p>
                <img className="w-full" src={result.img} alt="js" srcset="" />
                <p className=" font-bold font-['Press_Start_2P']  text-center text-[0.9rem] ">
                  <TextAnim baseText={result.name} />
                </p>
              </motion.li>
            ) : (
              ""
            )
          )}
        </motion.ul>
        )}
      </>
    );
  }
