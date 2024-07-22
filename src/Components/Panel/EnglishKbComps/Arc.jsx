import React from 'react';
import { useContext, useState } from "react";
import { StatesContext } from "../../../Context/StatesContext";
import { InputNumber, Slider } from "antd";
import { handlePropertyChange } from "../EditorHandles/EditorHandles";

const Arc = () => {
  const { TextArray, setTextArray } = useContext(StatesContext);

  const [inputValue, setInputValue] = useState(1);
  const onChange = (value) => {
    setInputValue(value);
    handlePropertyChange('arc', value, TextArray, setTextArray)
  }

  return (
    <div className="border-t border-[#cccfd6] py-2">
      <div className="w-full flex justify-between items-center">
        <div className="w-[30%] text-[14px]"> Arc </div>
        <div className="w-[70%] flex items-center justify-between gap-4">
          <Slider
            min={-360}
            max={360}
            onChange={onChange}
            className="w-full"
            value={typeof inputValue === "number" ? inputValue : 0}
          />
          <InputNumber
            min={-360}
            max={360}
            value={inputValue}
            onChange={onChange}
          />
           {/* <canvas ref={canvasRef} ></canvas> */}
        </div>

      </div>
    </div>
  );
};

export default Arc;
