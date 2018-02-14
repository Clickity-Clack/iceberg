const assert = require('assert')
const sinon = require('sinon')

const Game = require('../game/game')
const Player = require('../game/player')
const Placement = require('../game/placement')
const Polyomino = require('../game/polyomino')
const Coordinate = require('../game/coordinate')


describe('game', function () {
  let game
  let sandbox
  let mockPlayer1
  let STANDARD_CONFIGURATION = {
    BOARD_SIZE: 14,
    PLAYERS: [
      mockPlayer1
    ]
  }
  let p;

  beforeEach(() => {
    game = Game.make(STANDARD_CONFIGURATION)
    p = new Player();
    mockPlayer1 = sinon.spy(p, 'updateGameState')
  })

  it('hi', () => {
    let placement = Placement.make(
      Polyomino.NAME.I1,
      Coordinate.make(0, 0),
      Placement.ROTATION.MIDNIGHT,
      Placement.SIDE.A
    )
    game.place(p, placement)
    assert(p.updateGameState.calledOnce);
  })
})