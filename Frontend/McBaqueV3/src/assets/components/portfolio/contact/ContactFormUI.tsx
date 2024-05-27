import React from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

const userSchema = z.object({
    name: z.string().min(2, {message: "Name must be at least 2 characters long"}),
    email: z.string().min(5,{message: "Must be atleast 5 characters long"}).email({message: "Invalid email format"}),
    messageInput: z.string().trim().min(2, { message: "Must be atleast 2 characters long" }),
  });


type userSchemaType = z.infer<typeof userSchema>
  

export const ContactFormUI = () => {

    const {
        register,
        handleSubmit,
        formState: { errors, isValid }
      } = useForm<userSchemaType>({
        resolver: zodResolver(userSchema),
      });
    
      const onSubmit: SubmitHandler<userSchemaType> = (data) => {
        console.log(data); // Submit validated form data
        // Handle form submission logic here (e.g., send to server)
      };

    console.log(isValid)

      return <>
              <form onSubmit={handleSubmit(onSubmit)}>
              <div className='flex flex-col gap-2'>
                <div className=' w-full h-fit flex flex-col'>
                  <label htmlFor="name" className='font-Montserrat font-bold text-cred text-[1.2em]'>Name</label>
                  <div className='w-full h-fit'>
                    <input
                      id='name'
                      type="text"
                      placeholder='BINI Aiah'
                      {...register('name')}
                      className='border-none focus:border-none focus:outline-none p-4 w-full font-Montserrat text-cblue font-bold tracking-widest bg-[#FBFBFB]'
                    />
                    {errors.name &&
                      <p className=" text-red-500 px-2 py-1 font-bold tracking-widest w-full text-center">
                        {errors.name?.message}
                      </p>
                    }
                  </div>

                </div>



                <div className=' w-full h-fit flex flex-col'>
                  <label htmlFor="email" className='font-Montserrat font-bold text-cred text-[1.2em]'>Email</label>
                  <div className='w-full h-fit'>
                    <input
                      id='email'
                      type="text"
                      placeholder='@example.com'
                      {...register('email')}
                      className='border-none focus:border-none focus:outline-none p-4 w-full font-Montserrat text-cblue font-bold tracking-widest bg-[#FBFBFB]'
                    />
                    {errors.email &&
                       <p className=" text-red-500 px-2 py-1 font-bold tracking-widest w-full text-center">
                        {errors.email?.message}
                      </p>
                    }
                  </div>

                </div>


                <div className=' w-full h-fit flex flex-col'>
                  <label htmlFor="messageInput" className='font-Montserrat font-bold text-cred text-[1.2em]'>Message</label>
                  <div className='w-full h-fit'>

                    <textarea rows={8}
                     id='messageInput'
                     placeholder='Just say Hi!'
                     {...register('messageInput')}
                      className="border-none focus:border-none focus:outline-none p-4 font-Montserrat w-full text-cblue font-bold tracking-widest bg-[#FBFBFB] break-words"
                    />
                    
                    {errors.messageInput &&
                      <p className=" text-red-500 px-2 py-1 font-bold tracking-widest w-full text-center">
                        {errors.messageInput?.message}
                      </p>
                     }
                      
                  </div>
                </div>
             
            
             </div>
              <button type="submit" className=' w-full bg-clightbrown text-cred font-semibold text-[1.2em] font-Montserrat tracking-widest py-4'>Send Message</button>
              </form>
        </>
      
};
