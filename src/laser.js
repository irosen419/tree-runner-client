class Laser {
    constructor(x, y, w, h, c) {
        this.x = x
        this.y = y
        this.w = w
        this.h = h
        this.c = c

        this.dx = gameSpeed;
    }

    update() {
        this.x += this.dx
        this.draw()
        this.dx = gameSpeed
    }

    draw() {
        ctx.beginPath();
        ctx.fillStyle = this.c;
        ctx.fillRect(this.x, this.y, this.w, this.h)
        ctx.closePath()
    }
}