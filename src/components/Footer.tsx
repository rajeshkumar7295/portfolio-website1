import { Link } from "react-router-dom";
import { FiLinkedin } from "react-icons/fi";
import { FiGithub } from "react-icons/fi";
import { CgMail } from "react-icons/cg";
const Footer = () => {
  const  footerLink=[
    {
        name:"About",
        path:"/about"
    },
    {
        name:"Projects",
        path:"/project"
    },
    {
        name:"Contact Me",
        path:"/contact"
    }

  ]
    
  return (
    <>
     <div className='bg-[#6e57e0]'>
        <div  className="max-w-[768px] mx-auto gap-8 grid md:grid-cols-3 grid-cols-2 px-6 md:px-0  py-16">
          <div className='flex flex-col text-white'>
           <p className="font-Poppins text-2xl sm:mb-0 mb-2 font-extrabold">Rajesh Kumar</p>
           <p>Full Stack Developer</p>
          </div>
          <ul className="flex md:flex-row flex-col gap-8">
             {
                footerLink.map((ele,i)=>(
                    <li key={i}>
                        
                            <Link className=" text-white hover:text-blue-200" to={ele.path}>{ele.name}</Link>
                        
                    </li>
                ))
             }
          </ul>
          <div className="flex gap-6 justify-start md:justify-end">
        <Link target='_blank' to={"https://github.com/rajeshkumar7295"} aria-label="github">

          <FiGithub className="text-white text-xl hover:text-blue-200" />
        </Link>
        <Link target='_blank' to={"https://www.linkedin.com/in/rajesh-kumar-2b017718a/"} aria-label="linkedin">

          <FiLinkedin className="text-white text-xl hover:text-blue-200" />
        </Link>
        <Link to={"mailto:rajeshkumar7295949483@gmail.com"} target="_blank" aria-label="gmail">

          <CgMail className="text-white text-xl hover:text-blue-200" />
        </Link>
      </div>
        </div>
        <p className="text-[#a19fad] text-center pb-10">&#169; Rajesh Kumar. All rights reserved</p>

     </div>
    </>
  )
}

export default Footer
