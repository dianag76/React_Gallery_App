import React, { Component } from "react";
import "./App.css";
import axios from "axios";
import { BrowserRouter, Route } from "react-router-dom";
import Search from "./components/Search";
import Nav from "./components/Nav";
import PhotoList from "./components/PhotoList";
// import NotFound from './components/NotFound';
import apiKey from "./components/config";

// const url =
// `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=cats&per_page=24&format=json&nojsoncallback=1`

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      photos: [],
      loading:true,
    };
  }
  componentDidMount() {
    this.performSearch(); 
    // this.performSearch();
  }

  performSearch = (query = "cheese") => {
    axios
      .get(
        `https://www.flickr.com/services/rest/?method=flickr.photos.
search&api_key=${apiKey}&tags={query}&per_page=24&format=json&
nojsoncallback=1`
      )
      .then((response) => {
        console.log(response.data.photos.photo);
        this.setState({
          photos: response.data.photos.photo,
          loading:false,
        });
      })
      .catch((error) => {
        console.log("Error fetching and parsing data", error);
      });
  };

  render() {
    console.log(this.state.photos);
    return (
      <BrowserRouter>
        <div className="App">
          <div className="container">
            <Search onSearch={this.performSearch} />
            <Nav />
            {this.state.loading ? (
              <p>Loading...</p>
            ) : (
              <PhotoList data={this.state.photos} />
            )}
            <Route exact path="/" render={() => <PhotoList />} />
            <Route exact path="/search" render={() => <Search />} />
          </div>
        </div>
      </BrowserRouter>
    );
  }
}
