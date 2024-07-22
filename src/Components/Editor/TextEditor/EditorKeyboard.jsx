import React, { useContext } from "react";
import { StatesContext } from "../../../Context/StatesContext";
import Englishkeyboard from "../../Panel/Englishkeyboard";
import GreekKeyboard from "../../Panel/GreekKeyboard";
import HebrewKeyboard from "../../Panel/HebrewKeyboard";

const EditorKeyboard = ({ setEditorView }) => {
  const { EditorType, EditorInput, setEditorType, SelectedTab, TextInput } = useContext(StatesContext);

  return (
    <>
    {
      (SelectedTab === "English" && EditorInput === "English") ? (
        <Englishkeyboard setEditorView={setEditorView} />


      ) : (SelectedTab === "Greek" && TextInput && EditorType === "English" && EditorInput === "Greek") ? (
        <>
          <div className='edit-prev-style'>
            <button className='prev-style-btn' onClick={()=> setEditorType('Greek')}>
                Use Greek Keyboard
            </button>
          </div>
          <Englishkeyboard setEditorView={setEditorView} />
        </>


      ) : (SelectedTab === "Greek" && TextInput && EditorType === "Greek" && EditorInput === "Greek") ? (
        <>
          <div className='edit-prev-style'>
            <button className='prev-style-btn' onClick={()=> setEditorType('English')}>
                Edit Font & Style
            </button>
          </div>
          <GreekKeyboard />
        </>


      ) : (SelectedTab === "Greek" && !TextInput && EditorInput === "Greek") ? (
        <GreekKeyboard />
      
      )  : (SelectedTab === "Hebrew" && TextInput && EditorType === "English" && EditorInput === "Hebrew") ? (
        <>
          <div className='edit-prev-style'>
            <button className='prev-style-btn' onClick={()=> setEditorType('Hebrew')}>
                Use Hebrew Keyboard
            </button>
          </div>
          <Englishkeyboard setEditorView={setEditorView} />
        </>


      ) : (SelectedTab === "Hebrew" && TextInput && EditorType === "Hebrew" && EditorInput === "Hebrew") ? (
        <>
          <div className='edit-prev-style'>
            <button className='prev-style-btn' onClick={()=> setEditorType('English')}>
                Edit Font & Style
            </button>
          </div>
          <HebrewKeyboard />
        </>


      ) : (SelectedTab === "Hebrew" && !TextInput && EditorInput === "Hebrew") && (
        <HebrewKeyboard />
      )
    }
    </>
  );
};

export default EditorKeyboard;
