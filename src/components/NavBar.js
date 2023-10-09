import "./NavBar.scss";

const NavBar = ({ isNavBarVisible, setView }) => {
  const changeView = (view) => {
    setView(view);
  };

  return (
    <div
      className={`nav-bar ${isNavBarVisible ? "nav-visible" : "nav-hidden"}`}
    >
      <div onClick={() => setView(1)}></div>
      <div onClick={() => setView(2)}></div>
      <div onClick={() => setView(3)}></div>
    </div>
  );
};

export default NavBar;
