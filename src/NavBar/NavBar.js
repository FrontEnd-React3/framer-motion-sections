import MobileNavigation from "./MobileNavigation";
import Navigation from "./Navigation";
import "./NavBar.css";

const NavBar = () => {
  return (
    <div className="NavBar">
      <Navigation />
      <MobileNavigation />
      <div></div>
    </div>
  );
};

export default NavBar;
