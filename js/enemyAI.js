class EnemyAI
{

    constructor({enemy, player})
    {

        this.possibleStates = {
            Idle : 'Idle',
            Jump : 'Jump',
            Forward : 'Forward',
            Backward : 'Backward',
            Block : 'Block',
            Attack : 'Attack'
        }

        this.state = this.possibleStates.Idle
        this.distanceToPlayer = enemy.position.x - (player.position.x + player.width)
        this.sentAttack = false
        this.enemy = enemy
        this.player = player


    }

    nextState()
    {
        this.distanceToPlayer = this.enemy.position.x - (this.player.position.x + this.player.width)
        this.state = this.possibleStates.Idle
        if(this.distanceToPlayer > 110){
            this.state = this.possibleStates.Forward
        }else if(this.distanceToPlayer <= 100){
            this.state = this.possibleStates.Backward
        }

        if(this.player.velocity.y < 0 && Math.random() < 0.05) this.state = this.possibleStates.Jump

        if(this.distanceToPlayer <= this.enemy.attackBox.width - this.enemy.width){
            //30% rate for attacks when in attack range
            if(Math.random() < 0.05 && !this.sentAttack) this.state = this.possibleStates.Attack
            //10% chance to block when in attack range
            if(Math.random() < 0.05) this.state = this.possibleStates.Block
            //leaves us 60% chance we just back up
        }

        if(Math.random() < 0.005 && !this.sentAttack){ 
            this.state = this.possibleStates.Attack
            this.sentAttack = false
        }

    }

    executeState()
    {
        this.enemy.velocity.x = 0


        switch (this.state){
            case this.possibleStates.Idle : 
                this.enemy.idle()
                break
            case this.possibleStates.Forward :
                this.enemy.velocity.x = -1
                if(this.distanceToPlayer >= 300) this.enemy.velocity.x = -8
                //5% chance to jump when going forward
                if(Math.random() < 0.02) this.enemy.velocity.y = -6
                this.enemy.run_back()
                break
            case this.possibleStates.Backward :
                this.enemy.velocity.x = 1
                
                if(this.distanceToPlayer <= 30) this.enemy.velocity.x = 8
                //5% chance to jump when going backward
                if(Math.random() < 0.02) this.enemy.velocity.y = -6
                this.enemy.run_forward()
                break
            case this.possibleStates.Attack :
                this.enemy.attack()

                // enemy.attack_back()
                this.sentAttack = true
                setTimeout(() => {
                    this.sentAttack = false
                }, 2000)
                break
            case this.possibleStates.Block : 
                if (!this.enemy.blockDepleted) this.enemy.isBlocking = true;
                break
            case this.possibleStates.Jump :
                this.enemy.velocity.y = -6
                this.enemy.sx = 96
                this.enemy.sy = 0
                if(this.enemy.velocity.x <= 0)
                {
                    this.enemy.jump_back()
                }else {
                    this.enemy.jump_forward()
                }
                break
        }

        if(this.enemy.position.x + this.enemy.width + this.enemy.velocity.x >= canvas.width - 100)
        {
            this.enemy.velocity.x = 0
        }else if(this.enemy.position.x + this.enemy.width + this.enemy.velocity.x <= 0){
            this.enemy.velocity.x = 0
        }


        if(this.sentAttack) this.enemy.attack_back()
    }
}