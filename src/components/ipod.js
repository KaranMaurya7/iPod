import React from "react";
import Display from "./display";
import Wheel from "./Wheel";
import "../css/ipod.css";

export default class Ipod extends React.Component {
    render() {
        const { songsImgURL,darkTheme,settings, ipodColorName, updateMenu, backward, forward, playPause, middletap, songList, songsURL, songCurrentIndex, isPlaying, menuItems, active, songsItems, currentMenu, menuButton } = this.props;
             
        return (
            <>
                <div className={darkTheme? "ipod-dark":"ipod-light" }>
                    <Display songsImgURL={songsImgURL} settings={settings} ipodColorName={ipodColorName} songCurrentIndex={songCurrentIndex} songList={songList} songsURL={songsURL} isPlaying={isPlaying} currentMenu={currentMenu} menuItems={menuItems} active={active} songsItems={songsItems} />
                    <Wheel forward={forward} backward={backward} playPause={playPause} active={active} menuButton={menuButton} middletap={middletap} updateMenu={updateMenu} />
                </div>
            </>
        );
    }
}
