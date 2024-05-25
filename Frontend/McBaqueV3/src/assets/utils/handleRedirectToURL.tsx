import React from "react";

interface handleRedirectToURLPropsType {
  url: string;
}

const handleRedirectToURL: React.FC<handleRedirectToURLPropsType> = ({
  url,
}) => {
  if (url) {
    window.open(url, "_blank");
  }
  return null;
};
export default handleRedirectToURL;
