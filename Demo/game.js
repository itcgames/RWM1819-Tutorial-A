/**
 * @author brendanhorlick1997@gmail.com (Brendan Horlick)
 * date: 08/11/2017
 */

var gameNs = {};

class Game {
  constructor() {
    this.achievement = new Achievement("Tutorial Complete");
    this.text = new Text("Hello",100,100);
    this.diamondAchievement = new DiamondAchievement("Diamond Got");
  }
  init() {
  }
  update() {}

  draw() {
    var ctx = document.getElementById("mycanvas").getContext("2d");
    ctx.save();
    //ctx.globalCompositeOperation = "source-over";
    ctx.clearRect(0,0,1800,1800);
    this.text.drawText();
    this.text.drawBackground();
    ctx.globalCompositeOperation = "source-over";
    this.diamondAchievement.drawImage();
    //this.achievement.drawImage();
  }
}
