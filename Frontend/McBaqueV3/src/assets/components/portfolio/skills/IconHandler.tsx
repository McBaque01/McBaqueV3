
import { InlineIcon } from '@iconify/react/dist/iconify.js';

interface IconHandlerType{
    Icon: string;
}


export const IconHandler = ({Icon}: IconHandlerType) => {
 

 

 
  
  return (
    <InlineIcon
      icon={Icon}
      className={`text-[4em] 2xl:text-[6em] xl:text-[6em] grayscale hover:grayscale-0 hover:scale-110 active:text-red-500 bg-slate-800 p-2 border-2 rounded-3xl`}
     
     
    />
  );
};