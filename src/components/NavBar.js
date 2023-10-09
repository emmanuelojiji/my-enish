import "./NavBar.scss";

const NavBar = ({ isNavBarVisible, view, setView }) => {
  const changeView = (view) => {
    setView(view);
  };

  return (
    <div
      className={`nav-bar ${isNavBarVisible ? "nav-visible" : "nav-hidden"}`}
    >
      <div className={view === 1 && "active"} onClick={() => setView(1)}></div>
      <div className={view === 2 && "active"} onClick={() => setView(2)}></div>
      <div className={view === 3 && "active"} onClick={() => setView(3)}></div>
    </div>
  );
};

export default NavBar;
