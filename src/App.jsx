import Body from "./components/Body"
import Footer from "./components/Footer"
import Header from "./components/Header"
import { useState } from "react";

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModalState = () =>{
    setIsModalOpen(!isModalOpen);
  };

  return (
    <div className="flex flex-col h-screen">
      <Header toggleModal={toggleModalState}/>
      <Body modalState={isModalOpen} toggleModal={toggleModalState}/>
      <Footer />
    </div>
  )
}

export default App
