var config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    scene: {
        preload: preload,
        create: create,
        update: update
    }
};
​
var game = new Phaser.Game(config);
​
function preload ()
{
    this.load.image('oceanb', '/assets/image/oceanb.png')
    this.load.image('whale', '/assets/image/whale.png' , 
    { frameWidth: 32, frameHeight: 48 }
    );
    this.load.image('whale02', '/assets/image/whale02.png',
    { frameWidth: 32, frameHeight: 48 }
    );
    this.load.image('whale03', '/assets/image/whale03.png',
    { frameWidth: 32, frameHeight: 48 }
    );
    this.load.image('apple', '/assets/image/apple.png')
    this.load.image('apple02', '/assets/image/apple02.png')
    this.load.image('banana01', '/assets/image/banana01.png')
    this.load.image('banana02', '/assets/image/banana02.png')
    this.load.image('can', '/assets/image/can.png')
    this.load.image('can02', '/assets/image/can02.png')
    this.load.image('gameover', '/assets/image/gameover.png')
    this.load.image('trash', '/assets/image/trash.png')
    this.load.image('trash02', '/assets/image/trash02.png')
    this.load.image('trash03', '/assets/image/trash03.png')
    this.load.image('마요네즈', '/assets/image/마요네즈.png')
    this.load.image('식용유', '/assets/image/식용유.png')
    this.load.image('식용유02', '/assets/image/식용유02.png')
    this.load.image('통1', '/assets/image/통1.png')
    this.load.image('통2', '/assets/image/통2.png')
    this.load.image('oilcan', '/assets/image/oilcan.png')
    this.load.image('음쓰', '/assets/image/음쓰.png')
    this.load.image('일쓰', '/assets/image/일쓰.png')
    this.load.image('종쓰', '/assets/image/종쓰.png')
    this.load.image('캔쓰', '/assets/image/캔쓰.png')
    this.load.image('플쓰', '/assets/image/플쓰.png')
}
​
function create ()
{
    this.add.image(900, 500, 'oceanb');
    this.add.image(400, 300, 'whale02');
}
​
function update ()
{
}