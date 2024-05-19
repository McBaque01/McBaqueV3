import { InlineIcon } from '@iconify/react/dist/iconify.js';
import { skilltype } from './Skill';

interface IconHandlerType{
    iconpath: string;
    name: string;
    handleClick: ({name, iconpath}: skilltype) => void
}


export const IconHandler: React.FC<IconHandlerType> = ({iconpath, name, handleClick}) => {

 


  return (
    <InlineIcon
      icon={iconpath}
      className={`text-[4em] 2xl:text-[6em] xl:text-[6em] grayscale hover:scale-110 hover:grayscale-0  bg-slate-800 p-2 border-2 rounded-3xl transition-all duration-500 cursor-pointer`}
      
      onClick={()=>handleClick({name, iconpath})}
    />
  );
};