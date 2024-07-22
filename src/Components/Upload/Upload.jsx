import React, { useState ,useContext, useEffect } from "react";
import { Modal, Progress } from "antd";
import PanelEditorHeader from "../Panel/PanelEditorHeader";
import { CloseOutlined } from "@ant-design/icons";
import DriveIcon from "../../assets/svg/GoogleDrive.svg";
import DropBox from "../../assets/svg/DropBox.svg";
import UploadEditor from "./UploadEditor";

import { extractColors } from 'extract-colors'

const UploadFile = ({setVisible}) => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [progress, setProgress] = useState(0);
  const [fileName, setFileName] = useState("");
  const [file, setFile] = useState();

  const handleUpload = (event) => {
    setIsModalVisible(true);
    setFileName(event.target.files[0].name);
    setFile(URL.createObjectURL(event.target.files[0]));
    
    let progress = 0;
    const interval = setInterval(() => {
      progress += 10;

      setProgress(progress);
      if (progress >= 100) {
        clearInterval(interval);
        setIsModalVisible(false);
      }
    }, 500);
  };

  
  

  return (
    <div className="bg-[#FBFBFB]">
     {file? <UploadEditor file={file} /> :
      <div className="h-[490px] overflow-y-auto p-4">
        <div className="editor-header relative">
          <PanelEditorHeader
            TagLine="UPLOAD ART"
            Title="Choose file(s) to upload"
            SubTitle="Our design professionals will select ink colors for you or tell us your preferred colors with Design Notes."
          />
          <div className="absolute right-1 top-5 close-icon cursor-pointer" onClick={()=>setVisible(false)}>
            <CloseOutlined />
          </div>
        </div>
        <div className="px-4 py-6 border-[2px] border-dashed border-[#b5b8c1] bg-[#f2f2f2] flex flex-col justify-center m-auto w-[100%] gap-[10px] my-[15px] items-center">
          <p className="text-center text-poppins text-[#424447] text-[14px]">
            Drag & Drop Artwork Files or
          </p>
          <label
            htmlFor="file-upload"
            className="px-4 py-2 rounded-full bg-[#27A6FF] text-white cursor-pointer inline-block font-poppins text-[14px] hover:bg-[#008ff3] products-btn"
          >
            <input
              id="file-upload"
              type="file"
              className="hidden"
              onChange={(e) => handleUpload(e)}
            />
            Choose File(s)
          </label>
        </div>
        <div className="w-[100%] flex pb-[15px] border-b-[1px] border-b-[#cccfd6]">
          <button className="px-[26.3px] py-2 rounded-md flex gap-[10px] bg-[#f2f2f2] items-center font-poppins text-[14px] text-[#424447] border-[1px] border-[#b5b8c1]">
            <img src={DriveIcon} className="w-[26px]" /> Use Google Drive
          </button>
          <button className="px-[26.3px] py-2 rounded-md flex gap-[10px] bg-[#f2f2f2] items-center font-poppins text-[14px] text-[#424447] border-[1px] border-[#b5b8c1]">
            <img src={DropBox} className="w-[26px]" /> Use Dropbox
          </button>
        </div>
        <div>
          <p className="font-poppins mt-[15px] font-[700] text-[14px]">
            Upload ANY file type, but we prefer vector, high-res, or large files
            such as:
          </p>
          <div className="flex mt-[15px] gap-[10px]">
            <p className="text-[12px] py-[5px] px-[11px] font-poppins bg-[#fff] border-[1px] border-[#f2f2f2] rounded-md">
              .AI
            </p>
            <p className="text-[12px] py-[5px] px-[11px] font-poppins bg-[#fff] border-[1px] border-[#f2f2f2] rounded-md">
              .EPS
            </p>
            <p className="text-[12px] py-[5px] px-[11px] font-poppins bg-[#fff] border-[1px] border-[#f2f2f2] rounded-md">
              .PDF
            </p>
            <p className="text-[12px] py-[5px] px-[11px] font-poppins bg-[#fff] border-[1px] border-[#f2f2f2] rounded-md">
              .TIFF
            </p>
            <p className="text-[12px] py-[5px] px-[11px] font-poppins bg-[#fff] border-[1px] border-[#f2f2f2] rounded-md">
              .PSD
            </p>
            <p className="text-[12px] py-[5px] px-[11px] font-poppins bg-[#fff] border-[1px] border-[#f2f2f2] rounded-md">
              .JPG
            </p>
            <p className="text-[12px] py-[5px] px-[11px] font-poppins bg-[#fff] border-[1px] border-[#f2f2f2] rounded-md">
              .PNG
            </p>
          </div>
        </div>
      </div>
       } 
      <Modal
        title="Upload Files"
        visible={isModalVisible}
        footer={null}
        width={500}
      >
        <div className="px-6">
          <p className="font-poppins text-[14px] text-[#424447]">
            Don't worry, we double check everything to ensure your design prints
            perfectly.
          </p>
          <div className="bg-[#f0f2f5] px-2 py-1 flex gap-[20px] mb-[10px] mt-[20px] w-[100%] items-center">
            <div className="w-[20%]">
              <img src={file} alt="" srcSet="" width={60} />
            </div>
            <div className="w-[80%]">
              <p className="font-poppins text-[14px] mb-[10px]">{fileName}</p>
              <Progress percent={progress} />
            </div>
          </div>
          <p className="font-poppins font-[700] text-[16px] mt-[20px]">
            Copyright & Trademark Notice
          </p>
          <p className="text-[12px] text-[#8d9095] font-poppins pb-[20px] mt-[10px]">
            You agree and confirm that you own or have the necessary rights to
            use the images, logos, text, and/or trademarks in your design and
            indemnify Printfly.
          </p>
        </div>
      </Modal>
    </div>
  );
};

export default UploadFile;
