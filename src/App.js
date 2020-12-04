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
      </div>
  );
}

export default App;
