import React from 'react';
import ReactDOM from 'react-dom';

// Bulma css framework
import "bulma/css/bulma.min.css";

import "./index.css";
import App from './App';

// Components
import HeaderNewTeam from "./components/HeaderNewTeam";
import MainPoke from "./components/MainPoke";


ReactDOM.render(
  <>
    <div>
      <HeaderNewTeam />
        <MainPoke>
        </MainPoke>
    </div>
    </>,
  document.getElementById('root')
);
