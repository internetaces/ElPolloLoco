/** Represents the status bar of collected bottles. */
class StatusBarBottle extends DrawableObject {

    IMAGES = [
        'img/7_statusbars/1_statusbar/3_statusbar_bottle/blue/0.png',
        'img/7_statusbars/1_statusbar/3_statusbar_bottle/blue/20.png',
        'img/7_statusbars/1_statusbar/3_statusbar_bottle/blue/40.png',
        'img/7_statusbars/1_statusbar/3_statusbar_bottle/blue/60.png',
        'img/7_statusbars/1_statusbar/3_statusbar_bottle/blue/80.png',
        'img/7_statusbars/1_statusbar/3_statusbar_bottle/blue/100.png'
    ];


    /**
    * Creates a new instance of status bar.
    * @constructor
    * @param {string} loadImage - The path of the  status bar image.
    * @param {Array} loadImages - A set of images paths for animation.
    * @param {number} setBottles - The default value. 
    */
    constructor() {
        super().loadImage('img/7_statusbars/1_statusbar/3_statusbar_bottle/blue/0.png');
        this.loadImages(this.IMAGES);
        this.setBottles(0);
        this.x = 25;
        this.y = 50;
        this.width = 200;
        this.height = 53.2;
    }


    /** Get current amount of collected bottles. */
    setBottles(countBottles) {
        this.countBottles = countBottles;
        let path = this.IMAGES[this.resolveImageIndex()];
        this.img = this.imageCache[path];
    }


    /** Load status bar images depending on number of collected bottles. */
    resolveImageIndex() {
        if (this.countBottles == 10) {
            return 5;
        }
        else if (this.countBottles >= 8) {
            return 4;
        }
        else if (this.countBottles >= 6) {
            return 3;
        }
        else if (this.countBottles >= 4) {
            return 2;
        }
        else if (this.countBottles >= 2) {
            return 1;
        }
        else {
            return 0;
        }
    }
}