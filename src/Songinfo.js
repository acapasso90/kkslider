import React, {useState, useEffect} from "react";

export default function Songinfo(props){
  const [newSong, setnewSong]= useState(props.data.songURL);
  // changes song being played everytime song URL changes from props
  useEffect(() => {
    let mounted = true
    if (mounted) {setnewSong(props.data.songURL);}
    return function cleanup() {
      mounted = false
  }}, [props.data.songURL]);

 
  

// Returns audio player with song loaded
    return(
    <div className="Songinfo">
        <div className="songName">{props.data.songName}</div>
        <div className="songImage">{props.data.songPic}</div>
        <div className="player"> 
        <audio autoPlay key={newSong} controls  >
        <source src = {newSong} /></audio>
        </div>
        </div>
);}