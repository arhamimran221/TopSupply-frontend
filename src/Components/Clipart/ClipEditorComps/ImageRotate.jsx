import { useContext, useEffect, useState } from "react";
import { StatesContext } from "../../../Context/StatesContext";
import { InputNumber, Slider } from "antd";
import { handlePropertyChange } from "../../Panel/EditorHandles/EditorHandles";
import React from 'react';

const ImageRotate = () => {
  const { TextArray, setTextArray } = useContext(StatesContext);
  const [ActiveObject, setActiveObject]= useState(
    TextArray?.find((item) => item?.active === true)
  );

  useEffect(()=> {
    if(TextArray) {
      setActiveObject(TextArray?.find((item) => item?.active === true))
    }
  }, [TextArray])

  const [inputValue, setInputValue] = useState(ActiveObject?.rotate);
  const onChange = (value) => {
    setInputValue(value);
    setInputValue(value);
    handlePropertyChange('rotate', value, TextArray, setTextArray)
  }

  return (
    <div className="border-t border-[#cccfd6] py-3">
      <div className="w-full flex justify-between items-center">
        <div className="w-[30%] text-[14px]"> Rotate </div>
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
        </div>
      </div>
    </div>
  );
};

export default ImageRotate;
