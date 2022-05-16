import React from "react"
import FlashElement from "./FlashElement";


export default function FlashCards({contador, setContador, icon, setIcon, right, setRight}){
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
      {objQuestion.map((pergunta,index) => <FlashElement contador= {contador} setContador ={setContador} perguntas={pergunta} key={index} numero={`Pergunta ${index + 1}`} icon={icon} setIcon={setIcon} right={right} setRight={setRight} />)}
    </>
  )
}