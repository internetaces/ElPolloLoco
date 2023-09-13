/** Represents the status bar of collected coins. */
class StatusBarCoins extends DrawableObject {

    IMAGES = [
        'img/7_statusbars/1_statusbar/1_statusbar_coin/blue/0.png',
        'img/7_statusbars/1_statusbar/1_statusbar_coin/blue/20.png',
        'img/7_statusbars/1_statusbar/1_statusbar_coin/blue/40.png',
        'img/7_statusbars/1_statusbar/1_statusbar_coin/blue/60.png',
        'img/7_statusbars/1_statusbar/1_statusbar_coin/blue/80.png',
        'img/7_statusbars/1_statusbar/1_statusbar_coin/blue/100.png'
    ];


    /**
    * Creates a new instance of status bar.
    * @constructor
    * @param {string} loadImage - The path of the  status bar image.
    * @param {Array} loadImages - A set of images paths for animation.
    * @param {number} setCoins - The default value. 
    */
    constructor() {
        super().loadImage('img/7_statusbars/1_statusbar/1_statusbar_coin/blue/0.png');
        this.loadImages(this.IMAGES);
        this.setCoins(0);
        this.x = 25;
        this.y = 100;
        this.width = 200;
        this.height = 53.2;
    }


    /** Get current amount of collected coins. */
    setCoins(countCoins) {
        this.countCoins = countCoins;
        let path = this.IMAGES[this.resolveImageIndex()];
        this.img = this.imageCache[path];
    }


    /** Load status bar images depending on number of collected coins. */
    resolveImageIndex() {
        if (this.countCoins == 20) {
            return 5;
        }
        else if (this.countCoins >= 16) {
            return 4;
        }
        else if (this.countCoins >= 12) {
            return 3;
        }
        else if (this.countCoins >= 8) {
            return 2;
        }
        else if (this.countCoins >= 4) {
            return 1;
        }
        else {
            return 0;
        }
    }
}