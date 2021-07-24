import React, { useRef, useState } from 'react';
import { usePosition } from '../../common/utils';
// import PropTypes from 'prop-types';

export default function HoverComponents({ component, hoverComponent,show,  transition }) {
  const [isHover, setIsHover] = useState(false);
  const originalRef = useRef(null);
  const position = usePosition(originalRef);
  console.log({ position });

  return (
    <div className="common-hover-components">
      {React.cloneElement(component, {
        ref: originalRef,
        onMouseEnter: e => setIsHover(true),
        onMouseLeave: e => setIsHover(false),
      })}
      <div
        id="hover"
        onMouseEnter={e => setIsHover(true)}
        onMouseLeave= {e => setIsHover(false)}
        style={{
          mouseEvents: isHover ? 'all' : 'none',
          opacity: isHover ? 1 : 0,
          position: 'fixed',
          left: position.left,
          width: position.width,
          top: position.top,
          height: position.height,
          transition: 'opacity ' + (transition || '0.5s'),
        }}
      >
        <div className="absolute widthInherit heightInherit">{hoverComponent}</div>
      </div>
    </div>
  );
}

HoverComponents.propTypes = {};
HoverComponents.defaultProps = {};
