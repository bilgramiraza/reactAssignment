import PropTypes from 'prop-types';
import Draggable from "react-draggable";

function DraggableModal({ isOpen, handleClose, children }) {
  if (!isOpen) return null;

  return (
    <Draggable handle=".modal-header">
      <div className='absolute w-1/5 h-1/5 bg-gray-300 border-black border-2'>
        <div className="modal-header cursor-grab">
          <span className="cursor-pointer text-end bg-pink-900 text-white rounded-full" onClick={handleClose}>
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
