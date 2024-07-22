import React, { createContext, useState, useContext, useRef } from "react";

export const StatesContext = createContext();

export const StatesProvider = ({ children }) => {
  const [selectedColors, setSelectedColors] = useState("color");
  const [SelectedTab, setSelectedTab] = useState("English");
  const [EditorType, setEditorType] = useState("English");
  const [EditorInput, setEditorInput] = useState("English");
  const [EditorView, setEditorView] = useState("TextEditor");
  const prevTabType = useRef(SelectedTab);
  const [TextInput, setTextInput] = useState("");
  const prevTextInputRef = useRef();
  const prevTextPropertiesRef = useRef();

  const initialObject = {
    text: '', fontSize: 24, 
    imageSize: 100,
    fontFamily: 'interstate', familyTitle: 'Interstate',
    color: { code: '#000000', colorName: 'Black' }, 
    rotate: 0, arc: 0, letterSpacing: '0px', active: true,
    outline: { size: 0, code: '', colorName: 'None'},
    clipArtOutline: { size: 0, code: '', colorName: 'None'},
    flip: { VcScale: 1, HzScale: 1 },
    position: { top: 0, left: 0, },
    clipArt: { path: '' },
    clipArtColor: { code: '#000000', colorName: 'Black' },
    uploadImage : {path: '' ,filter:''},
    UploadSize: 100, ShirtType: '' 
  };
  
  const [TextArray, setTextArray] = useState([]);
  // const [TextArray, setTextArray] = useState([{ ...initialObject }]);
  const [TextProperties, setTextProperties] = useState(initialObject);

  const contextValue = {
    initialObject,
    selectedColors, setSelectedColors,
    SelectedTab, setSelectedTab,
    EditorType, setEditorType,
    EditorView, setEditorView,
    EditorInput, setEditorInput,
    prevTabType, prevTextInputRef,
    prevTextPropertiesRef,
    TextInput, setTextInput,
    TextArray, setTextArray,
    TextProperties, setTextProperties,
  };

  return (
    <StatesContext.Provider value={contextValue}>
      {children}
    </StatesContext.Provider>
  );
};

export const useAuth = () => useContext(StatesContext);
