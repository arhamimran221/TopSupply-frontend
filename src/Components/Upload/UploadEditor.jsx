import React, { useEffect, useState,useContext } from "react";
import PanelEditorHeader from "../Panel/PanelEditorHeader";
import { CloseOutlined } from "@ant-design/icons";
import "./Upload.css";
import Color from "./UploadEditorComps/Color";
import ColorPlate from './UploadEditorComps/ColorPlate';
import Size from "../Panel/EnglishKbComps/Size";
import Rotate from "../Panel/EnglishKbComps/Rotate";
import centerIcon from "../../assets/svg/CenterIcon.svg"
import { extractColors } from 'extract-colors'
import UploadWordTool from './UploadEditorComps/UploadWordTool';
import { handlePropertyChange } from "../Panel/EditorHandles/EditorHandles";
import { StatesContext } from "../../Context/StatesContext";
import UploadSize from "./UploadEditorComps/UploadSize";

const UploadEditor = ({ file }) => {
   const [activeImage ,setActiveImage] = useState('1')
   const [editorView , setEditorView] = useState('ArtWork')
   const [extractColor ,setExtractcolor] = useState();
  const { TextArray, setTextArray } = useContext(StatesContext);

   useEffect(()=>{
    if(file){
      const src = file;
  extractColors(src)
  .then((color) => setExtractcolor(color))
  .catch(console.error)
    }
   },[file])
  //  console.log("file",file)
   useEffect(()=>{
    if(activeImage==='1' ){
    const ImageObj = { path: file , filter: 'none'};
    handlePropertyChange('uploadImage', ImageObj, TextArray, setTextArray )
    }
    else if(activeImage==='2') {
    const ImageObj = { path: file , filter: 'invert(100%)'};
    handlePropertyChange('uploadImage', ImageObj, TextArray, setTextArray )
    }
    else{
    const ImageObj = { path: file , filter: 'grayscale(100%)'};
    handlePropertyChange('uploadImage', ImageObj, TextArray, setTextArray )
    }
  },[file , activeImage])

  return (
    <div className="bg-[#FBFBFB]">
      {editorView === "ArtWork"?
       <div className="h-[490px] overflow-y-auto p-4">
        <div className="editor-header relative">
          <PanelEditorHeader
            TagLine="UPLOAD ART"
            Title="Edit Your Artwork"
            SubTitle="Our design professionals will select ink colors for you or tell us your preferred colors with Design Notes."
          />
          <div className="absolute right-1 top-5 close-icon cursor-pointer">
            <CloseOutlined />
          </div>
        </div>
        <div className="">
          <h2 className="font-poppins text-[20px] text-[#424447] my-[10px]">
            Filters
          </h2>
          <div className="flex justify-between border-b-[1px] border-b-[#cccfd6] pb-[9px]">
            <div className={activeImage === "1" ? "cursor-pointer border-b-[3px] border-b-[#27a6ff] pb-[10px]" : "cursor-pointer pb-[10px]"} onClick={()=>setActiveImage('1')}>
              <div className={activeImage === '1' ? "p-4 editorImage-bg border-[2px] border-[#27a6ff]" : "p-4 editorImage-bg border-[2px] border-[#cccfd6]"}>
                <img src={file} alt="" width={65} />
              </div>
              <p className={activeImage==='1' ? "font-nunito text-center text-[14px] text-[#27a6ff] mt-[5px] font-[600]" : "font-nunito text-center text-[14px] text-[#424447] mt-[5px]"}>Normal</p>
            </div>
            <div className={activeImage === "2" ? "cursor-pointer border-b-[3px] border-b-[#27a6ff] pb-[10px]" : "cursor-pointer pb-[10px]"} onClick={()=>setActiveImage('2')}>
              <div className={activeImage === '2' ? "p-4 editorImage-bg border-[2px] border-[#27a6ff]" : "p-4 editorImage-bg border-[2px] border-[#cccfd6]"}>
                <img src={file} alt="" width={65} style={{filter: 'invert(100%)'}} />
              </div>
              <p className={activeImage==='2' ? "font-nunito text-center text-[14px] text-[#27a6ff] mt-[5px] font-[600]" : "font-nunito text-center text-[14px] text-[#424447] mt-[5px]"}>Single Color</p>
            </div>
            <div className={activeImage === "3" ? "cursor-pointer border-b-[3px] border-b-[#27a6ff] pb-[10px]" : "cursor-pointer pb-[10px]"} onClick={()=>setActiveImage('3')}>
              <div className={activeImage === '3' ? "p-4 editorImage-bg border-[2px] border-[#27a6ff]" : "p-4 editorImage-bg border-[2px] border-[#cccfd6]"}>
                <img src={file} alt="" width={65} style={{filter: "grayscale(100%)"}}/>
              </div>
              <p className={activeImage==='3' ? "font-nunito text-center text-[14px] text-[#27a6ff] mt-[5px] font-[600]" : "font-nunito text-center text-[14px] text-[#424447] mt-[5px]"}>Black/white</p>
            </div>
          </div>
           <Color setEditorView={setEditorView} extractColor={extractColor}/>
           <UploadSize/>
           <Rotate/>
           <div className="cursor-pointer  border-t border-[#cccfd6] py-3 ">
            <p className="text-[12px] text-[#27a6ff] hover:text-[#0196ff] hover:underline">Reset to Defaults</p>
           </div>
            <UploadWordTool/>
        </div>
      </div> : <ColorPlate setEditorView={setEditorView}/>}
    </div>
  );
};

export default UploadEditor;
