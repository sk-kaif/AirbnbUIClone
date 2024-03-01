import "./header.css";
import logo from "../../assets/logos/long-logo.png";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import LanguageIcon from "@mui/icons-material/Language";
import BasicMenu from "./ProfileMenu";
import SimpleBottomNavigation from "./BottomNav";

const Header = () => {
  return (
    <nav className="navbar b">
      <img src={logo} className="navbar-logo" />

      <div className="search-bar">
        <div className="search-bar-text">Anywhere</div>
        <div className="search-bar-text">Any Week</div>
        <div className="search-bar-text2">Add guests</div>
        <div className="search-icon-div">
          <SearchRoundedIcon className="search-icon" />
        </div>
      </div>

      <div className="profileContainer">
        <div className="airbnb-your-home">Airbnb your home</div>

        <div className="airbnb-your-home">
          <LanguageIcon sx={{ fontSize: "1.3rem" }} />
        </div>

        <div className="profileDiv">
          <BasicMenu />
        </div>

      </div>

      <SimpleBottomNavigation />
    </nav>
  );
};

export default Header;
