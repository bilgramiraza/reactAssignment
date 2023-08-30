import PropTypes from 'prop-types';
import DraggableModal from './DraggableModal';
import CenterDiv from './CenterDiv';
import LeftDiv from './LeftDiv';
import RightDiv from './RightDiv';
import { useState } from 'react';

export default function Body({modalState, toggleModal}){
  const [leftDivWidth, setLeftDivWidth] = useState(470);

  return (
    <main className="flex flex-row justify-start h-5/6">
      <LeftDiv leftDivWidth={leftDivWidth} setLeftDivWidth={setLeftDivWidth}/>
      <CenterDiv leftDivWidth={leftDivWidth}/>
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
