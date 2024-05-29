
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import axios from "axios";

axios.defaults.withCredentials = true;

const userSchema = z.object({
  name: z
    .string()
    .min(2, { message: "Name must be at least 2 characters long" }),
  email: z
    .string()
    .min(5, { message: "Must be atleast 5 characters long" })
    .email({ message: "Invalid email format" }),
  messageInput: z
    .string()
    .trim()
    .min(2, { message: "Must be atleast 2 characters long" }),
});

type userSchemaType = z.infer<typeof userSchema>;

export const ContactFormUI = () => {

 
  const BackendRoute: string = import.meta.env.REACT_APP_BACKEND_ROUTE


  console.log(BackendRoute)

  const onSubmit: SubmitHandler<userSchemaType> = async (data) => {

    console.log(data);

    // console.log(`${BackendRoute}/Portfolio/testRequest`)
    // console.log(`http://localhost:8080/Portfolio/testRequest`)
    // try {
    //     const response = await axios.post(`${BackendAPI}/PortfolioTest`, data);
    //     console.log(response)
    //   }catch (error) {
    //     console.log(error)
    //   } 

      try {
        const response = await axios.post(`${BackendRoute}/Mailer/Send`, data);
        console.log(response)
      }catch (error) {
        console.log(error)
      } 

    
  };




  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<userSchemaType>({
    resolver: zodResolver(userSchema),
  });

  

  console.log(isValid);

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-2">
        <div className="flex flex-col gap-4">
          <div className=" flex h-fit w-full flex-col">
            <label
              htmlFor="name"
              className="font-Montserrat text-[1em] xl:text-[1.2em] 2xl:text-[1.2em] font-bold text-clightbrown"
            >
              Name
            </label>
            <div className="h-fit w-full">
              <input
                id="name"
                type="text"
                placeholder="BINI Aiah"
                {...register("name")}
                className="w-full border-none bg-[#d1d1d1] p-4 font-Montserrat font-bold tracking-widest text-cblue focus:border-none focus:outline-none caret-cred"
              />
              {errors.name && (
                <p className=" w-full px-2 py-1 text-center font-bold tracking-widest text-red-500">
                  {errors.name?.message}
                </p>
              )}
            </div>
          </div>

          <div className=" flex h-fit w-full flex-col">
            <label
              htmlFor="email"
              className="font-Montserrat text-[1em] xl:text-[1.2em] 2xl:text-[1.2em] font-bold text-clightbrown"
            >
              Email
            </label>
            <div className="h-fit w-full">
              <input
                id="email"
                type="text"
                placeholder="@example.com"
                {...register("email")}
                className="w-full border-none bg-[#d1d1d1] p-4 font-Montserrat font-bold tracking-widest text-cblue focus:border-none focus:outline-none caret-cred"
              />
              {errors.email && (
                <p className=" w-full px-2 py-1 text-center font-bold tracking-widest text-red-500">
                  {errors.email?.message}
                </p>
              )}
            </div>
          </div>

          <div className=" flex h-fit w-full flex-col">
            <label
              htmlFor="messageInput"
              className="font-Montserrat text-[1em] xl:text-[1.2em] 2xl:text-[1.2em] font-bold text-clightbrown"
            >
              Message
            </label>
            <div className="h-fit w-full">
              <textarea
                rows={8}
                id="messageInput"
                placeholder="Just say Hi!"
                {...register("messageInput")}
                className="w-full break-words border-none bg-[#d1d1d1] p-4 font-Montserrat font-bold tracking-widest text-cblue focus:border-none focus:outline-none caret-cred"
              />

              {errors.messageInput && (
                <p className=" w-full px-2 py-1 text-center font-bold tracking-widest text-red-500">
                  {errors.messageInput?.message}
                </p>
              )}
            </div>
          </div>
        </div>
        <button
          type="submit"
          className=" w-full bg-clightbrown py-4 font-Montserrat text-[1em] font-bold tracking-widest text-cred"
        >
          Send Message
        </button>

      
      </form>
    </>
  );
};
