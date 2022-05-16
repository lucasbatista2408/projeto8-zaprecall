import React from "react"
import FlashCards from "./FlashCards"

export default function GameStart(){

  const [contador,setContador] = React.useState(0)

  return (
    <div className="GameStart">
      <header className="GameHeader">
        <img src={process.env.PUBLIC_URL +'/img/image.png'} alt="logo" />
        <h1>ZapRecall</h1>
      </header>
      <div className="GameContent">
        <FlashCards contador={contador} setContador={setContador} />
      </div>
      <footer className="GameStats">
        <h1> {contador}/8 CONCLUIDOS</h1>
      </footer>
    </div>
  )
}