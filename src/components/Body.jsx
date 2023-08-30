import PropTypes from 'prop-types';
import DraggableModal from './DraggableModal';

export default function Body({modalState, toggleModal}){
  return (
    <main className="flex flex-row h-5/6">
      <div className="ms-3 ps-3 gird grid-cols-3 gap-3 w-1/4 overflow-scroll border-black border-2">
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
      <div className="border-black border-2 w-1/2">
      </div>
      <div className="border-black border-2 w-1/4">
      </div>
      <DraggableModal isOpen={modalState} handleClose={toggleModal}>
        <p>Test</p>
      </DraggableModal>
    </main>
  );
}

Body.propTypes = {
  modalState: PropTypes.bool.isRequired, 
  toggleModal: PropTypes.func.isRequired, 
}
