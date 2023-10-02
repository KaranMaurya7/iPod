import React from 'react';
import '../css/AudioPlayer.css';

class AudioPlayer extends React.Component {
    constructor(props) {
        super(props);
        this.audioRef = React.createRef();
        this.state = {
            duration: 0,
            currentTime: 0
        };
    }

    componentWillUnmount() {
        if (this.audioRef.current) {
            this.audioRef.current.removeEventListener('loadedmetadata', this.handleLoadedMetadata);
            this.audioRef.current.removeEventListener('timeupdate', this.handleTimeUpdate);
        }
    }

    handleLoadedMetadata = () => {
        this.setState({ duration: this.audioRef.current.duration });
    }

    handleTimeUpdate = () => {
        this.setState({ currentTime: this.audioRef.current.currentTime });
    }

    componentDidMount() {
        if (this.audioRef.current) {
            this.audioRef.current.addEventListener('loadedmetadata', this.handleLoadedMetadata);
            this.audioRef.current.addEventListener('timeupdate', this.handleTimeUpdate);
        }
    }

    componentDidUpdate(prevProps) {
        // console.log(this.props.onPlayPause)
        if (this.props.isPlaying !== prevProps.isPlaying) {
            if (this.props.isPlaying) {
                this.audioRef.current.play();
            } else {
                this.audioRef.current.pause();
            }
            if (this.props.onPlayPause) {

                this.props.onPlayPause(this.props.isPlaying);
            }
        }
    }
    // FUNCTION FOR : Slider Change
    onSliderChange = (event) => {
        if (this.audioRef.current) {
            if (this.audioRef.current) {
                this.audioRef.current.currentTime = event.target.value;
            }
            this.setState({ currentTime: event.target.value });
        }
    }

    // FUNCTION FOR : The time rendering in audioplayer
    formatTime = (time) => {
        const minutes = Math.floor(time / 60);
        const seconds = Math.floor(time % 60);
        return `${minutes}:${seconds < 10 ? '0' + seconds : seconds}`;
    }
    
    //Rendering of audioplayer menu
    render() {
        return (<>
            <div className='song-image'>
                <img className='img' src={this.props.songImg} alt='song cover' />

                <span className='img-span'> {this.props.songname}</span>


            </div>
            <div className="audio-player">


                <input className='slider'
                    type="range"
                    min="0"
                    max={this.state.duration}
                    value={this.state.currentTime}
                    onChange={this.onSliderChange}
                />
                <div className="duration">
                    <span>{this.formatTime(this.state.currentTime)}</span>
                    <span >{this.formatTime(this.state.duration)}</span>
                </div>
                <audio ref={this.audioRef} src={this.props.src} />
            </div>
        </>
        );
    }
}

export default AudioPlayer;
