import React from "react";
import "../css/display.css";

export default class Settings extends React.Component{
    // rendering of main menu 

    // Note: Theme will change on clicking the body theme
    render(){
        const{active, settings} =this.props;
        return(
            <div className="main-menu-song">

            <h2 className="menu-name-song">Settings</h2><hr />

            {settings.map((item, i) =>
                <h3 className={active === i ? "active" : "non-active"} key={i}>{item}</h3>
                )}
        </div>
        )
    }
}
