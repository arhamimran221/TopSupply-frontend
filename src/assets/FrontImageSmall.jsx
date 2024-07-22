import React from 'react';

const FrontImageShirt = (props) => {
  const { color } = props;

  const CanvasMask = () => (
    <svg viewBox="0 0 1200 1130" preserveAspectRatio="none" className="product-canvas-mask" style={{ width: '69.629px', height: '67.567px', marginTop: '0px',  marginLeft:'-1px'}}>
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
        fill={color.maskColor} // Use mask color here
      />
    </svg>
  );

  const CanvasTexture = () => (
    <svg viewBox="0 0 1200 1130" preserveAspectRatio="none" className="product-canvas-texture absolute" style={{ overflow: 'hidden', width: '67.629px', height: '67.567px', top: '0px', left: '' }}>
      <image x="0" y="0" width="1200" height="1130" xlinkHref="https://eztees-catalog.rushordertees.com/productmask/rt2000_f_texture.png" />
    </svg>
  );

  return (
    <div className='relative'>
      <CanvasMask />
      <CanvasTexture />
      <CanvasTexture />
    </div>
  );
};

export default FrontImageShirt;
