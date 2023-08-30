import PropTypes from 'prop-types';
import DraggableModal from './DraggableModal';
import CenterDiv from './CenterDiv';
import LeftDiv from './LeftDiv';
import RightDiv from './RightDiv';
import { useRef } from 'react';

export default function Body({modalState, toggleModal}){
  const leftDivRef = useRef(null);

  return (
    <main className="flex flex-row justify-start bg-white h-5/6">
      <LeftDiv leftDivRef={leftDivRef}/>
      <CenterDiv leftDivRef={leftDivRef}/>
      <RightDiv />
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
