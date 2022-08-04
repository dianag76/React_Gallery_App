import './App.css';
import Search from "./components/Search";
import Nav from "./components/Nav";
import PhotoContainer from './components/PhotoContainer';
import NotFound from './components/NotFound';


function App() {
  return (
    // lassName="App">
    // <Nav/> */} 
    // Found
    // 
    <div className="container">  
      <Search/>
      <Nav/>

        {/* <ul>
          <li><a href="#">Cats</a></li>
          <li><a href="#">Dogs</a></li>
          <li><a href="#">Computers</a></li>
        </ul> */}
  
      <div className="photo-container">
        <h2>Results</h2>
        <PhotoContainer/>
        <NotFound/>
      </div>
    </div>
    );
}


export default App;
