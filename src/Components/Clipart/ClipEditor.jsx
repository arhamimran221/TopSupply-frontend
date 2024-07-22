import React, { useState } from "react";
import PanelEditorHeader from "../Panel/PanelEditorHeader";
import {
  CloseOutlined,
} from "@ant-design/icons";

import Color from "./ClipEditorComps/Color";
import ColorPlate from "./ClipEditorComps/ColorPlate";
import ImageOutline from "./ClipEditorComps/ImageOutline";
import ImageOutlinePlate from "./ClipEditorComps/ImageOutlinePlate";
import ImageSize from "./ClipEditorComps/ImageSize";
import ImageRotate from "./ClipEditorComps/ImageRotate";
import ImageWordTools from "./ClipEditorComps/ImageWordTools";

const ClipEditor = () => {
  const [ClipartEditorView, setClipartEditorView] = useState("ImageEdit");

  return (
    <div className="bg-[#FBFBFB]">
      {ClipartEditorView === "ImageEdit" ? (
        <div className="h-[490px] overflow-y-auto ">
          <div className="editor-header relative mb-3">
            <PanelEditorHeader
              TagLine="CLIPART"
              Title="Edit Clipart"
              setClipartEditorView={setClipartEditorView}
            />
            <div className="absolute right-1 top-5 close-icon">
              <CloseOutlined />
            </div>
          </div>

          <Color setClipartEditorView={setClipartEditorView} />
          <ImageOutline setClipartEditorView={setClipartEditorView}/>
          <ImageSize />
          <ImageRotate/>
          <ImageWordTools/>
        </div>
      ) : ClipartEditorView === "ColorPalate" ?(
        <ColorPlate setClipartEditorView={setClipartEditorView} />
      ) :  ClipartEditorView === "ImageOutlinePalette" ? (
        <ImageOutlinePlate setClipartEditorView={setClipartEditorView}/>
      ) :"" }
    </div>
  );
};

export default ClipEditor;
