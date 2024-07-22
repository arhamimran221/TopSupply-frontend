import React, { useContext } from "react";
import KeyboardBtn from "./KeyboardBtn";
import GreekWords from "./LangWordsData/GreekWords";
import { StatesContext } from "../../Context/StatesContext";

const GreekKeyboard = () => {
  const { TextInput, setTextInput, SelectedTab } = useContext(StatesContext);
  return (
    <div className="greek-keyboard">
      <div className="keyboard-btns-wrap">
        {GreekWords?.map((words, ind) => (
          <KeyboardBtn
            key={ind}
            words={words}
            TextInput={TextInput}
            setTextInput={setTextInput}
            SelectedTab={SelectedTab}
          />
        ))}
      </div>
    </div>
  );
};

export default GreekKeyboard;
