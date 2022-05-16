import React from "react"
import GameStart from "./GameStart"

export default function Alternatives({props, contador, setContador}){
  
  const [resposta, setResposta] = React.useState(
  <div className="Alternatives">
    <h1>{props.alternativa}</h1>
    <div className="Buttons">
      <button onClick={Red} className="red">Não Lembrei</button>
      <button onClick={Orange} className="orange">Quase não lembrei</button>
      <button onClick={Green} className="green">Zap</button>
    </div>
  </div>)

  function Green(){
    setContador(contador+1)
    setResposta(
      <div className="QuestionHead"  >
        <h1 className="font-green">{props.numero}</h1>
        <ion-icon style={{color: "green"}} className="QuestionPlay" name="checkmark-circle"></ion-icon>
      </div>
    )
  }

  function Orange(){
    setContador(contador+1)
    setResposta(
      <div className="QuestionHead"  >
        <h1 className="font-orange">{props.numero}</h1>
        <ion-icon style={{color: "orange"}}className="QuestionPlay" name="help-circle"></ion-icon>
      </div>
    )
  }

  function Red(){
    setContador(contador+1)
    setResposta(
      <div className="QuestionHead"  >
        <h1 className="font-red">{props.numero}</h1>
        <ion-icon style={{color: "red"}} className="QuestionPlay" name="close-circle"></ion-icon>
      </div>
    )
  }

  return (
      <>
        {resposta}
      </>
  )
}

