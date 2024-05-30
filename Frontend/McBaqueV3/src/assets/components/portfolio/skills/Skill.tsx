import { useEffect, useState } from "react";
import { IconHandler } from "./IconHandler";
import { InlineIcon } from "@iconify/react/dist/iconify.js";
import ValoAPI from "../../../media/image/ValoAPI.png";
import handleRedirectToURL from "../../../utils/handleRedirectToURL";
import LightNSeek from "../../../media/image/LightNSeek.png";
import PortfolioV3 from "../../../media/image/PortfolioV3.png";

export interface skilltype {
  name: string;
  iconpath: string;
}

export const Skill = () => {
  const [currSkill, setCurrSkill] = useState<skilltype | null>(null);

  const handleClick = ({ name, iconpath }: skilltype) => {
    setCurrSkill({
      name: name,
      iconpath: iconpath,
    });
  };

  useEffect(() => {
    setCurrSkill({
      name: "REACT",
      iconpath: "devicon:react",
    });
  }, []);

  return (
    <div
      id="Skill"
      className="relative flex h-fit w-full flex-col items-center bg-cblue"
    >
      <div className="absolute top-[7em] flex w-full justify-center 2xl:top-[6em] ">
        <div>
          <InlineIcon
            icon={currSkill?.iconpath as string | ""}
            className="text-[30em] opacity-10 xl:text-[50em] 2xl:text-[50em]"
          />
        </div>
        <h1 className="absolute -left-[0em] -top-[1em] w-full text-center font-Montserrat text-[5em] font-black tracking-widest text-gray-600 brightness-125 transition-all duration-500 xl:-left-0 xl:top-[0.5em] xl:text-[10em] 2xl:-left-0 2xl:top-[1em] 2xl:text-[10em]">
          {currSkill?.name}
        </h1>
      </div>

      <div className="relative flex min-h-screen w-[80%] flex-col gap-2">
        <div className="relative flex flex-col ">
          <h1 className="w-full   pt-4 text-center font-Montserrat text-[2em] font-black tracking-widest text-cred xl:text-[4em] 2xl:text-[4em]">
            TECH STACKS
          </h1>
          <h1 className="w-full   text-center font-Montserrat text-[1.4em] font-black uppercase tracking-widest text-clightbrown xl:text-[2em] 2xl:text-[2em]">
            What I'm capable of
          </h1>
          <div className="flex justify-center">
            <div className="grid h-fit w-fit min-w-[20em] grid-cols-4 gap-6 p-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-7 2xl:grid-cols-8 ">
              <IconHandler
                iconpath="devicon:html5-wordmark"
                name="HTML5"
                handleClick={handleClick}
              />
              <IconHandler
                iconpath="devicon:css3"
                name="CSS3"
                handleClick={handleClick}
              />
              <IconHandler
                iconpath="skill-icons:javascript"
                name="JAVASCRIPT"
                handleClick={handleClick}
              />
              <IconHandler
                iconpath="devicon:php"
                name="PHP"
                handleClick={handleClick}
              />
              <IconHandler
                iconpath="devicon:java"
                name="JAVA"
                handleClick={handleClick}
              />
              <IconHandler
                iconpath="logos:dotnet"
                name=".NET"
                handleClick={handleClick}
              />
              <IconHandler
                iconpath="devicon:mysql-wordmark"
                name="MYSQL"
                handleClick={handleClick}
              />
              <IconHandler
                iconpath="skill-icons:mongodb"
                name="MONGODB"
                handleClick={handleClick}
              />
              <IconHandler
                iconpath="skill-icons:expressjs-dark"
                name="EXPRESSJS"
                handleClick={handleClick}
              />
              <IconHandler
                iconpath="devicon:react"
                name="REACT"
                handleClick={handleClick}
              />
              <IconHandler
                iconpath="vscode-icons:file-type-node"
                name="NODEJS"
                handleClick={handleClick}
              />
              <IconHandler
                iconpath="devicon:typescript"
                name="TYPESCRIPT"
                handleClick={handleClick}
              />
              <IconHandler
                iconpath="devicon:vitejs"
                name="VITE"
                handleClick={handleClick}
              />
              <IconHandler
                iconpath="devicon:tailwindcss"
                name="TAILWINDCSS"
                handleClick={handleClick}
              />
              <IconHandler
                iconpath="devicon:framermotion"
                name="FRAMER"
                handleClick={handleClick}
              />
              <IconHandler
                iconpath="skill-icons:vercel-dark"
                name="VERCEL"
                handleClick={handleClick}
              />
              <IconHandler
                iconpath="logos:postman-icon"
                name="POSTMAN"
                handleClick={handleClick}
              />
              <IconHandler
                iconpath="jam:github"
                name="GITHUB"
                handleClick={handleClick}
              />
              <IconHandler
                iconpath="devicon:git"
                name="GIT"
                handleClick={handleClick}
              />
              <IconHandler
                iconpath="devicon:npm-wordmark"
                name="NPM"
                handleClick={handleClick}
              />
            </div>
          </div>
        </div>
        <div className="flex w-full flex-col py-4">
          <h1 className="py-5 font-Montserrat text-[2em] font-black tracking-widest text-cred xl:text-[3.6em] 2xl:text-[3.6em]">
            PROJECTS
          </h1>
          <div className="flex w-full flex-col items-center gap-2">
            <div className="flex aspect-[3/0.8] w-full flex-col gap-2 rounded-[10px] bg-gray-800 p-2 xl:w-[80%] xl:flex-row  2xl:w-[80%] 2xl:flex-row">
              <img
                src={ValoAPI}
                alt="ValoAPI img"
                className="h-full rounded-[7px] object-fill xl:w-[45%] 2xl:w-[45%]"
              />

              <div className="relative flex  h-full w-full flex-col gap-2">
                <div
                  className='absolute right-0 top-0 font-Montserrat text-[14px] font-semibold text-slate-500
                          before:absolute before:top-[6px] before:rounded-full before:bg-green-400 before:p-1 before:content-[""]
                          
                          '
                >
                  <h1 className="px-3">Ongoing</h1>
                </div>

                <div className=" h-fit w-full cursor-default font-Montserrat text-[14px] xl:text-[1em] 2xl:text-[1em]">
                  <h1 className="font-semibold leading-none text-cred">Name</h1>
                  <h2 className=" leading-2 font-medium text-slate-500">
                    VALO-API
                  </h2>
                </div>

                <div className=" h-fit w-full cursor-default font-Montserrat text-[14px] xl:text-[1em] 2xl:text-[1em]">
                  <h1 className="font-semibold leading-none text-cred ">
                    Domain
                  </h1>
                  <h2
                    className=" leading-2 cursor-pointer font-medium text-slate-500 underline"
                    onClick={() =>
                      handleRedirectToURL({
                        url: "https://valoapi.vercel.app/",
                      })
                    }
                  >
                    https://valoapi.vercel.app/
                  </h2>
                </div>

                <div className=" h-fit w-full cursor-default font-Montserrat text-[14px] xl:text-[1em] 2xl:text-[1em]">
                  <h1 className="font-semibold leading-none text-cred">
                    Description
                  </h1>
                  <h2 className=" leading-2 font-medium text-slate-500">
                    My web app is designed to provide players with comprehensive
                    details and easy access to information about weapons,
                    agents, and in-game collectibles. Explore these features to
                    enhance your Valorant experience
                  </h2>
                </div>

                <div className=" flex h-fit w-full cursor-default flex-row flex-wrap gap-1 font-Montserrat text-[14px] font-medium xl:text-[1em] 2xl:text-[1em]">
                  <div className="flex w-fit items-center justify-between rounded-full bg-gray-700 px-4 py-2 leading-none duration-300 hover:scale-110">
                    <h1 className="text-[14px] leading-none text-cred xl:text-[1em] 2xl:text-[1em]">
                      React
                    </h1>
                  </div>

                  <div className="flex w-fit items-center justify-between rounded-full bg-gray-700 px-4 py-2 leading-none duration-300 hover:scale-110">
                    <h1 className="text-[14px] leading-none text-cred xl:text-[1em] 2xl:text-[1em]">
                      TailwindCSS
                    </h1>
                  </div>

                  <div className="flex w-fit items-center justify-between rounded-full bg-gray-700 px-4 py-2 leading-none duration-300 hover:scale-110">
                    <h1 className="text-[14px] leading-none text-cred xl:text-[1em] 2xl:text-[1em]">
                      Vite
                    </h1>
                  </div>

                  <div className="flex w-fit items-center justify-between rounded-full bg-gray-700 px-4 py-2 leading-none duration-300 hover:scale-110">
                    <h1 className="text-[14px] leading-none text-cred xl:text-[1em] 2xl:text-[1em]">
                      Typescript
                    </h1>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex aspect-[3/0.8] w-full flex-col gap-2 rounded-[10px] bg-gray-800 p-2 xl:w-[80%] xl:flex-row  2xl:w-[80%] 2xl:flex-row">
              <img
                src={LightNSeek}
                alt="LightNSeek"
                className="h-full rounded-[7px] object-fill xl:w-[45%] 2xl:w-[45%]"
              />

              <div className="relative flex  h-full w-full flex-col gap-2">
                <div
                  className='absolute right-0 top-0 font-Montserrat text-[14px] font-semibold text-slate-500
                          before:absolute before:top-[6px] before:rounded-full before:bg-[#0079D0] before:p-1 before:content-[""]
                          
                          '
                >
                  <h1 className="px-3">Done</h1>
                </div>

                <div className=" h-fit w-full cursor-default font-Montserrat text-[14px] xl:text-[1em] 2xl:text-[1em]">
                  <h1 className="font-semibold leading-none text-cred">Name</h1>
                  <h2 className=" leading-2 font-medium text-slate-500">
                    LIGHT N SEEK
                  </h2>
                </div>

                <div className=" h-fit w-full cursor-default font-Montserrat text-[14px] xl:text-[1em] 2xl:text-[1em]">
                  <h1 className="font-semibold leading-none text-cred ">
                    Domain
                  </h1>
                  <h2
                    className=" leading-2 cursor-pointer font-medium text-slate-500 underline"
                    onClick={() =>
                      handleRedirectToURL({
                        url: "https://light-n-seek.vercel.app/",
                      })
                    }
                  >
                    https://light-n-seek.vercel.app/
                  </h2>
                </div>

                <div className=" h-fit w-full cursor-default font-Montserrat text-[14px] xl:text-[1em] 2xl:text-[1em]">
                  <h1 className="font-semibold leading-none text-cred">
                    Description
                  </h1>
                  <h2 className=" leading-2 font-medium text-slate-500">
                    Light N Seek is an engaging and challenging memory game
                    where players must repeat sequences of lights to progress.
                    Each level introduces a new sequence, requiring sharp focus
                    and quick thinking. Can you master the light patterns and
                    reach the highest levels?.
                  </h2>
                </div>

                <div className=" flex h-fit w-full cursor-default flex-row flex-wrap gap-1 font-Montserrat text-[14px] font-medium xl:text-[1em] 2xl:text-[1em]">
                  <div className="flex w-fit items-center justify-between rounded-full bg-gray-700 px-4 py-2 leading-none duration-300 hover:scale-110">
                    <h1 className="text-[14px] leading-none text-cred xl:text-[1em] 2xl:text-[1em]">
                      React
                    </h1>
                  </div>

                  <div className="flex w-fit items-center justify-between rounded-full bg-gray-700 px-4 py-2 leading-none duration-300 hover:scale-110">
                    <h1 className="text-[14px] leading-none text-cred xl:text-[1em] 2xl:text-[1em]">
                      TailwindCSS
                    </h1>
                  </div>

                  <div className="flex w-fit items-center justify-between rounded-full bg-gray-700 px-4 py-2 leading-none duration-300 hover:scale-110">
                    <h1 className="text-[14px] leading-none text-cred xl:text-[1em] 2xl:text-[1em]">
                      Vite
                    </h1>
                  </div>

                  <div className="flex w-fit items-center justify-between rounded-full bg-gray-700 px-4 py-2 leading-none duration-300 hover:scale-110">
                    <h1 className="text-[14px] leading-none text-cred xl:text-[1em] 2xl:text-[1em]">
                      Typescript
                    </h1>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex aspect-[3/0.8] w-full flex-col gap-2 rounded-[10px] bg-gray-800 p-2 xl:w-[80%] xl:flex-row  2xl:w-[80%] 2xl:flex-row">
              <img
                src={PortfolioV3}
                alt="PortfolioV3"
                className="h-full rounded-[7px] object-fill xl:w-[45%] 2xl:w-[45%]"
              />

              <div className="relative flex  h-full w-full flex-col gap-2">
                <div
                  className='absolute right-0 top-0 font-Montserrat text-[14px] font-semibold text-slate-500
                          before:absolute before:top-[6px] before:rounded-full before:bg-[#0079D0] before:p-1 before:content-[""]
                          
                          '
                >
                  <h1 className="px-3">Done</h1>
                </div>

                <div className=" h-fit w-full cursor-default font-Montserrat text-[14px] xl:text-[1em] 2xl:text-[1em]">
                  <h1 className="font-semibold leading-none text-cred">Name</h1>
                  <h2 className=" leading-2 font-medium text-slate-500">
                    PERSONAL PORTFOLIO
                  </h2>
                </div>

                <div className=" h-fit w-full cursor-default font-Montserrat text-[14px] xl:text-[1em] 2xl:text-[1em]">
                  <h1 className="font-semibold leading-none text-cred ">
                    Domain
                  </h1>
                  <h2
                    className=" leading-2 cursor-pointer font-medium text-slate-500 underline"
                    onClick={() =>
                      handleRedirectToURL({
                        url: "https://mcbaquev3.vercel.app/",
                      })
                    }
                  >
                    https://mcbaquev3.vercel.app/
                  </h2>
                </div>

                <div className=" h-fit w-full cursor-default font-Montserrat text-[14px] xl:text-[1em] 2xl:text-[1em]">
                  <h1 className="font-semibold leading-none text-cred">
                    Description
                  </h1>
                  <h2 className=" leading-2 font-medium text-slate-500">
                    Explore my portfolio to see a diverse range of web
                    development projects, each demonstrating my ability to
                    deliver high-quality, scalable, and maintainable code. From
                    game development to interactive web applications with API,
                    my work reflects my commitment to excellence in web
                    development.
                  </h2>
                </div>

                <div className=" flex h-fit w-full cursor-default flex-row flex-wrap gap-1 font-Montserrat text-[14px] font-medium xl:text-[1em] 2xl:text-[1em]">
                  <div className="flex w-fit items-center justify-between rounded-full bg-gray-700 px-4 py-2 leading-none duration-300 hover:scale-110">
                    <h1 className="text-[14px] leading-none text-cred xl:text-[1em] 2xl:text-[1em]">
                      React
                    </h1>
                  </div>

                  <div className="flex w-fit items-center justify-between rounded-full bg-gray-700 px-4 py-2 leading-none duration-300 hover:scale-110">
                    <h1 className="text-[14px] leading-none text-cred xl:text-[1em] 2xl:text-[1em]">
                      TailwindCSS
                    </h1>
                  </div>

                  <div className="flex w-fit items-center justify-between rounded-full bg-gray-700 px-4 py-2 leading-none duration-300 hover:scale-110">
                    <h1 className="text-[14px] leading-none text-cred xl:text-[1em] 2xl:text-[1em]">
                      Vite
                    </h1>
                  </div>

                  <div className="flex w-fit items-center justify-between rounded-full bg-gray-700 px-4 py-2 leading-none duration-300 hover:scale-110">
                    <h1 className="text-[14px] leading-none text-cred xl:text-[1em] 2xl:text-[1em]">
                      Typescript
                    </h1>
                  </div>

                  <div className="flex w-fit items-center justify-between rounded-full bg-gray-700 px-4 py-2 leading-none duration-300 hover:scale-110">
                    <h1 className="text-[14px] leading-none text-cred xl:text-[1em] 2xl:text-[1em]">
                      Framer
                    </h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
