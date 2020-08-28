import React, { StrictMode } from "react";
import "../styles/App.scss";
import TopBar from "./TopBar";
import MainContainer from "./MainContainer";

const App = () => {
  return (
    <StrictMode>
      <TopBar />
      <MainContainer />
    </StrictMode>
  );
};

export default App;
