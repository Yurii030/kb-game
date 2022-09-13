import Phaser from 'phaser'
   
 
class MainScene extends Phaser.Scene {
    constructor() {
        super({ key: 'main', active: true })
      }
    private character: Phaser.GameObjects.Image|null = null
    // 방향키를 감지할 키를 추가하기!
    private upKey:     Phaser.Input.Keyboard.Key|null = null
    private downKey:   Phaser.Input.Keyboard.Key|null = null
    private leftKey:   Phaser.Input.Keyboard.Key|null = null
    private rightKey:  Phaser.Input.Keyboard.Key|null = null
  


  preload(): void {
    this.load.image('oceanb', '/assets/image/oceanb.png')
    this.load.image('whale', '/assets/image/whale.png')
    this.load.image('whale02', '/assets/image/whale02.png')
    this.load.image('whale03', '/assets/image/whale03.png')
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

  create(): void {
    console.log('로딩 끝!')
    // x:100, y: 150 위치에 새로운 이미지 게임 오브젝트를 생성합니다.
    const image = this.add.image(100, 150, 'whale')
    const image01 = this.add.image(900, 500, 'oceanb')




  }

  update(time: number, delta: number): void {
  }

  destroy(): void {
  }
}
