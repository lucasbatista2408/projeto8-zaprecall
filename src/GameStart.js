import React from "react"
import FlashCards from "./FlashCards"
import congrats from "./assets/img/party.png"
import almost from "./assets/img/sad.png"

export default function GameStart(){

  const [right, setRight] = React.useState(0)

  const [icon, setIcon] = React.useState([])

  const [contador,setContador] = React.useState(0)

  return (
    <div className="GameStart">
      <header className="GameHeader">
        <img src={process.env.PUBLIC_URL +'/img/image.png'} alt="logo" />
        <h1>ZapRecall</h1>
      </header>
      <div className="GameContent">
        <FlashCards contador={contador} setContador={setContador} icon={icon} setIcon={setIcon} right={right} setRight={setRight} />
      </div>
      <footer className="GameStats">
        { (contador === 8) ? 
        <div className="End">
          {(right === 8) ?
          <>
          <div className="Congrats">
            <img src={congrats} alt="party" />
            <h1>Parabéns!</h1>
          </div>
            <p>Você não esqueceu de <br/> nenhum flashcard!</p>
          </>
           : 
          <>
           <div className="Almost">
             <img src={almost} alt="almost" />
             <h1>Putz...!</h1>
           </div>
             <p>Ainda faltam alguns...Mas não desanime!</p>
          </> }</div> : null}
          <h1> {contador}/8 CONCLUIDOS</h1>
          <div className="icones">
            {icon.map((icon) => <ion-icon name={icon}></ion-icon>)}
          </div>
      </footer>
    </div>
  )
}
