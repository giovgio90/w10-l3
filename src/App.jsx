import "bootstrap/dist/css/bootstrap.min.css";

import "./App.css";
import { createGlobalStyle } from "styled-components";
import MyNav from "./components/MyNav";
import Section from "./components/Section";

import MyFooter from "./components/MyFooter";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import MovieDetails from "./components/MovieDetails";
import TVShows from "./components/TVShows";

// import NavProfile from "./NavProfile";
// import MainProfile from "./components/MainProfile";

const GlobalStyle = createGlobalStyle`
  body {
    background-color: #141414;
  }
`;

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <GlobalStyle />
        <MyNav />
        <Section />
        <Routes>
          <Route path="/tv-shows" element={<TVShows />} />
          <Route path="/movie-details/:movieId" element={<MovieDetails />} />
        </Routes>
        <MyFooter />
      </BrowserRouter>

      {/* <NavProfile />
      <MainProfile /> */}
    </div>
  );
}

export default App;
