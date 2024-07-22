import React, { useState, useContext } from "react";
import { StatesContext } from "../../../Context/StatesContext";
import { handlePropertyChange } from "../../Panel/EditorHandles/EditorHandles";
import ClipartImages from "../ClipartImages";
import { TailSpin } from "react-loader-spinner";
import PanelEditorHeader from "../../Panel/PanelEditorHeader";
import { CloseOutlined } from "@ant-design/icons";
import { Input, Space } from "antd";
const { Search } = Input;

const Greek = ({ setEditorView ,setActive}) => {
  const { TextArray, setTextArray } = useContext(StatesContext);
  const [selectedanimal, setSelectedAnimal] = useState(null);
  const [imagesarray, setImagesArray] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

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

  const greekTerms = [
    "Acacia",
    "Alpha Alpha",
    "Alpha Chi Omega",
    "Alpha Epsilon Pi",
    "Alpha Eta Rho",
    "Alpha Gamma Delta",
    "Alpha Gamma Rho",
    "Alpha Kappa Alpha",
    "Alpha Kappa Psi",
    "Alpha Omega Epsilon",
    "Alpha Omicron Pi",
    "Alpha Phi",
    "Alpha Sigma Alpha",
    "Alpha Sigma Tau",
    "Alpha Xi Delta",
    "Beta Chi Theta",
    "Chi Omega",
    "Chi Psi",
    "Circle of Sisterhood Foundation",
    "Columbia Southern University",
    "Delta Delta Delta",
    "Delta Gamma",
    "Delta Kappa Alpha",
    "Delta Kappa Epsilon",
    "Delta Phi",
    "Delta Phi Epsilon",
    "Delta Phi Lambda",
    "Delta Zeta",
    "Farmhouse",
    "Gamma Alpha Omega",
    "Gamma Phi Beta",
    "Gamma Rho Lambda",
    "Gamma Sigma Sigma",
    "Iota Phi Theta",
    "Kappa Alpha Theta",
    "Kappa Delta",
    "Kappa Delta Chi",
    "Kappa Kappa Gamma",
    "Kappa Phi Lambda",
    "Kappa Psi",
    "Kappa Sigma",
    "Lambda Alpha Upsilon",
    "Lambda Chi Alpha",
    "Lambda Kappa Sigma",
    "Lambda Phi Epsilon",
    "Lambda Sigma Upsilon",
    "Lambda Theta Alpha",
    "Lambda Theta Phi",
    "Mu Sigma Upsilon",
    "National Panhellenic Conference",
    "North-American Interfraternity Conference",
    "Omega Phi Alpha",
    "Omega Psi Phi",
    "Phi Alpha Delta",
    "Phi Beta Sigma",
    "Phi Chi Theta",
    "Phi Delta Epsilon",
    "Phi Delta Theta",
    "Phi Kappa Psi",
    "Phi Kappa Sigma",
    "Phi Kappa Tau",
    "Phi Kappa Theta",
    "Phi Mu",
    "Phi Mu Delta",
    "Phi Sigma Kappa",
    "Phi Sigma Pi",
    "Phi Sigma Rho",
    "Phi Sigma Sigma",
    "Pi Alpha Phi",
    "Pi Beta Phi",
    "Pi Kappa Alpha",
    "Pi Kappa Phi",
    "Pi Sigma Epsilon",
    "Psi Sigma Phi",
    "Psi Upsilon",
    "Sigma Alpha",
    "Sigma Alpha Epsilon",
    "Sigma Alpha Iota",
    "Sigma Alpha Mu",
    "Sigma Beta Rho",
    "Sigma Chi",
    "Sigma Delta Tau",
    "Sigma Kappa",
    "Sigma Lambda Beta",
    "Sigma Lambda Gamma",
    "Sigma Nu",
    "Sigma Phi Epsilon",
    "Sigma Pi",
    "Sigma Sigma Sigma",
    "Sigma Tau Gamma",
    "Tau Beta Sigma",
    "Tau Kappa Epsilon",
    "The National Society of Collegiate Scholars",
    "Theta Phi Alpha",
    "Theta Tau",
    "Theta Xi",
    "Triangle",
    "Zeta Psi",
    "Zeta Tau Alpha",
  ];
  const onSearch = (value, _e, info) => console.log(info?.source, value);
  const ChangeEditorView = (view) => {
    setEditorView(view);
  };

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
        <div
          className={
            isLoading
              ? "loading"
              : "grid grid-cols-3 gap-[4px] items-center cursor-pointer"
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
                  : "hover:scale-125 hover:bg-[#ededed] p-[8px] mt-[15px]"
              }
            />
          ))}
        </div>
      ) : (
        <>
          <h1 className="mt-[16px]">Greek</h1>
          <ul className="mt-[8px]">
            {greekTerms.map((term, index) => (
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

export default Greek;
