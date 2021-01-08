class GameOfLife {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }

  world () {
    var world = [];
    var i, j;
    for(i = 0; i < this.height; i++) {
      world[i] = new Array
      let j = 0;
      for(j = 0; j < this.width; j++){
        world[i][j] = Math.round(Math.random());
      };
    };
    return world;
  };

  emptyWorld () {
    var emptyWorld = [];
    var i, j;
    for(i = 0; i < this.height; i++) {
      emptyWorld[i] = new Array
      for(j = 0; j < this.width; j++){
        emptyWorld[i][j] = null;
      };
    };
    return emptyWorld;
  }

  checkBoundaries(val1, val2) {
    if (val1 == -1) {
      return val2 -1;
    }
    else if (val1 == val2) {
      return 0;
    }
    else {
      return val1;
    }
  }

  cellVal (row, col, world) {
    var columnLength = world.length;
    var rowLength = world[0].length;
    var i = this.checkBoundaries(row, columnLength);
    var j = this.checkBoundaries(col, rowLength);
    return world[i][j];
  }

  neighborsCount (row, col, world) {
    var i, j;
    var stopI = row +1;
    var stopJ = col +1;
    var fitness = 0;
    var me = this.cellVal(row,col,world);
    for (i=row-1; i<=stopI; i++) {
      for (j=col-1; j<=stopJ; j++) {
        fitness= fitness + this.cellVal(i, j, world)
      }
    }
    fitness = fitness - me
    return fitness;
  }

  checkEvolution (status, neighbors) {
    if (status == 1 && (neighbors == 2 || neighbors == 3)) {
      return 'Live';
    }
    else if (status == 0 && neighbors == 3) {
      return 'Live';
    }
    else {
      return 'Dead';
    }
  }

  readWorld (world) {
    var i, j;
    var nextGen = this.emptyWorld()
    for (i=0; i<world.length; i++) {
      for (j=0;j<world[i].length;j++) {
        var status = this.cellVal(i,j,world)
        var neighbors = this.neighborsCount(i,j,world)
        var life = this.checkEvolution(status, neighbors)
        if (life == 'Live') {
          nextGen[i][j] = 1
        }
        else (
          nextGen[i][j] = 0
        )
      }
    }
    return nextGen;
  }
}

module.exports = GameOfLife;
