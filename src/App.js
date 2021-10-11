import { BrowserRouter } from "react-router-dom";
import Calculator from "./componenet/Calculator";
import Routers from "./componenet/Routers";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routers />
      </BrowserRouter>
      <Calculator />
    </div>
  );
}

export default App;
