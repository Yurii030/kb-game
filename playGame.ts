// THE GAME ITSELF
 
// this class extends Scene class
import Phaser from 'phaser'

export class PlayGame extends Phaser.Scene {
 
    // just a debug text to print some info
    debugText: Phaser.GameObjects.Text;
 
    arrowKeys: Phaser.Types.Input.Keyboard.CursorKeys;
 
    // variable to be assigned to keyboard key "A"
    keyA: Phaser.Input.Keyboard.Key;
 
    // variable to be assigned to keyboard key "B"
    keyD: Phaser.Input.Keyboard.Key;
 
    // flag to check if any left button has been pressed
    leftPressed: boolean;
 
    // flag to check if any right button has been pressed
    rightPressed: boolean;
 
    // flag to check if the mouse has been pressed
    mousePressed: boolean;
 
    // variable to store mouse X position
    mouseX: number;
 
    // left and right tilesprites to show highlighted directions
    leftHighlight: Phaser.GameObjects.TileSprite;
    rightHighlight: Phaser.GameObjects.TileSprite;
 
    // variable to quickly store game half width and height, as we are going to use them a lot of times
    halfGameWidth: number;
    gameHeight: number;
 
    // constructor
    constructor() {
        super({
            key: 'PlayGame'
        });
    }
 
    // method to be called once the class preloads
    preload(): void {
 
        // load the dotted line image
        this.load.image('line', 'assets/dotted.png');
 
        // load highlight image
        this.load.image('highlight', 'assets/highlight.png');
    }
 
    // method to be called once the class has been created
    create(): void {
 
        // get half game width and height
        this.halfGameWidth = this.game.config.width as number / 2;
        this.gameHeight = this.game.config.height as number;
 
        // at the beginning of the game the mouse is not pressed
        this.mousePressed = false;
 
        // place left highlight tile sprite
        this.leftHighlight = this.add.tileSprite(0, 0, this.halfGameWidth, this.gameHeight, 'highlight');
        this.leftHighlight.setOrigin(0, 0);
 
        // place right highlight tile sprite
        this.rightHighlight = this.add.tileSprite(this.halfGameWidth, 0, this.halfGameWidth, this.gameHeight, 'highlight');
        this.rightHighlight.setOrigin(0, 0);
 
        // add the dotted line tilesprite and set its registration point
        this.add.tileSprite(this.halfGameWidth, 0, 4, this.gameHeight, 'line').setOrigin(0.5, 0);
 
        // initialize arrow keys
        this.arrowKeys = this.input.keyboard.createCursorKeys();
 
        // add to keyA keyboard input with "A" key
        this.keyA = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
 
        // add to keyD keyboard input with "D" key
        this.keyD = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);
 
        // normally Phaser only handles one pointer, so we have to add one more pointer to handle multi touch
        this.input.addPointer(1);
 
        // mouse event listeners
        this.input.on('pointerdown', this.setMousePressed, this);
        this.input.on('pointerup', this.setMouseReleased, this);
        this.input.on('pointermove', this.getMousePosition, this);
 
        // just a debug text
        this.debugText = this.add.text(16, 16, '', {
            color: '#ffffff',
            fontFamily: 'monospace',
            fontSize: '18px'
        });
    }
 
    // method to be called when the mouse is pressed
    setMousePressed(pointer: Phaser.Input.Pointer): void {
 
        // mouse is pressed
        this.mousePressed = true;
 
        // save horizontal mouse position
        this.mouseX = pointer.x;
    }
 
    // method to be called when the mouse is released
    setMouseReleased(): void {
 
        // mouse is not pressed
        this.mousePressed = false;
    }
 
    // method to get mouse position
    getMousePosition(pointer: Phaser.Input.Pointer) {
 
        // save horizontal mouse position
        this.mouseX = pointer.x;
    }
 
    // method to be executed at each frame
    update(): void {
 
        // at the start of each frame, we assume both right and left buttons aren't pressed
        this.leftPressed = false;
        this.rightPressed = false;
 
        // report text to output at the end of the process
        let reportText: string = "";
 
        // is mouse pointer pressed
        if (this.mousePressed) {
             
            // is mouse pointer horizontal position greater than half the canvas width?
            if (this.mouseX > this.halfGameWidth) {
 
                // right button is being pressed
                this.rightPressed = true;
 
                // update report text
                reportText += "Mouse on right side\n";
            }
            else {
 
                // left button is being pressed
                this.leftPressed = true;
 
                // update report text
                reportText += "Mouse on left side\n";
            }
        }
 
        // is touch pointer1 down?
        if (this.input.pointer1.isDown) {
 
            // is pointer1 horizontal position greater than half the canvas width?
            if (this.input.pointer1.x > this.halfGameWidth) {
 
                // right button is being pressed
                this.rightPressed = true;
 
                // update report text
                reportText += "Pointer1 on right side\n";
            }
            else {
 
                // left button is being pressed
                this.leftPressed = true;
 
                // update report text
                reportText += "Pointer1 on left side\n";
            }
        }
 
        // is touch pointer2 down?
        if (this.input.pointer2.isDown) {
 
             // is pointer2 horizontal position greater than half the canvas width?
            if (this.input.pointer2.x > this.halfGameWidth) {
 
                // right button is being pressed
                this.rightPressed = true;
 
                // update report text
                reportText += "Pointer2 on right side\n";
            }
            else {
 
                // left button is being pressed
                this.leftPressed = true;
 
                // update report text
                reportText += "Pointer2 on left side\n";
            }
        }
 
        // is "A" key down?
        if (this.keyA.isDown) {
 
            // left button is being pressed
            this.leftPressed = true;
 
            // update report text
            reportText += "'A' key pressed\n";
        }
 
        // is "D" or key down?
        if (this.keyD.isDown) {
             
            // right button has been pressed
            this.rightPressed = true;
 
            // update report text
            reportText += "'D' key pressed\n";
        }
 
        // is left arrow key down?
        if (this.arrowKeys.left.isDown) {
 
            // left button is being pressed
            this.leftPressed = true;
 
            // update report text
            reportText += "'LEFT' key pressed\n";
        }
 
        // is right arrow key down?
        if (this.arrowKeys.right.isDown) {
             
            // right button has been pressed
            this.rightPressed = true;
 
            // update report text
            reportText += "'RIGHT' key pressed\n";
        }
 
        // make left highlight visible if left direction has been pressed
        this.leftHighlight.setVisible(this.leftPressed);
 
        // make right highlight visible if right direction has been pressed
        this.rightHighlight.setVisible(this.rightPressed);
 
        // prompt final result
        this.debugText.setText("Overall Left: " + this.leftPressed.toString() + "\nOverall Right: " + this.rightPressed.toString() + "\n-----------------\n" + reportText);
    }
}