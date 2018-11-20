/**
 * @author brendanhorlick1997@gmail.com (Brendan Horlick)
 * date: 08/11/2017
 */

var gameNs = {};

class Game {
  constructor() {
    this.achievement = new Achievement("Tutorial Complete");
    this.tutorialText = new tutorialText("Helloooooooooooooooooooooooo",100,100);
    this.diamondAchievement = new DiamondAchievement("Diamond Got");
    this.arrow = new Arrow(500,500,"right");
  }
  init() {
  }
  update() {}

  draw() {
    var ctx = document.getElementById("mycanvas").getContext("2d");
    ctx.save();
    //ctx.globalCompositeOperation = "source-over";
    ctx.clearRect(0,0,1800,1800);
    this.tutorialText.drawText();
    this.tutorialText.drawBackground();
    this.diamondAchievement.drawImage();
    this.arrow.drawImage();
    //this.achievement.drawImage();
  }
}
