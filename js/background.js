class Background {

    constructor()
    {

        this.image = new Image()
        this.destWidth = canvas.width
        this.destHeight = canvas.height
        this.sourceWidth = 1
        this.sourceHeight = 1
        this.sx = 0
        this.sy = 0
        this.loopTime = 2000

        this.timeElasped = 0


        var imageSrc = this.randomNumber(1,125)


        this.image.src = './img/backgrounds/' + imageSrc + '-strip.png'


        var img = new Image();
        img.onload = () => {
            //sets the sprite width and height to the gif dimensions
            this.sourceWidth = img.width
            this.sourceHeight = img.height
            //resets the offset if there is any for the sprite sheet
            this.sx = 0
            this.sy = 0
            //finds the number of frames in the gif
            this.numFrames = this.image.width / img.width
            this.timeBetweenFrames = this.loopTime / this.numFrames

        }
        //setting the source after means we don't fire onload until we have a source
        img.src = './img/backgrounds/' + imageSrc + '.gif'

        this.bg_music = new Howl({
            src: ['sounds/Free SynthWave Music Pack/' + this.randomNumber(1,15) + '.wav'],
            loop : true,
            volume : 0.2
          });
          
    }

    randomNumber(min, max) { 
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    updateAndDraw(elapsedTime)
    {
        this.timeElasped += elapsedTime
        if(this.timeElasped >= this.timeBetweenFrames)
        {
            this.sx = (this.sx + this.sourceWidth) % (this.sourceWidth * this.numFrames)
            this.timeElasped = 0
        }
        c.drawImage(this.image, this.sx, this.sy, this.sourceWidth, this.sourceHeight, 0, 0, this.destWidth, this.destHeight)
    }


}