class Game {



    constructor()
    {
        this.possibleSpritesPlayer = [
            {
            // graverobber : { 
                idle : {
                    imageSrc : 'img/free-3-character-sprite-sheets-pixel-art/GraveRobber/GraveRobber_idle.png',
                    numFrames : 4,
                    loopTime : 1000,
                },
                idle_reverse : {
                    imageSrc : 'img/free-3-character-sprite-sheets-pixel-art/GraveRobber/GraveRobber_idle_reverse.png',
                    numFrames : 4,
                    loopTime : 1000,
                },
                run_forward : {
                    imageSrc : 'img/free-3-character-sprite-sheets-pixel-art/GraveRobber/GraveRobber_run.png',
                    numFrames : 6,
                    loopTime : 700,
                },
                run_back : {
                    imageSrc : 'img/free-3-character-sprite-sheets-pixel-art/GraveRobber/GraveRobber_run_back.png',
                    numFrames : 6,
                    loopTime : 700,
                },
                jump_forward : {
                    imageSrc : 'img/free-3-character-sprite-sheets-pixel-art/GraveRobber/GraveRobber_jump.png',
                    numFrames : 4,
                    loopTime : 1000,
                },
                jump_back : {
                    imageSrc : 'img/free-3-character-sprite-sheets-pixel-art/GraveRobber/GraveRobber_jump_back.png',
                    numFrames : 4,
                    loopTime : 1000,
                },
                attack_forward : {
                    imageSrc : 'img/free-3-character-sprite-sheets-pixel-art/GraveRobber/GraveRobber_attack1.png',
                    numFrames : 6,
                    loopTime : 500,
                    attackFrames : [3,4]
                },
                attack_back : {
                    imageSrc : 'img/free-3-character-sprite-sheets-pixel-art/GraveRobber/GraveRobber_attack1_back.png',
                    numFrames : 6,
                    loopTime : 500,
                    attackFrames : [3,4]
                },
                death : {
                    imageSrc : 'img/free-3-character-sprite-sheets-pixel-art/GraveRobber/GraveRobber_death.png',
                    numFrames : 6,
                    loopTime : 3000
                }
            },
            {
                idle : {
                    imageSrc : 'img/free-3-character-sprite-sheets-pixel-art/Woodcutter/Woodcutter_idle.png',
                    numFrames : 4,
                    loopTime : 1000,
                },
                idle_reverse : {
                    imageSrc : 'img/free-3-character-sprite-sheets-pixel-art/Woodcutter/Woodcutter_idle_back.png',
                    numFrames : 4,
                    loopTime : 1000,
                },
                run_forward : {
                    imageSrc : 'img/free-3-character-sprite-sheets-pixel-art/Woodcutter/Woodcutter_run.png',
                    numFrames : 6,
                    loopTime : 700,
                },
                run_back : {
                    imageSrc : 'img/free-3-character-sprite-sheets-pixel-art/Woodcutter/Woodcutter_run_back.png',
                    numFrames : 6,
                    loopTime : 700,
                },
                jump_forward : {
                    imageSrc : 'img/free-3-character-sprite-sheets-pixel-art/Woodcutter/Woodcutter_jump.png',
                    numFrames : 4,
                    loopTime : 1000,
                },
                jump_back : {
                    imageSrc : 'img/free-3-character-sprite-sheets-pixel-art/Woodcutter/Woodcutter_jump_back.png',
                    numFrames : 4,
                    loopTime : 1000,
                },
                attack_forward : {
                    imageSrc : 'img/free-3-character-sprite-sheets-pixel-art/Woodcutter/Woodcutter_attack1.png',
                    numFrames : 6,
                    loopTime : 500,
                    attackFrames : [3,4]
                },
                attack_back : {
                    imageSrc : 'img/free-3-character-sprite-sheets-pixel-art/Woodcutter/Woodcutter_attack1_back.png',
                    numFrames : 6,
                    loopTime : 500,
                    attackFrames : [3,4]
                },
                death : {
                    imageSrc : 'img/free-3-character-sprite-sheets-pixel-art/Woodcutter/Woodcutter_death.png',
                    numFrames : 6,
                    loopTime : 3000
                }
            },
            {
                idle : {
                    imageSrc : 'img/free-3-character-sprite-sheets-pixel-art/SteamMan/SteamMan_idle.png',
                    numFrames : 4,
                    loopTime : 1000,
                },
                idle_reverse : {
                    imageSrc : 'img/free-3-character-sprite-sheets-pixel-art/SteamMan/SteamMan_idle_back.png',
                    numFrames : 4,
                    loopTime : 1000,
                },
                run_forward : {
                    imageSrc : 'img/free-3-character-sprite-sheets-pixel-art/SteamMan/SteamMan_run.png',
                    numFrames : 6,
                    loopTime : 700,
                },
                run_back : {
                    imageSrc : 'img/free-3-character-sprite-sheets-pixel-art/SteamMan/SteamMan_run_back.png',
                    numFrames : 6,
                    loopTime : 700,
                },
                jump_forward : {
                    imageSrc : 'img/free-3-character-sprite-sheets-pixel-art/SteamMan/SteamMan_jump.png',
                    numFrames : 4,
                    loopTime : 1000,
                },
                jump_back : {
                    imageSrc : 'img/free-3-character-sprite-sheets-pixel-art/SteamMan/SteamMan_jump_back.png',
                    numFrames : 4,
                    loopTime : 1000,
                },
                attack_forward : {
                    imageSrc : 'img/free-3-character-sprite-sheets-pixel-art/SteamMan/SteamMan_attack1.png',
                    numFrames : 6,
                    loopTime : 500,
                    attackFrames : [3,4]
                },
                attack_back : {
                    imageSrc : 'img/free-3-character-sprite-sheets-pixel-art/SteamMan/SteamMan_attack1_back.png',
                    numFrames : 6,
                    loopTime : 500,
                    attackFrames : [3,4]
                },
                death : {
                    imageSrc : 'img/free-3-character-sprite-sheets-pixel-art/SteamMan/SteamMan_death.png',
                    numFrames : 6,
                    loopTime : 3000
                }
            }
        ]
        this.possibleSpritesEnemy = [
            {
            // graverobber : { 
                idle : {
                    imageSrc : 'img/free-3-character-sprite-sheets-pixel-art/GraveRobber/GraveRobber_idle.png',
                    numFrames : 4,
                    loopTime : 1000,
                },
                idle_reverse : {
                    imageSrc : 'img/free-3-character-sprite-sheets-pixel-art/GraveRobber/GraveRobber_idle_reverse.png',
                    numFrames : 4,
                    loopTime : 1000,
                },
                run_forward : {
                    imageSrc : 'img/free-3-character-sprite-sheets-pixel-art/GraveRobber/GraveRobber_run.png',
                    numFrames : 6,
                    loopTime : 700,
                },
                run_back : {
                    imageSrc : 'img/free-3-character-sprite-sheets-pixel-art/GraveRobber/GraveRobber_run_back.png',
                    numFrames : 6,
                    loopTime : 700,
                },
                jump_forward : {
                    imageSrc : 'img/free-3-character-sprite-sheets-pixel-art/GraveRobber/GraveRobber_jump.png',
                    numFrames : 4,
                    loopTime : 100,
                },
                jump_back : {
                    imageSrc : 'img/free-3-character-sprite-sheets-pixel-art/GraveRobber/GraveRobber_jump_back.png',
                    numFrames : 6,
                    loopTime : 700,
                },
                attack_forward : {
                    imageSrc : 'img/free-3-character-sprite-sheets-pixel-art/GraveRobber/GraveRobber_attack1.png',
                    numFrames : 6,
                    loopTime : 500,
                    attackFrames : [3,4]
                },
                attack_back : {
                    imageSrc : 'img/free-3-character-sprite-sheets-pixel-art/GraveRobber/GraveRobber_attack1_back.png',
                    numFrames : 6,
                    loopTime : 500,
                    attackFrames : [3,4]
                },
                death : {
                    imageSrc : 'img/free-3-character-sprite-sheets-pixel-art/GraveRobber/GraveRobber_death.png',
                    numFrames : 6,
                    loopTime : 3000
                }
            },
            {
                idle : {
                    imageSrc : 'img/free-3-character-sprite-sheets-pixel-art/Woodcutter/Woodcutter_idle.png',
                    numFrames : 4,
                    loopTime : 1000,
                },
                idle_reverse : {
                    imageSrc : 'img/free-3-character-sprite-sheets-pixel-art/Woodcutter/Woodcutter_idle_back.png',
                    numFrames : 4,
                    loopTime : 1000,
                },
                run_forward : {
                    imageSrc : 'img/free-3-character-sprite-sheets-pixel-art/Woodcutter/Woodcutter_run.png',
                    numFrames : 6,
                    loopTime : 700,
                },
                run_back : {
                    imageSrc : 'img/free-3-character-sprite-sheets-pixel-art/Woodcutter/Woodcutter_run_back.png',
                    numFrames : 6,
                    loopTime : 700,
                },
                jump_forward : {
                    imageSrc : 'img/free-3-character-sprite-sheets-pixel-art/Woodcutter/Woodcutter_jump.png',
                    numFrames : 4,
                    loopTime : 300,
                },
                jump_back : {
                    imageSrc : 'img/free-3-character-sprite-sheets-pixel-art/Woodcutter/Woodcutter_jump_back.png',
                    numFrames : 4,
                    loopTime : 300,
                },
                attack_forward : {
                    imageSrc : 'img/free-3-character-sprite-sheets-pixel-art/Woodcutter/Woodcutter_attack1.png',
                    numFrames : 6,
                    loopTime : 500,
                    attackFrames : [3,4]
                },
                attack_back : {
                    imageSrc : 'img/free-3-character-sprite-sheets-pixel-art/Woodcutter/Woodcutter_attack1_back.png',
                    numFrames : 6,
                    loopTime : 500,
                    attackFrames : [3,4]
                },
                death : {
                    imageSrc : 'img/free-3-character-sprite-sheets-pixel-art/Woodcutter/Woodcutter_death.png',
                    numFrames : 6,
                    loopTime : 3000
                }
            },
            {
                idle : {
                    imageSrc : 'img/free-3-character-sprite-sheets-pixel-art/SteamMan/SteamMan_idle.png',
                    numFrames : 4,
                    loopTime : 1000,
                },
                idle_reverse : {
                    imageSrc : 'img/free-3-character-sprite-sheets-pixel-art/SteamMan/SteamMan_idle_back.png',
                    numFrames : 4,
                    loopTime : 1000,
                },
                run_forward : {
                    imageSrc : 'img/free-3-character-sprite-sheets-pixel-art/SteamMan/SteamMan_run.png',
                    numFrames : 6,
                    loopTime : 700,
                },
                run_back : {
                    imageSrc : 'img/free-3-character-sprite-sheets-pixel-art/SteamMan/SteamMan_run_back.png',
                    numFrames : 6,
                    loopTime : 700,
                },
                jump_forward : {
                    imageSrc : 'img/free-3-character-sprite-sheets-pixel-art/SteamMan/SteamMan_jump.png',
                    numFrames : 4,
                    loopTime : 300,
                },
                jump_back : {
                    imageSrc : 'img/free-3-character-sprite-sheets-pixel-art/SteamMan/SteamMan_jump_back.png',
                    numFrames : 4,
                    loopTime : 300,
                },
                attack_forward : {
                    imageSrc : 'img/free-3-character-sprite-sheets-pixel-art/SteamMan/SteamMan_attack1.png',
                    numFrames : 6,
                    loopTime : 500,
                    attackFrames : [3,4]
                },
                attack_back : {
                    imageSrc : 'img/free-3-character-sprite-sheets-pixel-art/SteamMan/SteamMan_attack1_back.png',
                    numFrames : 6,
                    loopTime : 500,
                    attackFrames : [3,4]
                },
                death : {
                    imageSrc : 'img/free-3-character-sprite-sheets-pixel-art/SteamMan/SteamMan_death.png',
                    numFrames : 6,
                    loopTime : 3000
                }
            }
        ]

        this.enemySprite = this.possibleSpritesEnemy[Math.floor(Math.random()*this.possibleSpritesEnemy.length)];
        this.playerSprite = this.possibleSpritesPlayer[Math.floor(Math.random()*this.possibleSpritesPlayer.length)]

        this.enemy = new Fighter({
            position: {
                x: canvas.width - (canvas.width / 3),
                y: 0
                },
            velocity: {
                x: 0,
                y: 0
            } ,
            color : 'red',
            offset : {
                x : -48,
                y : 88
            },
            imageSrc: 'img/free-3-character-sprite-sheets-pixel-art/GraveRobber/GraveRobber_idle.png',
            sourceSize: {
                width : 48,
                height : 48
            },
            destSize : { width : 200, height : 200},
            numFrames : 4,
            loopTime : 1000,
            sprites : this.enemySprite
        });

        this.enemy.flipped = true

        this.player = new Fighter({
            position: {
                x: canvas.width / 4,
                y: 0,
            },
            velocity: {
                x: 0,
                y: 0
            },
            color : 'blue',
            offset : {
                x : 48,
                y : 88
            },
            imageSrc: 'img/free-3-character-sprite-sheets-pixel-art/GraveRobber/GraveRobber_idle.png',
            sourceSize : {
                width : 48,
                height : 48,
            },
            destSize : {
                width : 200,
                height : 200
            },
            numFrames : 4,
            loopTime : 1000,
            sprites : this.playerSprite
        }
        );

        this.ai = new EnemyAI({enemy: this.enemy, player: this.player})

        this.winnerImg = new Image()

        this.gameOver = false

        this.timer = 100

        this.gravity = 0.5

        this.readyNewStart = false

        this.playerLives = 3

        this.enemyLives = 3

        this.newGame = false


    }

    decreaseTimer(){
        if(this.timer > 0 && !this.gameOver){
            this.timer --
            setTimeout(this.decreaseTimer.bind(this), 1000)
            if(this.timer == 0)
            {
                this.determineWinner()
            }
        }
        document.querySelector('#timer').innerHTML = this.timer
    }

    determineWinner()
    {
        if(!this.gameOver){
            if(this.player.health == this.enemy.health)
            {
                // this.winnerImg.src = 'img/tie.png'
                this.player.switch_sprite(this.player.sprites.death)
                this.enemy.switch_sprite(this.enemy.sprites.death)
                this.playerLives --
                this.enemyLives --

            }else if(this.player.health > this.enemy.health)
            {
                // this.winnerImg.src = 'img/playerwon.png'
                this.enemy.switch_sprite(this.enemy.sprites.death)
                this.gameOver = true
                this.enemyLives --

            }else {
                // winnerImg.src = 'img/enemywon.png'
                player.switch_sprite(player.sprites.death)
                this.gameOver = true
                this.playerLives --
            }
            this.gameOver = true

            setTimeout(() => {
                this.readyNewStart = true
                this.player.health = 100
                this.enemy.health = 100
                this.enemy = new Fighter({
                    position: {
                        x: canvas.width - (canvas.width / 3),
                        y: 0
                        },
                    velocity: {
                        x: 0,
                        y: 0
                    } ,
                    color : 'red',
                    offset : {
                        x : -48,
                        y : 88
                    },
                    imageSrc: 'img/free-3-character-sprite-sheets-pixel-art/GraveRobber/GraveRobber_idle.png',
                    sourceSize: {
                        width : 48,
                        height : 48
                    },
                    destSize : { width : 200, height : 200},
                    numFrames : 4,
                    loopTime : 1000,
                    sprites : this.enemySprite
                });
        
                this.enemy.flipped = true
        
                this.player = new Fighter({
                    position: {
                        x: canvas.width / 4,
                        y: 0,
                    },
                    velocity: {
                        x: 0,
                        y: 0
                    },
                    color : 'blue',
                    offset : {
                        x : 48,
                        y : 88
                    },
                    imageSrc: 'img/free-3-character-sprite-sheets-pixel-art/GraveRobber/GraveRobber_idle.png',
                    sourceSize : {
                        width : 48,
                        height : 48,
                    },
                    destSize : {
                        width : 200,
                        height : 200
                    },
                    numFrames : 4,
                    loopTime : 1000,
                    sprites : this.playerSprite
                }
                );
        
                this.ai = new EnemyAI({enemy: this.enemy, player: this.player})
        
                this.winnerImg = new Image()
        
                this.gameOver = false
        
                this.timer = 100

            }, 5000)
        }

    }

    setupKeyboard(){

        window.addEventListener('keydown', function(event) {
            switch (event.key) {
        
                //player events
                case 'ArrowUp':
                    this.player.velocity.y = -10
                    break
                case 'ArrowDown':
                    if(this.player.position.y + this.player.height + this.player.velocity.y >= canvas.height )
                    {
                        this.player.velocity.y = 0
                    }
                    else{
                        this.player.velocity.y = 20
                    }
                    break
                case 'ArrowLeft':
                    this.player.keys.left.pressed = true
                    this.player.lastKey = 'left'
                    break
                case 'ArrowRight':
                    this.player.keys.right.pressed = true
                    this.player.lastKey = 'right'
                    break
                case ' ' :
                    this.player.attack()
                    break
                case 'Shift':
                    if (!this.player.blockDepleted) this.player.isBlocking = true;
                    break
            }
        })
        
        window.addEventListener('keyup', function(event) {
            
            switch (event.key) {
                case 'ArrowLeft':
                    this.player.keys.left.pressed = false
                    break
                case 'ArrowRight':
                    this.player.keys.right.pressed = false
                    break
                case 'Shift':
                    this.player.isBlocking = false
            }
        })
    }

    StartGame()
    {

    }

    gameLoop(elapsedTime)
    {

        this.ai.nextState()

        this.ai.executeState()
    
        this.player.move()
    
        this.player.updateFighter()
    
        this.enemy.updateFighter()
    
        this.player.animateSprite(elapsedTime)
    
        this.enemy.animateSprite(elapsedTime)
    
        this.player.detectHit({otherPlayer: this.enemy, isPlayer : true})
    
        this.enemy.detectHit({otherPlayer: this.player, isPlayer : false})
    
        if(this.enemy.health <= 0 || this.player.health <= 0 && !this.gameOver)
        {
            this.determineWinner()
        } 
    
        if(this.player.successfulAttack){
            c.font = '34px KulminoituvaRegular'
            c.fillStyle = 'white'
            c.fillText  (this.player.damageDone,
                this.enemy.position.x + this.enemy.width * 2,
                this.enemy.position.y + this.enemy.height/2 - this.player.damageBoxOffset);
    
                this.player.damageBoxOffset += 3
        }
        if(this.enemy.successfulAttack)
        {
            c.font = '34px KulminoituvaRegular'
            c.fillStyle = 'red'
            c.fillText  (this.enemy.damageDone,
                this.player.position.x + this.player.width * 2,
                this.player.position.y + this.player.height/2 - this.enemy.damageBoxOffset);
    
                this.enemy.damageBoxOffset += 3
        }
    
          
        document.querySelector('#enemyHealth').style.width = this.enemy.health + '%'
    
        document.querySelector('#playerHealth').style.width = this.player.health + '%'
    
        document.querySelector('#enemyBlockTime').style.width = this.enemy.blockTimeLeft / 10 + '%'
        document.querySelector('#playerBlockTime').style.width = this.player.blockTimeLeft / 10 + '%'
    
    }

    Update(elapsedTime)
    {
        if(!this.gameOver) { 
            this.gameLoop(elapsedTime)
        }
        else
        {
    
            if(this.player.health == this.enemy.health)
            {
                this.player.die(elapsedTime)
                this.enemy.die(elapsedTime)
    
            }else if(this.player.health > this.enemy.health)
            {
                this.player.move()
    
                this.player.updateFighter()
    
                this.player.animateSprite(elapsedTime)
    
                this.enemy.die(elapsedTime)
    
                if(this.enemy.position.y + this.enemy.destHeight + this.enemy.velocity.y >= canvas.height - 50)
                {
                    this.enemy.velocity.y = 0
                } 
                else {
                    this.enemy.velocity.y += this.gravity
                }
    
                this.enemy.position.y += this.enemy.velocity.y
    
    
            }
            else {
                this.ai.nextState()
    
                this.ai.executeState()
    
                this.enemy.updateFighter()
    
                this.enemy.animateSprite(elapsedTime)
    
                this.player.die(elapsedTime)
    
                if(this.player.position.y + this.player.destHeight + this.player.velocity.y >= canvas.height - 50)
                {
                    this.player.velocity.y = 0
                } 
                else {
                    this.player.velocity.y += this.gravity
                }
    
                this.player.position.y += this.player.velocity.y
    
            }
            
            if(this.playerLives <= 0)
            {
                this.winnerImg.src = 'img/enemywon.png'
                c.drawImage(this.winnerImg, (canvas.width / 2) - (this.winnerImg.width /2), (canvas.height / 2) - (this.winnerImg.height /2))
                
            }else if(this.enemyLives <= 0)
            {
                this.winnerImg.src = 'img/playerwon.png'
                c.drawImage(this.winnerImg, (canvas.width / 2) - (this.winnerImg.width /2), (canvas.height / 2) - (this.winnerImg.height /2))
                
            }
        }
    
    
        this.player.draw()
        this.enemy.draw()
        this.player.drawBlock({isPlayer : true})
        this.enemy.drawBlock({isPlayer : false})
        this.drawLivesLeftImages()
    }

    drawLivesLeftImages()
    {
        var w = 80
        var h = 80
        for(var i = 0; i < this.playerLives; i++)
        {
            c.drawImage(this.player.sprites.idle.image,
                 0, 0, 
                 this.player.sourceWidth, 
                 this.player.sourceHeight, 
                 i * w * 0.7, 
                 canvas.height - h, 
                 w, 
                 h)
        }
        for(var i = 1; i <= this.enemyLives; i++)
        {
            c.drawImage(this.enemy.sprites.idle.image,
                 0, 0, 
                 this.enemy.sourceWidth, 
                 this.enemy.sourceHeight, 
                 canvas.width - (i * w * 0.7), 
                 canvas.height - h, 
                 w, 
                 h)
        }

    }


}