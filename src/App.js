import React, {Component} from "react";
import './App.css';
import Search from "./components/Search";
import Nav from "./components/Nav";
import PhotoContainer from './components/PhotoContainer';
// import NotFound from './components/NotFound';
import apiKey from "./components/config";
import axios from "axios";

// const url =
// `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=cats&per_page=24&format=json&nojsoncallback=1`

export default class App extends Component {
  constructor(){
  super();
  this.state={
    photos:[],
  }

  }
  componentDidMount() {
    this.searchPhoto()
  }

  searchPhoto=(query= "cheese") =>{
    axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.
search&api_key=${apiKey}&tags=cats&per_page=24&format=json&
nojsoncallback=1`)
    .then(response => {
      console.log(response.data.photos.photo);
      this.setState({
        photos: response.data.photos.photo
      });
    })
    .catch(error => {
      console.log('Error fetching and parsing data', error);
    });    
}

  render(){
    console.log(this.state.photos);
  return (
    <div className = "App">

    {/* // lassName="App"> */}
    {/* // <Nav/> */}  
    {/* // Found */}
    {/* //  */}
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
        {/* <NotFound/> */}
      </div>
    </div>
    </div>
    );
}
}

