import React, { useContext, useEffect } from "react";
import "./PanelEditor.css";
import { StatesContext } from "../../Context/StatesContext";
import GreekWords from "./LangWordsData/GreekWords";
import HebrewWords from "./LangWordsData/HebrewWords";
import { handleTextChange, updateTextArray } from "./EditorHandles/EditorHandles";

const PanelEditorInput = ({ EditorType }) => {
  const { 
    TextInput, SelectedTab, EditorInput, setTextInput,
    prevTabType, TextProperties, TextArray, setTextArray,
    prevTextInputRef, prevTextPropertiesRef,
  } = useContext(StatesContext);

  const HandleInput = (e) => {
    const value = e.target.value;
    handleTextChange(value, SelectedTab, TextInput, setTextInput);
  };

  useEffect(() => {

    if(SelectedTab === "English"){

      if (EditorInput === "English" && prevTabType?.current === "Greek" && TextInput) {

        let convertedValue = TextInput
        .split('')
        .map(char => {
          const matchingGreekWord = GreekWords.find(word => word.greekLetter === char);
          if (matchingGreekWord) {
            return matchingGreekWord.inEnglish;
          } else {
            return char; 
          }
        })
        .join('');
  
        setTextInput(convertedValue);
        updateTextArray(convertedValue, TextProperties, TextArray, setTextArray);

      } else if (EditorInput === "English" && prevTabType?.current === "Hebrew" && TextInput) {

        let convertedValue = TextInput
        .split('')
        .map(char => {
          const matchingHebrewWord = HebrewWords.find(word => word.hebrewLetter === char);
          if (matchingHebrewWord) {
            return matchingHebrewWord.inEnglish;
          } else {
            return char; 
          }
        })
        .join('');
  
        setTextInput(convertedValue);
        updateTextArray(convertedValue, TextProperties, TextArray, setTextArray);
      }

    } else if(SelectedTab === "Greek") {

      if(EditorInput === "Greek" && prevTabType?.current === "English" && TextInput) {
        let convertedValue = TextInput
        .split('')
        .map(char => {
          const matchingGreekWord = GreekWords.find(word => word.inEnglish.toLocaleLowerCase() === char);
          if (matchingGreekWord) {
            return matchingGreekWord.greekLetter;
          } else {
            return '';
          }
        })
        .join('');

        setTextInput(convertedValue);
        updateTextArray(convertedValue, TextProperties, TextArray, setTextArray);
      } else if(EditorInput === "Greek" && prevTabType?.current === "Hebrew" && TextInput) {
        setTextInput("");
        updateTextArray("", TextProperties, TextArray, setTextArray);
      }

    } else if(SelectedTab === "Hebrew") {

      if(EditorInput === "Hebrew" && prevTabType?.current === "English" && TextInput) {
        let convertedValue = TextInput
        .split('')
        .map(char => {
          const matchingHebrewWord = HebrewWords.find(word => word.inEnglish.toLocaleLowerCase() === char);
          if (matchingHebrewWord) {
            return matchingHebrewWord.hebrewLetter;
          } else {
            return '';
          }
        })
        .join('');

        setTextInput(convertedValue);
        updateTextArray(convertedValue, TextProperties, TextArray, setTextArray);

      } else if(EditorInput === "Hebrew" && prevTabType?.current === "Greek" && TextInput) {
        setTextInput("");
        updateTextArray("", TextProperties, TextArray, setTextArray);
      }

    }
    prevTabType.current = SelectedTab;
  }, [prevTabType, EditorType, SelectedTab, EditorInput, TextArray, TextProperties]);

  useEffect(()=> {
    const prevTextInput = prevTextInputRef.current;
    const prevTextProperty = prevTextPropertiesRef.current;

    if(TextInput !== prevTextInput || TextProperties !== prevTextProperty) {
      updateTextArray(TextInput, TextProperties, TextArray, setTextArray);
      prevTextInputRef.current = TextInput;
      prevTextPropertiesRef.current = TextProperties;
    }
  }, [TextInput, TextArray, TextProperties])
    

  return (
    <>
      <textarea
        name=""
        id=""
        rows="3"
        value={TextInput}
        onChange={HandleInput}
        placeholder={`${
          SelectedTab === "English" || SelectedTab === "Greek"
            ? "Begin Typing..."
            : SelectedTab === "Hebrew"
            && "תתחיל להקליד"
        }`}
        className={`${
          SelectedTab === "English"
            ? "standard"
            : SelectedTab === "Hebrew"
            && "hebrew"
        }`}
        dir={`${
          SelectedTab === "English" || SelectedTab === "Greek"
            ? "ltr"
            : SelectedTab === "Hebrew" && "rtl"
        }`}
      ></textarea>
    </>
  );
};

export default PanelEditorInput;

