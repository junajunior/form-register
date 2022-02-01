import React from "react";
import { useForm } from 'react-hook-form'


export default function Register() {
   const { register, handleSubmit, formState: { errors } } = useForm();
   const onSubmit = (values) => console.log(values)
 
   return (
     <div className='flex h-screen bg-black'>
       <div className='flex flex-col m-auto '>
         <span className='text-center text-xl pb-3 font-bold text-white'>Register Form</span>
         <form onSubmit={handleSubmit(onSubmit)}>
           <div className='space-y-4 w-96'>
             <div className='flex flex-col space-y-3 '>
               <label className='text-sm text-white'>Username</label>
               <input className='border border-gray-800 text-xs py-1 px-2' type='text' name='Username' {...register("Username", { required: true, maxLength: 10 })}></input>
               <span className='text-md text-red-500 font-semibold'>
                 {errors.Username?.type === 'required' && "nama harus diisi"}
                 
               </span>
             </div>
             <div className='flex flex-col space-y-3 '>
               <label className='text-sm text-white'>Email</label>
               <input className='border border-gray-400 text-xs py-1 px-2' type='text' name='Email'  {...register("Email", { required: true, pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i })}></input>
               <span className='text-md text-red-500 font-semibold'>
                 {errors.Email?.type === 'required' && "Email harus diisi"}
               </span>
             </div>
             <div className='flex flex-col space-y-3'>
               <label className='text-sm text-white'>Password</label>
               <input className='border border-gray-400 text-xs py-1 px-2' type='Password' name='Password' {...register("Password", { required: true, maxLength: 30, minLength: 5  })}></input>
               <span className='text-md text-red-500 font-semibold'>
                 {errors.Password?.type === 'required' && "Password harus diisi"}
                 
               </span>
             </div>
           </div>
           <button className='bg-blue-400 mt-5 border w-full rounded-md p-3'>Login</button>
         </form>
       </div>
     </div>
   )
 }