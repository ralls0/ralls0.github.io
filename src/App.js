import React, { useState } from "react";
import { HashRouter } from "react-router-dom";
import { Route, Routes } from "react-router-dom";
import { HomePage } from "./components/HomePage/HomePage";
import { NavigationBar } from "./components/NavigationBar/NavigationBar";
import { NotFound } from "./components/NotFound/NotFound";
import "./App.css";

const navItems = ["/", "/Project", "/Travel"];

function App() {
  return (
    <HashRouter>
      <NavigationBar navItems={navItems} />
      <Routes>
        <Route path="/" element={<HomePage />} />
        {/* <Route path="/Location" element={<Project />} /> */}
        <Route element={<NotFound />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
