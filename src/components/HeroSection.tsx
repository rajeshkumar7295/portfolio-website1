import { FiLinkedin } from "react-icons/fi";
import { FiGithub } from "react-icons/fi";
import { CgMail } from "react-icons/cg";
import iconImage from "../assets/heroImage.png";
import { LuSendHorizonal } from "react-icons/lu";
import { Link } from 'react-router-dom';
import { useTypewriter } from "react-simple-typewriter";
const HeroSection = () => {

  const [typeEffect]=useTypewriter({
    words:[' am a Full Stack  Developer'] ,
    loop:false,
    typeSpeed:100,
    deleteSpeed:40

  })

  return (
    <div id="home" className="max-w-[968px] select-none  mb-40 mx-auto  sm:flex-row flex gap-20 lg:gap-32 sm:items-center  items-start pt-36">
      <div className="flex flex-col  items-start  pl-6 lg:pl-0 gap-6">
        <Link target='_blank' to={"https://github.com/rajeshkumar7295"} aria-label="github">

          <FiGithub className="text-[#6E57E0] text-2xl" />
        </Link>
        <Link target='_blank' to={"https://www.linkedin.com/in/rajesh-kumar-2b017718a/"} aria-label="linkedin">

          <FiLinkedin className="text-[#6E57E0] text-2xl" />
        </Link>
        <Link to={"mailto:rajeshkumar7295949483@gmail.com"} target="_blank" aria-label="gmail">

          <CgMail className="text-[#6E57E0] text-2xl" />
        </Link>
      </div>
      <div className="flex sm:justify-between lg:items-center gap-10 sm:left-0 flex-wrap  sm:flex-nowrap flex-col-reverse  sm:gap-10 sm:flex-row   lg:gap-20  ">
        <div className="flex flex-col gap-4">
          <p className="lg:text-6xl text-4xl font-Poppins font-bold">
            Hi, I'm Rajesh</p>
          <p className="text-[20px] font-Poppins font-semibold text-[#6D6A7C]"> I {typeEffect} </p>

          <p className="text-[#6D6A7C] mb-4 text-[16px] font-Poppins">
            Building Website to solve real life problems
          </p>
          <Link to={"/contact"} >
            <div className="bg-[#6E57E0] text-white w-fit items-center gap-4 px-4 py-4 font-bold rounded-md font-Poppins flex ">
              Contact Me
              <LuSendHorizonal />
            </div>
          </Link>
        </div>
        <div className="relative pr-4 md:pr-2" >
          <svg className="md:w-[300px] sm:w-[200px] w-[170px]  fill-[#6e57e0]" viewBox="0 0 200 187" xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink" data-tilt>
            <mask id="mask0" mask-type="alpha">
              <path d="M190.312 36.4879C206.582 62.1187 201.309 102.826 182.328 134.186C163.346 165.547 
                    130.807 187.559 100.226 186.353C69.6454 185.297 41.0228 161.023 21.7403 129.362C2.45775 
                    97.8511 -7.48481 59.1033 6.67581 34.5279C20.9871 10.1032 59.7028 -0.149132 97.9666 
                    0.00163737C136.23 0.303176 174.193 10.857 190.312 36.4879Z" />
            </mask>
            <g mask="url(#mask0)">
              <path d="M190.312 36.4879C206.582 62.1187 201.309 102.826 182.328 134.186C163.346 
                    165.547 130.807 187.559 100.226 186.353C69.6454 185.297 41.0228 161.023 21.7403 
                    129.362C2.45775 97.8511 -7.48481 59.1033 6.67581 34.5279C20.9871 10.1032 59.7028 
                    -0.149132 97.9666 0.00163737C136.23 0.303176 174.193 10.857 190.312 36.4879Z" />
            </g>
          </svg>
          <img className="md:w-[250px] sm:w-[160px] w-[140px] top-[11px] left-[23px] absolute z-10" src={iconImage} alt="cartoon image" />
        </div>
      </div>
    </div>
  )
}

export default HeroSection
