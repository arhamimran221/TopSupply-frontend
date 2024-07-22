import RightArrow from "../../../assets/svg/RightArrow";
import { useContext, useEffect, useState } from "react";
import { StatesContext } from "../../../Context/StatesContext";
import React from 'react';
const Color = ({setEditorView}) => {
  const { TextArray } = useContext(StatesContext);
  const [ActiveObject, setActiveObject]= useState(
    TextArray?.length > 0 ? TextArray?.find((item) => item?.active === true) : {}
  );

  useEffect(()=> {
    if(TextArray?.length > 0) {
      setActiveObject(TextArray?.find((item) => item?.active === true))
    }
  }, [TextArray])

  const ChangeEditorView = (view) => {
    setEditorView(view)
  }


  return (
    <div className="border-t border-[#cccfd6] py-3">
      <div className="w-full flex justify-between">
        <div className="text-[14px]"> Color </div>
        <div 
          className="flex items-center gap-[5px] cursor-pointer" 
          onClick={()=> ChangeEditorView('FontColorPalette')}
        >
          <span className="text-[14px] font-[600]"> {ActiveObject?.color?.colorName} </span>
          <div className="rounded-full outline-option" style={{backgroundColor: ActiveObject?.color?.code}}> </div>
          <RightArrow />
        </div>
      </div>
    </div>
  );
};

export default Color;
