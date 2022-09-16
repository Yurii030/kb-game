import Phaser from 'phaser'
   
 
class MainScene extends Phaser.Scene {
    constructor() {
        super({ key: 'main', active: true })
      }
    private character: Phaser.GameObjects.Image|null = null
    // ����Ű�� ������ Ű�� �߰��ϱ�!
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
    this.load.image('�������', '/assets/image/�������.png')
    this.load.image('�Ŀ���', '/assets/image/�Ŀ���.png')
    this.load.image('�Ŀ���02', '/assets/image/�Ŀ���02.png')
    this.load.image('��1', '/assets/image/��1.png')
    this.load.image('��2', '/assets/image/��2.png')
    this.load.image('oilcan', '/assets/image/oilcan.png')
    this.load.image('����', '/assets/image/����.png')
    this.load.image('�Ͼ�', '/assets/image/�Ͼ�.png')
    this.load.image('����', '/assets/image/����.png')
    this.load.image('ĵ��', '/assets/image/ĵ��.png')
    this.load.image('�þ�', '/assets/image/�þ�.png')
  }

  create(): void {
    console.log('�ε� ��!')
    // x:100, y: 150 ��ġ�� ���ο� �̹��� ���� ������Ʈ�� �����մϴ�.
    const image = this.add.image(100, 150, 'whale')
    const image01 = this.add.image(900, 500, 'oceanb')




  }

  update(time: number, delta: number): void {
  }

  destroy(): void {
  }
}
