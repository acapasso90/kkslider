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
    song = 88;
    let ApiURL = `https://acnhapi.com/v1a/songs/${song}`;
axios.get(ApiURL).then(playSong);
}
function randomize() {
    let body = document.querySelector("body");
    let randomNumber = Math.floor(Math.random() * 95);
if (randomNumber > 96 && randomNumber < 97){randomNumber = 88;}
else if(randomNumber > 97 && randomNumber < 98){randomNumber = 43;}
else if(randomNumber > 98 && randomNumber < 99){randomNumber = 33;}
else if(randomNumber > 99 && randomNumber < 100){randomNumber = 45;}
else if (randomNumber === 1 || randomNumber ===  10 || randomNumber ===  11 || randomNumber ===  15 ||
     randomNumber === 47 || randomNumber === 49 || randomNumber === 63 || randomNumber === 84)
     {body.classList.add("bodyYellow");}
else if (randomNumber === 2 || randomNumber === 5 || randomNumber === 9 || randomNumber ===  12 || randomNumber === 19
    || randomNumber === 40 || randomNumber === 43 || randomNumber === 59 || randomNumber === 77 || randomNumber === 90 || randomNumber === 92 || randomNumber === 95)
     {body.classList.add("bodyLtBlue");}
else if (randomNumber === 3 || randomNumber === 23 || randomNumber ===25 || randomNumber === 26 ||randomNumber === 38 || randomNumber === 44 || randomNumber === 48 
        || randomNumber === 69 || randomNumber === 74 || randomNumber === 79 || randomNumber === 85)
        {body.classList.add("bodySepia");}
else if (randomNumber === 4 || randomNumber === 6 || randomNumber === 30 || randomNumber === 39 || randomNumber === 73 || randomNumber === 87)
         {body.classList.add("bodyPinktoWhite");}
else if (randomNumber === 7 || randomNumber === 37) 
         {body.classList.add("bodyMagenta");}
else if (randomNumber === 8 || randomNumber === 29 || randomNumber === 58 || randomNumber === 66 || randomNumber === 81 || randomNumber === 86 || randomNumber === 91 || randomNumber === 93)
{body.classList.add("bodyBlack");}
else if (randomNumber === 13 || randomNumber === 14 || randomNumber === 16 || randomNumber === 70)
{body.classList.add("bodyWhite");}
    
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