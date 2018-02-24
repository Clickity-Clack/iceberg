const assert = require('assert')
const sinon = require('sinon')

const Game = require('../game/game')
const Player = require('../game/player')
const Placement = require('../game/placement')
const Polyomino = require('../game/polyomino')
const Coordinate = require('../game/coordinate')

describe('game', function () {
  let mockPlayer1
  let game
  let defaultPlacement
  let STANDARD_CONFIGURATION = {
    BOARD_SIZE: 14,
    PLAYERS: [
      mockPlayer1
    ]
  }

  beforeEach(() => {
    mockPlayer1 = new Player()
    game = Game.make(STANDARD_CONFIGURATION)
    defaultPlacement =  = Placement.make(
      Polyomino.NAME.I1,
      Coordinate.make(0, 0),
      Placement.ROTATION.MIDNIGHT,
      Placement.SIDE.A
    )
  })

  it('gamestate changes after placement', () => {
    let startingGamestate = game.gamestate
    game.place(mockPlayer1, defaultPlacement)
    assert(game.gamestate != startingGamestate)
  }

  it('pushes new gamestate to player after placement', () => {
    sinon.spy(mockPlayer1, "updateGameState")
    game.place(mockPlayer1, defaultPlacement)
    assert(mockPlayer1.updateGameState.calledOnce);
  })

  it('does things', () => {
    
  })
})