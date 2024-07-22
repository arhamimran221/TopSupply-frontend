import { useContext, useState, useEffect } from "react";
import { StatesContext } from "../../../Context/StatesContext";
import { InputNumber, Slider } from "antd";
import { handlePropertyChange } from "../EditorHandles/EditorHandles";
import React from 'react';

const WordsSpacing = () => {
  const { TextArray, setTextArray } = useContext(StatesContext);
  const [ActiveObject, setActiveObject]= useState(
    TextArray?.length > 0 ? TextArray?.find((item) => item?.active === true) : {}
  );

  useEffect(()=> {
    if(TextArray?.length > 0) {
      setActiveObject(TextArray?.find((item) => item?.active === true))
    }
  }, [TextArray])

  const getNumericValue = (fontSize) => {
    const match = fontSize?.match(/\d+/); 
    return match ? (15*(parseInt(match[0], 10))) : null; 
  };


  const [inputValue, setInputValue] = useState(getNumericValue(ActiveObject?.letterSpacing));
  const onChange = (value) => {
    setInputValue(value);
    setInputValue(value);
    let spacing = value/15;
    handlePropertyChange('letterSpacing', `${spacing}px`, TextArray, setTextArray)
  };

  return (
    <div className="border-t border-[#cccfd6] py-3">
      <div className="w-full flex justify-between items-center">
        <div className="w-[30%] text-[14px]"> Spacing </div>
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
            value={inputValue ? inputValue : 1}
            onChange={onChange}
          />
        </div>
      </div>
    </div>
  );
};

export default WordsSpacing;
