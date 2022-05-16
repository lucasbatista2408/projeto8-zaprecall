import React from "react"
import GameStart from "./GameStart"
import Home from "./Home"
import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function App(){

  return(
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/start" element={<GameStart />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}