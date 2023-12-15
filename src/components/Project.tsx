import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation } from 'swiper/modules';
import project1 from "../assets/project/project1-min.png";
import project2 from "../assets/project/project2-min.png";
import project3 from "../assets/project/project3-min.png";
import { BiRightArrowAlt } from "react-icons/bi";
import { Link } from 'react-router-dom';

const Project = () => {
  return (
    <>
      <h1 id='project' className=' pt-20 text-3xl sm:text-3xl font-bold text-center'>Projects</h1>
      <p className="text-[#6d6a7c] text-center mt-2">Most recent work</p>
      <div className=' max-w-[968px] mx-auto my-10 select-none' >

        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          loop={true}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Pagination, Navigation]}
          className="mySwiper h-[650px] sm:h-[300px]"
        >
          <SwiperSlide className='flex items-center flex-col sm:flex-row gap-16 justify-center '>
            

            <img className='w-[250px] md:w-[300px]'  src={project1} alt="StudyNotion" />
            
            <div className='w-[40%]'>
               <h1 className='md:text-3xl text-2xl  font-extrabold mb-6'>StudyNotion</h1>
            <p className='text-[#6d6a7c] font-Poppins font-semibold text-[16px]'>This is a content-driven website for student.It is built using React.js, mongo DB, Express.js and Node.js</p>
            <Link target='_blank' to={"https://studynotion-frontend-alpha.vercel.app"} >
            <div className="bg-[#6E57E0] mt-4 text-white w-fit items-center gap-4 px-4 py-4 font-semibold rounded-md font-Poppins flex ">
              check out
              <BiRightArrowAlt/>
            </div>
          </Link>
            </div>
          </SwiperSlide>
          <SwiperSlide className='flex items-center flex-col sm:flex-row gap-16 justify-center '>
          

            <img className='w-[250px]  md:w-[300px] ' src={project3} alt="Weather App" />
            
            <div className='w-[40%]'>
            <h1 className='md:text-3xl text-2xl  font-extrabold mb-6'>Weather App</h1>

            <p className='text-[#6d6a7c] font-Poppins font-semibold text-[16px]' >This is a weather forcasting website. It is built using simple HTML, JS and CSS.</p>
            <Link target='_blank' to={"https://weather-app-sigma-liart.vercel.app/"} >
            <div className="bg-[#6E57E0] mt-4 text-white w-fit items-center gap-4 px-4 py-4 font-semibold rounded-md font-Poppins flex ">
              check out
              <BiRightArrowAlt/>
            </div>
          </Link>
            </div>
          </SwiperSlide>
          <SwiperSlide className='flex items-center flex-col sm:flex-row gap-16 justify-center '>
           

            <img className='md:w-[300px] w-[250px]' src={project2} alt="Personal Portfolio" />
           
            <div className='w-[40%]'>
            <h1 className='md:text-3xl text-2xl  font-extrabold mb-6'>Personal Portfolio Website</h1>

            <p className='text-[#6d6a7c] font-Poppins font-semibold text-[16px]'>My Personal Portfolio Website made using React.js, Typescript, Vite.js and Tailwind CSS.</p>
            <Link target='_blank' to={"https://portfolio-website-beta-lyart.vercel.app/"} >
            <div className="bg-[#6E57E0] mt-4 sm:text-base text-sm text-white w-fit items-center gap-2 sm:gap-4 sm:px-4 px-3  py-4 font-semibold rounded-md font-Poppins flex ">
              check out
              <BiRightArrowAlt/>
            </div>
          </Link>
            </div>
          </SwiperSlide>

        </Swiper>
      </div>
    </>
  )
}

export default Project
