import React from "react";
import FlashCards from "./FlashCards";
import CardQuestion from "./CardQuestion";
import Alternatives from "./Alternatives";

export default function Content(props){
  
  const [page,setPage] = React.useState(<FlashCards click={openQuestion}/>)

  function openQuestion(){
    setPage(
      <CardQuestion click={openAlternative}/>
    )
  }

  function openAlternative(){
    setPage(
      <Alternatives click={closeQuestion} somar={props.somar} />
    )
  }

  function closeQuestion(){
    setPage(
      <FlashCards click={openQuestion}/>
    )
  }
  
  return(
    <div className="Content">
      {page}
    </div>
  )
}