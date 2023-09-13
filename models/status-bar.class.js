/** Represents the characters status bar. */
class StatusBar extends DrawableObject {

    IMAGES = ['img/7_statusbars/1_statusbar/2_statusbar_health/blue/0.png',
        'img/7_statusbars/1_statusbar/2_statusbar_health/blue/20.png',
        'img/7_statusbars/1_statusbar/2_statusbar_health/blue/40.png',
        'img/7_statusbars/1_statusbar/2_statusbar_health/blue/60.png',
        'img/7_statusbars/1_statusbar/2_statusbar_health/blue/80.png',
        'img/7_statusbars/1_statusbar/2_statusbar_health/blue/100.png'
    ];

    percentage = 100;


    /**
    * Creates a new instance of status bar.
    * @constructor
    * @param {string} loadImage - The path of the status bar image.
    * @param {Array} loadImages - A set of images paths for animation.
    * @param {number} setPercentage - The default value. 
    */
    constructor() {
        super().loadImage('img/7_statusbars/1_statusbar/2_statusbar_health/blue/0.png');
        this.loadImages(this.IMAGES);
        this.setPercentage(100);
        this.x = 25;
        this.y = 0;
        this.width = 200;
        this.height = 53.2;
    }


    /** Current energy as percentage. */
    setPercentage(percentage) {
        this.percentage = percentage;
        let path = this.IMAGES[this.resolveImageIndex()];
        this.img = this.imageCache[path];
    }


    /** Load status bar images depending on energy (percentage). */
    resolveImageIndex() {
        if (this.percentage == 100) {
            return 5;
        }
        else if (this.percentage > 80) {
            return 4;
        }
        else if (this.percentage > 60) {
            return 3;
        }
        else if (this.percentage > 40) {
            return 2;
        }
        else if (this.percentage > 20) {
            return 1;
        }
        else {
            return 0;
        }
    }
}