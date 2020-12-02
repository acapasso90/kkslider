import React, {useState} from "react";
import axios from "axios";
import Songinfo from "./Songinfo.js"

export default function SearchSong(){
    let [song, setSongInfo] = useState("")
    const [loaded, setLoaded] = useState("");

function playSong(response){
    const eng = "name-USen";
    setSongInfo({ 
        songURL: response.data.music_uri,
        songName : response.data.name[eng],
        songPic : <img src={response.data.image_uri} alt={response.data.name} />,
        loaded: loaded,
     }
    )
    setLoaded("loaded");
}


function getDefaultSong(event){
    //let body = document.querySelector("body");
    song = 88;
    let ApiURL = `https://acnhapi.com/v1a/songs/${song}`;
axios.get(ApiURL).then(playSong);
}
function randomize() {
    let randomNumber = Math.floor(Math.random() * 95);
    console.log(randomNumber);
if (randomNumber > 96 && randomNumber < 97){randomNumber = 88;}
else if(randomNumber > 97 && randomNumber < 98){randomNumber = 43;}
else if(randomNumber > 98 && randomNumber < 99){randomNumber = 33;}
else if(randomNumber > 99 && randomNumber < 100){randomNumber = 45;}
    const ApiURL = `https://acnhapi.com/v1a/songs/${randomNumber}`;
    axios.get(ApiURL).then(playSong);
    };



if (loaded) { return(<div className="searchSong">
<div className="container">
<button onClick={randomize}>Randomize</button>
<Songinfo data={song} />
</div>
</div>)}
else { getDefaultSong();
    return(<div className="searchSong">
<div className="container">
<button onClick={randomize}>Randomize</button>
<Songinfo data={song} />
</div>
</div>);}
} 