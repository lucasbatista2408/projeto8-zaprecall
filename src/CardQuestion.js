import React from "react"
import Alternatives from "./Alternatives"
import setinha from "./assets/img/setinha.png"

export default function CardQuestion({props, contador, setContador}){

  const [Alternativa, setAlternativa] = React.useState(false)
  return (
      <>
          { Alternativa === false ?
              <div className="CardQuestion">
                <h1>{props.pergunta}</h1>
                <img onClick={() => {setAlternativa(true)} } src={setinha} alt="setinha"/>
              </div> : <Alternatives alternativa={props.alternativa} numero={props.numero} contador={contador} setContador={setContador}/>
          }
      </>
  )
}
