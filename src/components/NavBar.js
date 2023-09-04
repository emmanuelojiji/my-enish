import "./NavBar.scss";

const NavBar = ({ isNavBarVisible }) => {
  return (
    <div
      className={`nav-bar ${isNavBarVisible ? "nav-visible" : "nav-hidden"}`}
    >
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
};

export default NavBar;
