import React, { act, useContext, useState } from "react";
import ProductIcon from "../../assets/ProductIcon.svg";
import ProductIconActive from "../../assets/ProductIconActive.svg";
import TextActive from "../../assets/AddTextActive.svg";
import Products from "../../Components/Products/Products";
import Text from "../../assets/AddText.svg";
import ClipartIcon from "../../assets/ClipartIcon.svg";
import UploadImage from "../../assets/UploadIcon.svg";
import Numbers from "../../assets/NumberIcon.svg";
import NumbersActive from "../../assets/NumberIconActive.svg";
import UploadActive from "../../assets/UploadIconActive.svg";
import ClipartActive from "../../assets/ClipartActive.svg";
import Design from "../../assets/DesignIcon.svg";
import DesignActive from "../../assets/DsignIconActive.svg";
import "../../Pages/DesignPage/DesignPage.css";
import Editor from "../../Components/Editor/Editor";
import Clipart from "../../Components/Clipart/Clipart";
import UploadPage from "../../Pages/UploadPage/UploadPage";
import Names from "../../Components/NameEditor/Names";
import { Drawer } from "antd";
import { StatesContext } from "../../Context/StatesContext";
import { addNewObject } from "../../Components/Panel/EditorHandles/EditorHandles";


const BottomBarMobile = () => {
  const { setTextArray, initialObject } = useContext(StatesContext);
    const [active, setActive] = useState("1");
    const [front, setFront] = useState("front");
    const [shirtColor, setShirtColor] = useState("white"); // Default color is red
    const [selectedColors, setSelectedColors] = useState(["#ffffff"]);
    const [mouseEnter, setMouseEnter] = useState(null);
    const [visible, setVisible] = useState(false); // You can manage the visibility state as needed
    const [mobileActive, setMobileActive] = useState(null);

    const renderContent = () => {
        switch (active) {
          case "1":
            return (
              <Products
                setShirtColor={setShirtColor}
                setSelectedColors={setSelectedColors}
                selectedColors={selectedColors}
                setVisible={setVisible}
              />
            );
          case "2":
            return <Editor 
            setVisible={setVisible}
            />;
          case "3":
            return <UploadPage 
            setVisible={setVisible}
            />;
          case "4":
            return <Clipart 
            setVisible={setVisible}
            />;
          case "5":
            return <Names front={front} setFront={setFront} 
            setVisible={setVisible}
            />;
          case "6":
            return "Design wizard";
          default:
            return null;
        }
      };
      const handleActiveChange = (newActive) => {
          setVisible(true);
        setActive(newActive)
      };

  return (
    <div>
      <div
          className={`lg:w-[8%] w-[100vw] lg:overflow-visible  overflow-x-auto  lg:h-[85vh] h-fit z-[999]  bg-[#fff] fixed bottom-0 z-[99999] lg:hidden block`}
          style={{ boxShadow: "3px 0 12px 0 rgba(0,0,0,.1)" }}
        >
          <div className="flex lg:flex-col flex-row lg:gap-[12px] gap-[0px] lg:w-[100%] w-[700px]">
            <div
              className={
                (active) === "1"
                  ? "flex flex-col items-center gap-[10px] font-poppins text-[11px] bg-[#27a6ff] rounded-lg py-2 text-[#fff] font-[500] cursor-pointer w-[110px] active"
                  : "cursor-pointer flex flex-col items-center gap-[10px] font-poppins text-[11px] py-2 w-[110px]"
              }
              onClick={() => handleActiveChange("1")}
            >
              {(active) === "1" ? (
                <img
                  src={ProductIconActive}
                  alt="missing"
                  className="lg:w-[26px] lg:h-[26px] w-[16px] h-[16px]"
                />
              ) : (
                <img
                  src={ProductIcon}
                  alt=""
                  className="lg:w-[26px] lg:h-[26px] w-[16px] h-[16px]"
                />
              )}
              Product
            </div>
            <div
              className={
                (active) === "2" || mouseEnter === "1"
                  ? "flex flex-col items-center gap-[10px] font-poppins text-[11px] bg-[#27a6ff] rounded-lg py-2 text-[#fff] font-[500] cursor-pointer w-[110px] active"
                  : " cursor-pointer flex flex-col items-center gap-[10px] font-poppins text-[11px] py-2 w-[110px]"
              }
              onClick={() => { 
                handleActiveChange("2");
                addNewObject(setTextArray, initialObject)
              }}
            >
              {(active) === "2" || mouseEnter === "1" ? (
                <img
                  src={TextActive}
                  alt=""
                  className="lg:w-[26px] lg:h-[26px] w-[16px] h-[16px]"
                />
              ) : (
                <img
                  src={Text}
                  alt=""
                  className="lg:w-[26px] lg:h-[26px] w-[16px] h-[16px]"
                />
              )}
              Add Text
            </div>
            <div
              className={
                (active) === "3" || mouseEnter === "2"
                  ? "flex flex-col items-center gap-[10px] font-poppins text-[11px] bg-[#27a6ff] rounded-lg py-2 text-[#fff] font-[500] cursor-pointer w-[110px] active"
                  : " cursor-pointer flex flex-col items-center gap-[10px] font-poppins text-[11px] py-2 w-[110px]"
              }
              onClick={() => {
                handleActiveChange("3"); addNewObject(setTextArray, initialObject)
              }}
            >
              {(active) === "3" || mouseEnter === "2" ? (
                <img
                  src={UploadActive}
                  alt=""
                  className="lg:w-[26px] lg:h-[26px] w-[16px] h-[16px]"
                />
              ) : (
                <img
                  src={UploadImage}
                  alt=""
                  className="lg:w-[26px] lg:h-[26px] w-[16px] h-[16px]"
                />
              )}
              Upload Art
            </div>
            <div
              className={
                (active) === "4" || mouseEnter === "3"
                  ? "flex flex-col items-center gap-[10px] font-poppins text-[11px] bg-[#27a6ff] rounded-lg py-2 text-[#fff] font-[500] cursor-pointer w-[110px] active"
                  : " cursor-pointer flex flex-col items-center gap-[10px] font-poppins text-[11px] py-2 w-[110px] "
              }
              onClick={() => {
                handleActiveChange("4");
                addNewObject(setTextArray, initialObject)
              }}
            >
              {(active) === "4" || mouseEnter === "3" ? (
                <img
                  src={ClipartActive}
                  alt=""
                  className="lg:w-[26px] lg:h-[26px] w-[16px] h-[16px]"
                />
              ) : (
                <img
                  src={ClipartIcon}
                  alt=""
                  className="lg:w-[26px] lg:h-[26px] w-[16px] h-[16px]"
                />
              )}
              Add clipart
            </div>
            <div
              className={
                (active) === "5" || mouseEnter === "4"
                  ? "flex flex-col items-center gap-[10px] font-poppins text-[11px] bg-[#27a6ff] rounded-lg py-2 px-2 text-[#fff] font-[500] cursor-pointer lg:w-[110px] w-[200px] active text-center"
                  : " cursor-pointer flex flex-col items-center gap-[10px] font-poppins text-[11px] py-2 text-center lg:w-[110px] w-[200px]"
              }
              onClick={() => handleActiveChange("5")}
            >
              {(active) === "5" || mouseEnter === "4" ? (
                <img
                  src={NumbersActive}
                  alt=""
                  className="lg:w-[26px] lg:h-[26px] w-[16px] h-[16px]"
                />
              ) : (
                <img
                  src={Numbers}
                  alt=""
                  className="lg:w-[26px] lg:h-[26px] w-[16px] h-[16px]"
                />
              )}
              Names & Numbers
            </div>
            <div
              className={
                (active) === "6"
                  ? "flex flex-col items-center gap-[10px] font-poppins text-[11px] bg-[#27a6ff] rounded-lg py-2 text-[#fff] font-[500] cursor-pointer w-[110px] active"
                  : " cursor-pointer flex flex-col items-center gap-[10px] font-poppins text-[11px] py-2 w-[110px]"
              }
              onClick={() => handleActiveChange("6")}
            >
              {(active) === "6" ? (
                <img
                  src={DesignActive}
                  alt=""
                  className="lg:w-[26px] lg:h-[26px] w-[16px] h-[16px]"
                />
              ) : (
                <img
                  src={Design}
                  alt=""
                  className="lg:w-[26px] lg:h-[26px] w-[16px] h-[16px]"
                />
              )}
              Design Wizard
            </div>
          </div>
        </div>
        <div className="lg:w-[35%] w-[100%] lg:hidden block">
            <Drawer
              title={null}
              mask={false}
              placement="bottom"
              onClose={() => setVisible(false)}
              open={visible}
              width={350}
            >
              {renderContent()}
            </Drawer>
        </div>
    </div>
  )
}

export default BottomBarMobile
