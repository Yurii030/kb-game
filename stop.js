import Phaser from 'phaser'
class MainScene extends Phaser.Scene {
    constructor() {
        super({ key: 'main', active: true })
      }}

      var config = {
        type: Phaser.AUTO,
        parent: null,
        width: 900,
        height: 500,
        scale: {
            mode: Phaser.Scale.FIT,
            autoCenter: Phaser.Scale.CENTER_BOTH
        },
    
        scene: null
    };
    var game = new Phaser.Game();

function preload() {

    this.load.image('oceanc', 'assets/images/oceanc.png', 'assets/images/oceanc.png');
    this.load.image('whale', 'assets/images/whale.png');
    this.load.image('whale02', 'assets/images/whale02.png');
    this.load.image('whale03', 'assets/images/whale03.png');

}

var whale;

function create() {

    this.add.image(0, 0, 'oceanc');

    //  We add this sprite so you can see what frame 1 looks like
    this.add.sprite(32, 32, 'seacreatures', 'greenJellyfish0000');

    whale = game.add.sprite(330, 100, 'whale');
    whale.animations.add('swim', Phaser.Animation.generateFrameNames('whale', 0, 39, '', 4), 30, true);
    whale.animations.play('swim');

    this.add.image(0, 466, 'coral');

    this.add.tween(whale).to({ y: 250 }, 4000, Phaser.Easing.Quadratic.InOut, true, 0, 1000, true);

    this.input.onDown.addOnce(stopAnimation, this);

}

function stopAnimation() {

    //  This will just top the animation from running, freezing it at its current frame
    // greenJellyfish.animations.stop();

    //  This method will reset the frame to frame 1 after stopping
    whale.animations.stop(null, true);
    whale01.animations.stop(null, true);
    whale02.animations.stop(null, true);

}