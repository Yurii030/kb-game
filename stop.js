import Phaser from 'phaser'
class MainScene extends Phaser.Scene {
    constructor() {
        super({ key: 'main', active: true })
      }}

      var config = {
        type: Phaser.AUTO,
        parent: null,
        width: 1024,
        height: 768,
        scale: {
            mode: Phaser.Scale.FIT,
            autoCenter: Phaser.Scale.CENTER_BOTH
        },
    
        scene: null
    };
    var game = new Phaser.Game();

function preload() {

    this.load.atlas('seacreatures', 'assets/sprites/seacreatures_json.png', 'assets/sprites/seacreatures_json.json');
    this.load.image('undersea', 'assets/pics/undersea.jpg');
    this.load.image('coral', 'assets/pics/seabed.png');

}

var greenJellyfish;

function create() {

    this.add.image(0, 0, 'undersea');

    //  We add this sprite so you can see what frame 1 looks like
    this.add.sprite(32, 32, 'seacreatures', 'greenJellyfish0000');

    greenJellyfish = game.add.sprite(330, 100, 'seacreatures');
    greenJellyfish.animations.add('swim', Phaser.Animation.generateFrameNames('greenJellyfish', 0, 39, '', 4), 30, true);
    greenJellyfish.animations.play('swim');

    this.add.image(0, 466, 'coral');

    this.add.tween(greenJellyfish).to({ y: 250 }, 4000, Phaser.Easing.Quadratic.InOut, true, 0, 1000, true);

    this.input.onDown.addOnce(stopAnimation, this);

}

function stopAnimation() {

    //  This will just top the animation from running, freezing it at its current frame
    // greenJellyfish.animations.stop();

    //  This method will reset the frame to frame 1 after stopping
    greenJellyfish.animations.stop(null, true);

}