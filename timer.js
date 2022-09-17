var StateMain = {

    preload: function() {},

    create: function() {

        //total time until trigger

        this.timeInSeconds = 120;

        //make a text field

        this.timeText = game.add.text(game.world.centerX, game.world.centerY, "0:00");

        //turn the text white

        this.timeText.fill = "#ffffff";

        //center the text

        this.timeText.anchor.set(0.5, 0.5);

        //set up a loop timer

        this.timer = game.time.events.loop(Phaser.Timer.SECOND, this.tick, this);

    },

    tick: function() {

        //subtract a second

        this.timeInSeconds--;

        //find how many complete minutes are left

        var minutes = Math.floor(this.timeInSeconds / 60);

        //find the number of seconds left

        //not counting the minutes

        var seconds = this.timeInSeconds - (minutes * 60);

        //make a string showing the time

        var timeString = this.addZeros(minutes) + ":" + this.addZeros(seconds);

        //display the string in the text field

        this.timeText.text = timeString;

        //check if the time is up

        if (this.timeInSeconds == 0) {

            //remove the timer from the game

            game.time.events.remove(this.timer);

            //call your game over or other code here!

            this.timeText.text="Game Over";

        }

    },

    /**

     * add leading zeros to any number less than 10

     * for example turn 1 to 01

     */

    addZeros: function(num) {

        if (num < 10) {

            num = "0" + num;

        }

        return num;

    },

    update: function() {}

}



