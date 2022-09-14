class Sprite {

    constructor ({position, imageSrc, sourceSize, destSize, numFrames, loopTime}) {
        this.position = position
        this.image = new Image()
        this.sx = 0
        this.sy = 0
        this.sourceWidth = sourceSize.width
        this.sourceHeight = sourceSize.height
        this.destWidth = destSize.width
        this.destHeight = destSize.height
        this.timeElasped = 0
        this.loopTime = loopTime
        this.timeBetweenFrames = loopTime / numFrames
        this.numFrames = numFrames
        this.flipped = false
        this.frame = 0
        this.image.src = imageSrc
    }

    draw () {
        c.drawImage(this.image, this.sx, this.sy, this.sourceWidth, this.sourceHeight, this.position.x, this.position.y, this.destWidth, this.destHeight)
    }

    drawHitbox(x, y, w, h)
    {
        c.fillStyle = 'white'
        c.fillRect(x, y, w, h)
    }


    animateSprite(timeElasped)
    {
        this.timeElasped += timeElasped
        if(this.timeElasped >= this.timeBetweenFrames)
        {
            this.sx = (this.sx + this.sourceWidth) % (this.sourceWidth * this.numFrames)
            this.frame ++
            this.timeElasped = 0
        }
        if(this.sx == 0) this.frame = 0

    }

    update(){
        
        this.draw()
    }

}