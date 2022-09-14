
const canvas = document.querySelector('canvas')

const c = canvas.getContext("2d")

aspectRatio = 55

canvas.width = 16 * aspectRatio
canvas.height = 9 * aspectRatio

bg_color = 'black'

c.fillStyle = bg_color
c.fillRect(0,0,canvas.width, canvas.height)

bg = new Background()

bg.bg_music.play()

game = new Game()

start = new Start()

window.addEventListener('keydown', function(event) {
    switch (event.key) {

        //player events
        case 'ArrowUp':
            game.player.velocity.y = -10
            break
        case 'ArrowDown':
            if(game.player.position.y + game.player.height + game.player.velocity.y >= canvas.height )
            {
                game.player.velocity.y = 0
            }
            else{
                game.player.velocity.y = 20
            }
            break
        case 'ArrowLeft':
            game.player.keys.left.pressed = true
            game.player.lastKey = 'left'
            break
        case 'ArrowRight':
            game.player.keys.right.pressed = true
            game.player.lastKey = 'right'
            break
        case ' ' :
            if(!start.startGameSent && !start.gameStarted)
            {
                start.StartGame()
                if(game.playerLives <= 0 || game.enemyLives <= 0) {
                    game = new Game()
                }
                this.setTimeout(() => {
                    game.decreaseTimer()
                    
                }, 3000)
            }
            if(start.gameStarted)
            {
                game.player.attack()
            }
            break
        case 'Shift':
            if (!game.player.blockDepleted) game.player.isBlocking = true;
            break
    }
})

window.addEventListener('keyup', function(event) {
    
    switch (event.key) {
        case 'ArrowLeft':
            game.player.keys.left.pressed = false
            // player.idle()
            break
        case 'ArrowRight':
            game.player.keys.right.pressed = false
            // player.idle()
            break
        case 'Shift':
            game.player.isBlocking = false
    }
})


oldTime = Date.now()
damageElapsedTime = 0

function animate () {
    
    window.requestAnimationFrame(animate);
    c.fillStyle = bg_color
    c.fillRect(0, 0, canvas.width, canvas.height)


    newTime = Date.now()
    elapsedTime = (newTime - oldTime)
    oldTime = newTime


    bg.updateAndDraw(elapsedTime)

    if(start.gameStarted)
    {
        if(game.readyNewStart)
        {
            start = new Start()
            game.readyNewStart = false
        }
        game.Update(elapsedTime)


    }else
    {
        start.Update(elapsedTime)
    }

}

animate();

