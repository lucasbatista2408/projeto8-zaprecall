import React from 'react';
import CardQuestion from './CardQuestion';
export default function FlashElement({contador, setContador,perguntas, key, numero, icon, setIcon, right, setRight}){

    const [pergunta, setPergunta] = React.useState(false)

    return (
        <>
            { pergunta === false ? 
                <>
                <div className="QuestionHead"  >
                    <h1>{numero}</h1>
                    <ion-icon onClick={() => {setPergunta(true)} } className="QuestionPlay" name="play-outline"  />
                </div>
                </> : <CardQuestion pergunta={perguntas.Title} alternativa={perguntas.Answer} numero={numero} contador={contador} setContador={setContador} icon={icon} setIcon={setIcon} right={right} setRight={setRight} />
            }
        </>
    )
}