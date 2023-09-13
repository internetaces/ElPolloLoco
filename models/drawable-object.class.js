/** Represents a drawable object. */
class DrawableObject {

    img;
    imageCache = {}; 
    currentImage = 0;
    x = 400;
    y = 280;
    width = 100;
    height = 150;


    loadImage(path) {
        this.img = new Image(); 
        this.img.src = path;
    }


    /**
    *
    *  @param {Array} arr - ['img/image1.png', 'img/image2.png', ...]
    */
    loadImages(arr) {
        arr.forEach((path) => {
            let img = new Image(); 
            img.src = path;
            this.imageCache[path] = img; 
        });
    }


    /** Draw images in canvas. */
    draw(ctx) {
        ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
    }
}