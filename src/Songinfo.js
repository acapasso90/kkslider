import React, {useState, useEffect} from "react";

export default function Songinfo(props){
const [newSong, setnewSong]= useState("");
useEffect(() => {
    setnewSong(props.data.songURL);
  }, [props.data.songURL]);

    return(
    <div className="Songinfo">
        <div className="container">
        <div className="songName">{props.data.songName}</div>
        <div className="songImage">{props.data.songPic}</div>
        <div className="player"> 
        <audio key={newSong} controls autoPlay >
        <source src = {newSong} /></audio>,
    </div>
        </div>
    </div>
);}