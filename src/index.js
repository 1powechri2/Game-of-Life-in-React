import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

// const game = require('./game-of-life-code/game_of_life');

import GameOfLife from './game-of-life-code/game_of_life'
const gOF = new GameOfLife(100,100);
const firstWorld = gOF.world();

class Cell extends React.Component {
  render() {
    return (
      <span className='cell' style={{backgroundColor: this.props.color}}>
        <span className='bullseye'></span>
      </span>
    )
  }
}

class World extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cells: firstWorld,
    }
  }


  renderCell(val) {
    var color = null;
    if (val == 0) {
      color = 'black'
    } else {
      color = '#EE34D2'
    }
    return (
      <Cell value={val} color={color} />
    );
  }

  evolveGame() {
    var nextGen = gOF.readWorld(this.state.cells);
    this.setState({cells: nextGen});
  }

  render() {
    setInterval(() => {
      this.evolveGame()
    } , 500)

    var cells = this.state.cells.flat();

    return(

      <div className='world'>
        {cells.map(cell => (
          this.renderCell(cell)
        ))}
      </div>
    );
  }
}

class GameLife extends React.Component {
  render() {
    return (
      <section className="game-of-life">
        <World />
      </section>
    )
  }
}

ReactDOM.render(
  <GameLife />,
  document.getElementById('root')
);
