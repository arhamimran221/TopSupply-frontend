import React, { useState, useContext } from "react";
import ClipartImages from "../ClipartImages";
import { TailSpin } from "react-loader-spinner";
import PanelEditorHeader from "../../Panel/PanelEditorHeader";
import { CloseOutlined } from "@ant-design/icons";
import { Input, Space } from "antd";
const { Search } = Input;
import { StatesContext } from "../../../Context/StatesContext";
import { handlePropertyChange } from "../../Panel/EditorHandles/EditorHandles";

const Animal = ({ setEditorView, setActive }) => {
  const { TextArray, setTextArray } = useContext(StatesContext);

  const [selectedanimal, setSelectedAnimal] = useState(null);
  const [imagesarray, setImagesArray] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const ChangeEditorView = (view) => {
    setEditorView(view);
  };

  const onSearch = (value, _e, info) => console.log(info?.source, value);

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

  const animals = [
    "Aardvark",
    "Alligator",
    "Amphibian",
    "Ape",
    "Armadillos",
    "Bat",
    "Bear",
    "Beaver",
    "Bee",
    "Bird",
    "Bobcat",
    "Buffalo",
    "Bug",
    "Bull",
    "Butterflies",
    "Camel",
    "Cat",
    "Chicken",
    "Claws",
    "Cow",
    "Crab",
    "Deer",
    "Dinosaur",
    "Dog",
    "Dolphin",
    "Donkey",
    "Dragon",
    "Duck",
    "Eagle",
    "Elephant",
    "Fish",
    "Flamingo",
    "Fox",
    "Frog",
    "Giraffe",
    "Goat",
    "Gorilla",
    "Griffin",
    "Hawk",
    "Hippo",
    "Horse",
    "Jaguar",
    "Leopard",
    "Lion",
    "Lizard",
    "Mice",
    "Monkey",
    "Monster",
    "Moose",
    "Mustang",
    "Octopus",
    "Owl",
    "Panda",
    "Panther",
    "Penguin",
    "Phoenix",
    "Pig",
    "Rabbit",
    "Ram",
    "Rhino",
    "Seals",
    "Shark",
    "Sheep",
    "Skunk",
    "Snake",
    "Spider",
    "Squirrel",
    "Tiger",
    "Unicorn",
    "Wing",
    "Wolf",
    "Wolverine",
    "Zebra",
  ];

  const handleUpdateClipArt = (imagePath) => {
    setEditorView('ClipArtEditor');
    const clipArtObj = { path: imagePath };
    handlePropertyChange("clipArt", clipArtObj, TextArray, setTextArray);
  };

  return (
    <div className="relative">
      <div className="editor-header relative mb-3">
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
        <div
          className={
            isLoading
              ? "loading mt-[20px]"
              : "grid grid-cols-3 gap-[4px] items-center cursor-pointer mt-[20px]"
          }
        >
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
          <h2 className="mt-[16px] px-4">Animals</h2>
          <ul className="mt-[8px] px-4">
            {animals.map((animal, index) => (
              <li
                key={index}
                className="cursor-pointer text-[#27A6FF] py-[6px] border-b border-[#EEEE] hover:underline text-[14px]"
                onClick={() => SelectedAnimal(animal)}
              >
                {animal}
              </li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
};

export default Animal;
