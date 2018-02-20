$(document).ready(() => {

  const socket = io()
  const ENTER_BUTTON = $('#enter')
  let IS_GAME_ASKING_FOR_INPUT = false

  socket.on('poll', (gameState) => {
    console.log(gameState)
    IS_GAME_ASKING_FOR_INPUT = true
  })

  ENTER_BUTTON.click(() => {
    console.log('click')
    if (IS_GAME_ASKING_FOR_INPUT) {
      const placement = {
        message: 'goodbye'
      }
      console.log('sending?')
      socket.emit('answer', placement)
      IS_GAME_ASKING_FOR_INPUT = false;
    }
  })

})