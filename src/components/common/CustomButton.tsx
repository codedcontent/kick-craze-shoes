import { nanoid } from "@reduxjs/toolkit";
import { useRef } from "react";

type Props = {
  title: string;
  full?: boolean;
  handleClick?: () => void;
};

const CustomButton = ({
  title,
  full = true,
  handleClick,
  ...props
}: Props & React.ButtonHTMLAttributes<HTMLButtonElement>) => {
  const uniqueButtonKey = nanoid();

  const buttonRef = useRef<HTMLButtonElement>(null);

  const handleButtonClickAnimation = () => {
    if (buttonRef.current) {
      buttonRef.current.classList.add("button__click-animation");
      setTimeout(
        () => buttonRef.current?.classList.remove("button__click-animation"),
        500
      );
    }

    if (handleClick) {
      handleClick();
    }
  };
  return (
    <button
      ref={buttonRef}
      key={`customButton-${uniqueButtonKey}`}
      className={`bg-gradient-to-r from-primary-1 to-primary-2 px-8 py-2 text-white ${
        full ? "w-full" : "w-max"
      } rounded-sm uppercase`}
      onClick={handleButtonClickAnimation}
      {...props}
    >
      {title}
    </button>
  );
};

export default CustomButton;
