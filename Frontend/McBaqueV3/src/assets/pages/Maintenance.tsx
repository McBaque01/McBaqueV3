import { Icon } from "@iconify/react";
export const Maintenance = () => {


  return (
    <div className="h-screen w-full flex flex-col items-center justify-center  bg-gray-800">
      <Icon icon="streamline-cyber-color:maintenance" width="200" height="200" />
      <h1 className="text-6xl font-bold text-gray-200">Site Under Maintenance</h1>
      <h1 className="text-2xl font-bold text-gray-200">I’m currently rebuilding my portfolio to serve you better.</h1>
      <h1 className="text-2xl font-bold text-gray-200">If you’d like to connect, please email me at</h1>
      <h1 className="text-2xl font-bold text-blue-600">mcbaque01@gmail.com / www.linkedin.com/in/mcbaque</h1>
    </div>
  );
}   