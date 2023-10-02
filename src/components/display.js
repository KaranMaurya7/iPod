import React from "react";
import "../css/display.css"
import Menu from "./Menu";
import Songs from "./songs";
import AudioPlayer from "./AudioPlayer";
import SongList from "./SongLIst";
import Settings from "./settings";


export default class Display extends React.Component {
    // rendering of all componenets is controolled here

    render() {

        const { songsImgURL,ipodColorName, settings, songList, songCurrentIndex, songsURL, isPlaying, menuItems, currentMenu, active, songsItems } = this.props;
        let index = (currentMenu-7 ) % 5;
        return (
            <>
                <div className="display-container">

                    <div className="display">
                        {currentMenu === -1 && <Menu menuItems={menuItems} active={active} />}
                        {currentMenu === 1 && <Songs currentMenu={currentMenu} songsURL={songsURL} songsItems={songsItems} active={active} />}
                        {currentMenu === 2 && <div className="main-menu-song"> <h1>Games </h1> <hr/><p> Games are not availabale right now it comes with upgraded version</p></div>}
                        {currentMenu === 3 && <Settings settings={settings} active={active} currentMenu={currentMenu} />}
                        
                        {currentMenu === 4 && <SongList active={active} songList={songList} currentMenu={currentMenu} />}
                        
                        {currentMenu === 5 && <><div className="main-menu-song"><h1>Artists </h1><hr></hr><p>Artists are not available</p></div></>}
                        
                        {currentMenu === 6 && <><div className="main-menu-song"><h1>Albums </h1><hr></hr><p>Albums are not available</p></div></>}
                        
                        {currentMenu === 0  && <AudioPlayer songname={songList[songCurrentIndex]} songImg={songsImgURL[songCurrentIndex]} isPlaying={isPlaying} src={songsURL[songCurrentIndex]} onPlayPause={(isPlaying) => console.log(isPlaying ? 'Playing' : 'Paused')} />}
                        {(currentMenu >= 7 && currentMenu < 12) && <AudioPlayer songname={songList[index]} songImg={songsImgURL[index]} isPlaying={isPlaying} src={songsURL[index]} onPlayPause={(isPlaying) => console.log(isPlaying ? 'Playing' : 'Paused')} />}
                        {currentMenu === 12 && <><div className="main-menu"><h2 className="menu-name">Settings</h2><hr />{ipodColorName.map((item, i) =>
                            <h3 className={active === i ? "active" : "non-active"} key={i}>{item}</h3>)}</div></>}

                    </div>
                </div>

            </>
        )
    }
}