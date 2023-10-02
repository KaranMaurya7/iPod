import React from "react";
import "./css/ipod.css"

// Import songs
import song1 from "./Songs/FIneLines.mp3"
import song2 from "./Songs/Dildarian.mp3"
import song3 from "./Songs/JindeMeriye.mp3"
import song4 from "./Songs/Lily.mp3"
import song5 from "./Songs/lovely.mp3"
import Ipod from "./components/ipod";

// Import song covers
import songImg1 from "./songImg/FineLines.jpg"
import songImg2 from "./songImg/Dildarian.jpg"
import songImg3 from "./songImg/jindeymeriye.jpg"
import songImg4 from "./songImg/lily.jpg"
import songImg5 from "./songImg/lovey.jpg"



class App extends React.Component {
 
  //Note:  when press the next button playing of song stop so click the play button 
  //       body theme will be change on pressing the middle button on body theme
  constructor() {
    super();
    this.state = {
      active: 0,
      isPlaying: false,
      menuItems: ["Playing", "Music", "Games", "Settings"],
      songsItems: ["All Songs", "Artists", "Albums"],

      currentMenu: -1,
      lengthMenuKey: { "-1": 4, 0: 1, 1: 3, 2: 0, 3: 2, 4: 5, 12: 4 },
      mapping: { "-1": [0, 1, 2, 3],0:0, 1: [4, 5, 6], 3: [12, 13], 4: [7, 8, 9, 10, 11], 12: [14, 15, 16, 17] },
      prevMenu: [],

      songsURL: [song1, song2, song3, song4, song5],
      songsImgURL: [songImg1, songImg2, songImg3, songImg4, songImg5],
      songList: ["Fine Lines", "Dildarian", "Jinde Meriye", "Lily", "Lovely"],
      menuStack: [],
      songCurrentIndex: 0,

      settings: ['Body Theme'],
      darkTheme: false
    }

  }

  // FUNCTION FOR : UPDATE ACTIVE MENU WHILE ROTATING ON THE TRACK-WHEEL
  updateMenu = (prev, current) => {

    let num = this.state.active;
    let mod = this.state.lengthMenuKey[this.state.currentMenu];
    if (prev === current) {
      return;
    } else if (prev < current) {
      num = (num + 1) % mod;
      this.setState({
        active: num
      })

    } else {
      num = (num - 1) % mod;
      if (num < 0) {
        return
      }
      this.setState({
        active: num
      })
    }
  }



 // FUNCTION FOR : Functionality for middlebutton
  middletap = () => {
    if(this.state.currentMenu === 2 || this.state.currentMenu === 5 || this.state.currentMenu === 6 || this.state.currentMenu === "undefined" || this.state.currentMenu === 0 || (this.state.currentMenu >=7 && this.state.currentMenu < 12)){return;}

    let newPrev = [...this.state.prevMenu]
    newPrev.push(this.state.currentMenu);
    let map = this.state.mapping[this.state.currentMenu][this.state.active]
    console.log(map);


    if (map === 12) {
      this.setState({
        darkTheme: !this.state.darkTheme,
      });
    } else {
      this.setState({

        prevMenu: newPrev,
        currentMenu: map
      });
    }

  }

  // FUNCTION FOR : TOGGLE SONG PLAY AND PAUSE
  playPause = () => {

    this.setState({
      isPlaying: !this.state.isPlaying
    });

  }
  // FUNCTION FOR : Playing the next song in playing 
  forward = () => {
    
    if (this.state.currentMenu === 0 || this.state.currentMenu > 7) {
      if (this.state.songCurrentIndex >= this.state.songsURL.length - 1) {
        alert('This  is the Last Song');
        return;
      }

      this.setState({
        isPlaying: !this.state.isPlaying,
        songCurrentIndex: this.state.songCurrentIndex + 1
      });
    }
  }
  // FUNCTION FOR : Playing the previous song in playing 
  backward = () => {
    if (this.state.currentMenu === 0 || this.state.currentMenu > 7) {
      if (this.state.songCurrentIndex <= 0) {
        alert('This  is the First Song');
        return;
      }

      this.setState({
        isPlaying: !this.state.isPlaying,
        songCurrentIndex: this.state.songCurrentIndex - 1
      })
    }

  }
  // FUNCTION FOR : Going back the previous menu

  menuButton = () => {
    if (this.state.prevMenu.length === 0 && this.state.currentMenu === -1) { return; }
    let newPrev = [...this.state.prevMenu]
    let newCur = newPrev.pop();
    this.setState({
      prevMenu: newPrev,
      currentMenu: newCur
    });

  }

  // rendering of Ipod
  render() {
    const { darkTheme, ipodColorName, songList, songsImgURL,songsURL, songCurrentIndex, isPlaying, menuItems, active, songsItems, currentMenu, settings } = this.state;
    return (
      <>
        <div className={darkTheme ? "app-dark" : "app"}>
          <Ipod
            songsImgURL = {songsImgURL}
            darkTheme={darkTheme}
            settings={settings} ipodColorName={ipodColorName}
            updateMenu={this.updateMenu} backward={this.backward}
            forward={this.forward} playPause={this.playPause}
            middletap={this.middletap} songList={songList}
            songsURL={songsURL} songCurrentIndex={songCurrentIndex}
            isPlaying={isPlaying} menuItems={menuItems}
            active={active} songsItems={songsItems}
            currentMenu={currentMenu} menuButton={this.menuButton} />
        </div>
      </>
    );
  }
}

export default App;
