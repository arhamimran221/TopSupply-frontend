import React from 'react';
import { useContext, useState, useEffect } from "react";
import { StatesContext } from "../../../Context/StatesContext";
import CenterIcon from "../../../assets/svg/CenterIcon";
import Duplicate from "../../../assets/svg/Duplicate";
import LockIcon from "../../../assets/svg/LockIcon";
import FlipHorizontal from "../../../assets/svg/FlipHorizontal";
import FlipVerticle from "../../../assets/svg/FlipVerticle";
import LayerToFront from "../../../assets/svg/LayerToFront";
import LayerToBack from "../../../assets/svg/LayerToBack";
import { duplicateTextObject } from "../../Panel/EditorHandles/EditorHandles";
import { handlePropertyChange } from "../../Panel/EditorHandles/EditorHandles";

const UploadWordTool = () => {
  const { TextArray, setTextArray } = useContext(StatesContext);
  const [horiValue, setHoriValue] = useState(1);
  const [veriValue, setVeriValue] = useState(1);
  const [ActiveObject, setActiveObject]= useState(
    TextArray?.find((item) => item?.active === true)
  );

  useEffect(()=> {
    if(TextArray) {
      setActiveObject(TextArray?.find((item) => item?.active === true))
    }
  }, [TextArray])

  const handleDuplicate = () => {
    duplicateTextObject(setTextArray)
  }

  const HorizontalFlip = () => {
    if (horiValue === 1) {
      setHoriValue(-1)
      const flipObj = { VcScale: ActiveObject?.flip?.VcScale, HzScale: -1 }
      handlePropertyChange('flip', flipObj, TextArray, setTextArray)
    } else {
      setHoriValue(1)
      const flipObj = { VcScale: ActiveObject?.flip?.VcScale, HzScale: 1 }
      handlePropertyChange('flip', flipObj, TextArray, setTextArray)
    }
  }

  const VerticleFlip = () => {
    if (veriValue === 1) {
      setVeriValue(-1)
      const flipObj = { VcScale: -1, HzScale: ActiveObject?.flip?.HzScale }
      handlePropertyChange('flip', flipObj, TextArray, setTextArray)
    } else {
      setVeriValue(1)
      const flipObj = { VcScale: 1, HzScale: ActiveObject?.flip?.HzScale }
      handlePropertyChange('flip', flipObj, TextArray, setTextArray)
    }
  }

  return (
    <div className="py-3 px-2">
      <div className="w-full flex justify-between gap-1">
        {/* ===== Center ===== */}
        <div className="flex flex-col gap-1 justify-center items-center ">
          <div className="keyboard-tools flex justify-center items-center h-[30px] w-[45px]">
            <CenterIcon />
          </div>
          <p className="text-[10px] font-[700]">Center</p>
        </div>

        {/* ===== Layering ===== */}
        <div className="flex flex-col gap-1 justify-center items-center">
          <div className="flex justify-center items-center gap-[1px]">
            <div className={`keyboard-tools rounded-r-[0px] flex justify-center items-center h-[30px] w-[45px] 
                ${TextArray?.length === 1 ? 'opacity-[0.3] cursor-default': 'opacity-[1] cursor-pointer' }
              `}>
              <LayerToFront />
            </div>
            <div className={`keyboard-tools rounded-l-[0px] flex justify-center items-center h-[30px] w-[45px]
                ${TextArray?.length === 1 ? 'opacity-[0.3] cursor-default': 'opacity-[1] cursor-pointer' }
              `}>
              <LayerToBack />
            </div>
          </div>
          <p className="text-[10px] font-[700]">Layering</p>
        </div>

        {/* ===== Flip ===== */}
        <div className="flex flex-col gap-1 justify-center items-center ">
          <div className="flex justify-center items-center gap-[1px]">
            <div  
              onClick={HorizontalFlip}
              className={`keyboard-tools rounded-r-[0px] flex justify-center items-center h-[30px] w-[45px] ${horiValue === -1 ? 'active' : '' }`}>
              <FlipHorizontal />
            </div>
            <div
              onClick={VerticleFlip} 
              className={`keyboard-tools rounded-l-[0px] flex justify-center items-center h-[30px] w-[45px] ${veriValue === -1 ? 'active' : '' }`}>
              <FlipVerticle />
            </div>
          </div>

          <p className="text-[10px] font-[700]">Flip</p>
        </div>

        {/* ===== Lock ===== */}
        <div className="flex flex-col gap-1 justify-center items-center ">
          <div className="keyboard-tools active flex justify-center items-center h-[30px] w-[45px]">
            <LockIcon />
          </div>
          <p className="text-[10px] font-[700]">Lock</p>
        </div>

        {/* ===== Duplicate ===== */}
        <div className="flex flex-col gap-1 justify-center items-center">
          <div 
            className="keyboard-tools flex justify-center items-center h-[30px] w-[45px] py-[6px] px-[10px]"
            onClick={handleDuplicate}
            >
            <Duplicate />
          </div>
          <p className="text-[10px] font-[700]">Duplicate</p>
        </div>
      </div>
    </div>
  );
};

export default UploadWordTool;
