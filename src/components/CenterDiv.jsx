import PropTypes from 'prop-types';
import { useEffect, useState } from "react";

export default function CenterDiv({ leftDivWidth }) {
  const [width, setWidth] = useState(940);
  const [isResizing, setIsResizing] = useState(false);

  const startResizing = () => {
    setIsResizing(true);
  };
  const endResizing = () => {
    setIsResizing(false);
  };

  useEffect(() => {
    const handleResize = (event) => {
      const newWidth = event.clientX - leftDivWidth;
      setWidth(newWidth);
    };

    const handleMouseMove = (e) => {
      if (isResizing) handleResize(e);
    };
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseup', endResizing);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', endResizing);
    };
  }, [isResizing, leftDivWidth]);

  return (
    <div className="flex flex-row justify-between border-black border-2 w-1/2" style={{ width: `${width}px` }} >
      <p>Text</p>
      <div className="w-3 h-full cursor-ew-resize" onMouseDown={startResizing} onMouseUp={endResizing}>
      </div>
    </div>
  );
}
CenterDiv.propTypes = {
  leftDivWidth: PropTypes.number.isRequired, 
}
