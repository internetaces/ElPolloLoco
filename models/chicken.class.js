/** Represents the chicken (enemies). */
class Chicken extends CollidableObject {
    width = 82;
    height = 80;
    y = 345;
    isDead = false;
    offset = {
        top: 0,
        left: 3,
        right: 2,
        bottom: 0
    };

    IMAGES_WALKING = [
        'img/3_enemies_chicken/chicken_normal/1_walk/1_w.png',
        'img/3_enemies_chicken/chicken_normal/1_walk/2_w.png',
        'img/3_enemies_chicken/chicken_normal/1_walk/3_w.png',
    ];

    IMAGE_DEAD = 'img/3_enemies_chicken/chicken_normal/2_dead/dead.png';


    /**
    * Creates a new instance of chicken.
    * @constructor
    * @param {string} loadImage - The path of the chicken image.
    * @param {Array} loadImages - A set of images paths for animation.
    */
    constructor() {
        super().loadImage('img/3_enemies_chicken/chicken_normal/1_walk/1_w.png');
        this.x = 200 + Math.random() * 720 * 6;
        this.loadImages(this.IMAGES_WALKING);
        this.animate();
        this.speed = 0.15 + Math.random() * 0.25;
    }


    /** Play walking animation. */
    animate() {
        setInterval(() => {
            if (!pause) {
                if (!this.isDead) {
                    this.playAnimation(this.IMAGES_WALKING);
                }
                else {
                    this.loadImage(this.IMAGE_DEAD);
                    this.y += 2;
                }
            }
        }, 120);
        this.moveLeft();
    }
}