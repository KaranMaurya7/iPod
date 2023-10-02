import React from "react";
import "../css/display.css"

export default class Songs extends React.Component {

    render() {
        const { active, songsItems } = this.props;
        // rendering of music menu on display
        return (
            <>
                <div className="main-menu-song">

                    <h2 className="menu-name-song">Music</h2><hr/>
                                     
                    {songsItems.map((item, i) =>
                    <h3 className={active === i ? "active" : "non-active"} key={i}>{item}</h3>)}
                </div>
            </>

        );
    }
}