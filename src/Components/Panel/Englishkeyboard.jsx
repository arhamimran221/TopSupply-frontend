import React from 'react';
import { useContext, useState, useEffect } from "react";
import { StatesContext } from "../../Context/StatesContext";
import WordsSpacing from "./EnglishKbComps/WordsSpacing";
import Rotate from "./EnglishKbComps/Rotate";
// import Arc from "./EnglishKbComps/Arc";
import Size from "./EnglishKbComps/Size";
import Outline from "./EnglishKbComps/Outline";
import Color from "./EnglishKbComps/Color";
import Font from "./EnglishKbComps/Font";
import WordTools from "./EnglishKbComps/WordTools";

const Englishkeyboard = ({setEditorView}) => {
  const { TextInput, TextArray } = useContext(StatesContext);

  const [ActiveObject, setActiveObject]= useState(
    TextArray?.length > 0 ? TextArray?.find((item) => item?.active === true) : {}
  );

  useEffect(()=> {
    if(TextArray?.length > 0) {
      setActiveObject(TextArray?.find((item) => item?.active === true))
    }
  }, [TextArray])

  return (
    <>
      {
        (TextInput && ActiveObject) &&
        <div className='english-keyboard'>
          <div className='english-btns-wrap'>
          </div>
          <div className='keyboard-ranges-wrap'>
            <WordTools />
            <Font setEditorView={setEditorView} />
            <Color setEditorView={setEditorView} />
            <Outline setEditorView={setEditorView} />
            <Size />
            {/* <Arc /> */}
            <Rotate />
            <WordsSpacing />
          </div>
        </div>
      }
    </>
  )
}

export default Englishkeyboard