import './App.css';
import Header from "./Header.js";
import SmallHeader from "./SmallHeader.js"
import SearchSong from "./SearchSong.js";
import SmallSearchSong from "./SmallSearchSong.js"
import MediaQuery from 'react-responsive'

function App() {
  return ( 
    <div className="app">
        <MediaQuery maxDeviceWidth={500}><SmallHeader />
        <SmallSearchSong /> </MediaQuery>
        <MediaQuery minDeviceWidth={501}> <Header />  
        <SearchSong  />     </MediaQuery> 
      </div>
  );
}

export default App;
