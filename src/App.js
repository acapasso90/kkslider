import './App.css';
import Header from "./Header.js";
import SearchSong from "./SearchSong.js";
import MediaQuery from 'react-responsive'
import Footer from "./Footer.js";

function App() {
  return ( 
    <div className="app">
        <MediaQuery maxDeviceWidth={500}><div className="smallHeader"><Header /></div>
       <div className="smallSearchSong"><SearchSong /></div> <div className="smallFooter">
        <Footer />  </div>
        </MediaQuery>
        <MediaQuery minDeviceWidth={501} maxDeviceWidth={1025}><div className="tabletHeader"> <Header />  </div> 
        <div className="tabletFooter"><Footer /></div> 
        <div className="tabletSearchSong"><SearchSong  />  </div>   </MediaQuery> 
        <MediaQuery minDeviceWidth={1026}><Header />  
        <SearchSong  />    
      <Footer />
        </MediaQuery> 
      </div>
  );
}

export default App;
