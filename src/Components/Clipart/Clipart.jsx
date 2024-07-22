import React, { useEffect, useState, useContext } from "react";
import "./Clipart.css";
import PanelEditorHeader from "../Panel/PanelEditorHeader";
import { CloseOutlined } from "@ant-design/icons";
import { Input } from "antd";
import Animal from "./Animal/Animal";
import Music from "./Music/Music";
import Flags from "./Flags/Flags";
import Food from "./Food/Food";
import Greek from "./Greek/Greek";
import Holidays from "./Holidays/Holidays";
import Jobs from "./Jobs/Jobs";
import Mascots from "./Mascots/Mascots";
import Military from "./Military/Military";
import Nature from "./Nature/Nature";
import Office from "./Office/Office";
import Religion from "./Religion/Religion";
import Shapes from "./Shapes/Shapes";
import Sports from "./Sports/Sports";
import Transport from "./Transport/Transport";
import Design from "./Design/Design";
import ClipEditor from "./ClipEditor";
import { StatesContext } from "../../Context/StatesContext";

const { Search } = Input;

const Clipart = ({ setVisible, setActive }) => {
  const { TextArray } = useContext(StatesContext);
  const [selectedcat, setSelectedCat] = useState("ClipArtView");

  const onSearch = (value, _e, info) => console.log(info?.source, value);
  const ClipartHandler = (tab) => {
    setSelectedCat(tab);
  };


  const [ActiveObject, setActiveObject]= useState(
    TextArray?.find((item) => (item?.active === true && item?.clipArt?.path))
  );

  useEffect(()=> {
    if(ActiveObject) {
      setSelectedCat('ClipArtEditor')
    }
  }, [ActiveObject])

  // useEffect(()=> {
  //   if(TextArray) {
  //     const activeObj = TextArray?.find((item) => (item?.active === true && item?.clipArt?.path))
  //     setActiveObject(activeObj)
  //     setSelectedCat('ClipArtEditor')
  //   }
  // }, [TextArray])

  return (
    <>
      <div className="w-[100%] h-[74vh] overflow-y-auto bg-[#fbfbfb] p-4">
        {selectedcat === "ClipArtView" ? (
          <>
            <div className="editor-header relative mb-3">
              <PanelEditorHeader
                TagLine="CLIPART"
                Title="Add Clipart"
                MoveBack={false}
                SubTitle="Choose from over 50,000 Clipart Designs!
                or Upload Your Own Image
                "
              />
              <div
                className="absolute right-1 top-5 close-icon"
                onClick={() => setVisible(false)}
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
          </>
        ) : selectedcat === "ClipArtEditor" && (
          <ClipEditor />
        )}
        <div className="editor-body">
        {selectedcat && selectedcat == "animal" ? (
            <Animal setEditorView={setSelectedCat} setActive={setActive}/>
          ) : selectedcat == "design" ? (
            <Design setEditorView={setSelectedCat} setActive={setActive}/>
          ) : selectedcat == "flags" ? (
            <Flags setEditorView={setSelectedCat} setActive={setActive}/>
          ) : selectedcat == "food" ? (
            <Food setEditorView={setSelectedCat} setActive={setActive}/>
          ) : selectedcat == "greek" ? (
            <Greek setEditorView={setSelectedCat} setActive={setActive}/>
          ) : selectedcat == "holidays" ? (
            <Holidays setEditorView={setSelectedCat} setActive={setActive}/>
          ) : selectedcat == "jobs" ? (
            <Jobs setEditorView={setSelectedCat} setActive={setActive}/>
          ) : selectedcat == "mascots" ? (
            <Mascots setEditorView={setSelectedCat} setActive={setActive}/>
          ) : selectedcat == "military" ? (
            <Military setEditorView={setSelectedCat} setActive={setActive}/>
          ) : selectedcat == "music" ? (
            <Music setEditorView={setSelectedCat} setActive={setActive}/>
          ) : selectedcat == "nature" ? (
            <Nature setEditorView={setSelectedCat} setActive={setActive}/>
          ) : selectedcat == "office" ? (
            <Office setEditorView={setSelectedCat} setActive={setActive}/>
          ) : selectedcat == "religion" ? (
            <Religion setEditorView={setSelectedCat} setActive={setActive}/>
          ) : selectedcat == "shapes" ? (  
            <Shapes setEditorView={setSelectedCat} setActive={setActive} />
          ) : selectedcat == "sports" ? (
            <Sports setEditorView={setSelectedCat} setActive={setActive}/>
          ) : selectedcat == "transport" ? (
            <Transport setEditorView={setSelectedCat} setActive={setActive}/>
          ) : (selectedcat === "ClipArtView") && (
            <div className="flex justify-between px-[5px]">
              <div className="main-menu-add-clipart-categories-column w-[182px]">
                <div
                  onClick={() => ClipartHandler("animal")}
                  className="flex gap-[16px] hover:scale-105 border border-[#c4c4c4] rounded-[4px] py-[12px] px-[12px] my-[18px] cursor-pointer justify-center"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 28 28"
                    width={24}
                  >
                    <title>Animals</title>
                    <circle cx="9.333" cy="5.833" r="1.167" fill="#27a6ff" />
                    <path
                      d="M26.838,8.186H15.171V5.853a5.833,5.833,0,1,0-11.666,0H1.171a1.167,1.167,0,0,0,0,2.333H3.505v1.75a12.248,12.248,0,0,0,8.166,11.535v5.382a1.167,1.167,0,0,0,2.334,0V22.046a12.35,12.35,0,0,0,1.75.14,12.373,12.373,0,0,0,1.75-.14v4.807a1.167,1.167,0,0,0,2.333,0V21.471A12.249,12.249,0,0,0,28.005,9.936V9.353A1.167,1.167,0,0,0,26.838,8.186ZM15.755,19.853A9.917,9.917,0,0,1,5.838,9.936V5.853a3.5,3.5,0,0,1,7,0v3.5a1.166,1.166,0,0,0,1.167,1.166H25.654A9.918,9.918,0,0,1,15.755,19.853Z"
                      transform="translate(-0.005 -0.019)"
                      fill="#27a6ff"
                    />
                  </svg>
                  <h5 className="text-[#424447] w-[50px] text-[16px] font-[bold] family-[poppins]">
                    Animals
                  </h5>
                </div>
                <div
                  onClick={() => ClipartHandler("design")}
                  className="flex gap-[16px] hover:scale-105 border border-[#c4c4c4] rounded-[4px] py-[12px] px-[12px] my-[18px] cursor-pointer justify-center"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 28 25.688"
                    width={22}
                  >
                    <title>Designs</title>
                    <path
                      d="M.565,22.623a2.6,2.6,0,0,0-.292,2.761,2.57,2.57,0,0,0,2.336,1.46H6.987a5.839,5.839,0,0,0,5.825-5.852q0-.3-.033-.608L25.4,8.816a4.414,4.414,0,1,0-6.025-6.452c-.074.069-.147.142-.216.217L7.6,15.206a5.838,5.838,0,0,0-6.448,5.8A2.541,2.541,0,0,1,.565,22.623ZM20.882,4.16a2.081,2.081,0,0,1,3.062,2.82c-.038.041-.078.081-.12.119L11.964,17.964a5.766,5.766,0,0,0-1.944-1.947ZM2.4,24.065a4.849,4.849,0,0,0,1.088-3.059,3.486,3.486,0,0,1,1.323-2.741A3.451,3.451,0,0,1,6.97,17.5a3.878,3.878,0,0,1,.846.1,3.5,3.5,0,0,1-.829,6.91H2.609a.241.241,0,0,1-.234-.143A.269.269,0,0,1,2.4,24.065Z"
                      transform="translate(-0.005 -1.156)"
                      fill="#27a6ff"
                    />
                    <path
                      d="M4.652,4.659A1.168,1.168,0,0,0,3.484,5.827V6.994H2.317a1.168,1.168,0,1,0,0,2.335H3.484V10.5a1.168,1.168,0,0,0,2.336,0V9.329H6.987a1.168,1.168,0,1,0,0-2.335H5.82V5.827A1.168,1.168,0,0,0,4.652,4.659Z"
                      transform="translate(-0.005 -1.156)"
                      fill="#27a6ff"
                    />
                    <path
                      d="M28.005,19.838a1.168,1.168,0,0,0-1.168-1.168H24.5V16.335a1.168,1.168,0,0,0-2.336,0V18.67H19.831a1.168,1.168,0,0,0,0,2.336h2.335v2.335a1.168,1.168,0,0,0,2.336,0V21.006h2.335A1.168,1.168,0,0,0,28.005,19.838Z"
                      transform="translate(-0.005 -1.156)"
                      fill="#27a6ff"
                    />
                    <circle cx="12.225" cy="1.751" r="1.751" fill="#27a6ff" />
                  </svg>
                  <h5 className="text-[#424447] w-[50px] text-[16px] font-[bold] family-[poppins]">
                    Designs
                  </h5>
                </div>

                <div
                  onClick={() => ClipartHandler("flags")}
                  className="flex gap-[16px] hover:scale-105 border border-[#c4c4c4] rounded-[4px] py-[12px] px-[12px] my-[18px] cursor-pointer justify-center"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 23.331 28"
                    width={22}
                  >
                    <title>Flags</title>
                    <path
                      d="M24.15,17.819l.875-.437a1.167,1.167,0,0,0,.645-1.047V3.5a1.167,1.167,0,0,0-1.689-1.044l-.875.437a5.856,5.856,0,0,1-6.039-.469l-1.814-1.3a6.015,6.015,0,0,0-7.136.082L6.305,2.573a1.167,1.167,0,0,0-.466.93V25.667H3.506a1.167,1.167,0,1,0,0,2.333h7a1.167,1.167,0,1,0,0-2.333H8.172V16.918l1.344-1.009a3.693,3.693,0,0,1,4.375-.05l1.814,1.3A8.192,8.192,0,0,0,24.15,17.819Zm-7.083-2.56-1.814-1.295A6.015,6.015,0,0,0,8.172,14V4.086L9.516,3.077a3.691,3.691,0,0,1,4.375-.049l1.814,1.294A8.184,8.184,0,0,0,23.337,5.34V15.617l-.231.114A5.852,5.852,0,0,1,17.067,15.259Z"
                      transform="translate(-2.339 0)"
                      fill="#27a6ff"
                    />
                  </svg>

                  <h5 className="text-[#424447] w-[50px] text-[16px] font-[bold] family-[poppins]">
                    Flags
                  </h5>
                </div>
                <div
                  onClick={() => ClipartHandler("food")}
                  className="flex gap-[16px] hover:scale-105 border border-[#c4c4c4] rounded-[4px] py-[12px] px-[12px] my-[18px] cursor-pointer justify-center"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 25.667 28"
                    width={20}
                  >
                    <title>Food</title>
                    <path
                      d="M7.005,28a3.5,3.5,0,0,0,3.5-3.5V13.977a5.834,5.834,0,0,0,2.333-4.644v-3.5a5.834,5.834,0,0,0-11.667,0v3.5a5.835,5.835,0,0,0,2.334,4.644V24.5A3.5,3.5,0,0,0,7.005,28ZM3.505,5.833a3.5,3.5,0,0,1,7,0v3.5a3.462,3.462,0,0,1-1.75,3.01,1.169,1.169,0,0,0-.584,1.009V24.5a1.167,1.167,0,1,1-2.333,0V13.352a1.17,1.17,0,0,0-.583-1.009,3.458,3.458,0,0,1-1.75-3.01Z"
                      transform="translate(-1.171)"
                      fill="#27a6ff"
                    />
                    <path
                      d="M16.338,0a1.167,1.167,0,0,0-1.167,1.167V10.5a3.5,3.5,0,0,0,2.334,3.3V24.5a3.5,3.5,0,0,0,7,0V13.8a3.5,3.5,0,0,0,2.333-3.3V1.167a1.167,1.167,0,1,0-2.333,0V7H22.171V1.167a1.167,1.167,0,1,0-2.333,0V7H17.505V1.167A1.167,1.167,0,0,0,16.338,0Zm8.167,9.333V10.5a1.168,1.168,0,0,1-1.167,1.167,1.167,1.167,0,0,0-1.167,1.166V24.5a1.167,1.167,0,1,1-2.333,0V12.833a1.166,1.166,0,0,0-1.167-1.166A1.167,1.167,0,0,1,17.505,10.5V9.333Z"
                      transform="translate(-1.171)"
                      fill="#27a6ff"
                    />
                  </svg>
                  <h5 className="text-[#424447] w-[50px] text-[16px] font-[bold] family-[poppins]">
                    Food
                  </h5>
                </div>
                <div
                  onClick={() => ClipartHandler("greek")}
                  className="flex gap-[16px] hover:scale-105 border border-[#c4c4c4] rounded-[4px] py-[12px] px-[12px] my-[18px] cursor-pointer justify-center"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 28 28"
                    width={20}
                  >
                    <title>Greek</title>
                    <circle cx={14} cy={7} r="1.167" fill="#27a6ff" />
                    <path
                      d="M1.171,12.833H3.505v8.946L.238,26.133A1.166,1.166,0,0,0,1.171,28H26.838a1.167,1.167,0,0,0,.933-1.867l-3.266-4.354V12.833h2.333A1.166,1.166,0,0,0,28,11.667v-3.5A1.165,1.165,0,0,0,27.4,7.143l-12.833-7a1.166,1.166,0,0,0-1.12,0l-12.834,7A1.167,1.167,0,0,0,.005,8.167v3.5A1.166,1.166,0,0,0,1.171,12.833ZM17.505,21H15.171V12.833h2.334Zm-4.667,0H10.505V12.833h2.333ZM8.171,21H5.838V12.833H8.171ZM3.505,25.667l1.75-2.334h17.5l1.75,2.334ZM22.171,21H19.838V12.833h2.333ZM2.338,8.861,14.005,2.5,25.671,8.861V10.5H2.338Z"
                      transform="translate(-0.005)"
                      fill="#27a6ff"
                    />
                  </svg>

                  <h5 className="text-[#424447] w-[50px] text-[16px] font-[bold] family-[poppins]">
                    Greek
                  </h5>
                </div>
                {/**/}
                <div
                  onClick={() => ClipartHandler("holidays")}
                  className="flex gap-[16px] hover:scale-105 border border-[#c4c4c4] rounded-[4px] py-[12px] px-[12px] my-[18px] cursor-pointer justify-center"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 27.106 28"
                    width={20}
                  >
                    <title>Holidays</title>
                    <path
                      d="M25.982,16.93l-2.968.8L19.8,15.868V12.132l3.217-1.858,2.968.8a1.184,1.184,0,0,0,.318.044,1.273,1.273,0,0,0,.318-2.5l-2.249-.6.6-2.246a1.273,1.273,0,1,0-2.348-.982,1.286,1.286,0,0,0-.086.31l-.8,2.966-3.271,1.9L15.289,8.165V4.347l2.173-2.173a1.273,1.273,0,0,0-1.8-1.8L14.016,2.018,12.371.373a1.273,1.273,0,0,0-1.8,1.8l2.173,2.173V8.165L9.562,9.959,6.291,8.069,5.5,5.091a1.273,1.273,0,0,0-2.484.554c.008.035.017.07.028.105L3.64,8,1.391,8.6a1.273,1.273,0,0,0,.318,2.5,1.215,1.215,0,0,0,.318-.045L5,10.262,8.213,12.12v3.748L5.018,17.726l-2.968-.8a1.273,1.273,0,0,0-.659,2.457l2.249.6-.6,2.246a1.272,1.272,0,0,0,.9,1.559,1.228,1.228,0,0,0,.319.045,1.273,1.273,0,0,0,1.228-.955l.8-2.965,3.284-1.88,3.181,1.794v3.818L10.57,25.826a1.273,1.273,0,1,0,1.8,1.8h0l1.645-1.645,1.645,1.645a1.273,1.273,0,1,0,1.8-1.8h0l-2.173-2.173V19.835l3.181-1.794,3.274,1.89.792,2.978a1.274,1.274,0,0,0,1.228.954,1.186,1.186,0,0,0,.319-.044,1.273,1.273,0,0,0,.9-1.559l-.6-2.247,2.249-.6a1.273,1.273,0,0,0-.659-2.456ZM10.78,15.8V12.2l3.236-1.829L17.252,12.2v3.6L14.016,17.63Z"
                      transform="translate(-0.451)"
                      fill="#27a6ff"
                    />
                  </svg>

                  <h5 className="text-[#424447] w-[50px] text-[14px] proxima-bold">
                    Holidays
                  </h5>
                </div>
                {/**/}
                <div
                  onClick={() => ClipartHandler("jobs")}
                  className="flex gap-[16px] hover:scale-105 border border-[#c4c4c4] rounded-[4px] py-[12px] px-[12px] my-[18px] cursor-pointer justify-center"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20.97 28"
                    width={20}
                  >
                    <title>Jobs</title>
                    <path
                      d="M12.838,10.5h2.333a3.5,3.5,0,0,0,3.5-3.5V2.838a.5.5,0,0,1,.5-.5h0a.475.475,0,0,1,.324.114,8.223,8.223,0,0,1,2.59,6.9,8.033,8.033,0,0,1-2.144,4.413,9.1,9.1,0,0,0-2.441,6.3v6.778a1.167,1.167,0,1,0,2.333,0V20.055a6.789,6.789,0,0,1,1.8-4.7A10.334,10.334,0,0,0,24.4,9.669,10.5,10.5,0,0,0,21.145.791,2.77,2.77,0,0,0,19.176,0a2.838,2.838,0,0,0-2.838,2.838h0V7a1.167,1.167,0,0,1-1.167,1.167H12.838A1.168,1.168,0,0,1,11.671,7V2.838A2.838,2.838,0,0,0,8.833,0h0A2.766,2.766,0,0,0,6.865.791,10.5,10.5,0,0,0,3.61,9.669a10.326,10.326,0,0,0,2.756,5.69,6.789,6.789,0,0,1,1.8,4.7v6.778a1.167,1.167,0,0,0,2.334,0V20.055a9.108,9.108,0,0,0-2.442-6.3A8.036,8.036,0,0,1,5.92,9.348a8.184,8.184,0,0,1,2.59-6.9.471.471,0,0,1,.323-.114.5.5,0,0,1,.5.5V7A3.5,3.5,0,0,0,12.838,10.5Z"
                      transform="translate(-3.519 0)"
                      fill="#27a6ff"
                    />
                    <path
                      d="M14.005,28a1.166,1.166,0,0,0,1.166-1.167V18.667a1.167,1.167,0,1,0-2.333,0v8.166A1.166,1.166,0,0,0,14.005,28Z"
                      transform="translate(-3.519 0)"
                      fill="#27a6ff"
                    />
                  </svg>

                  <h5 className="text-[#424447] w-[50px] text-[16px] font-[bold] family-[poppins]">
                    Jobs
                  </h5>
                </div>
                {/**/}
                <div
                  onClick={() => ClipartHandler("mascots")}
                  className="flex gap-[16px] hover:scale-105 border border-[#c4c4c4] rounded-[4px] py-[12px] px-[12px] my-[18px] cursor-pointer justify-center"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 25.666 28"
                    width={20}
                  >
                    <title>Mascots</title>
                    <path
                      d="M7.97,28a4.727,4.727,0,0,0,3.1-1.123l.2-.175a4.281,4.281,0,0,1,5.465,0l.205.178a4.718,4.718,0,0,0,3.1,1.12A4.267,4.267,0,0,0,24.5,23.975v-.726a4.51,4.51,0,0,0-1.6-3.395,13.458,13.458,0,0,1-3.295-4.218l-1.3-2.625a4.758,4.758,0,0,0-4.3-2.511,4.762,4.762,0,0,0-4.3,2.508l-.851,1.727A30.12,30.12,0,0,1,4.61,21.079a4.443,4.443,0,0,0-1.105,2.9A4.267,4.267,0,0,0,7.97,28ZM6.421,22.549a32.068,32.068,0,0,0,4.524-6.782l.855-1.726a2.447,2.447,0,0,1,2.205-1.208,2.445,2.445,0,0,1,2.205,1.211l1.3,2.625a15.88,15.88,0,0,0,3.862,4.958,2.157,2.157,0,0,1,.8,1.622v.726a1.952,1.952,0,0,1-2.132,1.691,2.419,2.419,0,0,1-1.569-.551l-.2-.178a6.508,6.508,0,0,0-8.523,0l-.2.178a2.432,2.432,0,0,1-1.572.551,1.958,1.958,0,0,1-2.132-1.691A2.133,2.133,0,0,1,6.421,22.549Z"
                      transform="translate(-1.171)"
                      fill="#27a6ff"
                    />
                    <path
                      d="M8.171,11.667V10.5a3.5,3.5,0,1,0-7,0v1.167a3.5,3.5,0,1,0,7,0Zm-4.666,0V10.5a1.167,1.167,0,1,1,2.333,0v1.167a1.167,1.167,0,0,1-2.333,0Z"
                      transform="translate(-1.171)"
                      fill="#27a6ff"
                    />
                    <path
                      d="M17.505,4.667V3.5a3.5,3.5,0,1,0-7,0V4.667a3.5,3.5,0,1,0,7,0Zm-4.667,0V3.5a1.167,1.167,0,1,1,2.333,0V4.667a1.167,1.167,0,0,1-2.333,0Z"
                      transform="translate(-1.171)"
                      fill="#27a6ff"
                    />
                    <path
                      d="M26.838,10.5V9.333a3.5,3.5,0,1,0-7,0V10.5a3.5,3.5,0,0,0,7,0Zm-2.334,0a1.167,1.167,0,1,1-2.333,0V9.333a1.167,1.167,0,0,1,2.333,0Z"
                      transform="translate(-1.171)"
                      fill="#27a6ff"
                    />
                  </svg>

                  <h5 className="text-[#424447] w-[50px] text-[16px] font-[bold] family-[poppins]">
                    Mascots
                  </h5>
                </div>
                {/**/}
              </div>
              <div className="main-menu-add-clipart-categories-column w-[182px]">
                {/**/}

                <div
                  onClick={() => ClipartHandler("military")}
                  className="flex gap-[16px] hover:scale-105 border border-[#c4c4c4] rounded-[4px] py-[12px] px-[12px] my-[18px] cursor-pointer justify-center"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 18.655 28"
                    width={16}
                  >
                    <title>Military</title>
                    <path
                      d="M22.166,0H5.843A1.166,1.166,0,0,0,4.677,1.166V9.327A1.166,1.166,0,0,0,5.383,10.4l4.975,2.134a8.163,8.163,0,1,0,7.287,0L22.621,10.4a1.166,1.166,0,0,0,.711-1.076V1.166A1.166,1.166,0,0,0,22.166,0ZM11.673,2.332h4.663v8.22l-2.331,1.005-2.332-1.005V2.332Zm-4.664,0H9.341V9.558l-2.332-1ZM19.834,19.821a5.83,5.83,0,1,1-5.829-5.83A5.829,5.829,0,0,1,19.834,19.821ZM21,8.558l-2.332,1V2.332H21Z"
                      transform="translate(-4.677)"
                      fill="#27a6ff"
                    />
                    <path
                      d="M10.507,19.821a3.5,3.5,0,1,0,3.5-3.5A3.5,3.5,0,0,0,10.507,19.821Zm4.663,0a1.166,1.166,0,1,1-1.165-1.166A1.166,1.166,0,0,1,15.17,19.821Z"
                      transform="translate(-4.677)"
                      fill="#27a6ff"
                    />
                  </svg>

                  <h5 className="text-[#424447] w-[50px] text-[16px] font-[bold] family-[poppins]">
                    Military
                  </h5>
                </div>

                {/**/}
                <div
                  onClick={() => ClipartHandler("music")}
                  className="flex gap-[16px] hover:scale-105 border border-[#c4c4c4] rounded-[4px] py-[12px] px-[12px] my-[18px] cursor-pointer justify-center"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 27.999 28"
                    width={18}
                  >
                    <title>Music</title>
                    <path
                      d="M21,15.273a4.455,4.455,0,0,0,0,8.909H23.55A4.454,4.454,0,0,0,28,19.728V1.274A1.271,1.271,0,0,0,26.445.033L9.9,3.851a1.271,1.271,0,0,0-.986,1.241v14H4.459a4.455,4.455,0,0,0,0,8.909H7.005a4.454,4.454,0,0,0,4.454-4.454V12.467l14-3.239v6.045Zm4.455,4.455a1.909,1.909,0,0,1-1.909,1.909H21a1.91,1.91,0,0,1,0-3.819h4.455ZM8.914,23.546a1.909,1.909,0,0,1-1.909,1.909H4.459a1.909,1.909,0,0,1,0-3.818H8.914ZM11.459,9.864V6.1l14-3.239V6.625Z"
                      transform="translate(-0.005 0)"
                      fill="#27a6ff"
                    />
                  </svg>

                  <h5 className="text-[#424447] w-[50px] text-[16px] font-[bold] family-[poppins]">
                    Music
                  </h5>
                </div>
                {/**/}
                <div
                  onClick={() => ClipartHandler("nature")}
                  className="flex gap-[16px] hover:scale-105 border border-[#c4c4c4] rounded-[4px] py-[12px] px-[12px] my-[18px] cursor-pointer justify-center"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 28.001 28"
                    width={18}
                  >
                    <title>Nature</title>
                    <path
                      d="M.376,27.629a1.272,1.272,0,0,0,1.8,0l3.7-3.705a12.373,12.373,0,0,0,7.806,2.8,14.186,14.186,0,0,0,10.111-4.181,1.27,1.27,0,0,0,0-1.8,1.2,1.2,0,0,0-.191-.157l-1.723-1.151c2.346-1.116,4.842-3.056,4.842-5.431a1.275,1.275,0,0,0-.381-.89l-1.654-1.653c2.436-2.709,3.46-5.914,3.307-10.213A1.272,1.272,0,0,0,26.756.014c-4.3-.149-7.5.871-10.212,3.307L14.89,1.668A1.269,1.269,0,0,0,14,1.286c-2.369,0-4.308,2.49-5.424,4.836L7.418,4.405a1.272,1.272,0,0,0-1.764-.351,1.363,1.363,0,0,0-.191.157A14.191,14.191,0,0,0,1.282,14.322h0a12.379,12.379,0,0,0,2.8,7.806l-3.7,3.7A1.271,1.271,0,0,0,.376,27.629Zm3.45-13.307A11.657,11.657,0,0,1,6.229,7.2L7.854,9.632a1.272,1.272,0,0,0,2.3-.419c.483-2.1,2.111-4.77,3.414-5.282l2.08,2.08a1.273,1.273,0,0,0,1.8,0l.026-.028a10.413,10.413,0,0,1,7.977-3.424,10.455,10.455,0,0,1-3.424,7.987,1.272,1.272,0,0,0-.055,1.8l.026.027,2.077,2.079c-.522,1.3-3.18,2.932-5.278,3.412a1.272,1.272,0,0,0-.42,2.3l2.435,1.625a11.659,11.659,0,0,1-7.125,2.394,9.806,9.806,0,0,1-5.99-2.067l4.655-4.658a1.272,1.272,0,0,0-1.8-1.8L5.892,20.312A9.809,9.809,0,0,1,3.826,14.322Z"
                      transform="translate(-0.004 0)"
                      fill="#27a6ff"
                    />
                  </svg>

                  <h5 className="text-[#424447] w-[50px] text-[16px] font-[bold] family-[poppins]">
                    Nature
                  </h5>
                </div>
                {/**/}
                <div
                  onClick={() => ClipartHandler("office")}
                  className="flex gap-[16px] hover:scale-105 border border-[#c4c4c4] rounded-[4px] py-[12px] px-[12px] my-[18px] cursor-pointer justify-center"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24.069 28"
                    width={18}
                  >
                    <title>Office</title>
                    <path
                      d="M20.334,7.56a1.312,1.312,0,1,0-1.855-1.855L8.651,15.534a4.093,4.093,0,0,0,0,5.785,4.187,4.187,0,0,0,5.786,0l9.828-9.828a6.88,6.88,0,0,0-9.717-9.717L4.719,11.6A9.652,9.652,0,0,0,18.368,25.251l7.208-7.208a1.311,1.311,0,0,0-1.855-1.854L16.514,23.4a7.029,7.029,0,0,1-9.94-9.94h0L16.4,3.628a4.259,4.259,0,0,1,6.009,6.009l-9.829,9.828a1.469,1.469,0,0,1-2.077-2.077Z"
                      transform="translate(-1.97 0)"
                      fill="#27a6ff"
                    />
                  </svg>

                  <h5 className="text-[#424447] w-[50px] text-[16px] font-[bold] family-[poppins]">
                    Office
                  </h5>
                </div>
                {/**/}
                <div
                  onClick={() => ClipartHandler("religion")}
                  className="flex gap-[16px] hover:scale-105 border border-[#c4c4c4] rounded-[4px] py-[12px] px-[12px] my-[18px] cursor-pointer justify-center"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 22.399 28"
                    width={18}
                  >
                    <title>Religion</title>
                    <path
                      d="M21.7,7.632H17.5V3.5a3.5,3.5,0,1,0-7,0V7.632h-4.2a3.5,3.5,0,1,0,0,7h4.2V24.5a3.5,3.5,0,1,0,7,0V14.632h4.2a3.5,3.5,0,0,0,0-7Zm0,4.667H15.171V24.5a1.167,1.167,0,1,1-2.333,0V12.3H6.305a1.167,1.167,0,1,1,0-2.333h6.533V3.5a1.167,1.167,0,1,1,2.333,0V9.966H21.7a1.167,1.167,0,1,1,0,2.333Z"
                      transform="translate(-2.805)"
                      fill="#27a6ff"
                    />
                  </svg>

                  <h5 className="text-[#424447] w-[50px] text-[16px] font-[bold] family-[poppins]">
                    Religion
                  </h5>
                </div>
                {/**/}
                <div
                  onClick={() => ClipartHandler("shapes")}
                  className="flex gap-[16px] hover:scale-105 border border-[#c4c4c4] rounded-[4px] py-[12px] px-[12px] my-[18px] cursor-pointer justify-center"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 27.991 28"
                    width={18}
                  >
                    <title>Shapes</title>
                    <path
                      d="M27.93,10.191a1.165,1.165,0,0,0-.977-.761c-.058,0-5.3-.546-8.425-.82L15.075.7A1.1,1.1,0,0,0,14,0,1.167,1.167,0,0,0,12.934.71L9.568,8.584c-3.12.271-8.457.82-8.515.825a1.167,1.167,0,0,0-.721,1.966l6.2,6.387c-.671,2.808-2.129,8.8-2.129,8.8A1.166,1.166,0,0,0,6.18,27.8L14,22.554,21.811,27.8a1.166,1.166,0,0,0,1.782-1.245s-1.449-5.953-2.126-8.767l6.2-6.39A1.165,1.165,0,0,0,27.93,10.191Zm-8.583,6.434a1.169,1.169,0,0,0-.292,1.082c.333,1.4,1.033,4.284,1.569,6.491l-5.978-4.01a1.168,1.168,0,0,0-1.3,0L7.372,24.207c.54-2.222,1.246-5.13,1.575-6.515a1.166,1.166,0,0,0-.291-1.082L3.7,11.5c2.079-.207,5.019-.5,6.772-.638a1.169,1.169,0,0,0,.977-.706l2.581-6.034,2.639,6.054a1.165,1.165,0,0,0,.971.694c1.75.146,4.634.429,6.679.633Z"
                      transform="translate(-0.009)"
                      fill="#27a6ff"
                    />
                  </svg>

                  <h5 className="text-[#424447] w-[50px] text-[16px] font-[bold] family-[poppins]">
                    Shapes
                  </h5>
                </div>
                {/**/}
                <div
                  onClick={() => ClipartHandler("sports")}
                  className="flex gap-[16px] hover:scale-105 border border-[#c4c4c4] rounded-[4px] py-[12px] px-[12px] my-[18px] cursor-pointer justify-center"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 28 28"
                    width={18}
                  >
                    <title>Sports</title>
                    <path
                      d="M23.9,4.1A13.96,13.96,0,0,0,14.045,0h-.084A13.97,13.97,0,0,0,.005,13.953v.094A13.97,13.97,0,0,0,13.961,28h.087A13.971,13.971,0,0,0,28.005,14.047v-.094A13.956,13.956,0,0,0,23.9,4.1Zm1.7,8.715a10.747,10.747,0,0,1-6.39-2.374l3.832-3.824A11.6,11.6,0,0,1,25.6,12.816ZM15.9,10.45l-1.9,1.9L6.622,4.958a11.6,11.6,0,0,1,6.233-2.569A13.086,13.086,0,0,0,15.9,10.45ZM15.189,2.4a11.615,11.615,0,0,1,6.2,2.558L17.563,8.791A10.741,10.741,0,0,1,15.189,2.4ZM4.963,6.618,12.354,14l-1.9,1.9A13.081,13.081,0,0,0,2.4,12.851,11.6,11.6,0,0,1,4.963,6.618Zm5.483,12.591A10.738,10.738,0,0,1,12.82,25.6a11.584,11.584,0,0,1-6.2-2.555Zm1.66-1.659,1.9-1.9,7.382,7.391a11.6,11.6,0,0,1-6.233,2.569A13.086,13.086,0,0,0,12.106,17.55Zm-9.7-2.366A10.744,10.744,0,0,1,8.8,17.558L4.963,21.382A11.581,11.581,0,0,1,2.408,15.184Zm20.638,6.2L15.655,14l1.9-1.9a13.081,13.081,0,0,0,8.053,3.048A11.6,11.6,0,0,1,23.046,21.382Z"
                      transform="translate(-0.005)"
                      fill="#27a6ff"
                    />
                  </svg>

                  <h5 className="text-[#424447] w-[50px] text-[16px] font-[bold] family-[poppins]">
                    Sports
                  </h5>
                </div>
                {/**/}
                <div
                  onClick={() => ClipartHandler("transport")}
                  className="flex gap-[16px] hover:scale-105 border border-[#c4c4c4] rounded-[4px] py-[12px] px-[12px] my-[18px] cursor-pointer justify-center"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 28.005 28.004"
                    width={18}
                  >
                    <title>Transport</title>
                    <path
                      d="M23.581,0a4.443,4.443,0,0,0-3.208,1.389l-2.7,2.864L7.215,2.347a1.188,1.188,0,0,0-.857.178l-3.5,2.333A1.167,1.167,0,0,0,2.9,6.83L10.8,11.564c-.7.767-1.394,1.54-2.062,2.287l-5-1a1.168,1.168,0,0,0-1.056.318L.346,15.5a1.167,1.167,0,0,0-.009,1.65,1.183,1.183,0,0,0,.3.22L7.3,20.705l3.325,6.653a1.167,1.167,0,0,0,.863.639,1.459,1.459,0,0,0,.187,0,1.167,1.167,0,0,0,.825-.342l2.334-2.333a1.169,1.169,0,0,0,.318-1.053l-1-5L16.429,17.2l4.743,7.9a1.173,1.173,0,0,0,1.971.035l2.334-3.5a1.183,1.183,0,0,0,.178-.857l-1.9-10.451,2.858-2.692A4.425,4.425,0,0,0,23.581,0Zm1.432,5.95L21.691,9.07a1.166,1.166,0,0,0-.347,1.059l1.931,10.614-1.05,1.572L17.7,14.772a1.167,1.167,0,0,0-1.6-.4,1.113,1.113,0,0,0-.184.137l-3.821,3.471a1.167,1.167,0,0,0-.362,1.094l1.009,5.04-.746.746L9.216,19.32a1.194,1.194,0,0,0-.522-.523L3.152,16.021l.747-.747,5.031,1a1.167,1.167,0,0,0,1.1-.368l.309-.347c1.006-1.126,2.068-2.313,3.141-3.453a1.167,1.167,0,0,0-.049-1.65,1.2,1.2,0,0,0-.2-.15L5.687,5.777l1.575-1.05L17.873,6.658a1.167,1.167,0,0,0,1.059-.347l3.129-3.328a2.091,2.091,0,1,1,2.952,2.963Z"
                      transform="translate(0 0.004)"
                      fill="#27a6ff"
                    />
                  </svg>

                  <h5 className="text-[#424447] w-[50px] text-[16px] font-[bold] family-[poppins]">
                    Transport
                  </h5>
                </div>
                {/**/}
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Clipart;
