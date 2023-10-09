import { useState } from "react";
import "./App.scss";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Profile from "./components/Profile";
import CalorieCounter from "./pages/CalorieCounter";

function App() {
  const [view, setView] = useState(1);

  const [isNavBarVisible, setIsNavBarVisible] = useState(true);
  return (
    <div className="App">
      {view === 1 && <Home />}
      
      <NavBar
        isNavBarVisible={isNavBarVisible}
        setIsNavBarVisible={setIsNavBarVisible}
        setView={setView}
      />
      {view === 2 && (
        <CalorieCounter
          isNavBarVisible={isNavBarVisible}
          setIsNavBarVisible={setIsNavBarVisible}
        />
      )}

      {view === 3 && <Profile />}
    </div>
  );
}

export default App;
