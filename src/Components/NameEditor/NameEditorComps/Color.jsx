import RightArrow from "../../../assets/svg/RightArrow";
import React, { useState } from "react";

const Color = ({setEditorView}) => {
  const ChangeEditorView = (view) => {
    setEditorView(view)
  }
  return (
    <div className="border-b border-[#cccfd6] py-3">
      <div className="w-full flex justify-between">
        <div className="font-poppins text-[#424447] text-[14px]">Colors </div>
        <div className="flex items-center gap-[5px] cursor-pointer" onClick={()=> ChangeEditorView('ColorPalate')}>
          <span className="text-[14px] font-[600]"> Black </span>
          <div className="rounded-full bg-[#000] outline-option"> </div>
          <RightArrow />
        </div>
      </div>
    </div>
  );
};

export default Color;
