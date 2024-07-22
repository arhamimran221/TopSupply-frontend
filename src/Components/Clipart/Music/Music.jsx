import React, { useState, useContext } from "react";
import { StatesContext } from "../../../Context/StatesContext";
import { handlePropertyChange } from "../../Panel/EditorHandles/EditorHandles";
import ClipartImages from "../ClipartImages";
import { TailSpin } from "react-loader-spinner";
import PanelEditorHeader from "../../Panel/PanelEditorHeader";
import { CloseOutlined } from "@ant-design/icons";
import { Input, Space } from "antd";
const { Search } = Input;


const Music = ({setEditorView,setActive}) => {
  const { TextArray, setTextArray } = useContext(StatesContext);
    const [selectedanimal, setSelectedAnimal] = useState(null);
    const [imagesarray, setImagesArray] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
  
    const onSearch = (value, _e, info) => console.log(info?.source, value);
    const ChangeEditorView = (view) => {
      setEditorView(view);
    };
  

    const SelectedAnimal = (value) => {
      setIsLoading(true);
      const SubCatImages = ClipartImages.find(
        (item) => item?.subcategory === value
      );
      setSelectedAnimal(value);
  
      setImagesArray(SubCatImages?.images);
      const randomTime = 4000;
  
      const timeoutId = setTimeout(() => {
        setIsLoading(false);
      }, randomTime);
  
      return () => clearTimeout(timeoutId);
    };

  const handleUpdateClipArt = (imagePath) => {
    setEditorView('ClipArtEditor');
    const clipArtObj = { path: imagePath };
    handlePropertyChange("clipArt", clipArtObj, TextArray, setTextArray);
  };

  const musicTerms = [
    "Band",
    "Disco",
    "Drums",
    "Guitar",
    "Headphones",
    "Hip Hop",
    "Instruments",
    "Marching Band",
    "Microphone",
    "Musical Notes",
    "Piano",
    "Punk",
    "Rap",
    "Singer",
  ];

  return (
    <div className=" relative">
            <div className="editor-header relative">
        <PanelEditorHeader
          TagLine="CLIPART"
          Title="Add Clipart"
          MoveBack="ClipArtView"
          setEditorView={setEditorView}
          setActive={setActive}
        />
        <div
          className="absolute right-1 top-5 close-icon"
          onClick={() => ChangeEditorView("ClipArtView")}
        >
          <CloseOutlined />
        </div>
      </div>
      <Search
        placeholder="Search for Clipart"
        onSearch={onSearch}
        enterButton
        allowClear
      />
      {selectedanimal && selectedanimal ? (
        <div className={
            isLoading
              ? "loading"
              : "grid grid-cols-3 gap-[4px] items-center cursor-pointer"
          }>
            {isLoading && (
            <div className="flex items-center w-[100%] justify-center absolute inset-0 h-[200px] mt-[150px]">
              <TailSpin
                width={60}
                color="#27a6ff" // Adjust color as needed
              />
            </div>
          )}
          {imagesarray?.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Image ${index}`}
              onClick={() => handleUpdateClipArt(image)}
              className={
                isLoading
                  ? "invisible"
                  : "hover:scale-125 hover:bg-[#ededed] p-[8px]"
              }
            />
          ))}
        </div>
      ) : (
        <>
          <h2 className="mt-[16px]">Music</h2>
          <ul className="mt-[8px]">
            {musicTerms.map((term, index) => (
              <li
                key={index}
                className="cursor-pointer text-[#27A6FF] py-[6px] border-b border-[#EEEE] hover:underline text-[14px]"
                onClick={() => SelectedAnimal(term)}
              >
                {term}
              </li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
};

export default Music;
