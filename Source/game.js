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
    this.keyprompt = new KeyPrompt(100,600,"Space");
    this.keyprompt2 = new KeyPrompt(300,567,"ArrowUp");
    this.keyprompt3 = new KeyPrompt(300,600,"ArrowDown");
    this.keyprompt4 = new KeyPrompt(267,600,"ArrowLeft");
    this.keyprompt5 = new KeyPrompt(333,600,"ArrowRight");
    this.keyprompt6 = new KeyPrompt(370,600,"v");
    this.keyprompt7 = new KeyPrompt(410,600,"b");
    this.keyprompt8 = new KeyPrompt(450,600,"1");
    this.keyprompt9 = new KeyPrompt(490,600,"2");
    this.keyprompt10 = new KeyPrompt(530,600,"3");
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
    var ctx = document.getElementById("canvas").getContext("2d");
    ctx.save();
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
      this.keyprompt.drawImage();
      this.keyprompt2.drawImage();
      this.keyprompt3.drawImage();
      this.keyprompt4.drawImage();
      this.keyprompt5.drawImage();
      this.keyprompt6.drawImage();
      this.keyprompt7.drawImage();
      this.keyprompt8.drawImage();
      this.keyprompt9.drawImage();
      this.keyprompt10.drawImage();
    //this.achievement.drawImage();
  }
}
