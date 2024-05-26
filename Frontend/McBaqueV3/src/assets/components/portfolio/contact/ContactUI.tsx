import React from "react";
import { Icon } from "@iconify/react";

export const ContactUI = () => {
  return (
    <div id="Contact" className="flex h-fit w-full justify-center bg-cblue">
      <div className="flex h-screen min-h-fit w-[80%] flex-col gap-2 py-5">

        <div className="h-fit w-full bg-slate-50 text-center">
          <h1 className="font-Montserrat text-[3.6em] font-black">
            Collaborate with me
          </h1>
          <p className="text-[1.6em]">
            Let's create something amazing together.
          </p>
        </div>


        <div className="h-fit w-full py-6 flex flex-row gap-2">
          
            <div className="w-[50%] h-fit py-2  flex flex-col gap-4">

                  <div className="w-full h-fit py-2  flex flex-col gap-4 ">

                      <div className=" py-2">
                            <div className="flex flex-row items-center gap-4">
                              <div className="p-3 bg-clightbrown  rounded-full flex justify-center items-center">
                              <Icon icon="material-symbols:home-pin-outline" className=" text-[2.5em] font-black text-cred"/>
                              </div>
                              <div>
                                <h1 className=" font-Montserrat font-bold text-[1.2em]  text-cred">Address</h1>
                                <p className=" font-Montserrat font-medium text-[1em]  text-clightbrown  tracking-widest">Rodriguez, Rizal, Philippines</p>
                              </div>
                            </div>
                      </div>

                      <div className="py-2">
                            <div className="flex flex-row items-center gap-4">
                              <div className="p-3 bg-clightbrown rounded-full flex justify-center items-center">
                              <Icon   icon="fluent:mail-16-regular" className=" text-[2.5em] font-black text-cred"/>
                              </div>
                              <div>
                                <h1 className=" font-Montserrat font-bold text-[1.2em]  text-cred">Email Me</h1>
                                <p className=" font-Montserrat font-medium text-[1em] underline text-clightbrown  tracking-widest">mcbaque01@gmail.com</p>
                              </div>
                            </div>
                      </div>

                      <div className="py-2">
                            <div className="flex flex-row items-center gap-4">
                              <div className="p-3  bg-clightbrown rounded-full flex justify-center items-center">
                              <Icon icon="tabler:phone" className=" text-[2.5em] font-black text-cred"/>
                              </div>
                              <div>
                                <h1 className=" font-Montserrat font-bold text-[1.2em] text-cred ">Contact Me</h1>
                                <p className=" font-Montserrat font-medium text-[1em]  text-clightbrown tracking-widest">09109305761</p>
                              </div>
                            </div>
                      </div>

                    </div>

                  <div className="">
                      <iframe 
                      className="w-full h-[30em]"
                    
                        src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d1165.3410121703155!2d121.13789120530987!3d14.743117529618646!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTTCsDQ0JzM1LjMiTiAxMjHCsDA4JzE2LjUiRQ!5e0!3m2!1sen!2sph!4v1716708393726!5m2!1sen!2sph" 
                      
                        style={{ border:0 }}
                        allowFullScreen={true}
                        loading="lazy" 
                        referrerPolicy="no-referrer-when-downgrade"
                        title="Google Map"
                        >

                    </iframe>
                  </div>

            </div>

            <div className="w-[50%] h-fit py-2 bg-slate-300">
            
            </div>



        </div>

           
      </div>
    </div>
  );
};
