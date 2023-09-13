/** Represents a collactable and throwable bottle. */
class Bottle extends CollidableObject {

    width = 70;
    height = 70;

    offset = {
        top: 12,
        left: 25,
        right: 25,
        bottom: 5
    };


    /**
    * Creates a new instance of bottle.
    * @constructor
    * @param {string} imagePath - The path of the bottle image.
    */
    constructor() {
        super().loadImage('img/6_salsa_bottle/salsa_bottle.png');
        this.x = 100 + Math.random() * 720 * 6;
        this.y = 350;
    }
}