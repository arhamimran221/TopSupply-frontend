import React, { useState, useContext } from "react";
import PanelEditorHeader from "../../Panel/PanelEditorHeader";
import { CloseOutlined } from "@ant-design/icons";
import "../../Editor/Editor.css";
import { CirclePicker } from "react-color";
import droplet from "../../../assets/svg/droplet.svg";
// import { StatesContext  } from "../../../Context/StatesContext";

const ColorPlate = ({ setEditorView }) => {
  //   const { selectedColors } = useContext(StatesContext);

  const [FontColor, setFontColor] = useState("Black");

  const ChangeEditorView = (view) => {
    setEditorView(view);
  };

  const colorChoices = [
    "#ffffff",
    "#000000",
    "#36454F",
    "#023020",
    "#301934",
    "#343434",
    "#1B1212",
    "#28282B",
    "#353935",
    "#6495ED",
    "#00FFFF",
    "#00008B",
    "#6F8FAF",
    "#1434A4",
    "#7DF9FF",
    "#00A36C",
    "#3F00FF",
    "#5D3FD3",
    "#191970",
    "#000080",
    "#1F51FF",
    "#A7C7E7",
    "#CCCCFF",
    "#B6D0E2",
    "#96DED1",
    "#4169E1",
    "#0F52BA",
    "#9FE2BF",
    "#87CEEB",
    "#4682B4",
    "#008080",
    "#40E0D0",
    "#0437F2",
    "#40B5AD",
    "#0818A8",
    "#EADDCA",
    "#E1C16E",
    "#CD7F32",
    "#A52A2A",
    "#DAA06D",
    "#800020",
    "#E97451",
    "#6E260E",
    "#C19A6B",
    "#954535",
    "#7B3F00",
    "#D27D2D",
    "#6F4E37",
    "#834333",
    "#B87333",
    "#814141",
    "#5C4033",
    "#913831",
    "#80461B",
    "#8B4513",
    "#C2B280",
    "#A0522D",
    "#D2B48C",
    "#483C32",
    "#7C3030",
    "#F5DEB3",
    "#722F37",
    "#B2BEB5",
    "#7393B3",
    "#A9A9A9",
    "#808080",
    "#818589",
    "#D3D3D3",
    "#899499",
    "#E5E4E2",
    "#8A9A5B",
    "#C0C0C0",
    "#708090",
    "#848884",
    "#71797E",
    "#7FFFD4",
    "#454B1B",
    "#088F8F",
    "#6082B6"
  ];

  const colorNames = [
    { name: "Black", hex: "#000000" },
    { name: "White", hex: "#ffffff" },
    { name: "Charcoal", hex: "#36454F" },
    { name: "Dark Green", hex: "#023020" },
    { name: "Dark Purple", hex: "#301934" },
    { name: "Dark Gray", hex: "#343434" },
    { name: "Licorice", hex: "#1B1212" },
    { name: "Gunmetal", hex: "#28282B" },
    { name: "Olive Drab", hex: "#353935" },
    { name: "Cornflower Blue", hex: "#6495ED" },
    { name: "Aqua", hex: "#00FFFF" },
    { name: "Dark Blue", hex: "#00008B" },
    { name: "Light Slate Gray", hex: "#6F8FAF" },
    { name: "Royal Blue", hex: "#1434A4" },
    { name: "Electric Blue", hex: "#7DF9FF" },
    { name: "Jade", hex: "#00A36C" },
    { name: "Blue Violet", hex: "#3F00FF" },
    { name: "Royal Purple", hex: "#5D3FD3" },
    { name: "Midnight Blue", hex: "#191970" },
    { name: "Navy Blue", hex: "#000080" },
    { name: "Dodger Blue", hex: "#1F51FF" },
    { name: "Light Blue", hex: "#A7C7E7" },
    { name: "Lavender", hex: "#CCCCFF" },
    { name: "Beau Blue", hex: "#B6D0E2" },
    { name: "Pale Robin Egg Blue", hex: "#96DED1" },
    { name: "Royal Blue", hex: "#4169E1" },
    { name: "Sapphire Blue", hex: "#0F52BA" },
    { name: "Sea Green", hex: "#9FE2BF" },
    { name: "Sky Blue", hex: "#87CEEB" },
    { name: "Steel Blue", hex: "#4682B4" },
    { name: "Teal", hex: "#008080" },
    { name: "Turquoise", hex: "#40E0D0" },
    { name: "Ultramarine", hex: "#0437F2" },
    { name: "Verdigris", hex: "#40B5AD" },
    { name: "Deep Blue", hex: "#0818A8" },
    { name: "Almond", hex: "#EADDCA" },
    { name: "Fawn", hex: "#E1C16E" },
    { name: "Bronze", hex: "#CD7F32" },
    { name: "Brown", hex: "#A52A2A" },
    { name: "Pale Gold", hex: "#DAA06D" },
    { name: "Burgundy", hex: "#800020" },
    { name: "Burnt Sienna", hex: "#E97451" },
    { name: "Sepia", hex: "#6E260E" },
    { name: "Camel", hex: "#C19A6B" },
    { name: "Redwood", hex: "#954535" },
    { name: "Cocoa Brown", hex: "#7B3F00" },
    { name: "Copper", hex: "#D27D2D" },
    { name: "Coffee", hex: "#6F4E37" },
    { name: "Cinnamon", hex: "#834333" },
    { name: "Copper Red", hex: "#B87333" },
    { name: "Deep Chestnut", hex: "#814141" },
    { name: "Dark Brown", hex: "#5C4033" },
    { name: "Deep Red", hex: "#913831" },
    { name: "Chocolate", hex: "#80461B" },
    { name: "Saddle Brown", hex: "#8B4513" },
    { name: "Sand", hex: "#C2B280" },
    { name: "Sienna", hex: "#A0522D" },
    { name: "Tan", hex: "#D2B48C" },
    { name: "Dark Brown", hex: "#483C32" },
    { name: "Brick Red", hex: "#7C3030" },
    { name: "Wheat", hex: "#F5DEB3" },
    { name: "Old Rose", hex: "#722F37" },
    { name: "Gray", hex: "#B2BEB5" },
    { name: "Slate Gray", hex: "#7393B3" },
    { name: "Dark Gray", hex: "#A9A9A9" },
    { name: "Light Steel Blue", hex: "#6082B6" },
    { name: "Gray", hex: "#808080" },
    { name: "Cool Gray", hex: "#818589" },
    { name: "Light Gray", hex: "#D3D3D3" },
    { name: "Gray Blue", hex: "#899499" },
    { name: "Platinum", hex: "#E5E4E2" },
    { name: "Moss Green", hex: "#8A9A5B" },
    { name: "Silver", hex: "#C0C0C0" },
    { name: "Slate", hex: "#708090" },
    { name: "Taupe", hex: "#848884" },
    { name: "Gray", hex: "#71797E" },
    { name: "Aquamarine", hex: "#7FFFD4" },
    { name: "Army Green", hex: "#454B1B" },
    { name: "Dark Cyan", hex: "#088F8F" },
  ];

  const handleHover = (colorCode) => {
    const cObject = colorNames.find((item) => {
      if (item?.hex === colorCode?.hex) {
        return item?.name;
      }
    });
    setFontColor(cObject?.name);
  };
  const handleColorClick = (color) => {
    // console.log("color", color)
  };

  return (
    <div className="w-[100%] h-[80vh] overflow-y-auto bg-[#fbfbfb] p-4 pl-6">
      <div className="editor-header relative">
        <PanelEditorHeader
          TagLine="UPLOAD ART"
          Title="Change Colors"
          MoveBack="ArtWork"
          setEditorView={setEditorView}
        />
        <div
          className="absolute right-1 top-5 cursor-pointer close-icon"
          onClick={() => ChangeEditorView("ArtWork")}
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
              <div className="rounded-full bg-[#000] outline-option"> </div>
              <span className="text-[15px]"> {FontColor} </span>
            </div>
          </div>
          <div className="flex gap-1 items-center">
            <div className="w-[12px]">
              <img src={droplet} alt="droplet" />
            </div>
            <span className="text-[15px]"> = Color used in your design </span>
          </div>
          <div className="colors-dots">
            <CirclePicker
              colors={colorChoices}
              onChangeComplete={(color) => handleColorClick(color)}
              onSwatchHover={(color) => handleHover(color)}
              circleSize={20}
              circleSpacing={11}
            />
          </div>
          <div className='edit-prev-style'>
            <button className='prev-style-btn'>
                Select Color
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ColorPlate;
