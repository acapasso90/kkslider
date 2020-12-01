import React, {useState} from "react";
import axios from "axios";
import Songinfo from "./Songinfo.js"
import { ModalBody } from "react-bootstrap";

export default function SearchSong(){
    let [song, setSongInfo] = useState("")
    const [loaded, setLoaded] = useState("");


function playSong(response){
    const eng = "name-USen";
    setSongInfo({ 
        songPlayer: <audio controls autoPlay >
        <source src = {response.data.music_uri} /></audio>,
        songURL: response.data.music_uri,
        songName : response.data.name[eng],
        songPic : <img src={response.data.image_uri} alt={response.data.name} />,
        loaded: loaded,
     }

    )
    setLoaded("loaded");
}

function getSong(event) {
    let ApiURL = `https://acnhapi.com/v1a/songs/${song}`;
    axios.get(ApiURL).then(playSong) 
}

function randomize() {let chance = Math.random();
    let body = document.querySelector("body");
if(chance >= 0 && chance <= 0.01){song = 1;}
else if (chance >= 0.01 && chance <= 0.02){song = 2;}
else if(chance >= 0.02 && chance <= 0.03){song = 3;}
else if (chance >= 0.03 && chance <= 0.04){song = 4;}
else if (chance >= 0.04 && chance <= 0.05){song = 5;}
else if(chance >= 0.05 && chance <= 0.06){song = 6;}
else if (chance >= 0.06 && chance <= 0.07){song = 7;}
else if (chance >= 0.07 && chance <= 0.08){song = 8; body.classList.add("bodyBlack");}
else if(chance >= 0.08 && chance <= 0.09){song = 9;}
else if (chance >= 0.09 && chance <= 0.1){song = 10;}
else if (chance >= 0.1 && chance <= 0.11){song = 11;}
else if(chance >= 0.11 && chance <= 0.12){song = 12; body.classList.add("bodyLtBlue");}
else if (chance >= 0.12 && chance <= 0.13){song = 13;}
else if (chance >= 0.13 && chance <= 0.14){song = 14;}
else if(chance >= 0.14 && chance <= 0.15){song = 15;}
else if (chance >= 0.15 && chance <= 0.16){song = 16;}
else if (chance >= 0.16 && chance <= 0.17){song = 17;}
else if(chance >= 0.17 && chance <= 0.18){song = 18;}
else if (chance >= 0.18 && chance <= 0.19){song = 19;}
else if (chance >= 0.19 && chance <= 0.2){song = 20;}
else if(chance >= 0.2 && chance <= 0.21){song = 21;}
else if (chance >= 0.21 && chance <= 0.22){song = 22;}
else if (chance >= 0.22 && chance <= 0.23){song = 23;}
else if(chance >= 0.23 && chance <= 0.24){song = 24;}
else if (chance >= 0.24 && chance <= 0.25){song = 25;}
else if (chance >= 0.25 && chance <= 0.26){song = 26;}
else if(chance >= 0.26 && chance <= 0.27){song = 27;}
else if (chance >= 0.27 && chance <= 0.28){song = 28;}
else if (chance >= 0.28 && chance <= 0.29){song = 29;}
else if(chance >= 0.29 && chance <= 0.3){song = 30;}
else if (chance >= 0.30 && chance <= 0.31){song = 31;}
else if (chance >= 0.31 && chance <= 0.32){song = 32;}
else if(chance >= 0.32 && chance <= 0.33){song = 33;}
else if (chance >= 0.33 && chance <= 0.34){song = 34;}
else if (chance >= 0.34 && chance <= 0.35){song = 35;}
else if(chance >= 0.35 && chance <= 0.36){song = 36;}
else if (chance >= 0.36 && chance <= 0.37){song = 37;}
else if (chance >= 0.37 && chance <= 0.38){song = 38;}
else if(chance >= 0.38 && chance <= 0.39){song = 39;}
else if (chance >= 0.39 && chance <= 0.40){song = 40; body.classList.add("bodyLtBlue");
}
else if (chance >= 0.40 && chance <= 0.41){song = 41;}
else if(chance >= 0.41 && chance <= 0.42){song = 42;}
else if (chance >= 0.42 && chance <= 0.43){song = 43;}
else if (chance >= 0.43 && chance <= 0.44){song = 44;}
else if(chance >= 0.44 && chance <= 0.45){song = 45;}
else if (chance >= 0.45 && chance <= 0.46){song = 46;}
else if (chance >= 0.46 && chance <= 0.47){song = 47;}
else if(chance >= 0.47 && chance <= 0.48){song = 48;}
else if (chance >= 0.48 && chance <= 0.49){song = 49;}
else if (chance >= 0.49 && chance <= 0.50){song = 50;}
else if (chance >= 0.50 && chance <= 0.51){song = 51;}
else if(chance >= 0.51 && chance <= 0.52){song = 52;}
else if (chance >= 0.52 && chance <= 0.53){song = 53;}
else if (chance >= 0.53 && chance <= 0.54){song = 54;}
else if(chance >= 0.54 && chance <= 0.55){song = 55;}
else if (chance >= 0.55 && chance <= 0.56){song = 56;}
else if (chance >= 0.56 && chance <= 0.57){song = 57;}
else if(chance >= 0.57 && chance <= 0.58){song = 58;}
else if (chance >= 0.58 && chance <= 0.59){song = 59;}
else if (chance >= 0.59 && chance <= 0.60){song = 60;}
else if (chance >= 0.60 && chance <= 0.61){song = 61;}
else if(chance >= 0.61 && chance <= 0.62){song = 62;}
else if (chance >= 0.62 && chance <= 0.63){song = 63;}
else if (chance >= 0.63 && chance <= 0.64){song = 64;}
else if(chance >= 0.64 && chance <= 0.65){song = 65;}
else if (chance >= 0.65 && chance <= 0.66){song = 66; body.classList.add("bodyBlack");}
else if (chance >= 0.66 && chance <= 0.67){song = 67;}
else if(chance >= 0.67 && chance <= 0.68){song = 68;}
else if (chance >= 0.68 && chance <= 0.69){song = 69;}
else if (chance >= 0.69 && chance <= 0.70){song = 70;}
else if (chance >= 0.70 && chance <= 0.71){song = 71;}
else if(chance >= 0.71 && chance <= 0.72){song = 72;}
else if (chance >= 0.72 && chance <= 0.73){song = 73;}
else if (chance >= 0.73 && chance <= 0.74){song = 74;}
else if(chance >= 0.74 && chance <= 0.75){song = 75;}
else if (chance >= 0.75 && chance <= 0.76){song = 76;}
else if (chance >= 0.76 && chance <= 0.77){song = 77; body.classList.add("bodyLtBlue");}
else if(chance >= 0.77 && chance <= 0.78){song = 78;}
else if (chance >= 0.78 && chance <= 0.79){song = 79;}
else if (chance >= 0.79 && chance <= 0.80){song = 80;}
else if (chance >= 0.80 && chance <= 0.81){song = 81;}
else if(chance >= 0.81 && chance <= 0.82){song = 82;}
else if (chance >= 0.82 && chance <= 0.83){song = 83;}
else if (chance >= 0.83 && chance <= 0.84){song = 84;}
else if(chance >= 0.84 && chance <= 0.85){song = 85;}
else if (chance >= 0.85 && chance <= 0.86){song = 86;}
else if (chance >= 0.86 && chance <= 0.88){song = 87;}
else if(chance >= 0.88 && chance <= 0.89){song = 88;}
else if (chance >= 0.89 && chance <= 0.90){song = 89;}
else if (chance >= 0.9 && chance <= 0.91){song = 90;}
else if (chance >= 0.91 && chance <= 0.93){song = 91;}
else if (chance >= 0.93 && chance <= 0.95){song = 92;}
else if (chance >= 0.95 && chance <= 0.96){song = 93;}
else if (chance >= 0.96 && chance <= 0.98){song = 94;}
else {song = 95; body.classList.add("bodyLtBlue")}
getSong();

}

if (loaded) { return(<div className="searchSong">
<div className="container">
<button onClick={randomize}>Randomize</button>
<Songinfo data={song} />
</div>
</div>)}
else {
    return(<div className="searchSong">
<div className="container">
<button onClick={randomize}>Randomize</button>
</div>
</div>);}
} 