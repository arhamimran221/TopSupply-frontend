import React from 'react';

const FontsBtn = ({font, onBtnClick, clickType, headerType}) => {
    return (
      <div className="fonts-btn" onClick={()=> onBtnClick(clickType, headerType)}>
        <img src={font?.imgSrc} alt="font-title" />
      </div>
    );
  };
  
  export default FontsBtn;