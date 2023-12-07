import css from "../assets/stack/css-min.png";
import aws from "../assets/stack/aws-min.png";
import express from "../assets/stack/express-js.webp";
import git from "../assets/stack/git-min.png";
import html from "../assets/stack/html-min.png";
import javascript from "../assets/stack/javascript.webp";
import mongodb from "../assets/stack/md-min.png";
import mui from "../assets/stack/mui-min.png";
import nextjs from "../assets/stack/next-js.webp";
import postgress from "../assets/stack/Postgresql_elephant.svg-min.png";
import react from "../assets/stack/react-js.webp";
import tailwindcss from "../assets/stack/tailwindcss.webp";
import typescript from "../assets/stack/typescript.webp";
const Skills = () => {
  return (
    <>
     <h1 id="skills" className=' pt-20 text-4xl font-bold text-center'>Skills</h1>
     <p className="text-[#6d6a7c] text-center mt-2">My Technical Skills</p>
      <div className=" max-w-[968px] select-none mt-14 mx-auto md:px-0 px-4 flex flex-wrap gap-20  items-center justify-center">
        <img className="sm:w-[80px] w-[60px] hover:scale-125 duration-1000" src={nextjs} alt="next.js" />
        <img  className="sm:w-[80px] w-[60px] hover:scale-125 duration-1000" src={express} alt="express" />
        <img  className="sm:w-[80px] w-[60px] hover:scale-125 duration-1000" src={javascript} alt="javascript" />
        <img  className="sm:w-[80px] w-[60px] hover:scale-125 duration-1000" src={css} alt="css" />
        <img  className="sm:w-[80px] w-[60px] hover:scale-125 duration-1000" src={react} alt="react" />
        <img  className="sm:w-[80px] w-[60px] hover:scale-125 duration-1000" src={tailwindcss} alt="tailwindcss" />
        <img  className="sm:w-[80px] w-[60px] hover:scale-125 duration-1000" src={typescript} alt="typescript" />
        <img  className="sm:w-[80px]  w-[60px] hover:scale-125 duration-1000" src={aws} alt="aws" />
        <img  className="sm:w-[80px]  w-[60px] hover:scale-125 duration-1000" src={postgress} alt="postgress" />
        <img  className="sm:w-[80px]  w-[60px] hover:scale-125 duration-1000" src={mongodb} alt="mongodb" />
        <img  className="sm:w-[80px]  w-[60px] hover:scale-125 duration-1000" src={git} alt="git" />
        <img  className="sm:w-[80px]  w-[60px] hover:scale-125 duration-1000" src={html} alt="html" />
        <img  className="sm:w-[80px]  w-[60px] hover:scale-125 duration-1000" src={mui} alt="mui" />
      </div>
    </>
  )
}

export default Skills
