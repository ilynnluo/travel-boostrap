import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { TopHeader, LogoHeader, TopMenu, FilterForm } from "./components"

function App() {
  return (
    <>
      <TopHeader />
      <LogoHeader />
      <TopMenu />
      <FilterForm />
    </>
  );
}

export default App;
