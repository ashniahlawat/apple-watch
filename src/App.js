import './App.css';
import Navbar from './components/Navbar';
import Accessories from './components/Accessories';
import Footer from './components/Footer';
import Store from './components/Store';
import Video from './components/videos';


function App() {
  
  return (
    <>
    <div style={{width:'99%'}}>
    <Navbar/>
    <Video/>
    <Store/>
    <Accessories/>
    <Footer/>

    </div>
    
    
    </>
  );
}

export default App;
