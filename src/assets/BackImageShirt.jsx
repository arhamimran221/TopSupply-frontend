// import React from "react";
import Text from "../assets/AddText.svg";
import UploadImage from "../assets/UploadIcon.svg";
import ClipartIcon from "../assets/ClipartIcon.svg";
// import Numbers from "../assets/NumberIcon.svg";


import React, { useState, useRef, useEffect, useContext } from "react";
import { 
  DrawArcText, CanvasMaskBack, 
  CanvasTextureBack, CanvasResizeText, 
  CanvasDeleteText, CanvasRotateText 
} from "../Components/Panel/CanvasMaker/CanvasMaker";
import { 
  handleActiveText, deleteTextObject, addNewObject, handleActiveUploadArt, handleActiveClipArt 
} from "../Components/Panel/EditorHandles/EditorHandles";
import { StatesContext } from "../Context/StatesContext";
import Draggable from 'react-draggable';

const BackImageShirt = ({color, slide, active, setMouseEnter, setActive, setMobileActive}) => {

  const { TextArray, setTextArray, setTextInput, initialObject } = useContext(StatesContext);

  const ArcCanvasRef = useRef(null);

  const [BackShirtArray, setBackShirtArray] = useState([]);
  const [isRotating, setIsRotating] = useState(false);
  const [initialMousePos, setInitialMousePos] = useState(null);
  const [currentAngle, setCurrentAngle] = useState(0);
  const [initialAngle, setInitialAngle] = useState(0);
  const [currentTextIndex, setCurrentTextIndex] = useState(null);
  const [isResizing, setIsResizing] = useState(false);
  const [initialHeight, setInitialHeight] = useState(0);
  const [initialMouseY, setInitialMouseY] = useState(0);
  

  useEffect(() => {
    if (TextArray?.length > 0 && TextArray[0]?.text && (TextArray[0]?.arc > 0 || TextArray[0]?.arc < 0)) {
        DrawArcText(TextArray[0]?.text, TextArray[0]?.arc, ArcCanvasRef);
    }
    if(TextArray?.length > 0) {
      const BackShirtObjects = TextArray?.filter((obj) => obj?.ShirtType === 'back');
      setBackShirtArray(BackShirtObjects)
    } else {
      setBackShirtArray([]);
    }
  }, [TextArray]);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (isRotating && initialMousePos) {
        const { clientX, clientY } = e;
        const deltaX = clientX - initialMousePos.x;
        const deltaY = clientY - initialMousePos.y;
        const angle = Math.atan2(deltaY, deltaX) * (180 / Math.PI);
        const adjustedAngle = angle < 0 ? 360 + angle : angle;
        setCurrentAngle(adjustedAngle);
        if (currentTextIndex !== null) {
          const updatedTextArray = [...TextArray];
          updatedTextArray[currentTextIndex].rotate = adjustedAngle;
          setTextArray(updatedTextArray);
        }
      }

      if (isResizing && initialMouseY !== null) {
        const deltaY = e.clientY - initialMouseY;
        if (currentTextIndex !== null) {
          const updatedTextArray = [...TextArray];
          const newHeight = initialHeight + deltaY;
          
          const currentObject = updatedTextArray[currentTextIndex];

          if (currentObject?.text) {
            currentObject.fontSize = newHeight > 0 ? newHeight : 24;
          } else if (currentObject?.clipArt?.path) {
            currentObject.imageSize = newHeight > 0 ? newHeight : 100;
          } else if (currentObject?.uploadImage?.path) {
            currentObject.UploadSize = newHeight > 0 ? newHeight : 100;
          }

          setTextArray(updatedTextArray);
        }
      }
    };
    const handleMouseUp = () => {
      setIsRotating(false);
      setInitialMousePos(null);
      setIsResizing(false);
      setInitialMouseY(null);
    };
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseup", handleMouseUp);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, [isRotating, initialMousePos, isResizing, initialMouseY, currentTextIndex, TextArray, setTextArray]);
  
  const handleMouseDown = (e, index) => {
    e.stopPropagation();
    setIsRotating(true);
    setInitialMousePos({ x: e.clientX, y: e.clientY });
    setInitialAngle(TextArray[index].rotate || 0);
    setCurrentTextIndex(index);
  };

  const handleResizeMouseDown = (e, index, size) => {
    e.stopPropagation();
    setIsResizing(true);
    setInitialMouseY(e.clientY);
    
    if(TextArray[index]?.text?.length > 0) {
      setInitialHeight(TextArray[index].fontSize || size);
    } else if(TextArray[index]?.clipArt?.path) {
      setInitialHeight(TextArray[index].imageSize || size);
    } else if(TextArray[index]?.uploadImage?.path) {
      setInitialHeight(TextArray[index].UploadSize || size);
    }
    
    setCurrentTextIndex(index);
  };

  const getTransform = (textObj) => {
    const rotateTransform = textObj?.rotate ? `rotate(${textObj.rotate}deg)` : '';
    const flipTransform = (textObj?.flip?.HzScale !== 1 || textObj?.flip?.VcScale !== 1) 
      ? `scale(${textObj.flip.HzScale}, ${textObj.flip.VcScale})` 
      : '';

    return [rotateTransform, flipTransform].filter(Boolean).join(' ');
  };


  const HandleStart = (e, data, index) => {
    // console.log('Start', e, data);
  };

  const HandleDrag = (e, data, index) => {
    const newTextArray = [...TextArray];
    newTextArray[index].position = { top: data.y, left: data.x };
    setTextArray(newTextArray);
  };

  const HandleStop = (e, data, index) => {
    const newTextArray = [...TextArray];
    newTextArray[index].position = { top: data.y, left: data.x };
    setTextArray(newTextArray);
  };

  return (
    
  <div
    className={`relative ${
      color.zoom ? "scale-125 overflow-hidden flex items-center justify-center h-full" : "flex items-center justify-center h-full"
    }`}
  >
    <CanvasMaskBack color={color} />
    <CanvasTextureBack />
    <CanvasTextureBack />
    {
    slide ? (
      <div className="absolute inset-0 flex items-center justify-center z-[9999]">
        <div className="shirt-design relative">
          {BackShirtArray?.map((textObj, index) => {
            return(
              <div
                id="textObj"
                key={index}
                className={textObj?.fontFamily}
                style={{
                  fontSize: `${textObj?.fontSize}px`,
                  color: textObj?.color?.code,
                  transform: getTransform(textObj),
                  letterSpacing: textObj?.letterSpacing,
                  WebkitTextStroke: textObj?.outline?.code
                    ? `${textObj?.outline?.size}px ${textObj?.outline?.code}`
                    : "0px",
                }}
              >
                <Draggable
                  defaultPosition={{ x: textObj.position.left, y: textObj.position.top }}
                  onStart={(e, data) => HandleStart(e, data, index)}
                  onDrag={(e, data) => HandleDrag(e, data, index)}
                  onStop={(e, data) => HandleStop(e, data, index)}
                >
                  <div
                    className="print-area snipcss-zo1Kf style-DhUdt"
                    ng-style="getCanvas(printArea);"
                    id="style-DhUdt"
                  >
                    <div
                      className="print-object ui-draggable ui-resizable style-8xW2W"
                      ng-switch=""
                      on="printObject.type"
                      data-drag="true"
                      ng-className="{clippingobject: printObject.type === 'clippingobject', uploadobject: printObject.type === 'uploadobject'}"
                      jqyoui-draggable="{animate: false, onStart: 'startCallback', onStop: 'stopCallback', onDrag: 'dragCallback'}"
                      ng-repeat="printObject in printArea.printObjects | orderBy: 'zIndex'"
                      aria-disabled="false"
                      id="style-8xW2W"
                    >
                      <div className="print-object-controls"
                        style={{
                        borderColor: (textObj?.active === true && 
                                      (textObj?.text || textObj?.clipArt?.path || textObj?.uploadImage?.path)) 
                                      ? 'transparent' 
                                      : 'transparent'
                        }}
                      >
                        {textObj?.text && (
                          <span 
                            className="cursor-move" 
                            style={{
                              transform: getTransform(textObj),
                              display: "inline-block",
                              whiteSpace: "pre",
                            }}
                          >
                            {textObj.text.split('\n').map((line, i) => (
                              <React.Fragment key={i}>
                                {i > 0 && <br />}
                                {line}
                              </React.Fragment>
                            ))}
                          </span>
                        )}
                        {textObj?.clipArt?.path && (
                          <div
                            className={`cursor-move 
                              w-[${textObj?.imageSize ? textObj?.imageSize : "100px"}] 
                              h-[${textObj?.imageSize ? textObj?.imageSize : "100px"}]`}
                          >
                              <svg
                                style={{ transform: `rotate(${textObj.rotate}deg)` }}
                                width={textObj?.imageSize? textObj?.imageSize : "100px"}
                                height={textObj?.imageSize}
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <filter
                                  id="colorize"
                                  colorInterpolationFilters="sRGB"
                                >
                                  <feColorMatrix
                                    type="matrix"
                                    values={`0 0 0 0 ${
                                      parseInt(
                                        textObj?.clipArtColor?.code?.slice(1, 3),
                                        16
                                      ) / 255
                                    }
                                    0 0 0 0 ${
                                      parseInt(textObj?.clipArtColor?.code?.slice(3, 5), 16) / 255
                                    }
                                    0 0 0 0 ${
                                      parseInt(textObj?.clipArtColor?.code?.slice(5, 7), 16) / 255
                                    }
                                    0 0 0 1 0`}
                                  />
                                </filter>

                                <filter id="outline">
                                  <feMorphology
                                    in="SourceAlpha"
                                    result="DILATED"
                                    operator="dilate"
                                    radius={textObj?.clipArtOutline?.size}
                                  />
                                  <feFlood
                                    floodColor={textObj?.clipArtOutline?.code}
                                    floodOpacity="1"
                                    result="COLOR"
                                  />
                                  <feComposite
                                    in="COLOR"
                                    in2="DILATED"
                                    operator="in"
                                    result="OUTLINE"
                                  />
                                  <feMerge>
                                    <feMergeNode in="OUTLINE" />
                                    <feMergeNode in="SourceGraphic" />
                                  </feMerge>
                                </filter>

                                <image
                                  href={textObj?.clipArt?.path}
                                  filter="url(#colorize) url(#outline)"
                                  width={textObj?.imageSize}
                                  height={textObj?.imageSize}
                                />
                              </svg>
                            </div>
                        )}
                        {textObj?.uploadImage?.path && (
                            <div
                              className={`cursor-move`}
                              onClick={() =>{
                                handleActiveText(
                                  TextArray,
                                  setTextArray,
                                  textObj?.text,
                                  setTextInput,
                                  index
                                ); setActive("3")}
                              }
                              style={{width : textObj?.UploadSize, height: textObj?.UploadSize }}                           
                            >
                              <img
                                className={`w-[${textObj?.UploadSize}] h-[${textObj?.UploadSize}]`}
                                src={textObj?.uploadImage?.path}   
                                style={{filter: textObj?.uploadImage?.filter, width : textObj?.UploadSize, height: textObj?.UploadSize }}                           
                              />
                            </div>
                        )}
                      
                      </div>
                    </div>
                  </div>
                </Draggable>
              </div>
            )
          })}
        </div>
      </div>
      ) : 
      ((active === "1" || active === "2" || active === "3" || active === "4") && BackShirtArray?.length > 0) ? (
        <div className="absolute inset-0 flex items-center justify-center z-[9999]">
          <div className="shirt-design relative">
            {TextArray?.map((textObj, index) => {
              if(textObj?.ShirtType === 'back') {
              return(
                <div
                  id="textObj"
                  key={index}
                  className={textObj?.fontFamily}
                  style={{
                    fontSize: `${textObj?.fontSize}px`,
                    color: textObj?.color?.code,
                    // transform: textObj?.rotate ? " " : `rotate(${textObj.rotate}deg) scale(${textObj?.flip?.HzScale}, ${textObj?.flip?.VcScale})`,
                    transform: getTransform(textObj),
                    letterSpacing: textObj?.letterSpacing,
                    WebkitTextStroke: textObj?.outline?.code
                      ? `${textObj?.outline?.size}px ${textObj?.outline?.code}`
                      : "0px",
                  }}
                >
                  <Draggable
                    defaultPosition={{ x: textObj.position.left, y: textObj.position.top }}
                    onStart={(e, data) => HandleStart(e, data, index)}
                    onDrag={(e, data) => HandleDrag(e, data, index)}
                    onStop={(e, data) => HandleStop(e, data, index)}
                  >
                    <div
                      className="print-area snipcss-zo1Kf style-DhUdt"
                      ng-style="getCanvas(printArea);"
                      id="style-DhUdt"
                    >
                      <div
                        className="print-object ui-draggable ui-resizable style-8xW2W"
                        ng-switch=""
                        on="printObject.type"
                        data-drag="true"
                        ng-className="{clippingobject: printObject.type === 'clippingobject', uploadobject: printObject.type === 'uploadobject'}"
                        jqyoui-draggable="{animate: false, onStart: 'startCallback', onStop: 'stopCallback', onDrag: 'dragCallback'}"
                        ng-repeat="printObject in printArea.printObjects | orderBy: 'zIndex'"
                        aria-disabled="false"
                        id="style-8xW2W"
                      >
                        <span className="glyphicon glyphicon-refresh spinner"></span>
                        {
                          (textObj?.active === true && (textObj?.text || textObj?.clipArt?.path || textObj?.uploadImage?.path)) && 
                          <div
                            className="print-object-wrap  style-ogHqE"
                            ng-className="{active: isActivePrintObject}"
                            ng-style="{'z-index': printObject.zIndex}"
                            id="style-ogHqE"
                          >
                            <div
                              className="text-object-wrapper style-x3Azd"
                              ng-switch-when="textobject"
                              ng-click="selectPrintObject(printObject);"
                              id="style-x3Azd"
                            ></div>
                            <div
                              className="print-control-corner ui-rotatable-handle ui-draggable"
                              ng-show="isActivePrintObject;"
                              title="Rotate"
                              onMouseDown={(e) => handleMouseDown(e, index)}
                            >
                              <div
                                className="svg-icon style-MBgEx"
                                ng-attr-data-icon="{{$ctrl.name}}"
                                draggable="false"
                                name="'ic_rotate2'"
                                width="14"
                                data-icon="ic_rotate2"
                                id="style-MBgEx"
                              >
                                <div
                                  ng-include="'images/icons/' + $ctrl.name + '.svg'"
                                  className=""
                                >
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 16.47 15.1"
                                  >
                                    <g id="Layer_2" data-name="Layer 2">
                                      <g id="Layer_1-2" data-name="Layer 1">
                                        <path d="M14.3,2.17A8,8,0,0,1,3.09,13.42,7.84,7.84,0,0,1,1.68,12,8,8,0,0,1,2.31,1.48L3.73,2.89a6,6,0,0,0-.62,7.69,6.63,6.63,0,0,0,.65.77,5.73,5.73,0,0,0,.76.64A6,6,0,0,0,12.87,3.6L10.08,6.39,10,1.45,10,0h6.46Z"></path>
                                      </g>
                                    </g>
                                  </svg>
                                </div>
                              </div>
                            </div>
                          </div>
                        }
                        <div className="print-object-controls"
                          style={{
                          borderColor: (textObj?.active === true && 
                                        (textObj?.text || textObj?.clipArt?.path || textObj?.uploadImage?.path)) 
                                        ? '#27a6ff' 
                                        : 'transparent'
                          }}
                        >
                        {
                          (textObj?.active === true && (textObj?.text || textObj?.clipArt?.path || textObj?.uploadImage?.path)) && 
                            <CanvasDeleteText 
                              deleteTextObject={deleteTextObject} 
                              TextArray={TextArray} 
                              setTextArray={setTextArray} 
                              index={index} 
                              setTextInput={setTextInput} 
                            />
                        }
                        {(!textObj?.text && !textObj?.clipArt?.path && !textObj?.uploadImage?.path) && 
                          <div className="h-[30px] w-[50px]"> &nbsp;</div>
                        }
                          {textObj?.text && (
                            <span 
                              className="cursor-move" 
                              onClick={() =>{ 
                                setActive("2")
                                setMobileActive("2")
                                handleActiveText(TextArray, setTextArray, textObj?.text, setTextInput, index);
                              }}
                              style={{
                                transform: getTransform(textObj),
                                display: "inline-block",
                                whiteSpace: "pre",
                              }}
                            >
                              {textObj.text.split('\n').map((line, i) => (
                                <React.Fragment key={i}>
                                  {i > 0 && <br />}
                                  {line}
                                </React.Fragment>
                              ))}
                            </span>
                          )}
                          {textObj?.clipArt?.path && (
                            <div
                              className={`cursor-move w-[${textObj?.imageSize? textObj?.imageSize : "100px"}] h-[${textObj?.imageSize? textObj?.imageSize : "100px"}]`}
                              onClick={() =>{
                                handleActiveClipArt(TextArray, setTextArray, index);
                                setActive("4")
                                setMobileActive("4")
                              }}
                            >
                              <svg
                                style={{ transform: `rotate(${textObj.rotate}deg)` }}
                                width={textObj?.imageSize? textObj?.imageSize : "100px"}
                                height={textObj?.imageSize}
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <filter
                                  id="colorize"
                                  colorInterpolationFilters="sRGB"
                                >
                                  <feColorMatrix
                                    type="matrix"
                                    values={`0 0 0 0 ${
                                      parseInt(
                                        textObj?.clipArtColor?.code?.slice(1, 3),
                                        16
                                      ) / 255
                                    }
                                    0 0 0 0 ${
                                      parseInt(textObj?.clipArtColor?.code?.slice(3, 5), 16) / 255
                                    }
                                    0 0 0 0 ${
                                      parseInt(textObj?.clipArtColor?.code?.slice(5, 7), 16) / 255
                                    }
                                    0 0 0 1 0`}
                                  />
                                </filter>

                                <filter id="outline">
                                  <feMorphology
                                    in="SourceAlpha"
                                    result="DILATED"
                                    operator="dilate"
                                    radius={textObj?.clipArtOutline?.size}
                                  />
                                  <feFlood
                                    floodColor={textObj?.clipArtOutline?.code}
                                    floodOpacity="1"
                                    result="COLOR"
                                  />
                                  <feComposite
                                    in="COLOR"
                                    in2="DILATED"
                                    operator="in"
                                    result="OUTLINE"
                                  />
                                  <feMerge>
                                    <feMergeNode in="OUTLINE" />
                                    <feMergeNode in="SourceGraphic" />
                                  </feMerge>
                                </filter>

                                <image
                                  href={textObj?.clipArt?.path}
                                  filter="url(#colorize) url(#outline)"
                                  width={textObj?.imageSize}
                                  height={textObj?.imageSize}
                                />
                              </svg>
                            </div>
                          )}
                          {textObj?.uploadImage?.path && (
                              <div
                                className={`cursor-move`}
                                onClick={() =>{
                                  handleActiveUploadArt(TextArray, setTextArray, index);
                                  setActive("3");
                                  setMobileActive("3")
                                }}
                                style={{width : textObj?.UploadSize, height: textObj?.UploadSize }}                           

                              >
                                <img
                                  className={`w-[${textObj?.UploadSize}] h-[${textObj?.UploadSize}]`}
                                  src={textObj?.uploadImage?.path}   
                                  style={{filter: textObj?.uploadImage?.filter ,width : textObj?.UploadSize, height: textObj?.UploadSize }}                           
                                />
                              </div>
                          )}

                          {
                          (textObj?.active === true && (textObj?.text || textObj?.clipArt?.path || textObj?.uploadImage?.path)) && (
                            <CanvasResizeText
                              handleResizeMouseDown={handleResizeMouseDown}
                              index={index}
                              Size={textObj?.fontSize}
                            />
                          )}
                                  
                          {
                            (textObj?.active === true && (textObj?.text || textObj?.clipArt?.path || textObj?.uploadImage?.path)) &&
                              <CanvasRotateText />
                          }
                        
                           {/* Commeted code place */}
                        </div>
                      </div>
                    </div>
                  </Draggable>
                </div>
              )
            }})}
          </div>
        </div>
      ) : (TextArray?.length === 0 || BackShirtArray?.length === 0) && (
          <div className="absolute inset-0 flex items-center justify-center z-[9999] lg:mr-auto mr-[-98px]">
            <div className="flex flex-col gap-[10px] mt-[50px] ml-[15px]">
              <button
                className="flex gap-[8px] uppercase text-poppins text-[12px] text-[#424447] bg-[#fff] px-2 py-[5px] rounded-full items-center hover:border-[1px] hover:border-[#27a6ff] border-[1px] border-[#fff] hover:text-[#27a6ff] cursor-pointer ease-in-out duration-300"
                onMouseEnter={() => setMouseEnter("1")}
                onMouseLeave={() => setMouseEnter(null)}
                onClick={() => { 
                  setActive("2"); setMobileActive("2")
                  addNewObject(setTextArray, initialObject, 'back')
                }}
              >
                <img src={Text} className="w-[14px]" /> Add text
              </button>
              <button 
                className="flex gap-[8px] uppercase text-poppins text-[12px] text-[#424447] bg-[#fff] px-2 py-[5px] rounded-full items-center hover:border-[1px] border-gray-600"
                onMouseEnter={() => setMouseEnter("1")}
                onMouseLeave={() => setMouseEnter(null)}
                onClick={() => { 
                  setActive("3"); setMobileActive("3");
                  addNewObject(setTextArray, initialObject, 'back')
                }}
              >
                <img src={UploadImage} className="w-[14px]" /> Upload Art
              </button>
              <button 
                className="flex gap-[8px] uppercase text-poppins text-[12px] text-[#424447] bg-[#fff] px-2 py-[5px] rounded-full items-center hover:border-[1px] border-gray-600"
                onMouseEnter={() => setMouseEnter("3")}
                onMouseLeave={() => setMouseEnter(null)}
                onClick={() => {
                  setActive("4"); setMobileActive("3");
                  addNewObject(setTextArray, initialObject, 'back')
                }}
              >
                <img src={ClipartIcon} className="w-[14px]" /> Add Clipart
              </button>
            </div>
          </div>
      )}
      <div className="absolute">
        <canvas ref={ArcCanvasRef} id="arc-canvas"></canvas>
      </div>
  </div>
  );
};

export default BackImageShirt;



                          {/* <div
                            className="print-control-edge ui-resizable-handle ui-resizable-e ng-hide"
                            ng-hide="isRotated"
                            title="Change Width"
                          >
                            <div
                              className="svg-icon style-W4rxL"
                              ng-attr-data-icon="{{$ctrl.name}}"
                              draggable="false"
                              name="'ic_resize'"
                              width="13"
                              data-icon="ic_resize"
                              id="style-W4rxL"
                            >
                              <div
                                ng-include="'images/icons/' + $ctrl.name + '.svg'"
                                className=""
                              >
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 16 16"
                                >
                                  <g id="Layer_2" data-name="Layer 2">
                                    <g id="Layer_1-2" data-name="Layer 1">
                                      <polygon points="9 0 11.79 2.79 8.59 6 10 7.41 13.21 4.21 16 7 16 0 9 0"></polygon>
                                      <polygon points="6 8.59 2.79 11.79 0 9 0 16 7 16 4.21 13.21 7.41 10 6 8.59"></polygon>
                                    </g>
                                  </g>
                                </svg>
                              </div>
                            </div>
                          </div> */}
                        
                          {/* <div className="ui-layers-container">
                                  <div className="print-control-corner ui-layers-handle hidden-xs hidden-sm" data-toggle="dropdown" title="Layer Order" aria-expanded="false">
                                      <div className="svg-icon style-K41Eo"  ng-attr-data-icon="{{$ctrl.name}}" draggable="false" name="'layers-half'" width="16" data-icon="layers-half" id="style-K41Eo">
                                          <div ng-include="'images/icons/' + $ctrl.name + '.svg'" className="" ><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-layers-half" viewBox="0 0 16 16">
                                                  <path d="M8.235 1.559a.5.5 0 0 0-.47 0l-7.5 4a.5.5 0 0 0 0 .882L3.188 8 .264 9.559a.5.5 0 0 0 0 .882l7.5 4a.5.5 0 0 0 .47 0l7.5-4a.5.5 0 0 0 0-.882L12.813 8l2.922-1.559a.5.5 0 0 0 0-.882l-7.5-4zM8 9.433 1.562 6 8 2.567 14.438 6 8 9.433z"></path>
                                              </svg></div>
                                      </div>
                                  </div>
                                  <ul className="ui-layers-dropdown dropdown-menu" role="menu">
                                      <li ng-click="PrintArea.printObjectToFront(printObject);"><img src="https://www.rushordertees.com/design/images/layer/bring-to-front.png" alt="bring to front" /><span>Bring to Front</span></li>
                                      <li ng-click="PrintArea.printObjectToBack(printObject);"><img src="https://www.rushordertees.com/design/images/layer/send-to-back.png" alt="send to back" /><span>Send to Back</span></li>
                                      <li ng-click="PrintArea.printObjectMoveUp(printObject);"><img src="https://www.rushordertees.com/design/images/layer/bring-to-front.png" alt="bring to front " /><span>Bring Forward</span></li>
                                      <li ng-click="PrintArea.printObjectMoveDown(printObject);"><img src="https://www.rushordertees.com/design/images/layer/send-backwards.png" alt="send backwards" /><span>Send Backwards</span></li>
                                      <li ng-click="printObjectCopyToOtherSide(printObject);"><img src="https://www.rushordertees.com/design/images/layer/copy-to-other-side.png" alt="copy to other side" /><span>Copy to Other Side</span></li>
                                  </ul>
                              </div> */}