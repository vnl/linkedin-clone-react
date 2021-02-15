import React from "react";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import HeaderOption from "./HeaderOption";
import HomeIcon from "@material-ui/icons/Home";
import SupervisorAccount from "@material-ui/icons/SupervisorAccount"; 
import BusinessCenterIcon from "@material-ui/icons/BusinessCenter";
import ChatIcon from '@material-ui/icons/Chat';
import NotificationsIcon from '@material-ui/icons/Notifications';
import Avatar from '@material-ui/core/Avatar';

function Header() {
    return (
        <div className= 'header'>
            
            <div class="header_left">
                <img src="http://static.brookes.ac.uk/about/identity/logos/brookes_logo_charcoal_cmyk.jpg" alt=""/>

                <div class="header_search">
                    <SearchIcon />
                    <input type="text"/>
                </div>

                    
            </div>
            <div class="header_right">
                
                    <HeaderOption Icon={HomeIcon} title="Home"/>
                    <HeaderOption Icon={SupervisorAccount} title="My Network"/> 
                    <HeaderOption Icon={BusinessCenterIcon} title ="Jobs"/>
                    <HeaderOption Icon={ChatIcon} title="Messaging"/>
                    <HeaderOption Icon={NotificationsIcon} title ="Notifications"/>
                 
            </div>

            <div class="header_corner">
            <HeaderOption Icon={Avatar} title ="Add Photo"/>

            </div>
        </div>
    )
}

export default Header;
