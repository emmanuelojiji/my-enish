import "./TabNav.scss";

const TabNav = ({ translateAmount, setTranslateAmount }) => {
  const changeTab = (number) => {
    setTranslateAmount(number);
    console.log(translateAmount);
  };

  return (
    <div className="tab-nav">
      <span
        className={translateAmount === 0 && "active"}
        onClick={() => changeTab(0)}
      >
        STARTERS
      </span>
      <span
        className={translateAmount === -100 && "active"}
        onClick={() => changeTab(-100)}
      >
        MAIN
      </span>
      <span
        className={translateAmount === -200 && "active"}
        onClick={() => changeTab(-200)}
      >
        SIDES
      </span>
      <span
        className={translateAmount === -300 && "active"}
        onClick={() => changeTab(-300)}
      >
        DRINKS
      </span>
    </div>
  );
};

export default TabNav;
