import React, { Component } from "react";
import axios from "axios";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import apiKey from "./components/config";
import "./App.css";
import Search from "./components/Search";
import Nav from "./components/Nav";
import PhotoList from "./components/PhotoList";
import NotFound from "./components/NotFound";


class App extends Component {
  constructor() {
    super();
    this.state = {
      photos: [],
      rain: [],
      tree: [],
      comet: [],
      query: "",
      loading: true,
    };
  }
  componentDidMount() {
    this.performSearch();
    this.performSearch("rain");
    this.performSearch("tree");
    this.performSearch("comet");
  }

  performSearch = (query = "nature") => {
    axios
      .get(
        `https://www.flickr.com/services/rest/?method=flickr.photos.
search&api_key=${apiKey}&tags=${query}&per_page=24&format=json&
nojsoncallback=1`
      )
      .then((response) => {
        if (query === "rain") {
          this.setState({
            apple: response.data.photos.photo,
            loading: false,
          });
        } else if (query === "tree") {
          this.setState({
            tree: response.data.photos.photo,
            loading: false,
          });
        } else if (query === "comet") {
          this.setState({
            comet: response.data.photos.photo,
            loading: false,
          });
        } else {
          this.setState({
            photos: response.data.photos.photo,
            query: query,
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
        <Routes>
          <Route
            exact
            path="/"
            element={
              <PhotoList data={this.state.photos} title={this.state.query} />
            }
          />
          <Route
            exact
            path="/rain"
            element={
              <PhotoList data={this.state.apple} title={this.state.query} />
            }
          />
          <Route
            exact
            path="/tree"
            element={
              <PhotoList data={this.state.tree} title={this.state.query} />
            }
          />
          <Route
            exact
            path="/comet"
            element={
              <PhotoList data={this.state.comet} title={this.state.query} />
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

export default App;
