/**
 * @author brendanhorlick1997@gmail.com (Brendan Horlick)
 * date: 08/11/2017
 */

var gameNs = {};

class Game
{
  constructor()
  {
    this.achievement = new Achievement("Tutorial Complete");
  }
  init()
  {
  }
  update()
  {

  }

  draw()
  {
    var ctx = document.getElementById("mycanvas").getContext("2d");
    ctx.clearRect(0,0,1800,1800);
    this.achievement.drawImage();
  }

}
