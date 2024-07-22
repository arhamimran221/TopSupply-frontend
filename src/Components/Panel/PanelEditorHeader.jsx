import "./PanelEditor.css";
import React from "react";
import { ArrowLeftOutlined } from "@ant-design/icons";

const PanelEditorHeader = ({
  TagLine,
  Title,
  SubTitle,
  MoveBack,
  setEditorView,
  setActive
}) => {
  const ChangeEditorView = (view) => {
    setEditorView(view);
  };

  return (
    <div className="flex flex-col border-b border-[#cccfd6] pb-3">
      <div className="header-tagline">
        <tagline-text> {TagLine} </tagline-text>
      </div>
      <div className="header-title">
        {MoveBack ? (
          <>
            <div className="flex gap-3 items-center">
              <div
                onClick={() => ChangeEditorView(MoveBack)}
                className="cursor-pointer"
              >
                <ArrowLeftOutlined className="text-[#424447] text-[18px]" />
              </div>
              <title-text> {Title} </title-text>
            </div>
            {Title === "Add Clipart" && (
              <span className="text-[12px] flex gap-[6px] text-[#8D9095]">
                or
                <div className="text-[#27A6FF] cursor-pointer" onClick={()=> setActive('2')}>
                  Upload Your Own Image
                </div>
              </span>
            )
          }
          </>
        ) : (
          <title-text> {Title} </title-text>
        )}
      </div>
      {SubTitle && (
        <div className="header-sub-title">
          <subtitle-text>
            {TagLine === "UPLOAD ART" ? (
              <div>
                Our design professionals will select ink colors for you or tell
                us your preferred colors with <span>Design Notes</span>.
              </div>
            ) : (
              SubTitle
            )}
          </subtitle-text>
        </div>
      )}
    </div>
  );
};

export default PanelEditorHeader;
