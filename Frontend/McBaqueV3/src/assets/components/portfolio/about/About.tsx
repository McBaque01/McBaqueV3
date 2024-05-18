import { Cloud } from "./Cloud";
import JapaneseWave from "../../../media/image/JapaneseWave.svg";
import { Fade } from "../../framer-motion/Fade";
import { FadeJr } from "../../framer-motion/FadeJr";
export const About = () => {
  return (
    <div
      id="About"
      className="relative flex h-fit w-full flex-col items-center justify-center overflow-hidden bg-clightbrown"
    >
      <div className="relative flex min-h-screen w-[80%] flex-col gap-2">
        <Cloud
          classname="w-fit h-fit absolute top-[5em] 2xl:left-[0em] xl:left-[16em] left-[90%] transition-all duration-1000"
          direction="left"
          delay={2}
        />

        <Cloud
          classname="w-fit h-fit absolute top-[30em] 2xl:left-[90%] xl:left-[16em] left-[-15em] transition-all duration-1000"
          direction="left"
          delay={2}
        />

        {/* <div className="bg-red-300 w-full h-[20%] relative flex flex-row justify-center overflow-hidden">
          <div className="xl:w-[30em] xl:h-[30em] 2xl:w-[30em] 2xl:h-[30em] h-[15em] w-[15em] bg-cred absolute top-[-50%] rounded-full border-2 border-black">
          </div>
        </div> */}
        <Fade>
          <FadeJr
            duration={0.3}
            direction="down"
            classname="relative flex h-[7.5em] w-full justify-center xl:h-[13em] xl:flex-row 2xl:h-[13em]"
          >
            <div className="relative top-[-7.5em] h-[15em] w-[15em] rounded-full border-2 bg-cred transition-all duration-1000 xl:top-[-13em] xl:h-[26em] xl:w-[26em] 2xl:top-[-13em] 2xl:h-[26em] 2xl:w-[26em]"></div>
          </FadeJr>
        </Fade>

        <div className="  relative flex h-fit w-full flex-col gap-2 py-4 xl:flex-row 2xl:flex-row">
          <Fade>
            <FadeJr
              direction="down"
              delay={0.3}
              classname="flex h-fit w-fit flex-col items-center  xl:h-full xl:min-w-[14em] 2xl:h-full 2xl:min-w-[14em]"
            >
              <p className="w-fit border-[4px] border-cred px-6 py-2 text-center font-Montserrat text-[1.6em] font-bold text-cblue sm:tracking-wider md:tracking-wider lg:tracking-wider xl:w-[3em] xl:break-all xl:border-[6px] xl:px-10 xl:py-6 xl:text-[2.6em] xl:leading-[1.2em] 2xl:w-[3em] 2xl:break-all 2xl:border-[6px] 2xl:px-10 2xl:py-6 2xl:text-[2.6em] 2xl:leading-[1.2em] ">
                ABOUT
              </p>
            </FadeJr>
          </Fade>

          <Fade>
            <FadeJr
              delay={0.6}
              direction="left"
              classname="h-full w-full py-4 xl:py-4 2xl:py-4"
            >
              <p className="font-Montserrat text-[1em]  font-medium tracking-wider  text-cblue xl:text-[1.2em] xl:tracking-widest 2xl:text-[1.2em] 2xl:tracking-widest">
                Greetings, I am Mark John A. Baque a Web Developer utilizing
                MERN stack, developing user-friendly web applications that
                deliver seamless digital experience. I hold a Bachelor's degree
                on Information Technology and my continuous learning approach
                ensures that I am always ready to tackle new challenges and
                leverage emerging technologies.
              </p>
            </FadeJr>
          </Fade>
        </div>

        <div className="  flex h-fit w-full flex-col items-center justify-center pb-[4em]">
          <Fade>
            <FadeJr direction="down" delay={1}>
              <h1 className="p-2 font-Montserrat text-[1.6em] font-bold text-cred xl:py-[1.6em] xl:text-[2em] 2xl:py-[2em] 2xl:text-[2em]">
                EXPERIENCE
              </h1>
            </FadeJr>
          </Fade>

          <Fade>
            <FadeJr
              delay={1.3}
              direction="left"
              classname="flex h-full w-full flex-col gap-1 pb-[4em] xl:flex-row 2xl:flex-row "
            >
              <div className="h-fit min-w-fit border-cred py-4 pr-4 sm:border-b-2 md:border-b-2 lg:border-b-2 xl:h-full xl:w-[35%] 2xl:h-full 2xl:w-[35%]">
                <h1 className="font-Montserrat text-[1em] font-bold text-cred xl:text-[1.6em] 2xl:text-[1.6em]">
                  Personal Collection
                </h1>
                <h2 className="font-Montserrat text-[1em] font-medium text-cblue">
                  April 2023 - August 2023
                </h2>
              </div>

              <div className=" h-full w-full py-4">
                <h1 className="font-Montserrat text-[1em] font-bold text-cred xl:text-[1.6em] 2xl:text-[1.6em]">
                  Technical Support Intern / IT Resource Management Intern
                </h1>
                <p className=" py-2 font-Montserrat text-[1em] font-medium tracking-wider text-cblue xl:text-[1.2em] 2xl:text-[1.2em]">
                  Capable of resolving software, hardware, and network issues
                  for colleagues while efficiently managing IT asset allocation
                  and maintenance. From unit receipt to database integration, I
                  ensure streamlined operations and optimal resource
                  utilization, ensuring seamless functionality across the
                  organization.
                </p>
              </div>
            </FadeJr>
          </Fade>
        </div>
      </div>

      <div className="absolute  bottom-0 h-[3em] w-full overflow-hidden xl:h-[4em] 2xl:h-[4em]">
        <img
          src={JapaneseWave}
          alt="JapaneseWabe"
          className="relative top-[-20em] w-full min-w-[40em] max-w-[100em] rotate-45 sm:top-[-15em] xl:-top-[36.7em] xl:left-[0em] 2xl:-top-[42.4em] 2xl:left-[10em]"
        ></img>
      </div>
    </div>
  );
};
