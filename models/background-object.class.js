/** Represents the game background images. */
class Backgroundobject extends MovableObject {
    width = 720;
    height = 480;

    /**
     * Creates a new instance of background object.
     * @constructor
     * @param {string} imagePath - The path of the background image.
     */
    constructor(imagePath, x) {
        super().loadImage(imagePath);
        this.x = x;
        this.y = 480 - this.height;
    }
}