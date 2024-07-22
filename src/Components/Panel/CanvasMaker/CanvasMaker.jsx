import React from "react";

export function DrawArcText(text, angle, ArcCanvasRef) {
  const canvas = ArcCanvasRef.current;
  if (!canvas) return;

  const context = canvas.getContext("2d");
  const radius = 150;
  const centerX = canvas.width / 2;
  const centerY = canvas.height / 2;
  const startAngle = (Math.PI / 180) * (angle / 2);

  const charAngle = startAngle / text.length;

  context.clearRect(0, 0, canvas.width, canvas.height);
  context.font = "30px Arial";
  context.textAlign = "center";
  context.textBaseline = "middle";

  for (let i = 0; i < text.length; i++) {
    const char = text[i];
    const charWidth = context.measureText(char).width;
    const charAngleOffset = charWidth / 2 / radius;
    const charAnglePos = charAngle * i - startAngle / 2 + charAngleOffset;

    const xPos = centerX + radius * Math.cos(charAnglePos);
    const yPos = centerY + radius * Math.sin(charAnglePos);

    context.save();
    context.translate(xPos, yPos);
    context.rotate(charAnglePos + Math.PI / 2);
    context.fillText(char, 0, 0);
    context.restore();
  }
}

export function CanvasMask({ color }) {
  return (
    <svg
      viewBox="0 0 1200 1130"
      preserveAspectRatio="none"
      className="product-canvas-mask"
      style={{
        width: "849.629px",
        height: "817.567px",
        marginLeft: "-250px",
        marginRight: "-250px",
      }}
    >
      <defs ng-if="color.useMask">
        <mask id="mask-1" ng-attr-id="{{maskId}}">
          <rect x={0} y={0} width={1200} height={1130} fill="#fff" />
          <image
            x={0}
            y={0}
            width={1200}
            height={1130}
            xlinkHref="https://eztees-catalog.rushordertees.com/productmask/rt2000_f_mask.png"
            ng-href="https://eztees-catalog.rushordertees.com/productmask/rt2000_f_mask.png"
          />
        </mask>
      </defs>
      <rect
        x={0}
        y={0}
        ng-if="color.useMask"
        width={1200}
        height={1130}
        ng-attr-fill="#{{getColorHex()}}"
        ng-attr-mask="url(#{{maskId}})"
        mask="url(#mask-1)"
        fill={color?.maskColor}
      />
    </svg>
  );
}

export function CanvasTexture() {
  return (
    <svg
      viewBox="0 0 1200 1130"
      preserveAspectRatio="none"
      className="product-canvas-texture absolute"
      style={{
        width: "849.629px",
        height: "817.567px",
      }}
    >
      <image
        x="0"
        y="0"
        width="1200"
        height="1130"
        xlinkHref="https://eztees-catalog.rushordertees.com/productmask/rt2000_f_texture.png"
      />
    </svg>
  );
}

export function CanvasMaskBack ({color}) {
  return(
    <svg
      viewBox="0 0 1200 1130"
      preserveAspectRatio="none"
      className="product-canvas-mask"
      ng-style="getCSSStyle();"
      pointerEvents="none"
      draggable="false"
      style={{
        width: "849.629px",
        height: "817.567px",
        marginLeft: "-148px",
        marginRight: "-160px"

      }}
      // {...props}
    >
      <defs ng-if="color.useMask">
        <mask id="mask-1" ng-attr-id="{{maskId}}">
          <rect x={0} y={0} width={1200} height={1130} fill="#fff" />
          <image
            x={0}
            y={0}
            width={1200}
            height={1130}
            xlinkHref="https://eztees-catalog.rushordertees.com/productmask/rt2000_b_mask.png"
            ng-href="https://eztees-catalog.rushordertees.com/productmask/rt2000_b_mask.png"
          />
        </mask>
      </defs>
      <rect
        x={0}
        y={0}
        ng-if="color.useMask"
        width={1200}
        height={1130}
        ng-attr-fill="#{{getColorHex()}}"
        ng-attr-mask="url(#{{maskId}})"
        mask="url(#mask-1)"
        fill={color.maskColor} // Use mask color here
      />
    </svg>
  )
}

export function CanvasTextureBack (){
  return(
    <svg
      viewBox="0 0 1200 1130"
      preserveAspectRatio="none"
      className="product-canvas-texture absolute "
      ng-style="getCSSStyle();"
      pointerEvents="none"
      draggable="false"
      ng-if="color.useMask &amp;&amp; getTextureURL();"
      style={{
        overflow: "hidden",
        width: "849.629px",
        height: "817.567px",
        position: "absolute",
        marginLeft: "10px"
      }}
      // {...props}
    >
      <image
        x={0}
        y={0}
        width={1200}
        height={1130}
        xlinkHref="https://eztees-catalog.rushordertees.com/productmask/rt2000_b_texture.png"
        ng-href="https://eztees-catalog.rushordertees.com/productmask/rt2000_b_texture.png"
      />
    </svg>
  )
}

export function CanvasDeleteText({
  deleteTextObject,
  TextArray,
  setTextArray,
  index,
  setTextInput,
}) {
  return (
    <div
      className="print-control-corner ui-removable-handle"
      title="Delete"
      onClick={() =>
        deleteTextObject(TextArray, setTextArray, index, setTextInput)
      }
    >
      <div
        className="svg-icon style-BAHO3"
        ng-attr-data-icon="{{$ctrl.name}}"
        draggable="false"
        name="'trash'"
        width="14"
        data-icon="trash"
        id="style-BAHO3"
      >
        <div ng-include="'images/icons/' + $ctrl.name + '.svg'" className="">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-trash"
            viewBox="0 0 16 16"
          >
            <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"></path>
            <path
              fillRule="evenodd"
              d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"
            ></path>
          </svg>
        </div>
      </div>
    </div>
  );
}

export function CanvasResizeText({ handleResizeMouseDown, index, Size }) {
  return (
    <>
      <div
        className="print-control-corner ui-resizable-handle ui-resizable-se"
        title="Resize"
        onMouseDown={(e) => handleResizeMouseDown(e, index, Size )}
      >
        <div
          className="svg-icon style-wH8QB"
          ng-attr-data-icon="{{$ctrl.name}}"
          draggable="false"
          name="'ic_resize'"
          width="13"
          data-icon="ic_resize"
          id="style-wH8QB"
        >
          <div ng-include="'images/icons/' + $ctrl.name + '.svg'">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
              <g id="Layer_2" data-name="Layer 2">
                <g id="Layer_1-2" data-name="Layer 1">
                  <polygon points="9 0 11.79 2.79 8.59 6 10 7.41 13.21 4.21 16 7 16 0 9 0"></polygon>
                  <polygon points="6 8.59 2.79 11.79 0 9 0 16 7 16 4.21 13.21 7.41 10 6 8.59"></polygon>
                </g>
              </g>
            </svg>
          </div>
        </div>
      </div>
      {/* <div
        className="print-control-corner ui-resizable-handle ui-resizable-sw"
        title="Edit"
        ng-click="PrintObject.set(printObject);"
      >
        edit
      </div> */}
    </>
  );
}

export function CanvasRotateText() {
  return(
    <div
      className="print-control-edge ui-resizable-handle ui-resizable-n ng-hide"
      ng-hide="isRotated"
      title="Change Height"
    >
      <div
        className="svg-icon style-QCrIS"
        ng-attr-data-icon="{{$ctrl.name}}"
        draggable="false"
        name="'ic_resize'"
        width="13"
        data-icon="ic_resize"
        id="style-QCrIS"
      >
        <div ng-include="'images/icons/' + $ctrl.name + '.svg'">
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
    </div>
  )
}