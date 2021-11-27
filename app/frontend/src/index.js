import React from 'react';
import ReactDOM from 'react-dom';

// Bulma css framework
import "bulma/css/bulma.min.css";

import "./index.css";

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
