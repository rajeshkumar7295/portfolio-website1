
import rajesh from "../assets/raj-min.jpg";
import resume from "../assets/resume.pdf";
import { FaFileDownload } from "react-icons/fa";
const About = () => {
  return (
    <>
    

      <h1 id="about" className='select-none  text-4xl pt-32 font-bold text-center'>About Me</h1>
      <p className="text-[#6d6a7c] text-center mt-2">My introduction</p>
      <div className="flex items-center sm:flex-row flex-col mt-10 mb-40 gap-20 justify-center">
        <img className="w-[250px]" src={rajesh} alt="rajesh" />
        <div className="sm:w-[30%] w-[80%] text-center flex flex-col md:items-start items-center sm:text-justify text-[#6d6a7c] sm:text-[15px] lg:text-[16px] font-Poppins">
       <p>
       Hey there,👋 I'm Rajesh a 21-year-old  who is passionate about Software Development, UI/UX Design and Product Management. Currently, I'm pursuing my career as a Full Stack Web Developer. I share my learnings through speaking engagements and write-ups. ✍🏻
        </p>
        <button className="text-white bg-[#6E57E0] w-fit px-8 flex gap-2 items-center md:text-start text-center py-3 rounded-md mt-4 font-bold " onClick={()=> window.open(resume)} >Resume
        <FaFileDownload />
        </button>
        </div>
      </div>
    
    </>
  )
}

export default About;
