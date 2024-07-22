import React, { useState } from "react";
import TextEditor from "./TextEditor/TextEditor";
import FontStyle from "./FontStyle/FontStyle";
import FontColorPalette from "./FontColorPalette/FontColorPalette";
import FontOutlinePalette from "./FontOutlinePalette/FontOutlinePalette";

const Editor = ({setVisible}) => {
  const [EditorView, setEditorView] = useState("TextEditor");

  return (
    <>
      {
        EditorView === "TextEditor" ? (
        <TextEditor setEditorView={setEditorView} setVisible={setVisible}/>
        ) : 
        EditorView === "FontStyle" ? (
          <FontStyle setEditorView={setEditorView} />
        ) : 
        EditorView === "FontColorPalette" ? (
          <FontColorPalette setEditorView={setEditorView} />
        ) :
        EditorView === "FontOutlinePalette" && (
          <FontOutlinePalette setEditorView={setEditorView} />
        ) 
      }
    </>
  );
};

export default Editor;
