import React, { useContext } from 'react'
import KeyboardBtn from './KeyboardBtn'
import HebrewWords from './LangWordsData/HebrewWords'
import { StatesContext } from "../../Context/StatesContext";

const HebrewKeyboard = () => {
  const { TextInput, setTextInput, SelectedTab } = useContext(StatesContext);

  return (
    <div className='hebrew-keyboard'>
        <div className='keyboard-btns-wrap'>
        {
          HebrewWords?.map((words, ind) => (
            <KeyboardBtn
            key={ind}
            words={words}
            TextInput={TextInput}
            setTextInput={setTextInput}
            SelectedTab={SelectedTab}
          />
          ))
        }
        </div>
    </div>
  )
}

export default HebrewKeyboard;