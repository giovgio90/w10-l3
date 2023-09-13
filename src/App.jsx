import "bootstrap/dist/css/bootstrap.min.css";

import "./App.css";
import { createGlobalStyle } from "styled-components";
import MyNav from "./components/MyNav";
import Section from "./components/Section";
import Main from "./components/Main";
import MyFooter from "./components/MyFooter";

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
      <GlobalStyle />
      <MyNav />
      <Section />
      <Main />
      <MyFooter />

      {/* <NavProfile />
      <MainProfile /> */}
    </div>
  );
}

export default App;
