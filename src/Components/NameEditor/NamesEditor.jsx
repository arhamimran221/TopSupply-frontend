import React, { useState } from "react";
import PanelEditorHeader from "../Panel/PanelEditorHeader";
import { CloseOutlined, DeleteOutlined, DownOutlined, SmileOutlined } from "@ant-design/icons";
import { Checkbox, Modal, Dropdown, Space } from "antd";
import Front from "../../assets/Front-Image.png";
import Large from "../../assets/LargeImage.png";
import Small from "../../assets/smallImage.png";
import Back from "../../assets/Back-Image.png";
import interstate from "../../assets/InterstateImage.png";
import collegate from "../../assets/Collegate.png";
import Color from "./NameEditorComps/Color";
import ColorPlate from "./NameEditorComps/ColorPlate";

const NamesEditor = ({ front, setFront }) => {
  const [size, setSize] = useState("lg");
  const [font, setFont] = useState("inter");
  const [editorView, setEditorView] = useState("NameEdit");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  const onChange = (e) => {
    console.log(`checked = ${e.target.checked}`);
  };
  const items = [
    {
      key: "1",
      label:'Adult S'
    },
    {
      key: "2",
      label: "Adult M"
    },
    {
      key: "3",
      label: "Adult L"
    },
    {
      key: "4",
      label: "Adult XL",
    },
    {
      key: "5",
      label: "Adult 2XL",
    },
    {
      key: "6",
      label: "Adult 3XL",
    },
    {
      key: "7",
      label: "Adult 4XL",
    },
    {
      key: "8",
      label: "Adult 5XL",
    },
    {
      key: "9",
      label: "Youth YXS",
    },
    {
      key: "10",
      label: "Youth YS",
    },
    {
      key: "11",
      label: "Youth YM",
    },
    {
      key: "12",
      label: "Youth YL",
    },
    {
      key: "13",
      label: "Youth YXL",
    },
  ];


  return (
    <div className="bg-[#FBFBFB]">
      {editorView === "NameEdit" ? (
        <div className="h-[490px] overflow-y-auto p-4">
          <div className="editor-header relative">
            <PanelEditorHeader
              TagLine="NAMES & NUMBERS"
              Title="Names & Numbers Tools"
              SubTitle=""
            />
            <div className="absolute right-1 top-5 close-icon cursor-pointer">
              <CloseOutlined />
            </div>
          </div>
          <div className="border-b-[1px] border-b-[#cccfd6] flex justify-between mt-[20px] pb-[10px]">
            <div className="font-poppins text-[#424447] text-[14px]">
              Step 1
            </div>
            <div className="flex gap-[20px]">
              <div className="font-poppins text-[#424447] text-[14px]">
                <Checkbox onChange={onChange}>Add Names</Checkbox>
              </div>
              <div className="font-poppins text-[#424447] text-[14px]">
                <Checkbox onChange={onChange}>Add Numbers</Checkbox>
              </div>
            </div>
          </div>
          <div className="border-b-[1px] border-b-[#cccfd6] flex justify-between  py-[15px] items-center">
            <div className="font-poppins text-[#424447] text-[14px]">Sides</div>
            <div className="flex gap-[20px] items-center">
              <div
                className={
                  front === "front"
                    ? "font-poppins text-[#424447] text-[14px] border-[2px] border-[#27a6ff] p-2 cursor-pointer"
                    : "font-poppins text-[#424447] text-[14px] border-[2px] border-[#cccfd6] p-2 cursor-pointer"
                }
                onClick={() => setFront("front")}
              >
                <img src={Front} alt="" srcSet="" width={100} />
              </div>
              <div
                className={
                  front === "back"
                    ? "font-poppins text-[#424447] text-[14px] border-[2px] border-[#27a6ff] p-2 cursor-pointer"
                    : "font-poppins text-[#424447] text-[14px] border-[2px] border-[#cccfd6] p-2 cursor-pointer"
                }
                onClick={() => setFront("back")}
              >
                <img src={Back} alt="" srcSet="" width={80} />
              </div>
            </div>
          </div>
          <div className="border-b-[1px] border-b-[#cccfd6] flex justify-between  py-[15px] items-center">
            <div className="font-poppins text-[#424447] text-[14px]">Size</div>
            <div className="flex gap-[20px] items-center">
              <div
                className={
                  size === "sm"
                    ? "font-poppins text-[#424447] text-[14px] border-[2px] border-[#27a6ff] p-2 cursor-pointer"
                    : "font-poppins text-[#424447] text-[14px] border-[2px] border-[#cccfd6] p-2 cursor-pointer"
                }
                onClick={() => setSize("sm")}
              >
                <img src={Small} alt="" srcSet="" width={80} />
              </div>
              <div
                className={
                  size === "lg"
                    ? "font-poppins text-[#424447] text-[14px] border-[2px] border-[#27a6ff] p-2 cursor-pointer"
                    : "font-poppins text-[#424447] text-[14px] border-[2px] border-[#cccfd6] p-2 cursor-pointer"
                }
                onClick={() => setSize("lg")}
              >
                <img src={Large} alt="" srcSet="" width={100} />
              </div>
            </div>
          </div>
          <div className="border-b-[1px] border-b-[#cccfd6] flex justify-between  py-[15px] items-center">
            <div className="font-poppins text-[#424447] text-[14px]">Font</div>
            <div className="flex gap-[20px] items-center">
              <div
                className={
                  font === "inter"
                    ? "font-poppins text-[#424447] text-[14px] border-[2px] border-[#27a6ff] p-2 cursor-pointer"
                    : "font-poppins text-[#424447] text-[14px] border-[2px] border-[#cccfd6] p-2 cursor-pointer"
                }
                onClick={() => setFont("inter")}
              >
                <img src={interstate} alt="" srcSet="" width={140} />
              </div>
              <div
                className={
                  font === "collegate"
                    ? "font-poppins text-[#424447] text-[14px] border-[2px] border-[#27a6ff] p-2 cursor-pointer"
                    : "font-poppins text-[#424447] text-[14px] border-[2px] border-[#cccfd6] p-2 cursor-pointer"
                }
                onClick={() => setFont("collegate")}
              >
                <img src={collegate} alt="" srcSet="" width={140} />
              </div>
            </div>
          </div>
          <Color setEditorView={setEditorView} />
          <div className="border-b-[1px] border-b-[#cccfd6] pb-[10px]">
            <button
              className="w-[100%] py-2 bg-[#27a6ff] mt-[10px] text-[#fff] font-poppins rounded-full text-[14px] products-btn hover:bg-[#008ff3] ease-in-out duration-300"
              onClick={showModal}
            >
              Enter Names & Numbers
            </button>
          </div>
          <p className="text-center font-poppins text-[14px] text-[#424447] m-auto my-[10px]">
            Complete list required for accurate pricing
            <br />
            Names = $4.00 | Numbers = $3.00
            <br />
            Names & Numbers = $6.00
          </p>
        </div>
      ) : (
        <ColorPlate setEditorView={setEditorView} />
      )}

      <Modal
        title={null}
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        closeIcon={null}
        footer={null}
        width={800}
        style={{marginTop: "-55px"}}
      >
        <div className="p-4">
          <div className="">
            <p className="font-poppins text-[#27a6ff] font-[500] text-[12px]">NAMES & NUMBERS</p>
            <div className="flex justify-between my-[8px]">
              <h2 className="text-[#424447] font-poppins font-[600] text-[22px]">Edit Names & Numbers List</h2>
              <div className="flex gap-[5px]">
                <p className="font-poppins text-[#27a6ff] text-[14px] hover:underline cursor-pointer" onClick={handleCancel}>Save & Close</p> | <p className="font-poppins text-[#8d9095] text-[14px] hover:underline cursor-pointer" onClick={handleCancel}>Exit without Saving</p>
              </div>
            </div>
          </div>
          <hr />
          <div className="flex w-[100%] mt-[15px] gap-[20px]">
            <div className="w-[40%]">
              <div className="w-[100%] min-h-[301px] p-[20px] border-[1px] border-[#ccc]"></div>
              <div className="mt-[40px]">
                <button className="w-[100%] bg-[#27a6ff] rounded-full py-2 font-poppins text-[#fff] products-btn hover:bg-[#0196ff] ease-in-out duration-300" onClick={handleCancel}>Save & Close</button>
                <p className="text-center font-poppins my-[20px] text-[#424447] text-[16px]">or</p>
                <button className="font-poppins text-[#8d9095] text-[16px] w-[100%] hover:underline cursor-pointer" onClick={handleCancel}>Exit without Saving</button>
              </div>
            </div>
            <div className="w-[60%]">
              <div className="flex gap-[10px]">
                <div className="">Image here</div>
                <div className="">
                  <h4 className="text-[#424447] font-poppins text-[18px]">RT2000 RushOrderTees Classic Tee</h4>
                  <div className="font-poppins flex gap-[10px] mt-[5px]">
                    <div className="w-[20px] bg-[#000] h-[20px] border-[1px] border-[#ccc]"></div> Color
                  </div>
                </div>
              </div>
              <div className="flex w-[100%] mt-[10px] ">
                <p className="w-[30%] text-[#424447] font-poppins text-[16px]">Size</p>
                <p className="w-[47%] text-[#424447] font-poppins text-[16px]">Name</p>
                <p className="w-[20%] text-[#424447] font-poppins text-[16px]">#</p>
              </div>
              <div className="flex w-[100%] mt-[5px] gap-[10px]">
                <div className="w-[30%]">
                  <Dropdown
                    menu={{
                      items,
                    }}
                    
                  >
                    <div onClick={(e) => e.preventDefault()} >
                      <Space className="border-[1px] border-[#ccc] flex justify-between px-[4px] rounded-md py-1 cursor-pointer">
                       <div className="w-[80%]"></div> <div className="w-[20%]"><DownOutlined className="text-[12px]"/></div>
                      </Space>
                    </div>
                  </Dropdown>
                </div>
                <div className="w-[50%]">
                  <input type="text" className="border-[1px] border-[#ccc] flex justify-between px-2 rounded-md py-1 w-[100%]"/>
                </div>
                <div className="w-[20%]">
                  <input type="number" className="border-[1px] border-[#ccc] flex justify-between px-2 rounded-md py-1 w-[100%]"/>
                </div>
                <DeleteOutlined className="text-[16px] cursor-pointer"/>
              </div>
              <button className="text-[#27a6ff] font-poppins my-[20px] hover:underline cursor-pointer">+ Add Another</button>
              <div className="p-3 bg-[#f0f2f5] text-[#424447] text-[14px] font-poppins">
              Totals: 0 out of 11 have Names | 0 out of 11 have Numbers

              </div>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default NamesEditor;
