/** Represents a movable object. */
class MovableObject extends DrawableObject {

    otherDirection = false;
    speed = 0.15;
    speedY = 0;
    acceleration = 1.5;
    energy = 100;
    countBottles = 0;
    countCoins = 0;
    lastHit = 0;


    /** Consider gravity when jumping (falling down). */
    applyGravity() {
        setInterval(() => {
            if (this.isAboveGround() || this.speedY > 0) { //Beim Fallen ist speedY negativ
                this.y -= this.speedY;
                this.speedY -= this.acceleration;
            }
        }, 1000 / 25);
    }


    /** Check if character is above the ground. */
    isAboveGround() {
        if (this instanceof ThrowableObject) {
            return true;
        } else {
            return this.y < 180;
        }
    }


    /** Check if character is colliding with movable object. */
    isColliding(mo) {
        return this.x + this.width - this.offset.right > mo.x + mo.offset.left &&
            this.y + this.height - this.offset.bottom > mo.y + mo.offset.top &&
            this.x + this.offset.left < mo.x + mo.width - mo.offset.right &&
            this.y + this.offset.top < mo.y + mo.height - mo.offset.bottom
    }


    /** Count collected bottle. */
    bottleCollected() {
        this.countBottles++;
    }


    /** Remove a thrown bottle.*/
    bottleRemoved() {
        this.countBottles--;
    }


    /** Count collected coin. */
    coinCollected() {
        this.countCoins++;
    }


    /** Remove energy by a hit of enemy. */
    hit() {
        this.energy -= 5;
        if (this.energy < 0) {
            this.energy = 0;
        }
        else {
            this.lastHit = new Date().getTime();
        }
    }


    /** Add a pause between two hits. */
    isHurt() {
        let timepassed = new Date().getTime() - this.lastHit;
        timepassed = timepassed / 1000;
        return timepassed < 1;
    }


    /** Condition when character is dead. */
    isDead() {
        return this.energy == 0;
    }


    /** Moving right speed. */
    moveRight() {
        this.x += this.speed;
        this.otherDirection = false;
    }

    /** Moving left speed. */
    moveLeft() {
        setInterval(() => {
            if (pause == false) {
                if (this.isDead == false) {
                    this.x -= this.speed;
                }
            }
        }, 1000 / 60);
    }


    /** Play an animation by a set of images. */
    playAnimation(images) {
        let i = this.currentImage % images.length;
        let path = images[i];
        this.img = this.imageCache[path];
        this.currentImage++;
    }


    /** The jumping speed. */
    jump() {
        this.speedY = 20;
    }
}