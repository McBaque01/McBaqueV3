import React from "react";

export const ContactUI = () => {
  return (
    <div className="flex h-fit w-full justify-center bg-clightbrown">
      <div className="flex h-screen min-h-fit w-[80%] flex-col gap-2 py-5">
        <div className="h-fit w-full bg-slate-50">
          <h1 className="font-Montserrat text-[3.6em] font-black">
            Collaborate with me
          </h1>
          <p className="text-[1.6em]">
            Let's create something amazing together.
          </p>
        </div>
        <div className="h-fit w-full bg-slate-500 p-4"></div>
      </div>
    </div>
  );
};
