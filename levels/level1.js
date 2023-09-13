let level1;


/** Initialize level, character, enemies and items. */
function initLevel() {
    level1 = new Level(
        getLevelEnemies(),
        getLevelEndboss(),
        getLevelBottles(),
        getLevelCoins(),
        getLevelClouds(),
        getLevelBackground()
    );
}


function getLevelEnemies() {
    return [
    new Chicken(),
    new Chicken(),
    new Chicken(),
    new Chicken(),
    new Chicken(),
    new Chicken(),
    new Chicken(),
    new Chicken(),
    new Chicken(),
    new Chicken(),
    new Chicken(),
    new Chicken()
]
}


function getLevelEndboss() {
    return new Endboss();
}


function getLevelBottles() {
    return [
        new Bottle(),
        new Bottle(),
        new Bottle(),
        new Bottle(),
        new Bottle(),
        new Bottle(),
        new Bottle(),
        new Bottle(),
        new Bottle(),
        new Bottle()
    ]
}


function getLevelCoins() {
    return [
        new Coin(),
        new Coin(),
        new Coin(),
        new Coin(),
        new Coin(),
        new Coin(),
        new Coin(),
        new Coin(),
        new Coin(),
        new Coin(),
        new Coin(),
        new Coin(),
        new Coin(),
        new Coin(),
        new Coin(),
        new Coin(),
        new Coin(),
        new Coin(),
        new Coin(),
        new Coin()
    ]
}


function getLevelClouds() {
    return [
        new Cloud(),
        new Cloud(),
        new Cloud(),
        new Cloud(),
        new Cloud(),
        new Cloud(),
        new Cloud(),
        new Cloud(),
        new Cloud()
    ]
}


function getLevelBackground() {
    return [ 
        new Backgroundobject('img/5_background/layers/air.png', -719),
        new Backgroundobject('img/5_background/layers/3_third_layer/2.png', -719),
        new Backgroundobject('img/5_background/layers/2_second_layer/2.png', -719),
        new Backgroundobject('img/5_background/layers/1_first_layer/2.png', -719),
        new Backgroundobject('img/5_background/layers/air.png', 0),
        new Backgroundobject('img/5_background/layers/3_third_layer/1.png', 0),
        new Backgroundobject('img/5_background/layers/2_second_layer/1.png', 0),
        new Backgroundobject('img/5_background/layers/1_first_layer/1.png', 0),
        new Backgroundobject('img/5_background/layers/air.png', 719),
        new Backgroundobject('img/5_background/layers/3_third_layer/2.png', 719),
        new Backgroundobject('img/5_background/layers/2_second_layer/2.png', 719),
        new Backgroundobject('img/5_background/layers/1_first_layer/2.png', 719),
        new Backgroundobject('img/5_background/layers/air.png', 719 * 2),
        new Backgroundobject('img/5_background/layers/3_third_layer/1.png', 719 * 2),
        new Backgroundobject('img/5_background/layers/2_second_layer/1.png', 719 * 2),
        new Backgroundobject('img/5_background/layers/1_first_layer/1.png', 719 * 2),
        new Backgroundobject('img/5_background/layers/air.png', 719 * 3),
        new Backgroundobject('img/5_background/layers/3_third_layer/2.png', 719 * 3),
        new Backgroundobject('img/5_background/layers/2_second_layer/2.png', 719 * 3),
        new Backgroundobject('img/5_background/layers/1_first_layer/2.png', 719 * 3),
        new Backgroundobject('img/5_background/layers/air.png', 719 * 4),
        new Backgroundobject('img/5_background/layers/3_third_layer/1.png', 719 * 4),
        new Backgroundobject('img/5_background/layers/2_second_layer/1.png', 719 * 4),
        new Backgroundobject('img/5_background/layers/1_first_layer/1.png', 719 * 4),
        new Backgroundobject('img/5_background/layers/air.png', 719 * 5),
        new Backgroundobject('img/5_background/layers/3_third_layer/2.png', 719 * 5),
        new Backgroundobject('img/5_background/layers/2_second_layer/2.png', 719 * 5),
        new Backgroundobject('img/5_background/layers/1_first_layer/2.png', 719 * 5),
        new Backgroundobject('img/5_background/layers/air.png', 719 * 6),
        new Backgroundobject('img/5_background/layers/3_third_layer/1.png', 719 * 6),
        new Backgroundobject('img/5_background/layers/2_second_layer/1.png', 719 * 6),
        new Backgroundobject('img/5_background/layers/1_first_layer/1.png', 719 * 6)
    ]
}