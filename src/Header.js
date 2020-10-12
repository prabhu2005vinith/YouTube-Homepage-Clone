import React from "react";
import "./Header.css";
import MenuIcon from "@material-ui/icons/Menu";
import VideoCallIcon from "@material-ui/icons/VideoCall";
import AppsIcon from "@material-ui/icons/Apps";
import NotificationsIcon from "@material-ui/icons/Notifications";
import SearchIcon from "@material-ui/icons/Search";
import Avatar from "@material-ui/core/Avatar";

function Header() {
    return (
        <div className="header">
            <div className="left">
                <MenuIcon />
                <img
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/YouTube_Logo.svg/1280px-YouTube_Logo.svg.png"
                    alt="Logo"
                    className="youtube__logo"
                />
            </div>
            <div className="center">
                <input type="text" name="" id="search__box" />
                <button className="search__button">
                    <SearchIcon className="search__icon" />
                </button>
            </div>
            <div className="rigth">
                <VideoCallIcon />
                <AppsIcon />
                <NotificationsIcon />
                <Avatar src="https://yt3.ggpht.com/a-/AOh14Ghehqw1yblIdSmQeRMJsawc6jPpUlQnf3j2kkoO=s108-c-k-c0x00ffffff-no-rj" />
            </div>
        </div>
    );
}

export default Header;
