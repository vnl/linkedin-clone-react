import React from "react";
import "./HeaderOption.css";

function HeaderOption({ Avatar, Icon, title }) {
    return (
        <div className="headerOption">
            {Icon && <Icon className= "headerOption_icon" />}
           {/* {Avatar && (
               <avatar className ="headerOption__icon" src ={Avatar}/>
           )}
                         */}


            <h3 className="headerOption_title">{title}</h3>
        </div>
    );
}

export default HeaderOption;
