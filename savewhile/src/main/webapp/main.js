
var GameState = {
    preload : function(){
        this.load.image('ocean','assets/images/ocean.png');

    },
    create :function() {
        this.background = this.game.add.sprite(0,0,'oceanb');

    },
    update : function(){

    },
};
var game = new Phaser.Game(900,500,Phaser,AUTO);
game.state.add('GameState',GameState);
game.state.start('GameState');
