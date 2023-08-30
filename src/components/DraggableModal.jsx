import PropTypes from 'prop-types';
import Draggable from "react-draggable";

function DraggableModal({ isOpen, handleClose, children }) {
  if (!isOpen) return null;

  return (
    <Draggable handle=".modal-header">
      <div className='absolute w-1/4 lg:w-1/5 h-1/4 lg:h-1/5 bg-gray-300 border-gray-300 border-2 top-16 left-1/3 rounded-md shadow-[rgba(0,_0,_0,_0.24)_-3px_3px_3px]'>
        <div className="modal-header cursor-grab flex flex-row-reverse h-1/5">
          <span className="cursor-pointer bg-[#f5685f] text-white text-center text-4xl rounded-full w-9 h-9 font-bold shadow-[rgba(0,_0,_0,_0.24)_0px_3px_3px]" onClick={handleClose} onTouchStart={handleClose}>
            &times;
          </span>
        </div>
        <div>
          {children}
        </div>
      </div>
    </Draggable>
  );
}

export default DraggableModal;

DraggableModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
  children: PropTypes.object.isRequired,
};
