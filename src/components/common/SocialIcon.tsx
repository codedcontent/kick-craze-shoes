import React, { FC } from "react";

type SocialIconProps = {
  icon: React.ComponentType;
  link: string;
};

const SocialIcon: FC<SocialIconProps> = ({ icon, link }) => {
  return (
    <a
      className="text-lg hover:text-primary-1 cursor-pointer hover:animate-shake-y"
      href={link}
      target="_blank"
    >
      {React.createElement(icon)}
    </a>
  );
};

export default SocialIcon;
