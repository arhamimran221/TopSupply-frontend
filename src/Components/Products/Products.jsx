import React, { useEffect, useState } from "react";
import FrontImageSmall from "../../assets/FrontImageSmall";
import {
  ArrowRightOutlined,
  CloseCircleFilled,
  CloseOutlined,
  FileAddOutlined,
  SaveOutlined,
  TagOutlined,
} from "@ant-design/icons";
import { CirclePicker } from "react-color";

const colorChoices = [
  "#ffffff" , "#000000", "#536AA2", "#ff0000", "#E25822", "#F6E25B" , "#00FF00", "#800080", "#9482B2", "#F05894", "#95989D", "#5DA2CF"
];

const colorNames = [
  { name: 'Black', hex: '#000000' },
  { name: 'Dark blue', hex: '#536AA2' },
  { name: 'Red', hex: '#ff0000' },
  { name: 'Orange', hex: '#E25822' },
  { name: 'Yellow', hex: '#F6E25B' },
  { name: 'Green', hex: '#00FF00' },
  { name: 'Purple', hex: '#800080' },
  { name: 'Light purple', hex: '#9482B2' },
  { name: 'Pink', hex: '#F05894' },
  { name: 'Grey', hex: '#95989D' },
  { name: 'Light blue', hex: '#5DA2CF' },
  { name: 'White', hex: '#ffffff' },
];

const Products = ({ setShirtColor,selectedColors, setSelectedColors,setVisible }) => {
  const [color, setColor] = useState("#ffffff");
  const [open, setOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const getColorName = (hex) => {
    const color = colorNames.find(color => color.hex.toLowerCase() === hex.toLowerCase());
    return color ? color.name : 'Unknown color';
  };

  const handleHover = (color) => {
    setShirtColor(color.hex);
  };

  const handleColorClick = (color) => {
    setShirtColor(color.hex);
    if (currentIndex !== null) {
      const newColors = [...selectedColors];
      newColors[currentIndex] = color.hex;
      setSelectedColors(newColors);
      setCurrentIndex(null);
    } else {
      setSelectedColors([...selectedColors, color.hex]);
    }
    setOpen(false);
    setColor(color.hex);
  };

  const handleDeleteColor = (index) => {
    const newColors = selectedColors.filter((_, i) => i !== index);
    setSelectedColors(newColors);
    if (currentIndex === index  && currentIndex !==0) {
      setCurrentIndex(null);
    }
    setShirtColor('white')

  };

  const handleSelectColor = (index,color) => {
    setCurrentIndex(index);
    setShirtColor(color)
  };

  const handlecolorUpdate = (color) => {
    setShirtColor(color)
    setOpen(true)
  }
  useEffect(() => {
    // Load selected colors from localStorage
    const storedColors = localStorage.getItem('selectedColors');
    if (storedColors) {
      setSelectedColors(JSON.parse(storedColors));
    }
    localStorage.setItem('selectedColors', JSON.stringify(selectedColors));
  }, []);

  useEffect(() => {
    // Save selected colors to localStorage whenever they change
    localStorage.setItem('selectedColors', JSON.stringify(selectedColors));
  }, [selectedColors]);
  
  return (
    <>
      <div className="flex w-[100%] items-stretch">
        <div className="w-[100%] px-4 pt-[20px] bg-[#fafafa] h-[500px] overflow-y-auto ">
          <div className="flex justify-between items-center">
          <div>
          <p className="font-poppins text-[10.5px] text-[#27a6ff] font-[600]">
            PRODUCTS
          </p>
          <h2 className="font-poppins text-[22px] font-[700] my-[10px]">
            Manage Your Products
          </h2>
          <p className="text-[12px] text-[#8d9095] font-poppins font-[400] ">
            You can select multiple products and colors.
          </p>
          </div>
          <div className="">
            <CloseOutlined onClick={()=> setVisible(false)}/>
          </div>
          </div>
          <div className="border-[1px] border-[#cccfd6] my-[20px]"></div>
          <div
            className="bg-[#f5f8f8] px-2 py-2 rounded-lg"
            style={{ boxShadow: "3px 0 12px 0 rgba(0,0,0,.1)" }}
          >
            <div className="flex justify-between items-center">
              <div className="font-[700] font-poppins text-[12px]">
                RushOrderTees Classic Tee
              </div>
              <div className="">
                <button className="border-[1px] border-[#27a6ff] text-[8px] font-poppins text-[#27a6ff] cursor-pointer px-4 py-1 rounded-full">
                  Change Product
                </button>
              </div>
            </div>
            <div className="flex w-[100%] justify-between py-[20px] items-start">
              <div className="flex flex-wrap gap-4 w-[90%]">
                {selectedColors?.map((color, index) => (
                  <div key={index} className="relative group flex flex-col gap-[10px] items-center" onClick={() => handleSelectColor(index,color)}>
                    <div className={(currentIndex === index) ?"cursor-pointer border-[1px] border-[#27a6ff] rounded-lg" :"cursor-pointer hover:border-[1px] hover:border-[#27a6ff] rounded-lg" }>
                      <FrontImageSmall color={{ useMask: true, maskColor: color }} className="w-[30px]"/>
                    </div>
                    <p className="text-[#424447] font-poppins text-[11px] font-[400] text-center">
                      {getColorName(color)}
                    </p>
                    {(currentIndex === index) && (
                      <>
                    <div className="border-[2px] border-[#27a6ff] w-[100%]"></div>
                      <button className="font-poppins text-[9px] text-[#27a6ff] bg-[#fff] rounded-lg px-4 py-2" onClick={(color)=>handlecolorUpdate(color)}>
                        Change
                      </button>
                      </>
                    )}
                    <CloseCircleFilled
                      onClick={(e) => {
                        e.stopPropagation();
                        handleDeleteColor(index);
                      }}
                      className="absolute top-0 right-0 text-[#ff4d4f] hidden group-hover:block cursor-pointer"
                      style={{ fontSize: '18px' }}
                    />
                  </div>
                ))}
              </div>
              <div className="relative flex flex-col gap-[10px] w-[10%] mt-[40px]">
                <button onClick={() => setOpen(!open)} className="addColor-border rounded-full">+</button>
                {open && (
                 <div className="absolute top-[-190px] left-[-220px] z-[9999] bg-[#F7F7F7] border-[1px] border-[#dadada] rounded-md">
                 <div className="flex justify-between items-center p-2 bg-[#f9fafc] border-b-[1px] border-b-[#dadada]">
                   <h4 className=" font-poppins text-[#27A6FF] font-[600] ">Add another Color:</h4>
                   <CloseCircleFilled onClick={() => setOpen(false)} />
                 </div>
                 <div className="p-2">
                   <CirclePicker
                     colors={colorChoices}
                     onChangeComplete={handleColorClick}
                     onSwatchHover={handleHover}
                     circleSize={30}
                     circleSpacing={11}
                   />
                 </div>
               </div>
                )}
                <p className="text-[#424447] font-poppins text-[11px] font-[400] text-center">
                  Add Color
                </p>
              </div>
            </div>
          </div>
          <div className="w-[100%] py-4 flex justify-center items-center border-dashed border-[1px] border-[#8d9095] text-[#8d9095] font-poppins gap-[10px] my-[10px]">
            <FileAddOutlined /> Add Product
          </div>
         
        </div>
      </div>
      
    </>
  );
};

export default Products;
