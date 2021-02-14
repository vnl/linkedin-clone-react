import React from 'react'
import './Header.css'
import SearchIcon from '@material-ui/icons/Search';
import HeaderOption from './HeaderOption';
import HomeIcon from '@material-ui/icons/Home';
import SupervisorAccount from '@material-ui/icons/SupervisorAccount'; 

function Header() {
    return (
        <div className= 'header'>
            
            <div class="header_left">
                <img src="https://www.flaticon.com/svg/static/icons/svg/174/174857.svg" alt=""/>

                <div class="header_search">
                    <SearchIcon />
                    <input type="text"/>
                </div>

                    
            </div>
            <div class="header_right">

                
                    <HeaderOption Icon={HomeIcon} title='Home'/>
                    <HeaderOption Icon={SupervisorAccount} title='My Network'/>
                

            </div>
        </div>
    )
}

export default Header;
