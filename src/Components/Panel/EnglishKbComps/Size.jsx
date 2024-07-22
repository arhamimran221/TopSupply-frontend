
import { useContext, useState, useEffect } from "react";
import { StatesContext } from "../../../Context/StatesContext";
import { InputNumber, Slider } from "antd";
import { handlePropertyChange } from "../EditorHandles/EditorHandles";
import React from 'react';

const Size = () => {
  const { TextArray, setTextArray } = useContext(StatesContext);
  const [ActiveObject, setActiveObject]= useState(
    TextArray?.length > 0 ? TextArray?.find((item) => item?.active === true) : {}
  );

  // const getNumericValue = (fontSize) => {
  //   const match = fontSize?.match(/\d+/); 
  //   return match ? parseInt(match[0], 10) : null; 
  // };

  const getNumericValue = (fontSize) => {
    if (typeof fontSize === 'string') {
      const match = fontSize.match(/\d+/);
      return match ? parseInt(match[0], 10) : null;
    } else {
      // Handle cases where fontSize is not a string
      return console.log("null err"); // or any other appropriate value or action
    }
  };

  const [inputValue, setInputValue] = useState(ActiveObject?.fontSize);
  const onChange = (value) => {
    setInputValue(value);
    handlePropertyChange('fontSize', value, TextArray, setTextArray)
  };
  
  useEffect(()=> {
    if(TextArray) {
      const obj = TextArray?.find((item) => item?.active === true)
      setActiveObject(obj)
      setInputValue(obj?.fontSize)
    }
  }, [TextArray])

  return (
    <div className="border-t border-[#cccfd6] py-3">
      <div className="w-full flex justify-between items-center">
        <div className="w-[30%] text-[14px]"> Size </div>
        <div className="w-[70%] flex items-center justify-between gap-4">
          <Slider
            min={1}
            max={200}
            onChange={onChange}
            className="w-full"
            value={typeof inputValue === "number" ? inputValue : 0}
          />
          <InputNumber
            min={1}
            max={200}
            value={inputValue}
            onChange={onChange}
          />
        </div>
      </div>
    </div>
  );
};

export default Size;
