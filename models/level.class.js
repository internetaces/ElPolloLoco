/** Represents a level. */
class Level {
    chicken;
    endboss;
    bottles;
    coins;
    clouds;
    backgroundObjects;
    level_end_x = 4300;


    /**
    * Creates a new instance of a level. Initialize character, enemies, background images and items.
    * @constructor
    */
    constructor(chicken, endboss, bottles, coins, clouds, backgroundObjects) {
        this.chicken = chicken;
        this.endboss = endboss;
        this.bottles = bottles;
        this.coins = coins;
        this.clouds = clouds;
        this.backgroundObjects = backgroundObjects;
    }
}