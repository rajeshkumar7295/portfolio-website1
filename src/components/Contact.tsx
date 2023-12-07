import {useRef,useState} from 'react';
import emailjs from "@emailjs/browser";
import toast,{Toaster} from "react-hot-toast";

const Contact = () => {
  const form = useRef<HTMLFormElement>(null);
  const [inputValue,setInputValue]=useState({
    user_name:"",
    user_email:"",
    message:""
  })
  const sendEmail = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();

  const send=await  emailjs.sendForm('service_wggtron', 'template_w31x3xh',form.current!, 'TTqxNlqphhNJfveIY')
      if(send){
        toast.success("Message sent successfully");
        setInputValue({
          user_name:"",
          user_email:"",
          message:""
        })
      }
      else{
        toast.error("Error while sending message");
      }
   

  };
  const handleInputChange=(e:React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>)=>{
    setInputValue((prev)=>({
      ...prev,[e.target.name]:e.target.value
    }))
  }
  return (
    <>
    <h1 id='contact' className="pt-40 text-3xl  sm:text-4xl font-bold text-center">Contact Me</h1>
    <p className="text-[#6d6a7c] text-center mt-2">Want to connect? My inbox is always open!</p>

    <form className='md:border-2 select-none p-10 mb-20 mt-10 md:border-slate-400 flex flex-col gap-6 max-w-[800px] mt- rounded-md mx-auto' ref={form} onSubmit={sendEmail}>
      
    
     <input id='name' className='border-black firstname border-2 rounded-md px-4 py-4 ' placeholder='Name' type="text" name="user_name" value={inputValue.user_name} onChange={handleInputChange}
    required /> 
      

   
    <input className='border-black border-2 rounded-md px-4 py-4 ' placeholder='Email' type="email" name="user_email" value={inputValue.user_email} onChange={handleInputChange} required />
     

    
    <textarea className='border-black border-2 rounded-md px-4 py-4 ' placeholder='Message' name="message" value={inputValue.message} onChange={handleInputChange}  required />
     
    <button className="bg-[#6E57E0] mt-4 text-white w-fit items-center gap-4 px-8 py-4 font-semibold rounded-md font-Poppins tracking-wider " type="submit" value='send' > Send</button>
    <Toaster/>
  </form>
    </>
  )
}

export default Contact
