import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { TopHeader, LogoHeader, TopMenu, SearchBanner } from "./components"

function App() {
  return (
    <>
      <TopHeader />
      <LogoHeader />
      <TopMenu />
      <SearchBanner />
    </>
  );
}

export default App;
