import React from "react"
import CardQuestion from "./CardQuestion";


export default function FlashCards({contador, setContador}){

  function FlashElement(props) {
    const [pergunta, setPergunta] = React.useState(false)

    return (
        <>
            { pergunta === false ? 
                <>
                <div className="QuestionHead"  >
                    <h1>{props.numero}</h1>
                    <ion-icon onClick={() => {setPergunta(true)} } className="QuestionPlay" name="play-outline"  />
                </div>
                </> : <CardQuestion pergunta={props.perguntas.Title} alternativa={props.perguntas.Answer} numero={props.numero} contador={contador} setContador={setContador} />
            }
        </>
    )
}

  const objQuestion = [
    {
        Option: "1",
        Title: 'O que é JSX?' ,
        Answer: 'Uma extensão de linguagem do JavaScript'},
    {
        Option: "2",
        Title: 'O React é __',
        Answer: 'uma biblioteca JavaScript para construção de interfaces'},
    {
        Option: "3",
        Title: 'Componentes devem iniciar com __',
        Answer: 'letra maiúscula'},
    {
        Option: "4",
        Title: 'O ReactDOM nos ajuda __ ',
        Answer: 'interagindo com a DOM para colocar componentes React na mesma'},
    {
        Option: "5",
        Title: 'Usamos o npm para __ ',
        Answer: 'gerenciar os pacotes necessários e suas dependências'},
    {
        Option: "6",
        Title: 'Podemos colocar __ dentro do JSX',
        Answer: 'expressões'},
    {
        Option: "7",
        Title: 'Usamos props para __',
        Answer: 'passar diferentes informações para componentes '},
    {
        Option: "8",
        Title: 'Usamos estado (state) para __',
        Answer: 'dizer para o React quais informações quando atualizadas devem renderizar a tela novamente'
      }]


  return(
    <>
      {objQuestion.map((pergunta,index) => <FlashElement perguntas={pergunta} key={index} numero={`Pergunta ${index + 1}`}/>)}
    </>
  )
}