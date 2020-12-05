import './App.css';
import Header from "./Header.js";
import SearchSong from "./SearchSong.js";
import MediaQuery from 'react-responsive'

function App() {
  return ( 
    <div className="app">
        <MediaQuery maxDeviceWidth={500}><div className="smallHeader"><Header /></div>
       <div className="smallSearchSong"><SearchSong /></div>  </MediaQuery>
        <MediaQuery minDeviceWidth={501}> <Header />  
        <SearchSong  />     </MediaQuery> 
        <footer>
        <div className="credit">
      <p>  All images, songs, and characters found on the app are the sole property of Nintendo and Animal Crossing <br />
       and are only used for non-commercial and educational purpose.</p>
      </div>
      Coded by <a href="https://www.amandacapasso.com">Amanda Capasso</a>
        </footer>
      </div>
  );
}

export default App;
