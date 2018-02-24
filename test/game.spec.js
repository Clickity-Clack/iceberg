const assert = require('assert')
const sinon = require('sinon')

const Game = require('../game/game')
const Player = require('../game/player')
const Placement = require('../game/placement')
const Polyomino = require('../game/polyomino')
const Coordinate = require('../game/coordinate')

describe('game', () => {
  let sandbox = sinon.createSandbox()
  let player1
  let updateGameStatePlayer1Stub
  let game
  let defaultPlacement
  let STANDARD_CONFIGURATION = {
    BOARD_SIZE: 14,
    PLAYERS: [
      player1
    ]
  }

  describe('place', () => {
    beforeEach(() => {
      player1 = new Player('A')
      updateGameStatePlayer1Stub = sinon.stub(player1, 'updateGameState')
      game = Game.make(STANDARD_CONFIGURATION)
      defaultPlacement = Placement.make(
        Polyomino.NAME.I1,
        Coordinate.make(0, 0),
        Placement.ROTATION.MIDNIGHT,
        Placement.SIDE.A
      )

      let startingGamestate = {
        "placements" : [],
        "players" : {
          "1" : {
            "polyominoes" :[ "O4", "I1", "Y", "P" ],
            "score" : 0
          },
          "2" : {
            "polyominoes" :[ "O4", "I1", "Y", "P" ],
            "score" : 0
          },
        },
        "turnRotation" : [ "1", "2" ],
        "whoseTurn" : "1"
      }

      let gameStateAfterOneTurn = {
        "placements" : [{
          "name" : "I1",
          "coordinate" : {
              "x" : 0,
              "y" : 0
          }, 
          "roation" : "MIDNIGHT",
          "side" : "A"
        }],
        "players" : {
          "1" : {
            "polyominoes" :[ "O4", "Y", "P" ],
            "score" : 123
          },
          "2" : {
            "polyominoes" :[ "O4", "I1", "Y", "P" ],
            "score" : 123
          },
        },
        "turnRotation" : [ "1", "2" ],
        "whoseTurn" : "2"
      }
    })

    it('empty board is correct', () => {
      assert(game.gamestate == startingGamestate)
    })    

    it('gamestate changes after placement', () => {
      let startingGamestate = game.gamestate
      game.place(player1, defaultPlacement)
      assert(game.gamestate != startingGamestate)
    })

    it('GameState\'s board property updates properly', () => {
      game.place(player1, defaultPlacement)
      assert(game.gamestate == gameStateAfterOneTurn) // TODO: do we use '==' ? 
    })

    it('pushes new gamestate to player after placement', () => {
      sinon.spy(player1, "updateGameState")
      game.place(player1, defaultPlacement)
      assert(player1.updateGameState.calledOnce)
    })

    it('pushes new gamestate to player after placement', () => {
      game.place(player1, defaultPlacement)
      assert(updateGameStatePlayer1Stub.withArgs(gameStateAfterOneTurn))
    })

    it('contains no obscure movie references', () => {
      //none!
      assert(true)
    })
  })
})