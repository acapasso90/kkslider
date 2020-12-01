import React, {useState} from "react";

export default function Songinfo(props){
const [newSong, setnewSong]= useState("");
const [ready, setReady]= useState(false);   

function startSong(){ 
    setnewSong(props.data.songURL);
setReady(true);}

if(ready){
    return(
    <div className="Songinfo">
        <div className="container">
        <div className="songName">{props.data.songName}</div>
        <div className="songImage">{props.data.songPic}</div>
        <div className="player"> 
        <audio controls autoPlay >
        <source src = {newSong} /></audio>,
    </div>
        </div>
    </div>
)} else {startSong()
    return(
        <div className="Songinfo">
            <div className="container">
            <div className="songName">{props.data.songName}</div>
            <div className="songImage">{props.data.songPic}</div>
            <div className="player"> 
            <audio controls autoPlay >
            <source src = {newSong} /></audio>,
        </div>
            </div>
        </div>)}}