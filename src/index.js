import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';


class GameOfLife extends React.Component {
  render() {
    return (
      <div className="game-of-life">
        <h1>HELLO THERE!</h1>
      </div>
    )
  }
}

ReactDOM.render(
  <GameOfLife />,
  document.getElementById('root')
);
