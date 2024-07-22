import RightArrow from "../../../assets/svg/RightArrow";
import { useContext, useState, useEffect } from "react";
import { StatesContext } from "../../../Context/StatesContext";
import { StopOutlined } from "@ant-design/icons";
import React from 'react';

const ImageOutline = ({ setClipartEditorView }) => {
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
    setClipartEditorView(view);
  };

  return (
    <div className="border-t border-[#cccfd6] py-3">
      <div className="w-full flex justify-between">
        <div className="text-[14px]"> Outline </div>
        <div
          className="flex items-center gap-[5px] cursor-pointer"
          onClick={() => ChangeEditorView("ImageOutlinePalette")}
        >
          <span className="text-[14px] font-[600]">
            {TextArray[0]?.clipArtOutline?.colorName}
          </span>
          {TextArray[0]?.clipArtOutline?.colorName === "None" ? (
            <div
              className="rounded-full outline-option flex justify-center items-center"
              style={{ backgroundColor: TextArray[0]?.clipArtOutline?.code }}
            >
              <StopOutlined className="text-[red] text-[16px]" />
            </div>
          ) : (
            <div
              className="rounded-full outline-option"
              style={{ backgroundColor: TextArray[0]?.clipArtOutline?.code }}
            >
            </div>
          )}

          <RightArrow />
        </div>
      </div>
    </div>
  );
};

export default ImageOutline;
