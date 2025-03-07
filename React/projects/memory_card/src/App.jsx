import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [score, setScore] = useState(0);
  const [highestScore, setHighestScore] = useState(0);
  const [pokeman, setPokeman] = useState([]);
  const [clickedPokeman, setClickedPokeman] = useState([]);

  useEffect(() => {
    if (score > highestScore) {
      setHighestScore(score);
    }
  }, [score, highestScore]);

  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon?limit=12")
      .then((response) => response.json())
      .then((data) => {
        const promises = data.results.map((pokeman) =>
          fetch(pokeman.url).then((response) => response.json())
        );
        return Promise.all(promises);
      })
      .then((detailedData) => {
        setPokeman(detailedData);
      })
      .catch((error) => {
        console.error("Error fetching Pokémon:", error);
      });
  }, []); 
  function handleClick(name){
    if(clickedPokeman.includes(name)){
      setScore(0)
      setClickedPokeman([])
      shuffleArray()
    }else{
      setScore(score+1)
      setClickedPokeman((prev)=>[...prev,name])
      shuffleArray()
    }
  }
  function shuffleArray(){
    const array = [...pokeman]
    for(let i=array.length-1;i>0;i--){
      let j = Math.floor(Math.random() * (i+1))
      console.log(`i: ${i}, j: ${j}`);
      [array[i],array[j]] = [array[j],array[i]]
    }
    setPokeman(array)
  }

  function Header() {
    return (
      <header className="game-header">
        <h1>Memory Game</h1>
        <div>
          <p>Score: {score}</p>
          <p>Highest Score: {highestScore}</p>
        </div>
      </header>
    );
  }

  function Characters() {
    return (
      <ul className="character-list">
        {pokeman.map((p) => (
          <li
            key={p.name}
            className="character-container"
            onClick={() => handleClick(p.name)}
          >
            <img src={p.sprites.front_default} alt={p.name} />
            <p>{p.name}</p>
          </li>
        ))}
      </ul>
    );
  }
  

  return (
    <>
      <Header />
      <Characters />
    </>
  );
}

export default App;
