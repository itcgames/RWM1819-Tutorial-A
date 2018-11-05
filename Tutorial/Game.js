/**
 * @author brendanhorlick1997@gmail.com (Brendan Horlick)
 * date: 08/11/2017
 */

var gameNs = {};

class Game
{
  constructor()
  {
    this.achievement = new Achievement();

  }
  init()
  {
  }
  update()
  {

  }

  draw()
  {
    this.achievement.drawImage();
  }

}
