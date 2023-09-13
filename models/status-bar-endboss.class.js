/** Represents the enbdoss status bar. */
class StatusBarEndboss extends DrawableObject {

    IMAGES = [
        'img/7_statusbars/1_statusbar/2_statusbar_health/orange/0.png',
        'img/7_statusbars/1_statusbar/2_statusbar_health/orange/20.png',
        'img/7_statusbars/1_statusbar/2_statusbar_health/orange/60.png',
        'img/7_statusbars/1_statusbar/2_statusbar_health/orange/100.png'
    ];


    /**
    * Creates a new instance of enbdoss status bar.
    * @constructor
    * @param {string} loadImage - The path of the enbdoss status bar image.
    * @param {Array} loadImages - A set of images paths for animation.
    * @param {number} setEndbossEnergy - The default value. 
    */
    constructor() {
        super().loadImage('img/7_statusbars/1_statusbar/2_statusbar_health/orange/100.png');
        this.loadImages(this.IMAGES);
        this.setEndbossEnergy(3);
        this.x = 430;
        this.y = -300;
        this.width = 200;
        this.height = 53.2;
    }


    /** Get current energy. */
    setEndbossEnergy(endbossEnergy) {
        this.endbossEnergy = endbossEnergy;
        let path = this.IMAGES[this.resolveImageIndex()];
        this.img = this.imageCache[path];
    }


        /** Load status bar images depending on energy. */
    resolveImageIndex() {
        if (this.endbossEnergy == 3) {
            return 3;
        }
        else if (this.endbossEnergy == 2) {
            return 2;
        }
        else if (this.endbossEnergy == 1) {
            return 1;
        }
        else if (this.endbossEnergy == 0) {
            return 0;
        }
    }
}