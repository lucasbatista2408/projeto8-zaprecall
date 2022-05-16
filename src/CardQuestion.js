import React from "react"
import Alternatives from "./Alternatives"
import setinha from "./assets/img/setinha.png"

export default function CardQuestion({pergunta, alternativa, numero, contador, setContador, icon, setIcon,right, setRight}){

  const [Alternativa, setAlternativa] = React.useState(false)
  return (
      <>
          { Alternativa === false ?
              <div className="CardQuestion">
                <h1>{pergunta}</h1>
                <img onClick={() => {setAlternativa(true)} } src={setinha} alt="setinha"/>
              </div> : <Alternatives alternativa={alternativa} numero={numero} contador={contador} setContador={setContador} icon={icon} setIcon={setIcon} right={right} setRight={setRight}/>
          }
      </>
  )
}
