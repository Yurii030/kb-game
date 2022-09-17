import 'phaser';

//array of configuration, also you should load from a file
export const levelsConfig = [
  //level one
  {
    levelID:1,
    //array of trash positions
    trash: [
      {x: 84, y: 200},//position of trash 0
      {x: 54, y: 300},//position of trash 1
      {x: 44, y: 250},//position of trash 2
      {x: 94, y: 400},//position of trash 3
    ],
  //array of platform positions
    trash02: [
      {x: 100, y: 200},//position of trash02 -0
      {x: 200, y: 250},//position of trash02 -1
      {x: 200, y: 400},//position of trash03 - 2
    ],
    trash03: [
      {x: 200, y: 200},//position of trash03-0
      {x: 200, y: 250},//position of trash03-1
      {x: 600, y: 400},//position of trash03-2
    ]

  },
  
  //level two
  {
    levelID:2,
    //array of trash,apple positions
    trash: [
      {x: 84, y: 200},//position of trash 0
      {x: 54, y: 300},//position of trash 1
      {x: 44, y: 250},//position of trash 2
      {x: 94, y: 400},//position of trash 3
    ],
  //array of platform positions
    trash02: [
      {x: 100, y: 200},//position of trash02 -0
      {x: 200, y: 250},//position of trash02 -1
      {x: 200, y: 400},//position of trash03 - 2
    ],
    trash03: [
      {x: 200, y: 200},//position of trash03-0
      {x: 200, y: 250},//position of trash03-1
      {x: 600, y: 400},//position of trash03-2
    ],
    apple: [
      {x: 194, y: 250},
      {x: 294, y: 250},
      {x: 294, y: 250},
      {x: 394, y: 250},
    ],
  //array of apple02 positions
    apple02: [
      {x: 150, y: 100},
      {x: 205, y: 200},
      {x: 300, y: 300},
    ],
    banana01: [
      {x: 100, y: 200},
      {x: 400, y: 250},
      {x: 800, y: 400},
    ],
      banana02: [
        {x: 100, y: 200},
        {x: 200, y: 250},
        {x: 100, y: 400},
      ],
      can: [
        {x: 100, y: 200},
        {x: 280, y: 250},
        {x: 200, y: 470},
      ],
      can: [
        {x: 120, y: 250},
        {x: 620, y: 290},
        {x: 400, y: 480},
      ],

    
  },
  {
    levelID:3,
    //array of stars positions
    trash: [
      {x: 84, y: 200},//position of trash 0
      {x: 54, y: 300},//position of trash 1
      {x: 44, y: 250},//position of trash 2
      {x: 94, y: 400},//position of trash 3
    ],
  //array of platform positions
    trash02: [
      {x: 100, y: 200},//position of trash02 -0
      {x: 200, y: 250},//position of trash02 -1
      {x: 200, y: 400},//position of trash03 - 2
    ],
    trash03: [
      {x: 200, y: 200},//position of trash03-0
      {x: 200, y: 250},//position of trash03-1
      {x: 600, y: 400},//position of trash03-2
    ],
    apple: [
      {x: 194, y: 250},
      {x: 294, y: 250},
      {x: 294, y: 250},
      {x: 394, y: 250},
    ],
  //array of apple02 positions
    apple02: [
      {x: 150, y: 100},
      {x: 205, y: 200},
      {x: 300, y: 300},
    ],
    banana01: [
      {x: 100, y: 200},
      {x: 400, y: 250},
      {x: 800, y: 400},
    ],
      banana02: [
        {x: 100, y: 200},
        {x: 200, y: 250},
        {x: 100, y: 400},
      ],
      can: [
        {x: 100, y: 200},
        {x: 280, y: 250},
        {x: 200, y: 470},
      ],
      can: [
        {x: 120, y: 250},
        {x: 620, y: 290},
        {x: 400, y: 480},
      ],
    trash: [
      {x: 84, y: 200},//position of trash 0
      {x: 54, y: 300},//position of trash 1
      {x: 44, y: 250},//position of trash 2
      {x: 94, y: 400},//position of trash 3
    ],
  //array of platform positions
    trash02: [
      {x: 100, y: 200},//position of trash02 -0
      {x: 200, y: 250},//position of trash02 -1
      {x: 200, y: 400},//position of trash03 - 2
    ],
    trash03: [
      {x: 200, y: 200},//position of trash03-0
      {x: 200, y: 250},//position of trash03-1
      {x: 600, y: 400},//position of trash03-2
    ]

  },
];


export class LevelScene extends Phaser.Scene {
  
  constructor ( config )
  {
    super(config);
  
    //var that controls which level to load
    this.currentLevel = 0;
    //set the data to null
    this.data = null;
  }

  preload (  )
  {
    //load the sprites here
    this.load.image('trash', 'assets/Images/trash.png');
    this.load.image('platform', 'assets/Images/platform.png');
  }

  /*
    you must firstly, load the first configuration (levelsCOnfig[0]), is the firt level.
    After this, you should check if all stars were collected.
    If do, so you should restart the scene with the next level config (levelsConfig[0])
  */
  create (  )
  {
    //now here we check if has some data previously passed to the scene
    if (this.data.currentLevel)
    {
      //if has, so change the data
      this.currentLevel = this.data.currentLevel;
      //check if the currentLevel is the last
      if (this.currentLevel >= levelsConfig.length)
      {
        //is the final of the  game, not has any level
        console.error('LevelScene::not has any new level');
        //previne create sprites
        return;
      }
    }

    this.stars = [];
    //first create all stars
    for (let starPos of levelsConfig[this.currentLevel].trash)
      this.stars.push(this.add.sprite(starPos.x, starPos.y, 'trash'));
      for (let starPos of levelsConfig[this.currentLevel].trash02)
      this.stars.push(this.add.sprite(starPos.x, starPos.y, 'trash02'));
      for (let starPos of levelsConfig[this.currentLevel].trash03)
      this.stars.push(this.add.sprite(starPos.x, starPos.y, 'trash03'));
    
      this.platforms = [];
    //after create all platforms from currentLevel
    for (let platformPos of levelsConfig[this.currentLevel].platforms)
      this.platforms.push(this.add.sprite(platformPos.x, platformPos.y, 'platform'));
    
    //predefine that no one stars was colleted
    //if this var is true, so  it's to change of level
    this.collectedAll = false;
  }


  update (  )
  {
    //check here if the player collected all stars
    //...your code to check goes here


    //this.collectedAll is your variable that you MUST set to true when the stars were ALL collected
    if (this.collectedAll){
      //destroy all sprites
      for (let star of this.stars)
        star.destroy();
      //destroy all sprites
      for (let platform of this.platforms)
        platform.destroy();
      //restart the scene with the next config (currentLevel + 1)
      this.scene.restart({currentLevel: this.currentLevel + 1});
    }
  }
}