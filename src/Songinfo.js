import React, {useState, useEffect} from "react";

export default function Songinfo(props){
const [newSong, setnewSong]= useState(props.data.songURL);
useEffect(() => {
  setnewSong(props.data.songURL);
}, [props.data.songURL]);


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