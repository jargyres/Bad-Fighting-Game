class Fighter extends Sprite{

    constructor ({position, velocity, color, offset, imageSrc, destSize, sourceSize, numFrames, loopTime, sprites}) {
        
        super({position, imageSrc, sourceSize: sourceSize, destSize : destSize, isGif: false, numFrames, loopTime})

        this.sprites = sprites

        this.currentSprite = this.sprites.idle


        for(const sprite in sprites)
        {
            sprites[sprite].image = new Image()
            sprites[sprite].image.src = sprites[sprite].imageSrc
        }

        
        this.position = position
        this.velocity = velocity

        this.color = color
        this.blockColor = 'yellow'

        this.height = 150
        this.width = 50
        // this.width = 300
        // this.height = 300

        this.lastKey

        this.isAttacking = false
        this.successfulAttack = false
        this.damageDone = 0
        this.damageBoxOffset = 0
        this.isBlocking = false
        this.blockDepleted = false
        this.isRunning = false
        this.isIdle = false
        this.isJumping = false
        this.isDead = false
        this.isDying = false
        this.facingForward = true

        this.attackTime

        this.blockTime = 1000
        this.blockTimeLeft = this.blockTime

        this.blockBorderWidth = 5
        this.blockPadding = 1

        this.health = 100

        this.gravity = 0.5

        this.keys = {
            left : {
                pressed : false
            },
            right : {
                pressed : false
            }
        }
        this.attackBox = {
            position : {
                x : this.position.x,
                y : this.position.y
            },
            width : 100,
            height : 50,
            offset
        }

        this.blockImage = new Image()
        this.blockImage.src = 'img/block.png'
        
    }

    switch_sprite(s)
    {
        this.image = s.image
        this.sx = 0
        this.sy = 0
        this.numFrames = s.numFrames
        this.timeBetweenFrames = s.loopTime / s.numFrames
    }

    run_forward(){

        this.isIdle = false
        this.image = this.sprites.run_forward.image
       
       

        if(!this.isRunning)
        {
            this.sx = 0
            this.sy = 0
            
            this.numFrames = this.sprites.run_forward.numFrames
            this.timeBetweenFrames = this.sprites.run_forward.loopTime / this.numFrames
    
            this.isRunning = true

        }

    }

    run_back()
    {
        this.isIdle = false
        this.image = this.sprites.run_back.image
       
       
        if(!this.isRunning)
        {
            this.sx = 0
            this.sy = 0
            this.numFrames = this.sprites.run_back.numFrames
            this.timeBetweenFrames = this.sprites.run_back.loopTime / this.numFrames
            this.isRunning = true

        }

    }

    jump_forward()
    {
        this.isIdle = false
        this.image = this.sprites.jump_forward.image

    }

    jump_back()
    {
        this.isIdle = false
        this.image = this.sprites.jump_back.image
        

    }

    attack_forward()
    {
    }

    attack_back()
    {
        this.isIdle = false
        this.image = this.sprites.attack_back.image
    }

    idle()
    {

        if(!this.facingForward){
            this.image = this.sprites.idle.image
        }else{
            this.image = this.sprites.idle_reverse.image
        }

        
        if(!this.isIdle)
        {
            this.sx = 0
            this.sy = 0
            this.numFrames = this.sprites.idle.numFrames
            this.timeBetweenFrames = this.sprites.idle.loopTime / this.numFrames
            this.isIdle = true
        }
    }

    die(elapsedTime)
    {
        this.image = this.sprites.death.image

        this.isDead = (this.frame == this.sprites.death.numFrames - 1)

        if(!this.isDying){
            this.sx = 0
            this.sy = 0
            this.numFrames = this.sprites.death.numFrames
            this.timeBetweenFrames = this.sprites.idle.loopTime / this.numFrames
            this.isDying = true
        }

        if(!this.isDead)
        {
            this.animateSprite(elapsedTime)
        }

    }

    drawDamage(damageDone)
    {
        c.font = '68px KulminoituvaRegular'
        c.fillStyle = 'white'
        ctx.fillText  ('Keyboard Cat', this.attackBox.position.x, this.attackBox.position.y);
    }

    attackBoxInFrame()
    {
        return this.sprites.attack_forward.attackFrames.includes(this.frame)
    }

    rectangularCollision({otherPlayer}) {
        return (this.attackBox.position.x + this.attackBox.width >= otherPlayer.position.x &&
            this.attackBox.position.x <= otherPlayer.position.x + otherPlayer.width && 
            this.attackBox.position.y + this.attackBox.height >= otherPlayer.position.y &&
            this.attackBox.position.y <= otherPlayer.position.y + otherPlayer.height)
    }

    getPlayerAttackDamage()
    {
        let max = 15
        let min = 8
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    getEnemyAttackDamage()
    {
        let max = 15
        let min = 8
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    detectHit({otherPlayer, isPlayer})
    {
        if( this.isAttacking &&
            this.rectangularCollision({otherPlayer: otherPlayer}) && 
            !otherPlayer.isBlocking && !this.successfulAttack && this.attackBoxInFrame())
        {
            // this.damageDone = getPlayerAttackDamage()
            if(isPlayer)
            {
                this.damageDone = this.getPlayerAttackDamage()
            }else
            {
                this.damageDone = this.getEnemyAttackDamage()
            }
            otherPlayer.health -= this.damageDone
            if(otherPlayer.health <= 0) otherPlayer.health = 0
            this.successfulAttack = true
            var sound = new Howl({
                src: ['sounds/Shapeforms Audio Free Sound Effects/Hit and Punch Preview/AUDIO/HIT_SLAP_07.wav']
              });
              
            sound.play();
            setTimeout(() => {
                this.successfulAttack = false
                this.damageBoxOffset = 0
            }, this.sprites.attack_forward.loopTime)
        }else if(this.isAttacking &&
            this.rectangularCollision({otherPlayer: otherPlayer}) && 
            otherPlayer.isBlocking && !this.successfulAttack && this.attackBoxInFrame())
            {
                var sound = new Howl({
                    src: ['sounds/Shapeforms Audio Free Sound Effects/Hit and Punch Preview/AUDIO/HIT_METAL_WRENCH_HEAVIEST_02.wav']
                  });
                  
                sound.play();

                this.successfulAttack = true
                this.damageDone = 0
                setTimeout(() => {
                    this.successfulAttack = false
                    this.damageBoxOffset = 0
                }, this.sprites.attack_forward.loopTime)
            }
    }

    move()
    {
        this.velocity.x = 0

        if(this.keys.left.pressed && this.lastKey == 'left')
        {
            this.velocity.x = -5
            if(this.facingForward) this.position.x -= 40
            this.facingForward = false
            if(!this.isAttacking && !this.isJumping && this.image.src != this.sprites.run_back.image.src){
                this.switch_sprite(this.sprites.run_back)
                this.isIdle = false
                this.isRunning = true
            }
        }else if(this.keys.right.pressed && this.lastKey == 'right')
        {
            this.velocity.x = 5
            if(!this.facingForward) this.position.x += 30
            this.facingForward = true
            if(!this.isAttacking && !this.isJumping && this.image.src != this.sprites.run_forward.image.src){
                this.switch_sprite(this.sprites.run_forward)
                this.isIdle = false
                this.isRunning = true
            }
        }else
        {
            this.isRunning = false
        }

        if((this.position.y + this.destHeight + this.velocity.y < canvas.height - 50))
        {
            if(!this.isJumping)
            {
                if(this.facingForward)
                {
                    this.switch_sprite(this.sprites.jump_forward)
                }else {
                    this.switch_sprite(this.sprites.jump_back)
                }
                this.isIdle = false
                this.isJumping = true
            }
            else{
                if(this.image == this.sprites.jump_forward.image && !this.facingForward)
                {
                    this.switch_sprite(this.sprites.jump_back)
                }
                else if(this.image == this.sprites.jump_back.image && this.facingForward)
                {
                    this.switch_sprite(this.sprites.jump_forward)
                }
            }

        }
        else
        {
            if(this.isRunning && this.isJumping)
            {
                if(this.velocity.x >= 0)
                {
                    this.switch_sprite(this.sprites.run_forward)
                }else {
                    this.switch_sprite(this.sprites.run_back)
                }
                this.isIdle = false
            }
            this.isJumping = false

            
        }

        if(this.isAttacking)
        {
            if(this.facingForward)
            {
                this.image = this.sprites.attack_forward.image
            }
            else{
                this.image = this.sprites.attack_back.image
            }
        } 


        if(!this.isRunning && !this.isAttacking && !this.isJumping)
        {
            if(!this.isIdle)
            {
                // this.switch_sprite(this.sprites.idle)
                this.isIdle = true
                if(this.facingForward)
                {
                    this.switch_sprite(this.sprites.idle)
                }else {
                    this.switch_sprite(this.sprites.idle_reverse)
                }
            }
        }

        

    }

    updateFighter(){

        if(this.position.x + this.width + this.velocity.x >= canvas.width-1)
        {
            this.velocity.x = 0
        }else if(this.position.x + this.width + this.velocity.x <= -100){
            this.velocity.x = 0
        }

        if(this.position.y + this.destHeight + this.velocity.y >= canvas.height - 50)
        {
            this.velocity.y = 0
        } 
        else {
            this.velocity.y += this.gravity
        }

        this.attackBox.position.x = this.position.x + this.attackBox.offset.x
        this.attackBox.position.y = this.position.y + this.attackBox.offset.y

        if(this.blockTimeLeft <= 0) this.depleteblock()

        if(this.isBlocking && !this.blockDepleted){
            this.blockTimeLeft -= 20
        }else if(!this.isBlocking && !this.blockDepleted && this.blockTimeLeft + 10 <= this.blockTime)
        {
            this.blockTimeLeft += 10
        }
        this.position.y += this.velocity.y
        this.position.x += this.velocity.x

    }
    attack() {
        
        if(!this.isAttacking)
        {

            var sound = new Howl({
                src: ['sounds/Shapeforms Audio Free Sound Effects/Hit and Punch Preview/AUDIO/WHOOSH_ARM_SWING_01.wav']
              });
              
            sound.play();

            if(this.facingForward)
            {
                this.image = this.sprites.attack_forward.image
            }
            else{
                this.image = this.sprites.attack_back.image
            }

            this.isIdle = false
            this.isAttacking = true
            this.sx = 0
            this.sy = 0
            this.numFrames = this.sprites.attack_forward.numFrames
            this.timeElasped = 0
            this.timeBetweenFrames = this.sprites.attack_forward.loopTime / this.numFrames
            setTimeout(() => {
                this.isAttacking = false
            }, this.sprites.attack_forward.loopTime)
        }
    }
    depleteblock() {
        this.isBlocking = false
        this.blockDepleted = true
        setTimeout(() => {
            this.blockDepleted = false
            this.blockTimeLeft = this.blockTime
        }, 2000)
    }

    drawBlock({isPlayer})
    {
        if(this.isBlocking)
        {
            let blockPosX = this.position.x
            let blockPosY = this.position.y

            if(this.facingForward){

                blockPosX -= 38
                blockPosY += 25
            }else{
                blockPosX += 28
                blockPosY += 25
            }
            if(!isPlayer){
                if(this.image == this.sprites.attack_forward.image || 
                    this.image == this.sprites.attack_back.image)
                {
                    blockPosX += 55
                }
            }


            c.drawImage(this.blockImage,
                0, 
                0,
                this.sourceWidth,
                this.sourceHeight,
                blockPosX, 
                blockPosY, 
                this.destWidth, 
                this.destHeight)
        }
    }
}