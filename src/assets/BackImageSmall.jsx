import React from "react";

const BackImageSmall = (props) => {
  const { color } = props;

  const CanvasMask = () => (
    <svg
    viewBox="0 0 1200 1130"
    preserveAspectRatio="none"
    className="product-canvas-mask"
    ng-style="getCSSStyle();"
    pointerEvents="none"
    draggable="false"
    style={{ width: '69.629px', height: '67.567px', marginTop: '0px',  marginLeft:'-1px' }}
    {...props}
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
  );

  const CanvasTexture = () => (
    <svg
    viewBox="0 0 1200 1130"
    preserveAspectRatio="none"
    className="product-canvas-texture absolute top-[0px]"
    ng-style="getCSSStyle();"
    pointerEvents="none"
    draggable="false"
    ng-if="color.useMask &amp;&amp; getTextureURL();"
    style={{ overflow: 'hidden', width: '69.629px', height: '67.567px', top: '0px', left: '' ,position:'absolute'}}
    {...props}
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
  );

  return (
    <div className="relative">
      <CanvasMask />
      <CanvasTexture className="mt-[-900px]"/>
      <CanvasTexture />
    </div>
  );
};

export default BackImageSmall;
