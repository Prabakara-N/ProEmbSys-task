import React, { useState } from "react";

const Bulb = () => {
  const [isOn, setIsOn] = useState(false);
  const [brightness, setBrightness] = useState(50);

  const handleToggle = () => {
    setIsOn(!isOn);
  };

  const handleBrightnessChange = (e) => {
    setBrightness(parseInt(e.target.value));
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="flex flex-col items-center space-y-6">
        <div
          className={`${
            isOn
              ? "bg-yellow-500 border-yellow-500"
              : "bg-gray-300 border-gray-300"
          } w-32 h-32 rounded-full border-4`}
        ></div>
        <div className="flex items-center space-x-4">
          <span className="font-semibold">Status:</span>
          <span className={isOn ? "text-green-500" : "text-red-500"}>
            {isOn ? "On" : "Off"}
          </span>
        </div>
        <div className="flex items-center space-x-4">
          <span className="font-semibold">Brightness:</span>
          <span>{brightness}</span>
        </div>
        <div className="w-40">
          <input
            type="range"
            min="0"
            max="100"
            value={brightness}
            onChange={handleBrightnessChange}
            className="w-full"
          />
        </div>
        <div>
          <button
            onClick={handleToggle}
            className={`${
              isOn ? "bg-red-500 text-white" : "bg-green-500 text-white"
            }px-4 py-2 rounded-md`}
          >
            {isOn ? "Turn Off" : "Turn On"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Bulb;
