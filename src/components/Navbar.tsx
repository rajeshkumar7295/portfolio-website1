// import {Link,useLocation,matchPath } from "react-router-dom"
// import  { useState } from 'react';
// import { IoReorderThreeOutline } from 'react-icons/io5';
// import { RxCross2 } from 'react-icons/rx';

// const navbar = () => {
//     const navlinks= [
//         {
//             name:"Home",
//             path:"/"
//         },
//         {
//             name:"About",
//             path:"/about"
//         }
//         ,
//         {
//             name:"Skills",
//             path:"/skills"
//         },
       
//         {
//             name:"Projects",
//             path:"/project"
//         },
//         {
//             name:"Contact Me",
//             path:"/contact"
//         }
        
        
//     ]
//     const [hamburger, setHamburger] =useState(true);
    
//     const location=useLocation();
//     console.log(location.pathname)
//     const matchRoute=(route:string)=>{
//         return matchPath(location.pathname,route);
//     }
//   return (

//     <div className={`${hamburger ? "pb-5 gap-9":"pb-5 "} select-none pt-5  font-semibold font-Poppins  fixed top-0 z-50 bg-white  w-full  flex md:justify-center transition-all duration-1000  items-start justify-between  md:pl-0 md:pb-4 pl-5   `}>
//      <div>
//         <Link to="/">Rajesh</Link>
//      </div>
//     <ul className={`md:flex md:flex-row  transition-all duration-1000 ease-in ${hamburger ? "hidden  pt-0":"flex flex-col pt-4 items-center justify-center"}  gap-6 `}>
        
//       {
//         navlinks.map((item,idx) => (
//             <li key={idx} onClick={()=> setHamburger((prev)=> !prev)} className={`${matchRoute(item.path) ? "text-[#6E57E0]": "text-black"}   flex`}>

//                 <Link to={item.path} >{item.name}</Link>
//             </li>
//         ))
//       }
//     </ul>
//     <div 
//   className="cursor-pointer block md:hidden  pr-5 md:pr-0 "
//   onClick={() => setHamburger((prev) => !prev)}
// >
//   {hamburger ? (
//     <IoReorderThreeOutline className="text-[30px] " />
//   ) : (
//     <RxCross2 className="text-[30px] " />
//   )}
// </div>

//   {/* <ul className={`md:hidden transition-all absolute -top-[10%] left-[35%] translate-x-1/2 translate-y-1/2 text-center duration-1000  ${hamburger ? "":"   "}`}>
//   {
//         navlinks.map((item,idx) => (
//             <li key={idx} onClick={()=> setHamburger((prev)=>!prev)} className={`${matchRoute(item.path) ? "text-[#6E57E0]": "text-black"}   flex`}>

//                 <Link to={item.path} >{item.name}</Link>
//             </li>
//         ))
//       }
//   </ul> */}
//     </div>
    
//   )
// }

// export default navbar

import { useState } from "react";
import {Navbar,NavbarMenu,NavbarMenuItem, NavbarBrand, NavbarContent, NavbarItem, NavbarMenuToggle,Link, } from "@nextui-org/react";
const navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuItems = [
    {
                  name:"Home",
                  path:"#home"
              },
              {
                  name:"About",
                  path:"#about"
              }
              ,
              {
                  name:"Skills",
                  path:"#skills"
              },
             
              {
                  name:"Projects",
                  path:"#project"
              },
              {
                  name:"Contact Me",
                  path:"#contact"
              }
              
   
  ];
  
    
  return (
    <Navbar onMenuOpenChange={setIsMenuOpen}>
    <NavbarContent>
      <NavbarMenuToggle
        aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        className="sm:hidden"
      />
      <NavbarBrand>
        <p className="font-bold text-inherit">Rajesh</p>
      </NavbarBrand>
    </NavbarContent>

    <NavbarContent className="hidden sm:flex gap-4" justify="center">
      {
        menuItems.map((ele,i)=>(

      <NavbarItem key={i} >
        <Link color="foreground" className="hover:text-blue-600" href={ele.path} >
          {ele.name}
        </Link>
      </NavbarItem>
        ))
      }
     
    </NavbarContent>
   
    <NavbarMenu>
      {menuItems.map((item, index) => (
        <NavbarMenuItem key={`${item}-${index}`}>
          <Link
           color="foreground"
            className="w-full hover:text-blue-600 "
            href={item.path}
            size="lg"
          >
            {item.name}
          </Link>
        </NavbarMenuItem>
      ))}
    </NavbarMenu>
  </Navbar>

  )
}

export default navbar
