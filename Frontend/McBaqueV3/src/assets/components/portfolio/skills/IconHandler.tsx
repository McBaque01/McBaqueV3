import { InlineIcon } from "@iconify/react/dist/iconify.js";
import { skilltype } from "./Skill";

interface IconHandlerType {
  iconpath: string;
  name: string;
  handleClick: ({ name, iconpath }: skilltype) => void;
}

export const IconHandler: React.FC<IconHandlerType> = ({
  iconpath,
  name,
  handleClick,
}) => {
  return (
    <InlineIcon
      icon={iconpath}
      className={`cursor-pointer rounded-3xl border-2 bg-slate-800 p-2 text-[4em] grayscale  transition-all duration-500 hover:scale-110 hover:border-cred hover:grayscale-0 xl:text-[6em] 2xl:text-[6em]`}
      onClick={() => handleClick({ name, iconpath })}
    />
  );
};
