import React from "react";
import appStore from "../../assets/appstore.png";
import playStore from "../../assets/playstore.png";

interface StoreActionsButtonsProps {
  className?: string;
}
const StoreActionsButtons = ({ className = "" }: StoreActionsButtonsProps) => {
  return (
    <div className={`actions flex items-center  gap-3 mt-10 ${className}`}>
      <div
        className={`${
          className == "!block" ? "mb-5" : "mb-auto"
        } cursor-pointer w-[156px] h-[57px] overflow-hidden bg-white rounded-xl`}
      >
        <img src={appStore} alt="App Store" />
      </div>
      <div className="cursor-pointer w-[156px] h-[57px] overflow-hidden bg-white rounded-xl">
        <img src={playStore} alt="Play Store" />
      </div>
    </div>
  );
};

export default StoreActionsButtons;
