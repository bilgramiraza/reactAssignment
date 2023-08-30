import PropTypes from 'prop-types';
import { useEffect, useRef, useState } from "react";

export default function CenterDiv({ leftDivRef}) {
  const [leftDivWidth, setLeftDivWidth] = useState(0);
  const [width, setWidth] = useState(0);
  const [isResizing, setIsResizing] = useState(false);

  const centerDivRef = useRef(null);

  useEffect(()=>{
    if(leftDivRef.current)  setLeftDivWidth(leftDivRef.current.getBoundingClientRect().width);
    if(centerDivRef.current)  setWidth(centerDivRef.current.getBoundingClientRect().width);
  },[leftDivRef]);

  const startResizing = () => {
    setIsResizing(true);
  };
  const endResizing = () => {
    setIsResizing(false);
  };

  useEffect(() => {
    const handleResize = (clientX) => {
      const newWidth = clientX - leftDivWidth;
      setWidth(newWidth);
    };

    const handleMouseMove = (e) => {
      if (isResizing){
        if(e.type === 'mousemove')  handleResize(e.clientX);
        else if(e.type === 'touchmove')  handleResize(e.touches[0].clientX);
      }
    };
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('touchmove', handleMouseMove, { passive:false });
    window.addEventListener('mouseup', endResizing);
    window.addEventListener('touchend', endResizing);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('touchmove', handleMouseMove);
      window.removeEventListener('mouseup', endResizing);
      window.removeEventListener('touchend', endResizing);
    };
  }, [isResizing, leftDivWidth]);

  return (
    <div className="flex flex-row justify-between border-black border-2 w-1/3 lg:w-1/2" style={{width:width?`${width}px`:''}} ref={centerDivRef}>
      <p>Text</p>
      <div className="w-3 h-full cursor-ew-resize" onMouseDown={startResizing} onMouseUp={endResizing} onTouchStart={startResizing} onTouchEnd={endResizing}>
      </div>
    </div>
  );
}

CenterDiv.propTypes = {
  leftDivRef: PropTypes.object.isRequired, 
}
