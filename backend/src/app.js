import React, { useEffect } from "react";
import "./App.css";
import Cases from "./components/Cases";
import PoserQuestion from "./components/PoserQuestion";
import marion from "./components/marion.png";
import rien from "./components/rien.png"
import axios from "axios";
import Progress from "./components/Progress";
import QuestionImage from "./components/QuestionImage";
import Setup1 from "./components/Setup1";
import Setup2 from "./components/Setup2";
import Setup3 from "./components/Setup3";
import NombreJoueurs from "./components/NombreJoueurs";
function App() {
  // Plateau
  const board = [
    {
      categorie: "Arrivée",
    },
    {
      categorie: "Sport",
    },
    {
      categorie: "Film",
    },
    {
      categorie: "Musique",
    },
    {
      categorie : "Images"
      },
    {
      categorie: "Géographie",
    },
    {
      categorie: "Départ",
    },
  ];
  //API dans des variables
  let [geo, setGeo] = React.useState("");
  useEffect(() => {
    axios
      .get(
        "http://localhost:5050/api/geo"
      )
      .then((result) => setGeo(result.data)).catch(err => console.log(err));
  }, []);
  let [sport, setSport] = React.useState("");
  useEffect(() => {
    axios
      .get(
        "http://localhost:5050/api/sport"
      )
      .then((result) => setSport(result.data)).catch(err => console.log(err));
  }, []);
  let [film, setFilm] = React.useState("");
  useEffect(() => {
    axios
      .get(
        "http://localhost:5050/api/film"
      )
      .then((result) => setFilm(result.data)).catch(err => console.log(err));
  }, []);
  let [images, setImages] = React.useState("");
  useEffect(() => {
    axios
      .get(
        "http://localhost:5050/api/images"
      )
      .then((result) => setImages(result.data)).catch(err => console.log(err));
  }, []);
  // States utilisés pendant le jeu
  let [player1, setPlayer1] = React.useState(board.length - 1);
  let [player2, setPlayer2] = React.useState(board.length - 1);
  let [player3, setPlayer3] = React.useState(board.length - 1);
  let [questionPosee, setQuestionPosee] = React.useState("Player 1, quel est ton nom et ton perso?");
  let [answer, setAnswer] = React.useState("");
  let rey = "./rey.png"
  let julien = "./julien.png"
  let [currentPlayer, setCurrentPlayer] = React.useState("");
  let [a, setA] = React.useState(Math.floor(Math.random() * 20));
  let [b, setB] = React.useState(Math.floor(Math.random() * 20));
  let [c, setC] = React.useState(Math.floor(Math.random() * 20));
  let [d, setD] = React.useState(Math.floor(Math.random() * 20));
  let [x, setX] = React.useState(0);
  let [player1Name, setPlayer1Name] = React.useState("");
  let [player2Name, setPlayer2Name] = React.useState("");
  let [player3Name, setPlayer3Name] = React.useState("");
  let [questionImageOpen, setQuestionImageOpen] = React.useState(false);
  let [imageSource, setImageSource]= React.useState("images[a].pic")
  let [nbJoueurs, setNbJoueurs] = React.useState(true)
let [displayNb, setDisplayNb] =React.useState(true)
  let [choice, setChoice] = React.useState(rien);
  let [choice2, setChoice2] = React.useState(rien);
  let [choice3, setChoice3] = React.useState(rien);
  let [martine, setMartine] = React.useState(true);
  let [deden, setDeden] = React.useState(false);
  let [sarah, setSarah] = React.useState(false);
  let musique = [  {
    son: "./I_say_a_little_prayer.mp3",
    correct_answer: "i say a little prayer"
  },
  {
    son: "./Could_you_be_loved.mp3",
    correct_answer: "could you be loved"
  },
  {
    son: "./Dancing_queen.mp3",
    correct_answer: "dancing queen"
  },
  {
    son: "./Is_this_love.mp3",
    correct_answer: "is this love"
  },
  {
    son: "./Rivers_of_babylon.mp3",
    correct_answer: "rivers of babylon"
  },
  {
    son: "./wonderwall.mp3",
    correct_answer: "wonderwall"
  },  {
    son: "./wewillrockyou.mp3",
    correct_answer: "we will rock you"
  },
  {
    son: "./wakawaka.mp3",
    correct_answer: "waka waka"
  },
  {
    son: "./respect.mp3",
    correct_answer: "respect"
  },
  {
    son: "./marciabaila.mp3",
    correct_answer: "marcia baila"
  },
  {
    son: "./kiss.mp3",
    correct_answer: "kiss"
  },
  {
    son: "./leslacsduconnemara.m4a",
    correct_answer: "les lacs du connemara"
  },
  {
    son: "./quandlamusiqueestbonne.m4a",
    correct_answer: "quand la musique est bonne"
  },
  {
    son: "./itsamansmansmansworld.m4a",
    correct_answer: "it's a man's man's man's world"
  },
  {
    son: "./ifeelgood.m4a",
    correct_answer: "i feel good"
  },
  {
    son: "./getonup.m4a",
    correct_answer: "get on up"
  },
  {
    son: "./confidencepourconfidence.m4a",
    correct_answer: "confidence pour confidence"
  },
    {
    son: "./getonup.m4a",
    correct_answer: "get on up"
  },
  {
    son: "./confidencepourconfidence.m4a",
    correct_answer: "confidence pour confidence"
  },
]
  let [musicPlaying, setMusicPlaying] = React.useState(new Audio(musique[d].son));
  // Mise en place des fonctions paramétrées
  function laQuestion(player, i) {
    if (board[player].categorie === "Géographie") {
      setQuestionImageOpen(false);
      geo && setQuestionPosee(geo[i].question);
    } else if (board[player].categorie === "Sport") {
      setQuestionImageOpen(false);
      sport && setQuestionPosee(sport[i].question);
    } else if (board[player].categorie === "Film") {
      setQuestionImageOpen(false);
      film && setQuestionPosee(film[i].question);
    } else if (board[player].categorie === "Musique") {
      setQuestionImageOpen(false);
      setQuestionPosee("Quel est le titre de cette chanson?")
      musicPlaying.play()
    } else if (board[player].categorie === "Images") {
      images && setImageSource(images[i].pic)
      images && setQuestionImageOpen(true);
      images && setQuestionPosee("Qui est sur cette photo?");
    }
  }
  function laReponse(player, setPlayer, i) {
    setAnswer("");
    if (board[player].categorie === "Géographie") {
      answerFunction(geo, player, setPlayer, i);
    } else if (board[player].categorie === "Sport") {
      answerFunction(sport, player, setPlayer, i);
    } else if (board[player].categorie === "Film") {
      answerFunction(film, player, setPlayer, i);
    } else if (board[player].categorie === "Musique") {
      musicPlaying.pause()
       if (answer === musique[d].correct_answer) {
        setPlayer((player -= 1));
      }
      setD(d+=1)
      if (d === 19){
        setD(0)
       }
      setMusicPlaying(new Audio (musique[d].son) )
    }  else if (board[player].categorie === "Images") {
        answerFunction(images, player, setPlayer, i);
    }
  }
  //Barre progression
    let rep = document.querySelector(".push");
    let elem = document.querySelector(".barre");
      let interval = undefined;
      let [run, setRun] = React.useState(false);
      let [progress, setProgress] = React.useState(0);
    //starter
    useEffect(()=> {
    if (run) {
      interval = setInterval(() => {
      setProgress((prev)=> prev +1);
    }, 100);
    } else {
    clearInterval();
    }
    }, [run]);
    //animation barre
    useEffect(() =>{
      if(run){
        elem.style.width = progress + "%";
      }
    })
    //end timer
    useEffect(() => {
      if (progress === 100) {
        setRun(false);
        clearInterval(interval);
        rep.click();
      }
    }, [progress]);
  function answerFunction(cat, player, setPlayer, i) {
    if (answer.toLowerCase() === cat[i].correct_answer.toLowerCase()) {
      setPlayer((player -= 1));
    }
  }
  if (x === 6) {
    setX(3);
  }
  console.log(nbJoueurs);
  // Lancement du jeu au clic
  function play(event) {
    event.preventDefault();
    setAnswer("");
    setX((x += 1));
    console.log(d)
    musique && console.log(musique[d].son);
    musique && console.log(musique[d].correct_answer);
    // geo && console.log(geo[a].correct_answer);
    // geo && console.log(geo[b].correct_answer);
    // film && console.log(film[a].correct_answer);
    // film && console.log(film[b].correct_answer);
    // sport && console.log(sport[a].correct_answer);
    // sport && console.log(sport[b].correct_answer);
    if (x === 1) {
      setMartine(!martine);
      setDeden(!deden);
      setQuestionPosee("Player 2, quel est ton nom et ton perso?");
      setPlayer1Name(answer);
    }
    if (x === 2) {
      setDeden(!deden);
      setSarah(!sarah);
      setQuestionPosee("Player 3, quel est ton nom et ton perso?");
      setPlayer2Name(answer);
    }
    if (x === 3) {
      setSarah(!sarah);
      setPlayer3Name(answer);
      console.log(player1Name);
      console.log(player2Name);
      console.log(player3Name);
      setPlayer1((player1 -= 1));
      setPlayer2((player2 -= 1));
      setPlayer3((player3 -= 1));
      laQuestion(player1, a);
      setCurrentPlayer(`${player1Name} à ton tour`);
      setRun(true)
    }
    if (x === 4) {
      laQuestion(player2, b);
      laReponse(player1, setPlayer1, a);
      setA(Math.floor(Math.random() * 20));
      setCurrentPlayer(`${player2Name} à ton tour`);
      setRun(true)
    }
    if (x === 5) {
      laQuestion(player3, c);
      laReponse(player2, setPlayer2, b);
      setB(Math.floor(Math.random() * 20));
      setCurrentPlayer(`${player3Name} à ton tour`);
      setRun(true)
    }
    if (x === 6) {
      laQuestion(player1, a);
      laReponse(player3, setPlayer3, c);
      setC(Math.floor(Math.random() * 20));
      setCurrentPlayer(`${player1Name} à ton tour`);
      setRun(true)
    }
  }
  // Alert du gagnant
  if (player1 === 0) {
    alert(`Bravo ${player1Name} tu as gagné`);
  }
  if (player2 === 0) {
    alert(`Bravo ${player2Name} tu as gagné`);
  }
  if (player3 === 0) {
    alert(`Bravo ${player3Name} tu as gagné`);
  }
  return (
    <div className="jeu">
   { displayNb ? <NombreJoueurs nbJoueurs={nbJoueurs} setNbJoueurs ={setNbJoueurs} displayNb={displayNb} setDisplayNb={setDisplayNb} /> : null}
      <div className="plateau">
        {board.map((element, index) => (
          <Cases
            key={element.categorie}
            nom={element.categorie}
            player1Place={player1 === index ? choice : rien}
            player2Place={player2 === index ? choice2 : rien}
            player3Place={player3 === index ? choice3 : rien}
          />
        ))}
      </div>
      <div className="questionnaire">
        <div className="poserQuestion">
          <PoserQuestion
            question={questionPosee}
            currentPlayer={currentPlayer}
          />
          <div className="setup">
          {martine ? (
            <Setup1
              choice={choice}
              setChoice={setChoice}
              player1setup={julien}
              player2setup={rey}
              player3setup={marion}
            />
          ) : null}
          {deden ? (
            <Setup2
              choice2={choice2}
              setChoice2={setChoice2}
              player1setup={julien}
              player2setup={rey}
              player3setup={marion}
            />
          ) : null}
          {sarah ? (
            <Setup3
              choice3={choice3}
              setChoice3={setChoice3}
              player1setup={julien}
              player2setup={rey}
              player3setup={marion}
            />
          ) : null}
        </div>
          {questionImageOpen ? <QuestionImage imageSource={imageSource}/> : null }
        </div>
        {nbJoueurs ? <div>
        <form className="reponse" onSubmit={(event) => {play(event); setProgress(0)}}>
          <input
            type={"text"}
            value={answer}
            onChange={(e) => {
              setAnswer(e.target.value);
            }}
          ></input>
          <button type={"submit"} className="push"> Réponse</button>
        </form>
        </div> : null}
        <div>
          <Progress />
        </div>
      </div>
    </div>
  );
}
export default App;