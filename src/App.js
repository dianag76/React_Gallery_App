import React, { Component } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import axios from "axios";
import apiKey from "./components/config";
import "./App.css";
import Search from "./components/Search";
import Nav from "./components/Nav";
import PhotoList from "./components/PhotoList";
// import NotFound from './components/NotFound';
import NotFound from "./components/NotFound";

// const url =
// `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=cats&per_page=24&format=json&nojsoncallback=1`

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      photos: [],
      dogs: [],
      cats: [],
      computers: [],
      query: "",
      loading: true,
    };
  }
  componentDidMount() {
    this.performSearch();
    this.performSearch("cats");
    this.performSearch("dogs");
    this.performSearch("computers");
  }

  performSearch = (query = "cheese") => {
    axios
      .get(
        `https://www.flickr.com/services/rest/?method=flickr.photos.
search&api_key=${apiKey}&tags={query}&per_page=24&format=json&
nojsoncallback=1`
      )
      .then((response) => {
        if (query === "cats") {
          this.setState({
            cats: response.data.photos.photo,
            loading: false,
          });
        } else if (query === "dogs") {
          this.setState({
            dogs: response.data.photos.photo,
            loading: false,
          });
        } else if (query === "computers") {
          this.setState({
            computers: response.data.photos.photo,
            loading: false,
          });
        } else  {
          this.setState({
            photos: response.data.photos.photo,
            query:query,
            loading: false,
          });
        }
      })
      .catch((error) => {
        console.log("Error fetching and parsing data", error);
      });
  };

  render() {
    console.log(this.state.photos);
    return (
        <div className="App">
          <Search onSearch={this.performSearch} />
          <Nav />
          {/* {this.state.loading ? ( 
               <p>Loading...</p>
             ) : */}
          <Routes>
            {/* <PhotoList data={this.state.photos} /> */}
            <Route
              exact
              path="/"
              element={
                <PhotoList data={this.state.photos} title={this.state.query} />
              }
            />

            <Route
              exact
              path="/cats"
              element={
                <PhotoList data={this.state.cats} title={this.state.query} />
              }
            />
            <Route
              exact
              path="/dogs"
              element={
                <PhotoList data={this.state.dogs} title={this.state.query} />
              }
            />
            <Route
              exact
              path="/computers"
              element={
                <PhotoList
                  data={this.state.computers}
                  title={this.state.query}
                />
              }
            />
            <Route
              exact
              path="/:query"
              element={<PhotoList results={this.state.photos} title={null} />}
            />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      
    );
  }
}
