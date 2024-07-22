import RightArrow from "../../../assets/svg/RightArrow";
import { useContext, useEffect, useState } from "react";
import { StatesContext } from "../../../Context/StatesContext";
import React from 'react';
const Color = ({setClipartEditorView}) => {
  const { TextArray } = useContext(StatesContext);
  const [ActiveObject, setActiveObject]= useState(
    TextArray?.find((item) => item?.active === true)
  );

  useEffect(()=> {
    if(TextArray) {
      setActiveObject(TextArray?.find((item) => item?.active === true))
    }
  }, [TextArray])

  const ChangeEditorView = (view) => {
    setClipartEditorView(view)
  }

  return (
    <div className=" py-3">
      <div className="w-full flex justify-between">
        <div className="text-[14px]"> Color </div>
        <div 
          className="flex items-center gap-[5px] cursor-pointer" 
          onClick={()=> ChangeEditorView('ColorPalate')}
        >
          <span className="text-[14px] font-[600]"> {TextArray[0]?.clipArtColor?.colorName ? TextArray[0]?.clipArtColor?.colorName : "Black"} </span>
          <div className="rounded-full outline-option" style={{backgroundColor: `${TextArray[0]?.clipArtColor?.code ? TextArray[0]?.clipArtColor?.code: "#000" }`}}> </div>
          <RightArrow />
        </div>
      </div>
    </div>
  );
};

export default Color;
