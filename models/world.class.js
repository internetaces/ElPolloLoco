/** Represents the world. */
class World {

    character = new Character();
    level = level1;

    canvas;
    ctx;
    keyboard;
    camera_x = 0;
    statusBar = new StatusBar();
    statusBarBottle = new StatusBarBottle();
    statusBarCoins = new StatusBarCoins();
    statusBarEndboss = new StatusBarEndboss();
    throwableObject = [];


    /**
    * Creates a new instance of the world.
    * @constructor
    */
    constructor(canvas, keyboard) {
        this.ctx = canvas.getContext('2d');
        this.canvas = canvas;
        this.keyboard = keyboard;
        this.draw();
        this.setWorld();
        this.collisionCheck();
        this.run();
    }


    setWorld() {
        this.character.world = this;
    }


    /** Interval which checks collision when jumping on enemy. */
    collisionCheck() {
        setInterval(() => {
            this.checkCharacterJumpsOnEnemy();
        }, 20);
    }


    /** Interval to check collisions.*/
    run() {
        setInterval(() => {
            if (!pause) {
            this.checkCollisions();
            this.checkCollisionWidthEndboss();
            this.checkCollisionWithBottle();
            this.checkCollisionWithCoin();
            this.checkThrowObjects();
            this.checkChickenInNear();
            this.checkCharacterIsFalling();
            }
        }, 200);
    }


    /** Plays chicken sound when chicken is in near.*/
    checkChickenInNear() {
        this.level.chicken.forEach((enemy) => {
            if (!enemy.isDead) {
                if (enemy.x < this.character.x + 670 && enemy.x > this.character.x - 50) {
                    if(pause) return;
                    chicken_sound.play();
                }
            }
        });
    }


    /** Interval to check collision between character and chicken. */
    checkCollisions() {
        this.level.chicken.forEach((enemy) => {
            if (this.character.isColliding(enemy)) {
                if (!enemy.isDead) {
                    this.character.hit();
                    this.statusBar.setPercentage(this.character.energy);
                    this.checkIfCharacterIsDead();
                    character_hurt_sound.play();
                }
            }
        });
    }


    /** Checks if character is falling: speedY < 0 */
    checkCharacterIsFalling() {
        setInterval(() => {
            if (this.character.speedY < 0) {
                this.character.characterFalling = true;
            } else {
                this.character.characterFalling = false;
            }
        }, 100)
    }


    /** Kills enemy by jumping on it. */
    checkCharacterJumpsOnEnemy() {
        this.level.chicken.forEach((enemy) => {
            if (!enemy.isDead && this.character.characterFalling == true) {
                if (this.character.y + this.character.height - this.character.offset.bottom < enemy.y - enemy.offset.top - 5 &&
                    this.character.y + this.character.height - this.character.offset.bottom > enemy.y - enemy.offset.top - 15 &&
                    this.character.x + this.character.width - this.character.offset.right > enemy.x + enemy.offset.left &&
                    this.character.x + this.character.offset.left < enemy.x + enemy.width - enemy.offset.right) {
                    chicken_hurt_sound.play();
                    enemy.isDead = true;
                }
            }
        });
    }


    /** Checks collision width endboss. Remove energy by getting a hit. */
    checkCollisionWidthEndboss() {
        if (this.character.isColliding(this.level.endboss)) {
            if (!this.level.endboss.isDead) {
                this.character.hit();
                this.statusBar.setPercentage(this.character.energy);
                this.checkIfCharacterIsDead();
            }
        }
    }


    /** Character is dead when energy = 0. */
    checkIfCharacterIsDead() {
        if (this.character.energy == 0) {
            this.character.characterIsDead = true;
        }
    }


    /** Checks collision between enemy and bottle. */
    checkCollisionWithBottle() {
        this.level.bottles.forEach((bottle) => {
            if (this.character.isColliding(bottle)) {
                this.level.bottles.splice(this.level.bottles.indexOf(bottle), 1);
                this.character.bottleCollected();
                bottle_collected_sound.play();
                this.statusBarBottle.setBottles(this.character.countBottles);
            }
        });
    }


    /** Checks collision between character and coin. */
    checkCollisionWithCoin() {
        this.level.coins.forEach((coin) => {
            if (this.character.isColliding(coin)) {
                this.level.coins.splice(this.level.coins.indexOf(coin), 1);
                this.character.coinCollected();
                coin_collected_sound.play();
                this.statusBarCoins.setCoins(this.character.countCoins);
            }
        });
    }


    /** 
     * Creates a new throwable object (bottle) by clicking the keybaord "D". 
     * Count collected bottles and removes thrown bottles.
     */
    checkThrowObjects() {
        if (this.keyboard.D && world.character.countBottles > 0) {
            let bottle = new ThrowableObject(this.character.x + 50, this.character.y + 90);
            this.throwableObject.push(bottle);
            this.character.bottleRemoved();
            this.statusBarBottle.setBottles(this.character.countBottles);
            this.level.endboss.justHitted = false;
            this.checkCollisionBottleWithChicken(bottle);
            this.checkCollisionBottleWithEndboss(bottle);
        }
    }


    /** Checks collision between bottle and chicken. */
    checkCollisionBottleWithChicken(bottle) {
        setInterval(() => {
            this.level.chicken.forEach((enemy) => {
                if (bottle.isColliding(enemy) && !enemy.isDead) {
                    chicken_hurt_sound.play();
                    enemy.isDead = true;
                }
            });
        }, 200);
    }



    /** 
     * Checks collision between bottle and endboss.
     * Removes endboss energy by hit.
     */
    checkCollisionBottleWithEndboss(bottle) {
        setInterval(() => {
            if (bottle.isColliding(this.level.endboss) && !this.level.endboss.isDead && !this.level.endboss.justHitted) {
                this.level.endboss.energy--;
                this.statusBarEndboss.setEndbossEnergy(this.level.endboss.energy);
                this.level.endboss.justHitted = true;
                this.endbossIsDead();
                this.endbossHurtFalse();
            }
        }, 200);
    }


    /** Endboss is hitted - state */
    endbossHurtFalse() {
        let id;
        id = setInterval(() => {
            if (this.level.endboss.justHitted == true) {
                this.level.endboss.justHitted = false;
            }
            clearInterval(id);
        }, 2000);
    }


    /** Endboss is dead - state */
    endbossIsDead() {
        if (this.level.endboss.energy == 0) {
            this.level.endboss.isDead = true;
            stopGame();
        }
    }


    /** Draws items to canvas */
    draw() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.ctx.translate(this.camera_x, 0);
        this.addObjectsToMap(this.level.backgroundObjects);
        this.addObjectsToMap(this.level.clouds);
        this.addObjectsToMap(this.level.bottles);
        this.addObjectsToMap(this.level.coins);
        this.addObjectsToMap(this.throwableObject);
        this.addToMap(this.character);
        this.addObjectsToMap(this.level.chicken);
        this.addToMap(this.level.endboss);
        this.ctx.translate(-this.camera_x, 0);
        this.addToMap(this.statusBar);
        this.addToMap(this.statusBarBottle);
        this.addToMap(this.statusBarCoins);
        this.addToMap(this.statusBarEndboss);
        this.ctx.translate(this.camera_x, 0);
        this.ctx.translate(-this.camera_x, 0);
        let self = this;
        requestAnimationFrame(function () {
            self.draw();
        }
        );
    }


    addObjectsToMap(objects) {
        objects.forEach(o => {
            this.addToMap(o);
        });
    }


    /** Adds the flipped images to canvas */
    addToMap(mo) {
        if (mo.otherDirection) {
            this.flipImage(mo);
        }
        mo.draw(this.ctx);
        //mo.drawFrame(this.ctx); 
        if (mo.otherDirection) {
            this.flipImageBack(mo)
        }
    }


    /** Flips image by changing moving direction. */
    flipImage(mo) {
        this.ctx.save();
        this.ctx.translate(mo.width, 0);
        this.ctx.scale(-1, 1);
        mo.x = mo.x * -1;
    }


    /** Flips image back by changing moving direction. */
    flipImageBack(mo) {
        mo.x = mo.x * -1;
        this.ctx.restore();
    }
}