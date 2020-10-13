import React from "react";
import "./Sidebar.css";
import SidebarRow from "./SidebarRow";
import HomeIcon from "@material-ui/icons/Home";
import WhatshotIcon from "@material-ui/icons/Whatshot";
import SubscriptionsIcon from "@material-ui/icons/Subscriptions";
import VideoLibraryIcon from "@material-ui/icons/VideoLibrary";
import HistoryIcon from "@material-ui/icons/History";
import MovieIcon from "@material-ui/icons/Movie";
import BuildIcon from "@material-ui/icons/Build";

function Sidebar() {
    return (
        <div className="sidebar">
            <SidebarRow selected Icon={HomeIcon} title="Home" />
            <SidebarRow Icon={WhatshotIcon} title="Trending" />
            <SidebarRow Icon={SubscriptionsIcon} title="Subscriptions" />
            <hr />
            <SidebarRow Icon={VideoLibraryIcon} title="Library" />
            <SidebarRow Icon={HistoryIcon} title="History" />
            <SidebarRow Icon={MovieIcon} title="Watch later" />
            <SidebarRow Icon={BuildIcon} title="Option" />
            <SidebarRow Icon={BuildIcon} title="Option" />
            <SidebarRow Icon={BuildIcon} title="Option" />
            <SidebarRow Icon={BuildIcon} title="Option" />
            <SidebarRow Icon={BuildIcon} title="Option" />
            <SidebarRow Icon={BuildIcon} title="Option" />
            <SidebarRow Icon={BuildIcon} title="Option" />
            <SidebarRow Icon={BuildIcon} title="Option" />
            <SidebarRow Icon={BuildIcon} title="Option" />
            <SidebarRow Icon={BuildIcon} title="Option" />
            <SidebarRow Icon={BuildIcon} title="Option" />
            <SidebarRow Icon={BuildIcon} title="Option" />
            <SidebarRow Icon={BuildIcon} title="Option" />
            <SidebarRow Icon={BuildIcon} title="Option" />
            <SidebarRow Icon={BuildIcon} title="Option" />
            <SidebarRow Icon={BuildIcon} title="Option" />
            <SidebarRow Icon={BuildIcon} title="Option" />
            <SidebarRow Icon={BuildIcon} title="Option" />
            <SidebarRow Icon={BuildIcon} title="Option" />
            <SidebarRow Icon={BuildIcon} title="Option" />
            <SidebarRow Icon={BuildIcon} title="Option" />
            <SidebarRow Icon={BuildIcon} title="Option" />
            <SidebarRow Icon={BuildIcon} title="Option" />
            <SidebarRow Icon={BuildIcon} title="Option" />
            <SidebarRow Icon={BuildIcon} title="Option" />
            <SidebarRow Icon={BuildIcon} title="Option" />
            <SidebarRow Icon={BuildIcon} title="Option" />
            <SidebarRow Icon={BuildIcon} title="Option" />
            <SidebarRow Icon={BuildIcon} title="Option" />
            <SidebarRow Icon={BuildIcon} title="Option" />
        </div>
    );
}

export default Sidebar;
