import React, { useState } from "react";

const Bulb = () => {
  const [isOn, setIsOn] = useState(false);
  const [brightness, setBrightness] = useState(30);

  const handleToggle = () => {
    setIsOn(!isOn);
  };

  const handleBrightnessChange = (e) => {
    setBrightness(parseInt(e.target.value));
  };

  const getBulbColor = () => {
    if (brightness === 0) {
      return "bg-yellow-50 border-yellow-50";
    } else if (brightness <= 10) {
      return "bg-yellow-100 border-yellow-100";
    } else if (brightness <= 20) {
      return "bg-yellow-200 border-yellow-200";
    } else if (brightness <= 30) {
      return "bg-yellow-300 border-yellow-300";
    } else if (brightness <= 40) {
      return "bg-yellow-400 border-yellow-400";
    } else if (brightness <= 50) {
      return "bg-yellow-500 border-yellow-500";
    } else {
      return "bg-yellow-600 border-yellow-600";
    }
  };
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="flex flex-col items-center space-y-6">
        <div
          className={`w-32 h-32 rounded-full border-4 ${
            isOn && getBulbColor()
          }`}
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
            max="50"
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
