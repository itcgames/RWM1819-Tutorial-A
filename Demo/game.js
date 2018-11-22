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
    this.arrow = new Arrow(1000,400,"right");
    this.arrow2 = new Arrow(1000,400,"down");
    this.arrow3 = new Arrow(1000,400,"left");
    this.arrow4 = new Arrow(1000,400,"up");
    this.highlight = new Highlight(300,400,400,300);
    this.prompt = new Prompt(750,50,"leftClick");
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
      this.arrow2.drawImage();
      this.arrow3.drawImage();
      this.arrow4.drawImage();
      this.highlight.drawImage();
      this.prompt.drawImage();
    //this.achievement.drawImage();
  }
}
