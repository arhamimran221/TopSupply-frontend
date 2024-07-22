import React from 'react';
import PanelEditorHeader from "../../Panel/PanelEditorHeader";
import { CloseOutlined } from "@ant-design/icons";
import "../Editor.css";
import FontsData from "../../Panel/FontStyles/FontsData";
import FontsBtn from "../../Panel/FontStyles/FontsBtn";
import { useState, useContext, useEffect } from "react";
import SubFontTypes from "./SubFontTypes";
import { StatesContext } from "../../../Context/StatesContext";
import TextFontPreview from "./TextFontPreview";
import {handlePropertyChange} from "../../Panel/EditorHandles/EditorHandles";

const FontStyle = ({ setEditorView }) => {
  const { TextInput, TextArray, setTextArray } = useContext(StatesContext);

  const [backAllFonts, setBackAllFonts] = useState(false);
  const [fontStyleHeader, setFontStyleHeader] = useState('Font Styles'); 
  const [familyClass, setFamilyClass] = useState('');
  const [familyTitle, setFamilyTitle] = useState('');

  const ChangeEditorView = (view) => {
    setEditorView(view);
  };
  const ChangeBackAllFonts = (type, headerType) => {
    setBackAllFonts(type)
    setFontStyleHeader(headerType)
  }

  const SelectFamily = () => {
    setEditorView("TextEditor")
  }

  useEffect(() => {
    if(familyClass) {
      handlePropertyChange('fontFamily', familyClass, TextArray, setTextArray);
    }
  },[familyClass])

  useEffect(() => {
    if(familyTitle) {
      handlePropertyChange('familyTitle', familyTitle, TextArray, setTextArray);
      
      const intervalId = setInterval(() => {
        SelectFamily();
      }, 500);
      return () => clearInterval(intervalId);
    }
  },[familyTitle])

  return (
    <>
      {
        !backAllFonts ?
        <div className="w-[100%] h-[80vh] overflow-y-auto bg-[#fbfbfb] p-4">
          <div className="editor-header relative">
            <PanelEditorHeader
              TagLine="Text Editor"
              Title={fontStyleHeader}
              MoveBack="TextEditor"
              setEditorView={setEditorView}
            />
            <div
              className="absolute right-1 top-5 cursor-pointer close-icon"
              onClick={() => ChangeEditorView("FontStyle")}
            >
              <CloseOutlined />
            </div>
          </div>
          <div className="editor-body pt-6">
            <div className="fonts-editor">
              <div className="fonts-btns-wrap">
                <div className="fonts-btn">
                  <span> Popular </span>
                </div>
                <div className="fonts-btn">
                  <span> View All </span>
                </div>
                {FontsData?.map((font, ind) => (
                  <FontsBtn key={ind} font={font} onBtnClick={ChangeBackAllFonts} clickType={true} headerType={font?.title} />
                ))}
              </div>
            </div>
          </div>
        </div>
        :
        <div className="w-[100%] h-[80vh] overflow-y-auto bg-[#fbfbfb] p-4">
          <div className="editor-header relative">
            <PanelEditorHeader
              TagLine="Text Editor"
              Title={`"${fontStyleHeader}" Fonts`}
              MoveBack="TextEditor"
              setEditorView={setEditorView}
            />
            <div
              className="absolute right-1 top-5 cursor-pointer close-icon"
              onClick={() => ChangeEditorView("FontStyle")}
            >
              <CloseOutlined />
            </div>
          </div>
          <div className="editor-body">
            <div className="fonts-editor">
                <div className='edit-prev-style'>
                  <button className='prev-style-btn' onClick={()=> ChangeBackAllFonts(false, 'Font Styles')}>
                      View All Fonts
                  </button>
                </div>
                <div className="selective-fonts-wrap">
                  {SubFontTypes?.map((font, ind) => (
                    <TextFontPreview 
                      key={ind} 
                      font={font} 
                      TextInput={TextInput} 
                      SelectFamily={SelectFamily} 
                      setFamilyClass={setFamilyClass}
                      setFamilyTitle={setFamilyTitle}
                    />
                  ))}
                </div>
            
                <div className="fonts-btns-wrap">
                  <div className="fonts-btn">
                    <span> Popular </span>
                  </div>
                  <div className="fonts-btn">
                    <span> View All </span>
                  </div>
                  {FontsData?.map((font, ind) => (
                    <FontsBtn key={ind} font={font} onBtnClick={ChangeBackAllFonts} clickType={true} headerType={font?.title} />
                  ))}
                </div>
            </div>
          </div>
        </div>
      }
    </>
  );
};

export default FontStyle;
