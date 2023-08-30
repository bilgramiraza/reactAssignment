import PropTypes from 'prop-types';
import { useEffect, useState } from "react";

export default function LeftDiv({ leftDivWidth, setLeftDivWidth }) {
  const [isResizing, setIsResizing] = useState(false);

  const startResizing = () =>{
    setIsResizing(true);
  };
  const endResizing = () =>{
    setIsResizing(false);
  };


  useEffect(()=>{
  const handleResize = (event) => {
    const newWidth = event.clientX;
    setLeftDivWidth(newWidth);
  };
    const handleMouseMove = (e) =>{
      if(isResizing) handleResize(e);
    };
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseup', endResizing);

    return ()=>{
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', endResizing);
    };
  },[isResizing, setLeftDivWidth]);

  return (
    <div className='ms-3 ps-3 w-1/4 border-black border-2 flex flex-row' style={{width:`${leftDivWidth}px`}}>
      <div className="gird grid-cols-3 gap-3 overflow-scroll ">
        <div className="inline-block m-2 bg-gray-300 w-[100px] h-[100px]">
        </div>
        <div className="inline-block m-2 bg-gray-300 w-[100px] h-[100px]">
        </div>
        <div className="inline-block m-2 bg-gray-300 w-[100px] h-[100px]">
        </div>
        <div className="inline-block m-2 bg-gray-300 w-[100px] h-[100px]">
        </div>
        <div className="inline-block m-2 bg-gray-300 w-[100px] h-[100px]">
        </div>
      </div>
      <div className="w-3 cursor-ew-resize" onMouseDown={startResizing} onMouseUp={endResizing}>
      </div>
    </div>
  );
}

LeftDiv.propTypes = {
  leftDivWidth: PropTypes.number.isRequired, 
  setLeftDivWidth: PropTypes.func.isRequired, 
}
