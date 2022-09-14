class Start {

    constructor()
    {

        this.titleImage = new Image()
        this.titleImage.src = 'img/title.png'
        this.startImage = new Image()
        this.startImage.src = 'img/spacetostart.png'
        this.livesLeftSources = ['img/1.png', 'img/2.png', 'img/3.png']
        this.livesLeftImages = [new Image(), new Image(), new Image()]
        this.livesLeft = 3
        for (var i = 0; i < this.livesLeftImages.length; i++)
        {
            this.livesLeftImages[i].src = this.livesLeftSources[i]

        }
        this.gameStarted = false
        this.startGameSent = false
        this.timer = 0
        this.imageIndex = 2
    }


    Update(elapsedTime)
    {
        if(this.startGameSent)
        {
            this.timer += elapsedTime
            
            if(this.timer >= 1000)
            {
                if(this.imageIndex > 0)
                {
                    this.imageIndex --
                }
                this.timer = 0
            }

            c.drawImage(this.livesLeftImages[this.imageIndex], 
                (canvas.width / 2) - 
                (this.livesLeftImages[this.imageIndex].width /2), 
                (canvas.height / 2) - 
                (this.livesLeftImages[this.imageIndex].height /2))
         
        }else if(!this.startGameSent && !this.gameStarted){
            c.drawImage(this.titleImage, (canvas.width / 2) - (this.titleImage.width /2), (canvas.height / 2) - (this.titleImage.height /2))
            c.drawImage(this.startImage, (canvas.width / 2) - (this.startImage.width /2), (canvas.height / 2) - (this.startImage.height /2) + (this.titleImage.height))    
        }
        
    }

    StartGame()
    {

        this.livesLeft--

        this.startGameSent = true

        setTimeout(() => {
            this.startGameSent = false
            this.gameStarted = true
        }, 3000)

    }



}