import { useEffect } from "react";
import "./App.css";
import Demo from "./Components/Demo";
import SampleSpace from "./Components/SampleSpace";
import Unkam from "./Components/Unkam";
import Another from "./Components/Another";

function App() {
  useEffect(() => {
    document.title = "SampleUseofState"; // Set the desired title
  }, []);
  return (
    <div className="App vh-100">
      <Demo />
      <SampleSpace />
      <Unkam />
      <Another />
    </div>
  );
}

export default App;
