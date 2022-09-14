import Phaser from 'phaser'

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

}

var greenJellyfish;

function create() {

    this.add.image(0, 0, 'undersea');

    greenJellyfish = this.add.sprite(330, 100, 'seacreatures', 'greenJellyfish0000');

    this.input.onDown.add(changeFrame, this);

}

function changeFrame() {

    greenJellyfish.frameName = 'greenJellyfish0010';

}