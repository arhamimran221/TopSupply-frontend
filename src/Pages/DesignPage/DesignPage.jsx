
import React, { act, useEffect, useState, useContext } from "react";
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
import "./DesignPage.css";
import FrontImageShirt from "../../assets/FrontImageShirt";
import FrontImageSmall from "../../assets/FrontImageSmall";
import BackImageShirt from "../../assets/BackImageShirt";
import BackImageSmall from "../../assets/BackImageSmall";
import {
  ArrowRightOutlined,
  FileAddOutlined,
  RedoOutlined,
  SaveOutlined,
  ShareAltOutlined,
  TagOutlined,
  UndoOutlined,
  ZoomInOutlined,
  ZoomOutOutlined,
} from "@ant-design/icons";
// import t_shirt from "../../assets/t-shirt-Image.png";
import Editor from "../../Components/Editor/Editor";
import { Modal, Drawer } from "antd";
import Sample1 from "../../assets/sample1.jpeg";
import Sample2 from "../../assets/sample2.jpeg";
import Sample3 from "../../assets/sample3.jpeg";
import moreIcon from "../../assets/more-printArea.png";
import Quantity from "../QuantityPage/Quantity";
import Clipart from "../../Components/Clipart/Clipart";
import UploadPage from "../UploadPage/UploadPage";
import Names from "../../Components/NameEditor/Names";
import RotateImage from '../../assets/RotateIcon.svg';
import { useLocation } from "react-router-dom";
import { StatesContext } from "../../Context/StatesContext";
import { addNewObject } from "../../Components/Panel/EditorHandles/EditorHandles";

const DesignPage = ({slide , setSlide ,setPricingActive, priceView ,setPriceView,pricingActive}) => {
  const { setTextArray, setTextInput, initialObject } = useContext(StatesContext);
  
  const [active, setActive] = useState("1");
  const [front, setFront] = useState("front");
  const [shirtColor, setShirtColor] = useState("white"); // Default color is red
  const [zoomIn, setZoomIn] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedColors, setSelectedColors] = useState(["#ffffff"]);
  const [mouseEnter, setMouseEnter] = useState(null);
  const [visible, setVisible] = useState(false); // You can manage the visibility state as needed
  const [mobileActive, setMobileActive] = useState(null);
  const [isMobile, setIsMobile] = useState(false);
   
  const location = useLocation();
  
  useEffect(()=>{
   if(location.state){
    // console.log(location.state.color)
    if(location.state.color === 'Dark blue'){
      setShirtColor('#536AA2')
      setSelectedColors(['#536AA2'])
    }
    else if(location.state.color === 'White'){
      setShirtColor('#ffffff')
      setSelectedColors(['#ffffff'])
    }
    else if(location.state.color === 'Red'){
      setShirtColor('#ff0000')
      setSelectedColors(['#ff0000'])
    }
    else if(location.state.color === 'Orange'){
      setShirtColor('#E25822')
      setSelectedColors(['#E25822'])
    }
    else if(location.state.color === 'Yellow'){
      setShirtColor('#F6E25B')
      setSelectedColors(['#F6E25B'])
    }
    else if(location.state.color === 'Green'){
      setShirtColor('#00FF00')
      setSelectedColors(['#00FF00'])
    }
    else if(location.state.color === 'Purple'){
      setShirtColor('#800080')
      setSelectedColors(['#800080'])
    }
    else if(location.state.color === 'Light purple'){
      setShirtColor('#9482B2')
      setSelectedColors(['#9482B2'])
    }
    else if(location.state.color === 'Pink'){
      setShirtColor('#F05894')
      setSelectedColors(['#F05894'])
    }
    else if(location.state.color === 'Black'){
      setShirtColor('#000000')
      setSelectedColors(['#000000'])
    }
    else if(location.state.color === 'Grey'){
      setShirtColor('#95989D')
      setSelectedColors(['#95989D'])
    }
    else if(location.state.color === 'Light blue'){
      setShirtColor('#5DA2CF')
      setSelectedColors(['#5DA2CF'])
    }
   }
  },[])

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

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
    console.log("newActive", newActive)
    if (isMobile) {
      setMobileActive(newActive);
      setVisible(true);
    }
    setActive(newActive);
  };

  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  const rotateToggle = ()=>{
    console.log("function Call")
    if(front==="front"){
      setFront("back")
    }
    else
    setFront("front")
  }

  return (
    <div
      className={
        slide
          ? "rush-container slideIn flex mt-[190px]"
          : "rush-container slideOut flex mt-[190px]"
      }
    >
      <div className="w-[100%] flex lg:pr-4 pr-0 lg:mt-[100px] mt-[10px] lg:my-auto my-[69px] lg:flex-row flex-col-reverse">
        <div
          className={`lg:w-[8%] lg:flex hidden w-[100vw] lg:overflow-visible  overflow-x-auto  lg:h-[85vh] h-fit z-[999]  bg-[#fff] absolute lg:relative bottom-0 z-[99999]`}
          style={{ boxShadow: "3px 0 12px 0 rgba(0,0,0,.1)" }}
        >
          <div className="flex lg:flex-col flex-row lg:gap-[12px] gap-[0px] lg:w-[100%] w-[700px]">
            <div
              className={
                (active || mobileActive) === "1"
                  ? "flex flex-col items-center gap-[10px] font-poppins text-[11px] bg-[#27a6ff] rounded-lg py-2 text-[#fff] font-[500] cursor-pointer w-[110px] active"
                  : "cursor-pointer flex flex-col items-center gap-[10px] font-poppins text-[11px] py-2 w-[110px]"
              }
              onClick={() => handleActiveChange("1")}
            >
              {(active || ( isMobile && mobileActive)) === "1" ? (
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
                (active || ( isMobile && mobileActive)) === "2" || mouseEnter === "1"
                  ? "flex flex-col items-center gap-[10px] font-poppins text-[11px] bg-[#27a6ff] rounded-lg py-2 text-[#fff] font-[500] cursor-pointer w-[110px] active"
                  : " cursor-pointer flex flex-col items-center gap-[10px] font-poppins text-[11px] py-2 w-[110px]"
              }
              onClick={() => { 
                handleActiveChange("2");
                addNewObject(setTextArray, initialObject, front,)
              }}
            >
              {(active || ( isMobile && mobileActive)) === "2" || mouseEnter === "1" ? (
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
                (active || ( isMobile && mobileActive)) === "3" || mouseEnter === "2"
                  ? "flex flex-col items-center gap-[10px] font-poppins text-[11px] bg-[#27a6ff] rounded-lg py-2 text-[#fff] font-[500] cursor-pointer w-[110px] active"
                  : " cursor-pointer flex flex-col items-center gap-[10px] font-poppins text-[11px] py-2 w-[110px]"
              }
              onClick={() => {
                handleActiveChange("3"); addNewObject(setTextArray, initialObject, front)
              }}
            >
              {(active || mobileActive) === "3" || mouseEnter === "2" ? (
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
                (active || mobileActive) === "4" || mouseEnter === "3"
                  ? "flex flex-col items-center gap-[10px] font-poppins text-[11px] bg-[#27a6ff] rounded-lg py-2 text-[#fff] font-[500] cursor-pointer w-[110px] active"
                  : " cursor-pointer flex flex-col items-center gap-[10px] font-poppins text-[11px] py-2 w-[110px] "
              }
              onClick={() => {
                handleActiveChange("4");
                addNewObject(setTextArray, initialObject, front)
              }}
            >
              {(active || mobileActive) === "4" || mouseEnter === "3" ? (
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
                (active || mobileActive) === "5" || mouseEnter === "4"
                  ? "flex flex-col items-center gap-[10px] font-poppins text-[11px] bg-[#27a6ff] rounded-lg py-2 px-2 text-[#fff] font-[500] cursor-pointer lg:w-[110px] w-[200px] active text-center"
                  : " cursor-pointer flex flex-col items-center gap-[10px] font-poppins text-[11px] py-2 px-2 text-center lg:w-[110px] w-[200px]"
              }
              onClick={() => handleActiveChange("5")}
            >
              {(active || mobileActive) === "5" || mouseEnter === "4" ? (
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
                (active || mobileActive) === "6"
                  ? "flex flex-col items-center gap-[10px] font-poppins text-[11px] bg-[#27a6ff] rounded-lg py-2 text-[#fff] font-[500] cursor-pointer w-[110px] active"
                  : " cursor-pointer flex flex-col items-center gap-[10px] font-poppins text-[11px] py-2 w-[110px]"
              }
              onClick={() => handleActiveChange("6")}
            >
              {(active || mobileActive) === "6" ? (
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
        <div className="lg:w-[35%] w-[100%] lg:block hidden">
          {active === "1" && (
            <Products
              setShirtColor={setShirtColor}
              setSelectedColors={setSelectedColors}
              selectedColors={selectedColors}
            />
          )}
          {active === "2" && <Editor />}

          {active === "4" && <Clipart setActive={setActive} />}

          {active === "3" && <UploadPage />}

          {active === "5" && <Names front={front} setFront={setFront} />}
          {active === "6" && "Design wozard"}
        </div>
        <div className="lg:w-[35%] w-[100%] lg:hidden block">
          {isMobile ? (
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
          ) : (
            ""
          )}
        </div>
        <div className="lg:w-[62%] w-[100%] flex justify-between">
          <div className="lg:w-[95%] w-[100%] flex justify-between py-[15px] lg:px-[15px] px-0">
            <div className="lg:w-[10%] w-[100%]">
              {slide ? (
                ""
              ) : (
                <div className="lg:block hidden">
                  <div>
                    <button className="text-[#d9dada] font-poppins flex gap-[5px] uppercase items-center text-[14px]">
                      <UndoOutlined />
                      Undo
                    </button>
                  </div>
                  <div className="my-[10px]">
                    <button className="text-[#d9dada] font-poppins flex gap-[5px] uppercase items-center text-[14px]">
                      <RedoOutlined />
                      Redo
                    </button>
                  </div>
                  <div>
                    <button className="text-[#d9dada] font-poppins flex gap-[5px] uppercase items-center text-[14px]">
                      Start Over
                    </button>
                  </div>
                </div>
              )}
            </div>
            <div className="lg:mt-[-270px] mt-[-200px] lg:w-[90%] w-[100%] ml-[-550px] overflow-hidden lg:block hidden">
              {/* <img src={t_shirt} alt="" srcSet="" className='w-[600px] mt-[-40px]'/> */}
              { front==='front' ? 
                <FrontImageShirt 
                  color={{ useMask: true, maskColor: shirtColor , zoom: zoomIn }} 
                  className="ml-[-100px]" 
                  setMouseEnter={setMouseEnter} 
                  setActive={setActive} slide={slide} 
                  active={active} setMobileActive={setMobileActive} 
                  /> : 
                <BackImageShirt 
                  color={{ useMask: true, maskColor: shirtColor,zoom: zoomIn }} 
                  className="ml-[-100px]" 
                  setMouseEnter={setMouseEnter} active={active}
                  setActive={setActive} slide={slide} setMobileActive={setMobileActive} /> 
                }
            </div>
            <div className="lg:mt-[-270px] mt-[-200px] lg:w-[90%] w-[100%] ml-[-550px] overflow-hidden lg:hidden block">
              {/* <img src={t_shirt} alt="" srcSet="" className='w-[600px] mt-[-40px]'/> */}
              {!slide ?
                (front === "front" ? (
                  <FrontImageShirt
                    color={{ useMask: true, maskColor: shirtColor, zoom: zoomIn }}
                    className="ml-[-900px]"
                    setMouseEnter={setMouseEnter}
                    setActive={setActive}
                    slide={slide}
                    setMobileActive={setMobileActive}
                  />
                ) : (
                  <BackImageShirt
                    color={{ useMask: true, maskColor: shirtColor, zoom: zoomIn }}
                    className="ml-[-100px]"
                    setMouseEnter={setMouseEnter}
                    setActive={setActive}
                    slide={slide}
                    active={active}
                    setMobileActive={setMobileActive}
                  />
              )) : ""}
            </div>
          </div>
          <div className="lg:w-[5%] w-[100%] lg:relative fixed  flex flex-col gap-[10px] justify-right items-end lg:mt-[20px] mt-[0px] lg:mr-auto mr-[10px] z-[99999]">
            {slide ? (
              ""
            ) : (
              <>
              <div className="flex flex-col justify-center items-center font-poppins lg:hidden " onClick={()=>rotateToggle()}>
                <img src={RotateImage} alt="" srcSet="" width={60}/>
                Rotate
              </div>
                {" "}
                <div
                  className="lg:flex hidden flex-col  bg-[#fff] rounded-lg w-fit justify-end px-3 w-[100%]"
                  style={{ boxShadow: "0 2px 8px 0 rgba(0,0,0,.1)" }}
                >
                  <div
                    className={
                      front === "front"
                        ? "flex flex-col items-center border-b-[4px] pb-[10px] border-b-[#27a6ff] font-poppins text-[11px] text-[#424447] cursor-pointer"
                        : " pb-[10px] flex flex-col gap-[10px] items-center font-poppins text-[11px] text-[#424447] cursor-pointer"
                    }
                    onClick={() => {setFront("front"); setActive('1'); setMobileActive('1'); setTextInput('')}}
                  >
                    <div className="cursor-pointer rounded-lg w-[40px] ml-[-25px]">
                      <FrontImageSmall
                        color={{ useMask: true, maskColor: shirtColor }}
                        className="w-[20px]"
                      />
                    </div>
                    <p>Front</p>
                  </div>
                  <div
                    className={
                      front === "back"
                        ? "flex flex-col  items-center border-b-[4px] pb-[10px] border-b-[#27a6ff] font-poppins text-[11px] text-[#424447] cursor-pointer"
                        : " pb-[10px] flex flex-col gap-[10px] items-center font-poppins text-[11px] text-[#424447] cursor-pointer"
                    }
                    onClick={() => {setFront("back"); setActive('1'); setMobileActive('1'); setTextInput('')}}
                  >
                    <div className="cursor-pointer rounded-lg w-[40px] ml-[-25px]">
                      <BackImageSmall
                        color={{ useMask: true, maskColor: shirtColor }}
                        className="w-[20px]"
                      />
                    </div>
                    <p>Back</p>
                  </div>
                </div>
                <div
                  className="lg:flex hidden flex-col gap-[10px] bg-[#fff] rounded-lg w-fit justify-end py-2 px-2 hover:border-[1px] hover:border-[#27a6ff] hover:text-[#27a6ff] smooth-transition border-[1px] border-[#fff]"
                  style={{ boxShadow: "0 2px 8px 0 rgba(0,0,0,.1)", display: 'none' }}
                  onClick={showModal}
                >
                  <button className="text-[11px]">SLEEVES & MORE</button>
                </div>
                <div
                  className="lg:flex hidden gap-[10px] bg-[#fff] rounded-lg w-fit justify-end py-2 px-2 hover:border-[1px] hover:border-[#27a6ff] hover:text-[#27a6ff] border-[1px] border-[#fff] smooth-transition"
                  style={{ boxShadow: "0 2px 8px 0 rgba(0,0,0,.1)" }}
                >
                  <button
                    className="text-[11px] lg:flex hidden gap-[5px] items-center"
                    onClick={() => setZoomIn(!zoomIn)}
                  >
                    {zoomIn ? <ZoomOutOutlined /> : <ZoomInOutlined />}ZOOM
                  </button>
                </div>
                <div
                  className="lg:flex hidden flex-col gap-[10px] bg-[#fff] rounded-lg w-fit justify-end py-2 px-2 hover:border-[1px] hover:border-[#27a6ff] hover:text-[#27a6ff] border-[1px] border-[#fff] smooth-transition"
                  style={{ boxShadow: "0 2px 8px 0 rgba(0,0,0,.1)" }}
                >
                  <button className="text-[11px] flex gap-[5px] items-center">
                    <ZoomInOutlined />
                    EFFECT
                  </button>
                </div>
                <div
                  className="flex flex-col gap-[10px] bg-[#fff] lg:mt-[30px] mt-[500px] rounded-lg w-fit justify-end py-2 px-2 hover:border-[1px] hover:border-[#27a6ff] hover:text-[#27a6ff] border-[1px] border-[#fff] smooth-transition"
                  style={{ boxShadow: "0 2px 8px 0 rgba(0,0,0,.1)" }}
                >
                  <button className="text-[11px]">
                    <ShareAltOutlined className="text-[20px]" />
                    SHARE
                  </button>
                </div>{" "}
              </>
            )}
          </div>
        </div>
      </div>
      {slide ? (
        ""
      ) : (
        <div className="justify-end items-center fixed bottom-[0px] right-[0px] bg-[#fff] gap-[20px] py-[24px] border-t-[1px] border-t-[#dadada] w-[92%] lg:flex hidden z-[9999]">
          <div className="">
            <button className="flex gap-[10px] border-[1px] border-[#27a6ff] text-[#27a6ff] items-center rounded-full font-poppins uppercase font-[600] text-[14px] px-4 py-2 products-btn">
              <TagOutlined className="text-[25px]" /> Get Price
            </button>
          </div>
          <div className="">
            <button className="flex gap-[10px] border-[1px] border-[#27a6ff] text-[#27a6ff] items-center rounded-full font-poppins uppercase font-[600] text-[14px] px-4 py-2 products-btn">
              <SaveOutlined className="text-[25px]" /> Save Design
            </button>
          </div>
          <div className="mr-[10px]">
            <button className="flex gap-[10px] border-[1px] bg-[#27a6ff] text-[#fff] items-center rounded-full font-poppins uppercase font-[600] text-[16px] px-8 py-3 products-btn" onClick={()=>setSlide(true)}>
              Next step <ArrowRightOutlined className="text-[25px]" />
            </button>
          </div>
        </div>
      )}
      <Modal
        title="MORE PRINT AREAS"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={null}
        width={650}
      >
        <div className="flex gap-[10px] w-[90%] m-auto justify-center my-[30px]">
          <img
            src={Sample1}
            className="border-[1px] border-[#cccccc] w-[150px]"
          />
          <img
            src={Sample2}
            className="border-[1px] border-[#cccccc] w-[150px]"
          />
          <img
            src={Sample3}
            className="border-[1px] border-[#cccccc] w-[150px]"
          />
        </div>

        <p className="px-9 font-poppins text-[#424447] text-[15px] font-[400] leading-[25px]">
          We can print in any location on your product. Just upload your art off
          the print area (blue box) and tell us here where you'd like it placed
          on your garment. Call us to review or complete your order online and
          we'll review and notify you of the additional cost after checkout.
        </p>
        <div className="flex px-9 py-[20px] gap-[15px] items-center">
          <div className="">
            <img src={moreIcon} alt="" width={44} />
          </div>
          <div>
            <h3 className="font-poppins text-[#424447] text-[15px] font-[400] leading-[25px]">
              We can print and ship same day
            </h3>
            <p className="font-poppins text-[#424447] text-[15px] font-[400] leading-[25px] mt-[5px]">
              <span className="text-[#27a6ff] text-[18px] cursor-pointer font-[600] hover:text-[#0196ff]">
                (800) 620-1233
              </span>{" "}
              or{" "}
              <span className="text-[#27a6ff] text-[18px] cursor-pointer font-[600] hover:text-[#0196ff]">
                Live Chat
              </span>
            </p>
          </div>
        </div>
      </Modal>
      {slide ? (
        <div className="lg:mt-[100px] lg:w-[633px] w-[1000px] lg:mr-[-510px] mr-[-155px] mt-[0px] ">
          <Quantity
            setSelectedColors={setSelectedColors}
            selectedColors={selectedColors}
            setSlide={setSlide}
            setPricingActive={setPricingActive}
            priceView={priceView}
            setPriceView={setPriceView}
            pricingActive={pricingActive}
          />
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default DesignPage;
