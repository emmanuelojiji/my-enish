import { useState } from "react";
import "./App.scss";
import NavBar from "./components/NavBar";
import CalorieCounter from "./pages/CalorieCounter";

function App() {
  const [isNavBarVisible, setIsNavBarVisible] = useState(true);
  return (
    <div className="App">
      <NavBar
        isNavBarVisible={isNavBarVisible}
        setIsNavBarVisible={setIsNavBarVisible}
      />
      <CalorieCounter
        isNavBarVisible={isNavBarVisible}
        setIsNavBarVisible={setIsNavBarVisible}
      />
    </div>
  );
}

export default App;
