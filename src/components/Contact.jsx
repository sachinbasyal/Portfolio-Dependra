import axios from "axios"
import { useForm } from "react-hook-form"
import toast from 'react-hot-toast'

function Contact() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const onSubmit = async(data) => {
    //console.log(data) 
   
    try {
          await axios.post('https://api.web3forms.com/submit',data)
          toast.success("Message sent!")
      
    } catch (error) {
      console.log(error)
      toast.error("Something went wrong!")
    }
  } 

  return (
    <div name="Contact" className='max-w-screen-2xl container mx-auto px-4 md:px-20 mt-10'>
      <h1 className="font-bold text-3xl mb-4">Contact</h1>
      <p>Please fill out the form to contact me </p>
      <div className='flex flex-col items-center justify-center mt-5'>
        {/* "handleSubmit" will validate your inputs before invoking "onSubmit" */}
        <form 
        // onSubmit={handleSubmit(onSubmit)}
        action="https://api.web3forms.com/submit" 
        method="POST" 
        className='bg-slate-400 w-96 px-8 py-6 rounded-xl'>
          <h1 className='font-semibold text-l mb-4'>Send Your Message</h1>
          <div>
            <input type="hidden" name="access_key" value="7ce7f9ad-56bf-4a63-8c5d-9e71a5e48c01"/>
            
            <label className='block text-gray-700 text-sm font-bold mb-1'>Full Name</label>
            <input 
            // {...register("name", { required: true })}
              name="name" className='shadow appearance-none border rounded w-[300px] py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-cyan-400 mb-1'
              type="text" placeholder='Name'required />
            {/* {errors.name && <span className='text-red-700 text-sm'>*This field is required</span>} */}

            <label className='block text-gray-700 text-sm font-bold mb-1 mt-2'>Email</label>
            <input 
            // {...register("email", { required: true })}
              name="email" className='shadow appearance-none border rounded w-[300px] py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-cyan-400 mb-1'
              type="email" placeholder='@' required />
            {/* {errors.email && <span className='text-red-700 text-sm'>*This field is required</span>} */}

            <label className='block text-gray-700 text-sm font-bold mb-1 mt-2'>Phone No.</label>
            <input 
            // {...register("phone", { required: true })}
              name="phone" className='shadow appearance-none border rounded w-[300px] py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-cyan-400 mb-1'
              type="text" placeholder='Tel.' required />
            {/* {errors.phone && <span className='text-red-700 text-sm'>*This field is required</span>} */}

            <label className='block text-gray-700 text-sm font-bold mb-1 mt-2'>Message</label>
            <textarea 
            // {...register("message", { required: true })}
              name="message" className='shadow appearance-none border rounded w-[300px] py-3 px-2 text-gray-700 leading-tight focus:outline-none focus:border-cyan-400' rows={3}
              type="text" placeholder='Type your message here' required />
            {/* {errors.message && <span className='text-red-700 text-sm'>*This field is required</span>} */}
            <br />
            <button type='submit' className='bg-black text-white w-20 font-bold rounded-2xl px-3 py-2 mt-2 hover:bg-slate-700 duration-300 hover:active:bg-slate-600'>Send</button>
          </div>
        </form>
      </div>
      <br />
      <hr />
    </div>
  )
}

export default Contact