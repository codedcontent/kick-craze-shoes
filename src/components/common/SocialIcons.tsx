import { FC } from "react";
import { BsGithub, BsTwitter } from "react-icons/bs";
import { RiInstagramFill } from "react-icons/ri";
import { ImLinkedin2 } from "react-icons/im";

const SocialIcons: FC = () => {
  const iconStyles = `text-lg hover:text-primary-1`;

  return (
    <div className="flex flex-col justify-center items-center gap-6 fixed right-[3%] top-1/2 transform -translate-y-1/2 z-50">
      {/* Twitter */}
      <BsTwitter className={iconStyles} />

      {/* Instagram */}
      <RiInstagramFill className={iconStyles} />

      {/* LinkedIn */}
      <ImLinkedin2 className={iconStyles} />

      {/* GitHub */}
      <BsGithub className={iconStyles} />
    </div>
  );
};

export default SocialIcons;
