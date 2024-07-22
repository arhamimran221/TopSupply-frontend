import RightArrow from "../../../assets/svg/RightArrow";
import InterStateFont from "../../../assets/img/fonts-images/interstateFontImg.png";
import { useContext, useState, useEffect } from "react";
import { StatesContext } from "../../../Context/StatesContext";
import React from 'react';

const Font = ({setEditorView}) => {
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
        <div className="text-[14px]"> Font </div>
        <div className="flex items-center gap-[5px] cursor-pointer" onClick={()=> ChangeEditorView('FontStyle')}>
          <div className="h-auto"> 
            {
              ActiveObject?.fontFamily ?
              <h3 className={`text-[24px] leading-[26px] ${ActiveObject?.fontFamily}`} > {ActiveObject?.familyTitle} </h3> :
              <img src={InterStateFont} alt="font-title" className="w-[110px]" /> 
            }   
          </div>
          <RightArrow />
        </div>
      </div>
    </div>
  )
}

export default Font