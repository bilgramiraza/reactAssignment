import PropTypes from 'prop-types';
import { useEffect,  useState } from "react";

export default function LeftDiv({ leftDivRef }) {
  const [width, setWidth] = useState(0);
  const [isResizing, setIsResizing] = useState(false);

  useEffect(()=>{
    if(leftDivRef.current){ console.log(leftDivRef.current.getBoundingClientRect().width);
      setWidth(leftDivRef.current.getBoundingClientRect().width);
    }
  },[setWidth, leftDivRef]);

  const startResizing = () =>{
    setIsResizing(true);
  };
  const endResizing = () =>{
    setIsResizing(false);
  };

  useEffect(()=>{
  const handleResize = (clientX) => {
    setWidth(clientX);
  };
    const handleMouseMove = (e) =>{
      if(isResizing){
        if(e.type === 'mousemove')  handleResize(e.clientX);
        else if(e.type === 'touchmove')  handleResize(e.touches[0].clientX);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('touchmove', handleMouseMove, { passive:false });
    window.addEventListener('mouseup', endResizing);
    window.addEventListener('touchend', endResizing);

    return ()=>{
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('touchmove', handleMouseMove);
      window.removeEventListener('mouseup', endResizing);
      window.removeEventListener('touchend', endResizing);
    };
  },[isResizing, setWidth]);

  return (
    <div className='ms-3 ps-3 w-1/3 lg:w-1/4 border-black border-2 flex flex-row' style={{width:width?`${width}px`:''}} ref={leftDivRef}>
      <div className="gird grid-cols-3 gap-3 overflow-scroll ">
        {Array.from({length:5}).map((_,index)=>(<div key={index} className="inline-block m-2 bg-gray-300 w-[50px] xl:w-[100px] h-[50px] xl:h-[100px]"></div>))}
      </div>
      <div className="w-3 cursor-ew-resize" onMouseDown={startResizing} onMouseUp={endResizing} onTouchStart={startResizing} onTouchEnd={endResizing}>
      </div>
    </div>
  );
}

LeftDiv.propTypes = {
  leftDivRef: PropTypes.object.isRequired, 
}
