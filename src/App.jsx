import Navbar from "./components/Navbar";
import "./App.css";
import ContainerChat from "./components/ContainerChat";
import InputChat from "./components/InputChat";

function App() {
  return (
    <>
      <div className="app">
        <div className="w-[60%] h-[80%] bg-white shadow-lg mt-10 rounded-md">
          <Navbar />
          <ContainerChat />
          <InputChat />
        </div>
      </div>
    </>
  );
}

export default App;
