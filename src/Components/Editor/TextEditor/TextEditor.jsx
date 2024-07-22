import PanelEditorHeader from "../../Panel/PanelEditorHeader";
import { CloseOutlined } from "@ant-design/icons";
import "../Editor.css";
import React, { useContext } from "react";
import { StatesContext } from "../../../Context/StatesContext";
import PanelEditorInput from "../../Panel/PanelEditorInput";
import EditorKeyboard from "./EditorKeyboard";

const TextEditor = ({setEditorView, setVisible}) => {
  const { EditorType, setEditorType, setEditorInput, SelectedTab, setSelectedTab, setTextInput } = useContext(StatesContext);

  const handleTabClick = (tab) => {
    if(tab === "English") {
      setSelectedTab(tab);
      setEditorType(tab);
      setEditorInput(tab)

    } else if(tab === "Greek") {
      setSelectedTab(tab);
      setEditorInput(tab)
      setEditorType("English");

      if(EditorType === "Hebrew"){ 
        setEditorType(tab);
        setTextInput('') 
      }

    } else if (tab === "Hebrew") {
      setSelectedTab(tab);
      setEditorInput(tab)
      setEditorType("English");

      if(EditorType === "Greek"){ 
        setEditorType(tab);
        setTextInput('') 
      }
    }
  };


  return (
    <div className="w-[100%] h-[70vh] overflow-y-auto bg-[#fbfbfb] p-4">
      <div className="editor-header relative">
        <PanelEditorHeader TagLine="Text Editor" Title="Add New Text" />
        <div className="absolute right-1 top-5 close-icon">
          <CloseOutlined onClick={()=>setVisible(false)}/>
        </div>
      </div>
      <div className="editor-body pt-6">
        <div className="editors-tabs">
          <div className="tabs-wrap">
            <div 
              className={`tabs-menu ${ SelectedTab === "English" ? "selected-tab" : "" }`}
              onClick={() => handleTabClick("English")}
            >
              English
            </div>
            <div
              className={`tabs-menu ${ SelectedTab === "Greek" ? "selected-tab" : "" }`}
              onClick={() => handleTabClick("Greek")}
            >
              Greek
            </div>
            <div
              className={`tabs-menu ${ SelectedTab === "Hebrew" ? "selected-tab" : "" }`}
              onClick={() => handleTabClick("Hebrew")}
            >
              Hebrew
            </div>
          </div>
        </div>
        <div className="editor-input">
          <PanelEditorInput EditorType={EditorType} />
        </div>
        <div className="editor-keyboard">
          <EditorKeyboard setEditorView={setEditorView} /> 
        </div>
      </div>
    </div>
  );
};

export default TextEditor;
