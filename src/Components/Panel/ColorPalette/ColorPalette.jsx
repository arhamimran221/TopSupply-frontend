import React from 'react';
import droplet from "../../../assets/svg/droplet.svg";
import { StopOutlined } from "@ant-design/icons";

const ColorPalette = ({
  colors,
  onSwatchHover,
  onSwatchLeave,
  circleSize,
  circleSpacing,
  onColorClick,
  SelColor,
}) => {
  const handleMouseOver = (color, event) => {
    if (onSwatchHover) {
      onSwatchHover(color, event);
    }
  };

  const handleMouseLeave = (color, event) => {
    if (onSwatchLeave) {
      onSwatchLeave();
    }
  };

  const handleColorClick = (color) => {
    if (onColorClick) {
      onColorClick(color);
    }
  };

  return (
    <div className="flex flex-wrap" style={{ gap: `${circleSpacing}px` }}>
      {colors.map((color, index) => {
        const isActive = SelColor?.code?.toLowerCase() === color.toLowerCase();
        return (
          <div
            key={color}
            style={{
              width: circleSize,
              height: circleSize,
            }}
            onMouseOver={(e) => handleMouseOver({ hex: color }, e)}
            onMouseLeave={(e) => handleMouseLeave({ hex: color }, e)}
          >
            {isActive && color ? (
              <div
                className={`rounded-full w-[inherit] h-[inherit] shadow-md cursor-pointer relative flex justify-center items-center`}
                style={{ backgroundColor: color }}
                onClick={() => handleColorClick({ hex: color })}
              >
                <img src={droplet} className="w-[10px]" />
              </div>
            ) : isActive && !color ? (
              <div
                className={`rounded-full w-[inherit] h-[inherit] shadow-md border border-[#27a6ff] cursor-pointer relative flex justify-center items-center`}
                style={{ backgroundColor: color }}
                onClick={() => handleColorClick({ hex: color })}
              >
                <StopOutlined className="text-[red] text-[20px]" />
              </div>
            ) : color ? (
              <div
                className={`rounded-full w-[inherit] h-[inherit] shadow-md cursor-pointer`}
                style={{ backgroundColor: color }}
                onClick={() => handleColorClick({ hex: color })}
              ></div>
            ) : (
              <div
                className={`rounded-full w-[inherit] h-[inherit] shadow-md cursor-pointer flex justify-center items-center`}
                style={{ backgroundColor: color }}
                onClick={() => handleColorClick({ hex: color })}
              >
                <StopOutlined className="text-[red] text-[20px]" />
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default ColorPalette;
