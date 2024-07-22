import React from 'react';
const TextFontPreview = ({ font, TextInput, setFamilyClass, setFamilyTitle }) => {

  const HandleSaveFamily = () => {
    setFamilyClass(font?.fontFamily)

    const intervalId = setInterval(() => {
      setFamilyTitle(font?.fontTitle)
    }, 500);
    return () => clearInterval(intervalId);

  }

  return (
    <div className="w-full py-3 px-4 flex flex-col gap-1 justify-center items-center hover:bg-[#eee]">
      <span className={`text-[42px] leading-[44px] ${font?.fontFamily}`}> {TextInput} </span>
      <span className="text-[12px]"> {font?.fontTitle} </span>
      <button 
        className="prev-style-btn !w-[50%]" 
        onClick={() => HandleSaveFamily()}>Select</button>
    </div>
  );
};

export default TextFontPreview;
