/** Represents a throwable object. */
class ThrowableObject extends CollidableObject {
    offset = {
        top: 5,
        left: 15,
        right: 15,
        bottom: 5
    };

    IMAGES = [
        'img/6_salsa_bottle/bottle_rotation/1_bottle_rotation.png',
        'img/6_salsa_bottle/bottle_rotation/2_bottle_rotation.png',
        'img/6_salsa_bottle/bottle_rotation/3_bottle_rotation.png',
        'img/6_salsa_bottle/bottle_rotation/4_bottle_rotation.png'
    ];


    /**
    * Creates a new instance of throwable object.
    * @constructor
    * @param {string} loadImage - The path of the throwable object.
    * @param {Array} loadImages - A set of images paths for animation.
    */
    constructor(x, y) {
        super().loadImage('img/6_salsa_bottle/salsa_bottle.png');
        this.loadImages(this.IMAGES);
        this.x = x;
        this.y = y;
        this.speedY = 20;
        this.width = 70;
        this.height = 70;
        this.trow();
        this.animate();
    }


    /** Throwing direction, height, speed and gravity. */
    trow() {
        this.applyGravity();
        if (world.character.otherDirection == false) {
            setInterval(() => {
                this.x += 7;
            }, 25);
        } else {
            setInterval(() => {
                this.x -= 7;
            }, 25);

        }
    }


    /** Throwing animation. */
    animate() {
        setInterval(() => {
            this.playAnimation(this.IMAGES);
        }, 60);
    }
}