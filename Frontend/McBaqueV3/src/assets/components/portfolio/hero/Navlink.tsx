import React from "react";
import { Link as ScrollLink } from "react-scroll";

interface NavlinkType {
  children: React.ReactNode;
  Linkto: string;
  classname?: string;
}

export const Navlink = ({ children, Linkto, classname }: NavlinkType) => {
  return (
    <ScrollLink
      to={Linkto}
      spy={true}
      smooth={true}
      duration={1000}
      className={classname}
      href={Linkto}
    >
      {children}
    </ScrollLink>
  );
};
