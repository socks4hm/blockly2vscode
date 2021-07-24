import React, { useRef, useState } from 'react';
import { usePosition } from '../../common/utils';
// import PropTypes from 'prop-types';

export default function HoverComponents({ component, hoverComponent, transition }) {
  const [isHover, setIsHover] = useState(false);
  const originalRef = useRef(null);
  const position = usePosition(originalRef);
  console.log({ position });

  return (
    <div
      ref={originalRef}
      className="common-hover-components"
      onMouseEnter={e => setIsHover(true)}
      onMouseLeave={e => setIsHover(false)}
    >
      {component}
      {/* {isHover && ( */}
      <div
        id="hover"
        style={{
          mouseEvents: isHover ? 'all' : 'none',
          // display: isHover ? 'block' : 'none',
          opacity: isHover ? 1 : 0,
          position: 'fixed',
          left: position.left,
          width: position.width,
          top: position.top,
          height: position.height,
          transition: "opacity " + (transition || '0.5s'),
        }}
      >
        <div className="absolute widthInherit heightInherit">{hoverComponent}</div>
      </div>

      {/* <div className="relative fill">
        <div className="absolute fill">{component}</div>
        {isHover && <div className="absolute fill">{hoverComponent}</div>}
      </div> */}
    </div>
  );
}

HoverComponents.propTypes = {};
HoverComponents.defaultProps = {};
