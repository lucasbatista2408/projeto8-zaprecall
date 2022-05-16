import {Link} from "react-router-dom";

export default function Home(props){
  return (
    <div className="WelcomePage">
    <div className="WelcomeContent">
      <img src={process.env.PUBLIC_URL +'/img/image.png'} alt="logo" />
      <h1>ZapRecall</h1>
      <Link to="/start">
        <button>Iniciar Recall</button>
      </Link>
    </div>
  </div>
  )
}