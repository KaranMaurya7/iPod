import React from "react";
import "../css/display.css"

export default class Menu extends React.Component {
    // rendering of main menu 
    render() {
        const {menuItems, active} =this.props;
        return (
            <>
                <div className="main-menu">

                    <h2 className="menu-name">Ipod</h2><hr/>
                    {menuItems.map((item, i) =>
                        <h3 className={active === i ? "active" : "non-active"} key={i}>{item}</h3>)}
                </div>
             
                <img className="wallpaper" src="https://images.unsplash.com/photo-1497466640532-8baaa836f3d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8ZXZlbmluZ3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60" alt = "displaypic"/>
                
            </>
        )
    }
}