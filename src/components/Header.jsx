import PropTypes from 'prop-types';

export default function Header({ toggleModal }) {
  return (
    <header className="bg-[#003442] h-1/6 mb-3 ">
      <div className="h-1/2">
      </div>
      <div className="bg-white h-1/2 p-2">
        <button onClick={toggleModal} className="ms-4 text-xl p-2 bg-gray-300 shadow-[rgba(0,_0,_0,_0.48)_-1px_3px_2px]">Save</button>
      </div>
    </header>
  );
}

Header.propTypes = {
  toggleModal: PropTypes.func.isRequired,
}
