import React, {useState} from "react";
import axios from "axios";
import Songinfo from "./Songinfo.js";
import Loader from 'react-loader-spinner'

export default function SearchSong(){
    let [song, setSongInfo] = useState("")
    const [loaded, setLoaded] = useState("");

function playSong(response){
    const eng = "name-USen";
    let body = document.querySelector("body")
    setSongInfo({ 
        songURL: response.data.music_uri,
        songName : response.data.name[eng],
        // Album Cover for song
        songPic : <img src={response.data.image_uri} alt={response.data.name} />,
        loaded: loaded,
        // current song playing
        thisone: response.data.id,
        // the song before the current song playing
        previous: (--(response.data.id)),
     }
    )
// Removes all other body styling and applies Yellow background 
    if (song === 1 || song ===  10 || song ===  11  ||
        song === 47 || song === 49 || song === 63 || song === 84)
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
// Removes all other body styling and applies Light Blue background 
   else if (song === 2 || song === 5 || song === 9 || song ===  12 || song === 19
       || song === 40 || song === 43 || song === 59 || song === 77 || song === 90 || song === 92 || song === 95)
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
 // Removes all other body styling and applies Sepia background 
   else if (song === 3 || song === 23 || song ===25 || song === 26 ||song === 38 || song === 44 || song === 48 
           || song === 74 || song === 79 || song === 85)
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
// Removes all other body styling and applies Pink to White gradient background 
   else if (song === 4 || song === 6 || song === 30 || song === 39 || song === 73 || song === 87)
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
 // Removes all other body styling and applies Magenta background                
   else if (song === 7 || song === 37) 
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
 // Removes all other body styling and applies Black background                
   else if (song === 8 || song === 29 || song === 58 || song === 66 || song === 81 || song === 86 || song === 91 || song === 93)
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
// Removes all other body styling and applies Gray background 
   else if (song === 17 || song === 20 || song === 28 || song === 82 || song ===94)
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
       // Removes all other body styling and applies Green background 
   else if (song === 21 || song === 22 || song === 45 || song === 68 || song === 75 || song === 76 || song === 80)
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
       // Removes all other body styling and applies Dark Green background 
   else if (song === 54 || song === 57 || song === 72 || song === 78)
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
       // Removes all other body styling and applies Red background 
   else if (song === 27 || song === 31 || song === 51 || song === 53 || song === 64 || song === 83)
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
       // Removes all other body styling and applies Brown background 
   else if(song === 18 || song === 24 || song === 32 || song === 34 || song === 36 || song === 55 || 
    song === 69 || song === 71)
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
       // Removes all other body styling and applies Orange background 
   else if (song === 33 || song === 46 || song === 52 || song === 56 || song === 61 || song === 62 || song === 89) 
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
       // Removes all other body styling and applies Dark Blue background 
   else if (song === 35 || song === 50 || song ===  15)
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
       // Removes all other body styling and applies Purple background 
   else if (song === 42 || song === 60)
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
       // Removes all other body styling and applies Cerulean background 
   else if (song === 41 || song === 65 || song === 88)
   {body.classList.remove("bodyYellow")
   body.classList.remove("bodyLtBlue"); 
        body.classList.remove("bodySepia"); body.classList.remove("bodyPinktoWhite");
        body.classList.remove("bodyMagenta"); body.classList.remove("bodyBlack");
        body.classList.remove("bodyWhite"); body.classList.remove("bodyGray");
        body.classList.remove("bodyGreen"); body.classList.remove("bodyDarkGreen");
        body.classList.remove("bodyRed"); body.classList.remove("bodyBrown");
        body.classList.remove("bodyOrange"); body.classList.remove("bodyDarkBlue");
        body.classList.remove("bodyPurple"); body.classList.remove("bodySnow")
       body.classList.add("bodyCerulean");}
       // Removes all other body styling and applies Snow-scene background 
 else if (song === 13 ||  song === 14 || song === 16 || song === 67 ||  song === 70)
   {body.classList.remove("bodyYellow");
   body.classList.remove("bodyLtBlue"); 
        body.classList.remove("bodySepia"); body.classList.remove("bodyPinktoWhite");
        body.classList.remove("bodyMagenta"); body.classList.remove("bodyBlack");
        body.classList.remove("bodyWhite"); body.classList.remove("bodyGray");
        body.classList.remove("bodyGreen"); body.classList.remove("bodyDarkGreen");
        body.classList.remove("bodyRed"); body.classList.remove("bodyBrown");
        body.classList.remove("bodyOrange"); body.classList.remove("bodyDarkBlue");
        body.classList.remove("bodyPurple"); body.classList.remove("bodyCerulean");
       body.classList.add("bodySnow");}
// sets loaded to loaded
    setLoaded("loaded")}

//Plays previous song
function previousSong(){
    // if current song is first song in array previousSong will play the last song in array
    if (song.thisone === 1){song = 95;}
    // otherwise make the axios request with the song sequentially before current
    else {song = song.previous;}
    let newURL = `https://acnhapi.com/v1a/songs/${song}`;
    axios.get(newURL).then(playSong);}

//Plays next song
function nextSong(){
    // if current song is the last song in array nextSong will play the first song in array
    if (song.thisone === 95){song = 1;}
    //otherwise makes axios request with song sequentially after this one
    else {song = (song.thisone+1);}
let newestURL = `https://acnhapi.com/v1a/songs/${song}`;
axios.get(newestURL).then(playSong);
}

// default song played when app loads song#88 Stale Cupcakes
function getDefaultSong(){song = 88;
    let ApiURL = `https://acnhapi.com/v1a/songs/${song}`;
axios.get(ApiURL).then(playSong);
}

// Plays random song by getting a random number between 1-100
function randomize() {
    song = Math.floor(Math.random() * 95);
// song list is 1-95 so random songs are assigned to 0 & 96-99
if (song >= 96 && song <= 97){song = 88;}
else if (song === 0){song = 34;}
else if(song > 97 && song <= 98){song = 43;}
else if(song > 98 && song <= 99){song = 33;}
else if(song > 99 && song <= 100){song = 71;}
    const ApiURL = `https://acnhapi.com/v1a/songs/${song}`;
    axios.get(ApiURL).then(playSong);
    };


// if loaded displays app
if (loaded) { return(<div className="searchSong">
<div className="container">
    <div className="left">
    <div className="leftArrow" onClick={previousSong}>
    <i className ="fas fa-caret-square-left"></i>
    </div>  </div>
<Songinfo data={song} />
<button onClick={randomize}>Play Random</button>
<div className="right">
<div className="rightArrow" onClick={nextSong}>
<i className="fas fa-caret-square-right"></i>
    </div>
    </div>
</div>
</div>)}

// otherwise returns loader
else { getDefaultSong();
    return(  
        <div className="Loading">
             <Loader
        type="Puff"
        color="#973636;"
        height={250}
        width={250}
        timeout={6000}
     />
     </div>);}
} 