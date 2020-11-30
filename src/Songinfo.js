

export default function Songinfo(props){
    
    return(
    <div className="Songinfo">
        <div className="container">
        <div className="songName">{props.data.songName}</div>
        <div className="songImage">{props.data.songPic}</div>
        <div className="player">
        <audio controls autoPlay>
    <source src = {props.data.songURL} />
    </audio> </div>
        </div>
    </div>
)}