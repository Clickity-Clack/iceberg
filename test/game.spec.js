const assert = require('assert')
const sinion = require('sinon')

const Game = require('../game/game')
const Player = require('../game/player')
const Placement = require('../game/placement')
const Polyomino = require('../game/polyomino')
const Coordinate = require('../game/coordinate')


describe('game', function () {
  let game
  let mockPlayer1 = sinion.mock(Player.make())
  let STANDARD_CONFIGURATION = {
    BOARD_SIZE: 14,
    PLAYERS: [
      mockPlayer1
    ]
  }

  beforeEach(() => {
    game = Game.make(STANDARD_CONFIGURATION)
  })

  it('hi', () => {
    const EXPECTED_STATE = {

    }
    mockPlayer1.expects('updateGameState').once()
    let placement = Placement.make(Polyomino.NAME.I1, Coordinate.make(0, 0), Placement.ROTATION.MIDNIGHT, Placement.SIDE.A)
    game.place(mockPlayer1, placement)
    mockPlayer1.verify()
  })
})