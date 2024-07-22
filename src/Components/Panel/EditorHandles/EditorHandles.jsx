
import GreekWords from "../LangWordsData/GreekWords";
import HebrewWords from "../LangWordsData/HebrewWords";

export function handleTextChange (value, SelectedTab, TextInput, setTextInput){    
    let convertedValue = value;

    if (SelectedTab === "Greek") {
        convertedValue = value
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

    } else if (SelectedTab === "Hebrew") {
      convertedValue = value
      .split('')
      .map(char => {
        const matchingHebrewWord = HebrewWords.find(word => word.inEnglish === char);
        if (matchingHebrewWord) {
          return matchingHebrewWord.hebrewLetter;
        } else {
          return '';
        }
      })
      .join('');

    }
  
    if ( (SelectedTab === "Greek" || SelectedTab === "Hebrew") && (value.length < TextInput.length)) {
      setTextInput(prevValue => prevValue.slice(0, value.length));

    } else if(SelectedTab === "Greek" || SelectedTab === "Hebrew") {
      setTextInput(prevValue => prevValue + convertedValue);

    } else if(SelectedTab === "English") {
      setTextInput(convertedValue);
    }
};

export function updateTextArray (text, properties, TextArray, setTextArray) {
  if (TextArray?.length > 0) {
    const updatedTextArray = TextArray?.map((item) => {
      if (item?.active) {
        return { 
          ...item, 
          ...properties, 
          text: text,
          ShirtType: item.ShirtType
        };
      }
      return item;
    });
    setTextArray(updatedTextArray);
  }
};

export function handlePropertyChange(property, value, TextArray, setTextArray) {
  if(TextArray?.length > 0) {
    const updatedTextArray = TextArray?.map((item) => {
      if (item?.active) {
        return { ...item, [property]: value };
      }
      return item;
    });
    setTextArray(updatedTextArray);
  }
}

export function duplicateTextObject (setTextArray) {
  setTextArray((prevArray) => {
    const activeObjectIndex = prevArray?.findIndex(obj => obj.active);
    if (activeObjectIndex === -1) return prevArray;

    const duplicatedObject = { ...prevArray[activeObjectIndex], active: true, };
    
    const updatedArray = prevArray.map(obj => ({
      ...obj,
      active: false
    }));

    return [...updatedArray, duplicatedObject];
  });
};

// export function addNewObject(setTextArray, initialObject, ShirtType) {
//   console.log("ShirtType", ShirtType);
//   setTextArray((prevArray) => {
//     if (!Array.isArray(prevArray) || prevArray.length === 0) {
//       return [{ ...initialObject, active: true, ShirtType }];
//     } else {
//       let existingActiveObjectIndex = null;

//       const updatedArray = prevArray.map((obj, index) => {
//         if (obj.active) {
//           const hasEmptyFields = !obj.text.trim() && !obj.clipArt.path.trim() && !obj.uploadImage.path.trim();
//           if (hasEmptyFields) {
//             existingActiveObjectIndex = index;
//             return { ...obj, ...initialObject, active: true, ShirtType };
//           }
//         }
//         return { ...obj, active: false };
//       });

//       if (existingActiveObjectIndex !== null) {
//         return updatedArray;
//       } else {
//         const newTextObject = { ...initialObject, active: true, ShirtType };
//         return [...updatedArray, newTextObject];
//       }
//     }
//   });
// }

export function addNewObject(setTextArray, initialObject, ShirtType) {
  setTextArray((prevArray) => {
    if (!Array.isArray(prevArray) || prevArray.length === 0) {
      const newObject = { ...initialObject, active: true, ShirtType };
      return [newObject];
    } else {
      let existingActiveObjectIndex = null;

      const updatedArray = prevArray.map((obj, index) => {
        if (obj.active) {
          const hasEmptyFields = !obj.text.trim() && !obj.clipArt.path.trim() && !obj.uploadImage.path.trim();
          if (hasEmptyFields) {
            existingActiveObjectIndex = index;
            return { ...obj, ...initialObject, active: true, ShirtType };
          }
        }
        return { ...obj, active: false };
      });

      if (existingActiveObjectIndex !== null) {
        return updatedArray;
      } else {
        const newTextObject = { ...initialObject, active: true, ShirtType };
        const newArray = [...updatedArray, newTextObject];
        return newArray;
      }
    }
  });
}


export function handleActiveText(TextArray, setTextArray, text, setTextInput, index) {
  if(TextArray?.length > 0) {
    const updateArray = TextArray.map((textObj, ind) => ({
      ...textObj,
      active: (textObj?.text === text && ind === index) ? true : false,
    }))
    setTextInput(text)
    setTextArray(updateArray);
  }
}

export function handleActiveUploadArt(TextArray, setTextArray, index) {
  if(TextArray?.length > 0) {
    const updateArray = TextArray.map((textObj, ind) => ({
      ...textObj,
      active: (ind === index) ? true : false,
    }))
    setTextArray(updateArray);
  }
}

export function handleActiveClipArt(TextArray, setTextArray, index) {
  if(TextArray?.length > 0) {
    const updateArray = TextArray.map((textObj, ind) => ({
      ...textObj,
      active: (ind === index) ? true : false,
    }))
    setTextArray(updateArray);
  }
}

export function deleteTextObject (TextArray, setTextArray, index, setTextInput) {
  if(TextArray?.length > 0) {
    const updateArray = TextArray?.filter((textObj, ind) => ind !== index)
    setTextInput('')
    setTextArray(updateArray);
  }
};


// export function updateTextArray(text, properties, TextArray, setTextArray) {
//   if(TextArray) {
//     const updatedTextArray = TextArray?.map((item) => {
//       if (item?.active) {
//         if (!item?.clipArt?.path) {
//           return { ...item, ...properties, text: text };
//         }
//       }
//       return { ...item, active: false };
//     });
  
//     const newItem = {
//       ...properties,
//       text: text,
//       active: true,
//     };
  
//     setTextArray([...updatedTextArray, newItem]);
//   }
// }



// export function handlePropertyChange (property, value, TextProperties, setTextProperties) {
//   const updatedProperties = { ...TextProperties, [property]: value };
//   console.log("updatedProperties", updatedProperties)
//   setTextProperties(updatedProperties);
// };



