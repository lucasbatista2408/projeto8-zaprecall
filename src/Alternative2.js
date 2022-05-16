import React from "react"

export default function Alternatives2(props){
  const [resposta, setResposta] = React.useState(false)
  let color, iconName;

  return(
    <>
      {resposta === false ? 
      <div className="Alternatives">
      <h1>{props.alternativa}</h1>
      <div className="Buttons">
        <button onClick={() => setResposta(true, color={color: "green"}, iconName={name: "checkmark-circle"})} id="01" className="red">Não Lembrei</button>
        <button  id="02" className="orange">Quase não lembrei</button>
        <button  id="03" className="green">Zap</button>
      </div>
    </div> : <div className="QuestionHead"  >
        <h1 className="font-green">{props.numero}</h1>
        <ion-icon style={color} className="QuestionPlay" name="close-circle"></ion-icon>
      </div>  
    }
    </>
  )
}