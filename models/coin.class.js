/** Represents the coin graphic. */
class Coin extends CollidableObject {

    width = 150;
    height = 150;
    offset = {
        top: 50,
        left: 50,
        right: 50,
        bottom: 50
    };


    /**
    * Creates a new instance of a coin.
    * @constructor
    * @param {string} loadImage - The path of the coin image.
    */
    constructor() {
        super().loadImage('img/8_coin/coin_1.png');
        this.x = 100 + Math.random() * 720 * 6;
        this.y = Math.random() * (320 - 50) + 50;
    }
}