import React, { useEffect } from 'react';
// import './app.css';


const App = () => {

  // const all_poke = useState

  const getAllPoke = async () => {
    const requestArgs = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    };

    const response = await fetch("/pokemon/all", requestArgs);

    const data = await response.json();

    console.log(data);
  }

  useEffect(() => {
    getAllPoke();
  }, [])
  return (
    <div>
      <h1>Welcome to PokeTeam</h1>
    </div>
  );
}

export default App;
