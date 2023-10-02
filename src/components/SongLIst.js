import React from "react";

export default class SongList extends React.Component {
    // rendring of song list 
    render() {
        const { songList, active } = this.props;
        return (
            <div className="main-menu-song">

                <h2 className="menu-name-song">Songs</h2><hr />

                {songList.map((item, i) =>
                    <h3 className={active === i ? "active" : "non-active"} key={i}>{item}</h3>
                    )}
            </div>
        )
    }
}