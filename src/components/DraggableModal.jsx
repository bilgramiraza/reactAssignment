import PropTypes from 'prop-types';
import Draggable from "react-draggable";

function DraggableModal({ isOpen, handleClose, children }) {
  if (!isOpen) return null;

  return (
    <Draggable handle=".modal-header">
      <div className='absolute w-1/4 lg:w-1/5 h-1/4 lg:h-1/5 bg-gray-300 border-black border-2 top-16 left-1/3'>
        <div className="modal-header cursor-grab flex flex-row-reverse h-1/5">
          <span className="cursor-pointer bg-[#f5685f] text-white text-center text-4xl rounded-full w-9 h-9 font-bold" onClick={handleClose}>
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
