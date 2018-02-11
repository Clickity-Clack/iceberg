const assert = require('assert')
const sinion = require('sinon')

const Game = require('../game/game')
const Player = require('../game/player')
const Placement = require('../game/placement')
const Polyomino = require('../game/polyomino')
const Coordinate = require('../game/coordinate')


describe('game', function () {
  let game
  let player1 = sinion.mock(Player)
  let STANDARD_CONFIGURATION = {
    BOARD_SIZE: 14,
    PLAYERS: [
      player1
    ]
  }

  beforeEach(() => {
    game = Game.make(STANDARD_CONFIGURATION)
  })

  it('hi', () => {
    const EXPECTED_STATE = {

    }
    player1.expects('updateGameState').calledOnce() // TODO this part
    let placement = Placement.make(Polyomino.NAME.I1, Coordinate.make(0, 0), Placement.ROTATION.MIDNIGHT, Placement.SIDE.A)
    game.place(player1, placement)


  })
})