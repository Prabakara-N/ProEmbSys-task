import React, { useState } from "react";

const Bulb = () => {
  const [isOn, setIsOn] = useState(false);
  const [brightness, setBrightness] = useState(30);
  const [value, setValue] = useState("");

  const handleToggle = () => {
    setIsOn(!isOn);
  };

  const handleBrightnessChange = (e) => {
    setBrightness(parseInt(e.target.value));

    const newValue = e.target.value * 25;
    setValue(newValue);
  };

  const sliderStyle = {
    background: `linear-gradient(to right,
            hsl(174, 77%, 80%) 0%,
            hsl(174, 77%, 80%) ${value}%,
            hsl(224, 65%, 95%) 0%,
            hsl(224, 65%, 95%) 100%)`,
  };

  const getBulbColor = () => {
    if (brightness === 0) {
      return "bulb";
    } else if (brightness === 1) {
      return "bulb one";
    } else if (brightness === 2) {
      return "bulb two";
    } else if (brightness === 3) {
      return "bulb three";
    } else if (brightness === 4) {
      return "bulb four";
    } else if (brightness === 5) {
      return "bulb five";
    } else {
      return "bulb five";
    }
  };
  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-screen bg-slate-900">
        <div className="wire"></div>
        <div className={`${isOn && brightness > 0 ? "body on" : "body"} mb-10`}>
          <div className={`${isOn ? getBulbColor() : "bulb"}`}>
            <span></span>
            <span></span>
          </div>
        </div>

        <div className="flex items-center space-x-4 m-2">
          <span className="font-semibold text-white">Status:</span>
          <span className={isOn ? "text-green-500" : "text-red-500"}>
            {isOn ? "On" : "Off"}
          </span>
        </div>
        <div className="flex items-center space-x-4 text-white">
          <span className="font-semibold ">Brightness Level:</span>
          <span className="text-[#10d5c2]">{brightness}</span>
        </div>
        <div className="w-[250px] mt-6 mb-5">
          <input
            type="range"
            min="0"
            max="5"
            value={brightness}
            onChange={handleBrightnessChange}
            className={`{'bg-[${value}]'} w-full`}
            id="price-slider"
            style={sliderStyle}
          />
        </div>

        <div className="mt-2">
          <label className="switch-button" htmlFor="switch">
            <div className="switch-outer">
              <input id="switch" type="checkbox" onChange={handleToggle} />
              <div className="button">
                <span className="button-toggle"></span>
                <span className="button-indicator"></span>
              </div>
            </div>
          </label>
        </div>
      </div>
    </>
  );
};

export default Bulb;
