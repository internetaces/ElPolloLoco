/** Represents the clouds graphics. */
class Cloud extends MovableObject {
    y = 50;
    width = 500;
    height = 250;
    isDead = false;


    /**
    * Creates a new instance of a cloud.
    * @constructor
    * @param {string} loadImage - The path of the cloud image.
    */
    constructor() {
        super().loadImage('img/5_background/layers/4_clouds/1.png');
        this.x = Math.random() * 720 * 6;
        this.animate();
    }


    /** Play animation to move left */
    animate() {
        this.moveLeft();
    }
}