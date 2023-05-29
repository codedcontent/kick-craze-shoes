import { FC } from "react";
import { BsGithub, BsTwitter } from "react-icons/bs";
import { RiInstagramFill } from "react-icons/ri";
import { ImLinkedin2 } from "react-icons/im";
import SocialIcon from "./SocialIcon";

const SocialIcons: FC = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-6 fixed right-[3%] top-1/2 transform -translate-y-1/2 z-50">
      {/* Twitter */}
      <SocialIcon icon={BsTwitter} link="https://twitter.com/i_am_meph" />

      {/* Instagram */}
      <SocialIcon
        icon={RiInstagramFill}
        link="https://www.instagram.com/tech_with_oge/"
      />

      {/* LinkedIn */}
      <SocialIcon
        icon={ImLinkedin2}
        link="https://www.linkedin.com/in/ogeme/"
      />

      {/* GitHub */}
      <SocialIcon icon={BsGithub} link="https://github.com/codedcontent" />
    </div>
  );
};

export default SocialIcons;
