import { FC } from "react";
import facebookImg from "../../../assets/images/facebook.png";
import googleImg from "../../../assets/images/google.png";
import twitterImg from "../../../assets/images/twitter.png";

interface AuthProviderProps {
  providerType: "google" | "twitter" | "facebook";
}

const AuthProvider: FC<AuthProviderProps> = ({ providerType }) => {
  const provider: string =
    providerType === "facebook"
      ? facebookImg
      : providerType === "google"
      ? googleImg
      : twitterImg;
  return (
    <div className="w-10 h-10 p-2 rounded-full bg-neutral-100 cursor-pointer">
      <img src={provider} alt={`${provider}-provider`} />
    </div>
  );
};

export default AuthProvider;
