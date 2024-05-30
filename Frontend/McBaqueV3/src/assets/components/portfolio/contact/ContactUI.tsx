
import { Icon } from "@iconify/react";
import { ContactFormUI } from "./ContactFormUI";
import { Helmet } from "react-helmet";
export const ContactUI = () => {
  return (
    <div id="Contact" className="flex h-fit w-full justify-center bg-cblue">

      <Helmet>
        <title>Mc Baque - Contact</title>
        <meta name="description" content="Explore Mc Baque contact information page present his contacts." />
        <meta name="keywords" content="Mc Baque Contact,Mark John Baque Contact, McBaqueV3 Contact" />
        <meta name="author" content="Mark John Baque, Mc Baque" />
      
      </Helmet>
      <div className="flex min-h-screen w-[80%] flex-col gap-2 py-5">
        <div className="h-fit w-full  text-center">
          <h1 className="font-Montserrat xl:text-[3.6em] 2xl:text-[3.6em] font-black text-[2.4em] text-cred">
            Collaborate with me
          </h1>
          <p className="2xl:text-[1.6em] xl:text-[1.6em] text-[1.2em] text-clightbrown">
            Let's create something amazing together.
          </p>
        </div>

        <div className="flex h-fit w-full xl:flex-row 2xl:flex-row flex-col justify-between gap-2 py-6 ">
         
          <div className="flex h-fit 2xl:w-[48%] xl:w-[48%] w-full flex-col gap-4 py-2">
            <div className="flex h-fit w-full  flex-col gap-4 py-2 ">
              <div className=" py-2 ">
                <div className="flex flex-row items-center gap-4">
                  <div className="flex items-center  justify-center rounded-full bg-clightbrown p-3 ">
                    <Icon
                      icon="material-symbols:home-pin-outline"
                      className="text-[2em] 2xl:text-[2.5em] xl:text-[2.5em] font-black text-cred"
                    />
                  </div>
                  <div>
                    <h1 className=" font-Montserrat text-[1em] 2xl:text-[1.2em] xl:text-[1.2em] font-bold  text-cred">
                      Address
                    </h1>
                    <p className=" font-Montserrat text-[0.9em] 2xl:text-[1em] xl:text-[1em] font-medium  tracking-widest  text-clightbrown">
                      Rodriguez, Rizal, Philippines
                    </p>
                  </div>
                </div>
              </div>

              <div className="py-2">
                <div className="flex flex-row items-center gap-4">
                  <div className="flex items-center justify-center rounded-full bg-clightbrown p-3">
                    <Icon
                      icon="fluent:mail-16-regular"
                      className=" xl:text-[2.5em]   2xl:text-[2.5em]  text-[2em] font-black text-cred"
                    />
                  </div>
                  <div>
                    <h1 className=" font-Montserrat text-[1em] xl:text-[1.2em] 2xl:text-[1.2em] font-bold  text-cred">
                      Email Me
                    </h1>
                    <p className=" font-Montserrat text-[0.9em] xl:text-[1em] 2xl:text-[1em] font-medium tracking-widest text-clightbrown  underline">
                      mcbaque01@gmail.com
                    </p>
                  </div>
                </div>
              </div>

              <div className="py-2">
                <div className="flex flex-row items-center gap-4">
                  <div className="flex  items-center justify-center rounded-full bg-clightbrown p-3">
                    <Icon
                      icon="tabler:phone"
                      className=" text-[2em] xl:text-[2.5em] 2xl:text-[2.5em] font-black text-cred"
                    />
                  </div>
                  <div>
                    <h1 className=" font-Montserrat text-[1em] xl:text-[1.2em] 2xl:text-[1.2em] font-bold text-cred ">
                      Contact Me
                    </h1>
                    <p className=" font-Montserrat text-[0.9em] xl:text-[1em] 2xl:text-[1em] font-medium  tracking-widest text-clightbrown">
                      09109305761
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="aspect-square xl:aspect-video 2xl:aspect-video">
              <iframe
                className="w-full aspect-square xl:aspect-video 2xl:aspect-video"
                src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d1165.3410121703155!2d121.13789120530987!3d14.743117529618646!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTTCsDQ0JzM1LjMiTiAxMjHCsDA4JzE2LjUiRQ!5e0!3m2!1sen!2sph!4v1716708393726!5m2!1sen!2sph"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Google Map"
              ></iframe>
            </div>

            </div>

          

          <div className="h-fit 2xl:w-[48%] xl:w-[48%] w-full py-5">
            <ContactFormUI />
          </div>
        </div>
      </div>
    </div>
  );
};
