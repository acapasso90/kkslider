import React, {useState} from "react";

export default function Songinfo(props){
    return(
    <div className="Songinfo">
        <div className="container">
        <div className="songName">{props.data.songName}</div>
        <div className="songImage">{props.data.songPic}</div>
        <div className="player"> 
      {props.data.songPlayer}
    </div>
        </div>
    </div>
)}