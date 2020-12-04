import React, {useState} from "react";
import axios from "axios";
import Songinfo from "./Songinfo.js";

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
        previous: (--response.data.id),
        //next: (++(response.data.id)),
     }
    )
    setLoaded("loaded");
}
//console.log(song.next)
function previousSong(){ 
    let prevsong = song.previous;
    let newURL = `https://acnhapi.com/v1a/songs/${prevsong}`;
    axios.get(newURL).then(playSong);
 }

// function nextSong(){
  //  let nextsong = song.next;
    //let newestURL = `https://acnhapi.com/v1a/songs/${nextsong}`;
    //axios.get(newestURL).then(playSong);

 }
function getDefaultSong(event){
    song = 88;
    let ApiURL = `https://acnhapi.com/v1a/songs/${song}`;
axios.get(ApiURL).then(playSong);
}
function randomize() {
    let body = document.querySelector("body");
    let randomNumber = Math.floor(Math.random() * 95);
if (randomNumber >= 96 && randomNumber <= 97){randomNumber = 88;}
else if (randomNumber === 0){randomNumber = 34;}
else if(randomNumber > 97 && randomNumber <= 98){randomNumber = 43;}
else if(randomNumber > 98 && randomNumber <= 99){randomNumber = 33;}
else if(randomNumber > 99 && randomNumber <= 100){randomNumber = 71;}
else if (randomNumber === 1 || randomNumber ===  10 || randomNumber ===  11 || randomNumber ===  15 ||
     randomNumber === 47 || randomNumber === 49 || randomNumber === 63 || randomNumber === 84)
     {body.classList.remove("bodyLtBlue"); 
     body.classList.remove("bodySepia");
     body.classList.remove("bodyPinktoWhite");
     body.classList.remove("bodyMagenta");
     body.classList.remove("bodyBlack");
     body.classList.remove("bodyWhite");
     body.classList.remove("bodyGray");
     body.classList.remove("bodyGreen");
     body.classList.remove("bodyDarkGreen");
     body.classList.remove("bodyRed");
     body.classList.remove("bodyBrown");
     body.classList.remove("bodyOrange");
     body.classList.remove("bodyDarkBlue");
     body.classList.remove("bodyPurple");
     body.classList.remove("bodyCerulean");
     body.classList.remove("bodySnow");
         body.classList.add("bodyYellow");}
else if (randomNumber === 2 || randomNumber === 5 || randomNumber === 9 || randomNumber ===  12 || randomNumber === 19
    || randomNumber === 40 || randomNumber === 43 || randomNumber === 59 || randomNumber === 77 || randomNumber === 90 || randomNumber === 92 || randomNumber === 95)
     {body.classList.remove("bodyYellow"); 
     body.classList.remove("bodySepia");
     body.classList.remove("bodyPinktoWhite");
     body.classList.remove("bodyMagenta");
     body.classList.remove("bodyBlack");
     body.classList.remove("bodyWhite");
     body.classList.remove("bodyGray");
     body.classList.remove("bodyGreen");
     body.classList.remove("bodyDarkGreen");
     body.classList.remove("bodyRed");
     body.classList.remove("bodyBrown");
     body.classList.remove("bodyOrange");
     body.classList.remove("bodyDarkBlue");
     body.classList.remove("bodyPurple");
     body.classList.remove("bodyCerulean");
     body.classList.remove("bodySnow");
         body.classList.add("bodyLtBlue");}
else if (randomNumber === 3 || randomNumber === 23 || randomNumber ===25 || randomNumber === 26 ||randomNumber === 38 || randomNumber === 44 || randomNumber === 48 
        || randomNumber === 74 || randomNumber === 79 || randomNumber === 85)
        {body.classList.remove("bodyYellow"); 
        body.classList.remove("bodyLtBlue"); 
        body.classList.remove("bodyPinktoWhite");
        body.classList.remove("bodyMagenta");
        body.classList.remove("bodyBlack");
        body.classList.remove("bodyWhite");
        body.classList.remove("bodyGray");
        body.classList.remove("bodyGreen");
        body.classList.remove("bodyDarkGreen");
        body.classList.remove("bodyRed");
        body.classList.remove("bodyBrown");
        body.classList.remove("bodyOrange");
        body.classList.remove("bodyDarkBlue");
        body.classList.remove("bodyPurple");
        body.classList.remove("bodyCerulean");
        body.classList.remove("bodySnow");
            body.classList.add("bodySepia");}
else if (randomNumber === 4 || randomNumber === 6 || randomNumber === 30 || randomNumber === 39 || randomNumber === 73 || randomNumber === 87)
         {body.classList.remove("bodyYellow"); 
         body.classList.remove("bodyLtBlue"); 
         body.classList.remove("bodySepia");
         body.classList.remove("bodyMagenta");
         body.classList.remove("bodyBlack");
         body.classList.remove("bodyWhite");
         body.classList.remove("bodyGray");
         body.classList.remove("bodyGreen");
         body.classList.remove("bodyDarkGreen");
         body.classList.remove("bodyRed");
         body.classList.remove("bodyBrown");
         body.classList.remove("bodyOrange");
         body.classList.remove("bodyDarkBlue");
         body.classList.remove("bodyPurple");
         body.classList.remove("bodyCerulean");
         body.classList.remove("bodySnow");
             body.classList.add("bodyPinktoWhite");}
else if (randomNumber === 7 || randomNumber === 37) 
         {body.classList.remove("bodyYellow");
          body.classList.remove("bodyLtBlue"); 
         body.classList.remove("bodySepia");
         body.classList.remove("bodyPinktoWhite");
         body.classList.remove("bodyBlack");
         body.classList.remove("bodyWhite");
         body.classList.remove("bodyGray");
         body.classList.remove("bodyGreen");
         body.classList.remove("bodyDarkGreen");
         body.classList.remove("bodyRed");
         body.classList.remove("bodyBrown");
         body.classList.remove("bodyOrange");
         body.classList.remove("bodyDarkBlue");
         body.classList.remove("bodyPurple");
         body.classList.remove("bodyCerulean");
         body.classList.remove("bodySnow");
             body.classList.add("bodyMagenta");}
else if (randomNumber === 8 || randomNumber === 29 || randomNumber === 58 || randomNumber === 66 || randomNumber === 81 || randomNumber === 86 || randomNumber === 91 || randomNumber === 93)
{body.classList.remove("bodyYellow"); 
body.classList.remove("bodyLtBlue"); 
     body.classList.remove("bodySepia");
     body.classList.remove("bodyPinktoWhite");
     body.classList.remove("bodyMagenta");
     body.classList.remove("bodyWhite");
     body.classList.remove("bodyGray");
     body.classList.remove("bodyGreen");
     body.classList.remove("bodyDarkGreen");
     body.classList.remove("bodyRed");
     body.classList.remove("bodyBrown");
     body.classList.remove("bodyOrange");
     body.classList.remove("bodyDarkBlue");
     body.classList.remove("bodyPurple");
     body.classList.remove("bodyCerulean");
     body.classList.remove("bodySnow");
    body.classList.add("bodyBlack");}
else if (randomNumber === 13 || randomNumber === 14 || randomNumber === 16 || randomNumber === 70)
{body.classList.remove("bodyYellow");
body.classList.remove("bodyLtBlue"); 
     body.classList.remove("bodySepia");
     body.classList.remove("bodyPinktoWhite");
     body.classList.remove("bodyMagenta");
     body.classList.remove("bodyBlack");
     body.classList.remove("bodyGray");
     body.classList.remove("bodyGreen");
     body.classList.remove("bodyDarkGreen");
     body.classList.remove("bodyRed");
     body.classList.remove("bodyBrown");
     body.classList.remove("bodyOrange");
     body.classList.remove("bodyDarkBlue");
     body.classList.remove("bodyPurple");
     body.classList.remove("bodyCerulean");
     body.classList.remove("bodySnow");
    body.classList.add("bodyWhite");}
else if (randomNumber === 17 || randomNumber === 20 || randomNumber === 28 || randomNumber === 82 || randomNumber ===94)
{body.classList.remove("bodyYellow")
body.classList.remove("bodyLtBlue"); 
     body.classList.remove("bodySepia");
     body.classList.remove("bodyPinktoWhite");
     body.classList.remove("bodyMagenta");
     body.classList.remove("bodyBlack");
     body.classList.remove("bodyWhite");
     body.classList.remove("bodyGreen");
     body.classList.remove("bodyDarkGreen");
     body.classList.remove("bodyRed");
     body.classList.remove("bodyBrown");
     body.classList.remove("bodyOrange");
     body.classList.remove("bodyDarkBlue");
     body.classList.remove("bodyPurple");
     body.classList.remove("bodyCerulean");
     body.classList.remove("bodySnow");
    body.classList.add("bodyGray");}
else if (randomNumber === 21 || randomNumber === 22 || randomNumber === 45 || randomNumber === 68 || randomNumber === 75 || randomNumber === 76 || randomNumber === 80)
{body.classList.remove("bodyYellow")
body.classList.remove("bodyLtBlue"); 
     body.classList.remove("bodySepia");
     body.classList.remove("bodyPinktoWhite");
     body.classList.remove("bodyMagenta");
     body.classList.remove("bodyBlack");
     body.classList.remove("bodyWhite");
     body.classList.remove("bodyGray");
     body.classList.remove("bodyDarkGreen");
     body.classList.remove("bodyRed");
     body.classList.remove("bodyBrown");
     body.classList.remove("bodyOrange");
     body.classList.remove("bodyDarkBlue");
     body.classList.remove("bodyPurple");
     body.classList.remove("bodyCerulean");
     body.classList.remove("bodySnow");
    body.classList.add("bodyGreen");}
else if (randomNumber === 54 || randomNumber === 57 || randomNumber === 72 || randomNumber === 78)
{body.classList.remove("bodyYellow")
body.classList.remove("bodyLtBlue"); 
     body.classList.remove("bodySepia");
     body.classList.remove("bodyPinktoWhite");
     body.classList.remove("bodyMagenta");
     body.classList.remove("bodyBlack");
     body.classList.remove("bodyWhite");
     body.classList.remove("bodyGray");
     body.classList.remove("bodyGreen");
     body.classList.remove("bodyRed");
     body.classList.remove("bodyBrown");
     body.classList.remove("bodyOrange");
     body.classList.remove("bodyDarkBlue");
     body.classList.remove("bodyPurple");
     body.classList.remove("bodyCerulean");
     body.classList.remove("bodySnow")
    body.classList.add("bodyDarkGreen");}
else if (randomNumber === 27 || randomNumber === 31 || randomNumber === 51 || randomNumber === 53 || randomNumber === 64 || randomNumber === 83)
{body.classList.remove("bodyYellow")
body.classList.remove("bodyLtBlue"); 
     body.classList.remove("bodySepia");
     body.classList.remove("bodyPinktoWhite");
     body.classList.remove("bodyMagenta");
     body.classList.remove("bodyBlack");
     body.classList.remove("bodyWhite");
     body.classList.remove("bodyGray");
     body.classList.remove("bodyGreen");
     body.classList.remove("bodyDarkGreen");
     body.classList.remove("bodyBrown");
     body.classList.remove("bodyOrange");
     body.classList.remove("bodyDarkBlue");
     body.classList.remove("bodyPurple");
     body.classList.remove("bodyCerulean");
     body.classList.remove("bodySnow")
    body.classList.add("bodyRed");}
else if(randomNumber === 18 || randomNumber === 24 || randomNumber === 32 || randomNumber === 34 || randomNumber === 36 || randomNumber === 55 || 
     randomNumber === 69 || randomNumber === 71)
{body.classList.remove("bodyYellow");
body.classList.remove("bodyLtBlue"); 
     body.classList.remove("bodySepia");
     body.classList.remove("bodyPinktoWhite");
     body.classList.remove("bodyMagenta");
     body.classList.remove("bodyBlack");
     body.classList.remove("bodyWhite");
     body.classList.remove("bodyGray");
     body.classList.remove("bodyGreen");
     body.classList.remove("bodyDarkGreen");
     body.classList.remove("bodyRed");
     body.classList.remove("bodyOrange");
     body.classList.remove("bodyDarkBlue");
     body.classList.remove("bodyPurple");
     body.classList.remove("bodyCerulean");
     body.classList.remove("bodySnow")
    body.classList.add("bodyBrown");}
else if (randomNumber === 33 || randomNumber === 46 || randomNumber === 52 || randomNumber === 56 || randomNumber === 61 || randomNumber === 62 || randomNumber === 89) 
{body.classList.remove("bodyYellow");
body.classList.remove("bodyLtBlue"); 
     body.classList.remove("bodySepia");
     body.classList.remove("bodyPinktoWhite");
     body.classList.remove("bodyMagenta");
     body.classList.remove("bodyBlack");
     body.classList.remove("bodyWhite");
     body.classList.remove("bodyGray");
     body.classList.remove("bodyGreen");
     body.classList.remove("bodyDarkGreen");
     body.classList.remove("bodyRed");
     body.classList.remove("bodyBrown");
     body.classList.remove("bodyDarkBlue");
     body.classList.remove("bodyPurple");
     body.classList.remove("bodyCerulean");
     body.classList.remove("bodySnow")
    body.classList.add("bodyOrange");}
else if (randomNumber === 35 || randomNumber === 50)
{body.classList.remove("bodyYellow")
body.classList.remove("bodyLtBlue"); 
     body.classList.remove("bodySepia");
     body.classList.remove("bodyPinktoWhite");
     body.classList.remove("bodyMagenta");
     body.classList.remove("bodyBlack");
     body.classList.remove("bodyWhite");
     body.classList.remove("bodyGray");
     body.classList.remove("bodyGreen");
     body.classList.remove("bodyDarkGreen");
     body.classList.remove("bodyRed");
     body.classList.remove("bodyBrown");
     body.classList.remove("bodyOrange");
     body.classList.remove("bodyPurple");
     body.classList.remove("bodyCerulean");
     body.classList.remove("bodySnow")
    body.classList.add("bodyDarkBlue");}
else if (randomNumber === 42 || randomNumber === 60)
{body.classList.remove("bodyYellow")
body.classList.remove("bodyLtBlue"); 
     body.classList.remove("bodySepia");
     body.classList.remove("bodyPinktoWhite");
     body.classList.remove("bodyMagenta");
     body.classList.remove("bodyBlack");
     body.classList.remove("bodyWhite");
     body.classList.remove("bodyGray");
     body.classList.remove("bodyGreen");
     body.classList.remove("bodyDarkGreen");
     body.classList.remove("bodyRed");
     body.classList.remove("bodyBrown");
     body.classList.remove("bodyOrange");
     body.classList.remove("bodyDarkBlue");
     body.classList.remove("bodyCerulean");
     body.classList.remove("bodySnow")
    body.classList.add("bodyPurple");}
else if (randomNumber === 41 || randomNumber === 65 || randomNumber === 88)
{body.classList.remove("bodyYellow")
body.classList.remove("bodyLtBlue"); 
     body.classList.remove("bodySepia");
     body.classList.remove("bodyPinktoWhite");
     body.classList.remove("bodyMagenta");
     body.classList.remove("bodyBlack");
     body.classList.remove("bodyWhite");
     body.classList.remove("bodyGray");
     body.classList.remove("bodyGreen");
     body.classList.remove("bodyDarkGreen");
     body.classList.remove("bodyRed");
     body.classList.remove("bodyBrown");
     body.classList.remove("bodyOrange");
     body.classList.remove("bodyDarkBlue");
     body.classList.remove("bodyPurple");
     body.classList.remove("bodySnow")
    body.classList.add("bodyCerulean");}
else if (randomNumber === 67)
{body.classList.remove("bodyYellow");
body.classList.remove("bodyLtBlue"); 
     body.classList.remove("bodySepia");
     body.classList.remove("bodyPinktoWhite");
     body.classList.remove("bodyMagenta");
     body.classList.remove("bodyBlack");
     body.classList.remove("bodyWhite");
     body.classList.remove("bodyGray");
     body.classList.remove("bodyGreen");
     body.classList.remove("bodyDarkGreen");
     body.classList.remove("bodyRed");
     body.classList.remove("bodyBrown");
     body.classList.remove("bodyOrange");
     body.classList.remove("bodyDarkBlue");
     body.classList.remove("bodyPurple");
     body.classList.remove("bodyCerulean");
    body.classList.add("bodySnow");}
    const ApiURL = `https://acnhapi.com/v1a/songs/${randomNumber}`;
    axios.get(ApiURL).then(playSong);
    };



if (loaded) { return(<div className="searchSong">
<div className="container">
    <div className="left">
    <div className="leftArrow" onClick={previousSong}>
        <div className="topPoint"></div>
        <div className="bottomPoint"></div>
        <div className="flat"></div>
    </div>  </div>
<Songinfo data={song} />
<button onClick={randomize}>Play Random</button>
<div className="right">
<div className="rightArrow" onClick={nextSong}>
        <div className="topPoint"></div>
        <div className="bottomPoint"></div>
        <div className="flat"></div>
    </div>
    </div>
</div>
</div>)}
else { getDefaultSong();
    return(<div className="searchSong">
<div className="container">
<div className="left">
<div className="leftArrow" onClick={previousSong}>
        <div className="topPoint"></div>
        <div className="bottomPoint"></div>
        <div className="flat"></div>
    </div>
    </div>
<Songinfo data={song} />
<button onClick={randomize}>Play Random</button>
<div className="right">
<div className="rightArrow" onClick={nextSong}>
        <div className="topPoint"></div>
        <div className="bottomPoint"></div>
        <div className="flat"></div>
    </div>
    </div>
</div>
</div>);}
} 