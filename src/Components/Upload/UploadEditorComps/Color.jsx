import RightArrow from "../../../assets/svg/RightArrow";
import React from "react";

const Color = ({ setEditorView, extractColor }) => {
  const ChangeEditorView = (view) => {
    setEditorView(view);
  };
  return (
    <div className=" py-3">
      <div className="w-full flex justify-between">
        <div className="text-[14px]"> Edit Colors </div>
        <div
          className="flex items-center gap-[5px] cursor-pointer"
        >
          {extractColor?.map((item, index) => (
            <div
              className="rounded-full  outline-option"
              style={{ backgroundColor: item.hex }}
              key={index}
            ></div>
          ))}
          <RightArrow />
        </div>
      </div>
    </div>
  );
};

export default Color;
