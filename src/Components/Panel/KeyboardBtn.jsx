import { handleTextChange } from "./EditorHandles/EditorHandles";
import React from 'react';

const KeyboardBtn = ({words, SelectedTab, TextInput, setTextInput}) => {

  const HandleClick = () => {
    if (words?.greekLetter) {
      handleTextChange(TextInput + words?.inEnglish, SelectedTab, TextInput, setTextInput);
    } else if (words?.hebrewLetter) {
      handleTextChange(TextInput + words?.inEnglish, SelectedTab, TextInput, setTextInput);
    }
  };

  return (
    <div className="keyboard-wrap" onClick={HandleClick}>
      <div className="keyboard-let flex gap-4 ">
        <span className="">{words?.greekLetter || words?.hebrewLetter}</span>
        <span>{words?.letterName}</span>
      </div>
      <div className="flex"> {words?.inEnglish} </div>
    </div>
  );
};

export default KeyboardBtn;
