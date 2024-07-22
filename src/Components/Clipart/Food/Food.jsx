import React, { useState, useContext } from "react";
import ClipartImages from "../ClipartImages";
import { TailSpin } from "react-loader-spinner";
import PanelEditorHeader from "../../Panel/PanelEditorHeader";
import { CloseOutlined } from "@ant-design/icons";
import { Input } from "antd";
const { Search } = Input;
import { StatesContext } from "../../../Context/StatesContext";
import { handlePropertyChange } from "../../Panel/EditorHandles/EditorHandles";

const Food = ({setEditorView ,setActive}) => {
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

  const foodTerms = [
    "Alcohol",
    "Apple",
    "BBQ",
    "Bread",
    "Cake",
    "Candy",
    "Coffee",
    "Drink",
    "Fish",
    "Fruit",
    "Ice Cream",
    "Martini",
    "Meat",
    "Pie",
    "Pizza",
    "Restaurant",
    "Vegetable",
    "Water",
  ];

  const handleUpdateClipArt = (imagePath) => {
    setEditorView('ClipArtEditor');
    const clipArtObj = { path: imagePath };
    handlePropertyChange("clipArt", clipArtObj, TextArray, setTextArray);
  };

  return (
    <div className="relative">
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
          <h2 className="mt-[16px]">Food</h2>
          <ul className="mt-[8px]">
            {foodTerms.map((term, index) => (
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

export default Food;
