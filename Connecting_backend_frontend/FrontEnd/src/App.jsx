import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";

function App() {
  const [jokes, setJokes] = useState([]);
  useEffect(() => {
    axios
      .get("/api/jokes")
      .then((response) => {
        setJokes(response.data);
        // console.log(jokes);
      })
      .catch((error) => console.log(error));
  });
  return (
    <>
      <h1>All Jokes</h1>
      <p>Jokes: {jokes.length}</p>
      {jokes.map((joke, index) => {
        return(
        <div key={joke.id}>
          <h3>{joke.title}</h3>
          <h3>{joke.content}</h3>
        </div>)
      })}
    </>
  );
}

export default App;
