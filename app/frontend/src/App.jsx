import React, { useEffect } from 'react';
// import './app.css';


const App = () => {

  // const all_poke = useState

  const getAllPoke = async () => {
    const requestOptions = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    };

    const response = await fetch("/pokemon/all", requestOptions);

    const data = await response.json();

    return console.log(data);
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
