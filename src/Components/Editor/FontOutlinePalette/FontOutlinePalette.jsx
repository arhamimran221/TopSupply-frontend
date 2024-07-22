import React, { useState, useContext } from "react";
import { InputNumber, Slider } from "antd";
import PanelEditorHeader from "../../Panel/PanelEditorHeader";
import { CloseOutlined } from "@ant-design/icons";
import "../Editor.css";
// import { CirclePicker } from "react-color";
import droplet from "../../../assets/svg/droplet.svg";
import { StatesContext  } from "../../../Context/StatesContext";
import { handlePropertyChange } from "../../Panel/EditorHandles/EditorHandles";
import ColorPalette from "../../Panel/ColorPalette/ColorPalette";

const FontOutlinePalette = ({ setEditorView }) => {
  const { TextArray, setTextArray } = useContext(StatesContext);
  const [inputValue, setInputValue] = useState(TextArray[0]?.outline?.size);

  const [OutlineSize, setOutlineSize] = useState(TextArray[0]?.outline?.size);
  const [OutlineColor, setOutlineColor] = useState(TextArray[0]?.outline?.colorName);
  const [OutlineColorCode, setOutlineColorCode] = useState(TextArray[0]?.outline?.code);
  const [SelOutline, setSelOutline] = useState(TextArray[0]?.outline);

  const ChangeEditorView = (view) => {
    setEditorView(view);
  };

  const onChange = (value) => {
    setInputValue(value);
    setOutlineSize(value);
    const updatedOutline = { ...SelOutline, size: value };
    setSelOutline(updatedOutline)
  };

  const colorCodes = [
    '',
    'fffffff',
    '#bfbfbf',
    '#778692',
    '#7f7f73',
    '#584545',
    '#3a3a3a',
    '#000000',
    '#ee0012',
    '#e56385',
    '#88162c',
    '#5b0f21',
    '#fc75b9',
    '#f5b2db',
    '#ff29ae',
    '#93397f',
    '#5e34d3',
    '#351b87',
    '#030c4c',
    '#1340d1',
    '#005fe8',
    '#5d89b4',
    '#8ad2e6',
    '#3bb0c9',
    '#009bde',
    '#00afaa',
    '#00a1af',
    '#007b8a',
    '#00945e',
    '#03660c',
    '#003803',
    '#47a141',
    '#239b15',
    '#92db33',
    '#606737',
    '#f1e5b2',
    '#ffec00',
    '#ae9e3b',
    '#dfcaa3',
    '#fcbc08',
    '#ffcb8b',
    '#c88a3e',
    '#ed7600',
    '#bb7232',
    '#f5cfb2',
    '#b07c57',
    '#ff4e00',
    '#d83d01',
    '#985f35',
    '#643510',
    '#814c3a',
    '#ff489b',
    '#b5b5bc',
    '#9f925e'
  ]

  const colorsData = [
    { name: 'None', hex: ''},
    { name: "White", hex: "#ffffff" },
    { name: "Light Gray", hex: "#bfbfbf" },
    { name: "Slate Blue", hex: "#778692" },
    { name: "Steel Gray", hex: "#7f7f73" },
    { name: "Dark Brown", hex: "#584545" },
    { name: "Charcoal Gray", hex: "#3a3a3a" },
    { name: "Black", hex: "#000000" },
    { name: "Red", hex: "#ee0012" },
    { name: "Rubin Red", hex: "#e56385" },

    { name: "Cardinal Red", hex: "#88162c" },
    { name: "Maroon", hex: "#5b0f21" },
    { name: "Pink", hex: "#fc75b9" },
    { name: "Light Pink", hex: "#f5b2db" },
    { name: "Hot Pink", hex: "#ff29ae" },
    { name: "Rose Magenta", hex: "#93397f" },
    { name: "Light Purple", hex: "#5e34d3" },
    { name: "Purple", hex: "#351b87" },
    { name: "Navy", hex: "#030c4c" },


    { name: "Royal Blue", hex: "#1340d1" },
    { name: "True Blue", hex: "#005fe8" },
    { name: "Columbia Blue", hex: "#5d89b4" },
    { name: "Powder Blue", hex: "#8ad2e6" },
    { name: "Indian Ocean Blue", hex: "#3bb0c9" },
    { name: "Electric Blue", hex: "#009bde" },
    { name: "Aqua", hex: "#00afaa" },
    { name: "Turquoise", hex: "#00a1af" },
    { name: "Jade", hex: "#007b8a" },

    { name: "Brite Dallas Grn", hex: "#00945e" },
    { name: "Kelly Green", hex: "#03660c" },
    { name: "Forest Green", hex: "#003803" },
    { name: "Lime Green", hex: "#47a141" },
    { name: "Fresh Green", hex: "#239b15" },
    { name: "Light Lime Green", hex: "#92db33" },
    { name: "Olive Green", hex: "#606737" },
    { name: "Cream", hex: "#f1e5b2" },
    { name: "Yellow", hex: "#ffec00" },

    { name: "Old Gold", hex: "#ae9e3b" },
    { name: "Flesh", hex: "#dfcaa3" },
    { name: "Golden Yellow", hex: "#fcbc08" },
    { name: "Rebel Flesh", hex: "#ffcb8b" },
    { name: "Peanut Butter", hex: "#c88a3e" },
    { name: "Tennesse Orange", hex: "#ed7600" },
    { name: "Burnt Orange", hex: "#bb7232" },
    { name: "Peach", hex: "#f5cfb2" },
    { name: "Tan", hex: "#b07c57" },

    { name: "Orange", hex: "#ff4e00" },
    { name: "Clockwork Orange", hex: "#d83d01" },
    { name: "Light Brown", hex: "#985f35" },
    { name: "Chocolate Brown", hex: "#643510" },
    { name: "Sienna Brown", hex: "#814c3a" },
    { name: "Fluorescent Pink", hex: "#ff489b" },
    { name: "Liquid Silver (Metallic)", hex: "#b5b5bc" },
    { name: "Liquid Gold (Metallic)", hex: "#9f925e" },
  ]

  const handleHover = (colorCode) => {
    const cObject = colorsData.find((item) => {
      if (item?.hex.toLowerCase() === colorCode?.hex.toLowerCase()) {
        return item?.name;
      }
    });
    setOutlineColor(cObject?.name);
    setOutlineColorCode(cObject?.hex)
    setOutlineSize(2);
    setInputValue(2);
  };

  const handleLeave = () => {
    setOutlineColor('');
    setOutlineColorCode('')
  }

  const handleClick = (colorCode) => {
    const cObject = colorsData.find((item) => {
      if (item?.hex.toLowerCase() === colorCode?.hex.toLowerCase()) {
        return item?.name;
      }
    });
    let selectedObj = { size: OutlineSize, code: cObject?.hex, colorName: cObject?.name }
    setSelOutline(selectedObj)
  }
  
  const handleSelOutline = () => {
    handlePropertyChange('outline', SelOutline, TextArray, setTextArray)
    setEditorView('TextEditor')
  }

  return (
    <div className="w-[100%] h-[80vh] overflow-y-auto bg-[#fbfbfb] p-4 pl-6">
      <div className="editor-header relative">
        <PanelEditorHeader
          TagLine="Text Editor"
          Title="Text Outline"
          MoveBack="TextEditor"
          setEditorView={setEditorView}
        />
        <div
          className="absolute right-1 top-5 cursor-pointer close-icon"
          onClick={() => ChangeEditorView("TextEditor")}
        >
          <CloseOutlined />
        </div>
      </div>
      <div className="editor-body pt-6">
        <div className="color-palette flex flex-col gap-4">
          <div className="flex gap-1 items-center">
            <span> Color: </span>
            <div
              className="flex items-center gap-2 cursor-pointer"
              onClick={() => ChangeEditorView("Font")}
            >
              <div 
                className={`rounded-full outline-option`} 
                style={{backgroundColor: OutlineColorCode ? OutlineColorCode : SelOutline?.code }}> 
              </div>
              <span className="text-[15px]"> {OutlineColor ? OutlineColor : SelOutline?.colorName } </span>
            </div>
          </div>
          <div className="flex gap-1 items-center">
            <div className="w-[12px]">
              <img src={droplet} alt="droplet" />
            </div>
            <span className="text-[15px]"> = Colors used in your design </span>
          </div>
          <div className="colors-dots">
            <ColorPalette
              colors={colorCodes} 
              onSwatchHover={(color) => handleHover(color)}
              onSwatchLeave={(color) => handleLeave(color)}
              onColorClick={(color) => handleClick(color)}
              circleSize={26}
              circleSpacing={8}
              SelColor={SelOutline}
            />
            
          </div>
          <div className="border-t border-[#cccfd6] py-3">
            <div className="w-full flex justify-between items-center">
                <div className="w-[30%] text-[14px]"> Outline Size </div>
                <div className="w-[70%] flex items-center justify-between gap-4">
                <Slider
                    min={0}
                    max={12}
                    onChange={onChange}
                    className="w-full"
                    value={typeof inputValue === "number" ? inputValue : 0}
                />
                <InputNumber
                    min={0}
                    max={12}
                    value={inputValue}
                    onChange={onChange}
                />
                </div>
            </div>
           </div>
          <div className='edit-prev-style'>
            <button className='prev-style-btn' onClick={handleSelOutline}>
                Select Color
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FontOutlinePalette;




