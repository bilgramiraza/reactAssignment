import PropTypes from 'prop-types';

export default function Header({ toggleModal }){
  return (
    <header className="bg-gray-900 h-1/6">
    <div className="h-1/2">
    </div>
    <div className="bg-white h-1/2 p-2">
      <button onClick={toggleModal} className="ms-4 text-xl p-2 bg-gray-300">Save</button>
    </div>
    </header>
  );
}

Header.propTypes = {
  toggleModal: PropTypes.func.isRequired, 
}
