import React from "react"

export default function Alternatives({alternativa, numero, contador, setContador, icon, setIcon, right, setRight}){

  const newIcon = [...icon]
  
  const [resposta, setResposta] = React.useState(
  <div className="Alternatives">
    <h1>{alternativa}</h1>
    <div className="Buttons">
      <button onClick={Red} className="red">Não Lembrei</button>
      <button onClick={Orange} className="orange">Quase não lembrei</button>
      <button onClick={Green} className="green">Zap</button>
    </div>
  </div>)

  function Green(){
    setRight(right+1)
    setContador(contador+1)
    newIcon.push("checkmark-circle")
    setIcon(newIcon)
    setResposta(
      <div className="QuestionHead"  >
        <h1 className="font-green">{numero}</h1>
        <ion-icon style={{color: "green"}} className="QuestionPlay" name="checkmark-circle"></ion-icon>
      </div>
    )
  }

  function Orange(){
    setRight(right+1)
    setContador(contador+1)
    newIcon.push("help-circle")
    setIcon(newIcon)
    setResposta(
      <div className="QuestionHead"  >
        <h1 className="font-orange">{numero}</h1>
        <ion-icon style={{color: "orange"}}className="QuestionPlay" name="help-circle"></ion-icon>
      </div>
    )
  }

  function Red(){
    setContador(contador+1)
    newIcon.push("close-circle")
    setIcon(newIcon)
    setResposta(
      <div className="QuestionHead"  >
        <h1 className="font-red">{numero}</h1>
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

