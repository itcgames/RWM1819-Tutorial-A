/**
 * @author brendanhorlick1997@gmail.com (Brendan Horlick)
 * date: 31/10/2018
 */

class DiamondAchievement
{
  constructor(achievementText) {
    this.textString = achievementText;
    this.img = new Image();   // Create new img element
    this.img.id = "diamondAchievement";
    this.loaded = false;
    var that = this;
    this.index = 0;
    this.dAchievementX = 1100;
    this.dAchievementWidth = 164;
    this.opacity = 0;
    this.aniCount = 0;
    this.aniIndex = 0;
    this.endCount = 0;
    this.img.addEventListener('load', function() {
      console.log('Image loaded: ' + this.toString);
      that.loaded = true;
    }, false);
    this.img.src = 'diamondsheet.png'; // Set source path
  }

  render() {}
  /**
   * Draws an image after it is loaded.
   * Draws a second image half the time.
   */
  drawImage() {
      this.aniCount = this.aniCount + 1;
      if(this.aniCount > 4) {
        this.aniCount = 0;
        this.aniIndex = this.aniIndex + 1;
      }
      if(this.aniIndex == 6) {
        this.aniIndex = 0;
      }
      var ctx = document.getElementById("mycanvas").getContext("2d");
      //var image = this.img;
      if (this.loaded === true) {
        // draw the image

        if(this.dAchievementX > 600) {
          ctx.drawImage(this.img,42 + (168*this.aniIndex),202,this.dAchievementWidth,
          162,this.dAchievementX,700,this.dAchievementWidth,162);
          this.dAchievementX = this.dAchievementX - 20;
        } else {
          ctx.drawImage(this.img,42,537+(167*this.aniIndex),this.dAchievementWidth,
          162,this.dAchievementX,700,this.dAchievementWidth,162);
          if(this.dAchievementWidth < 700) {
              this.dAchievementWidth = this.dAchievementWidth + 10;
            }
        }
        if (this.dAchievementWidth > 699) {
          ctx.font = "40px Comic Sans MS";
          this.colorString = "rgba(255,255,255,"+this.opacity+")";
          ctx.fillStyle = this.colorString;
          ctx.textAlign = "center";
          ctx.fillText(this.textString, this.dAchievementX + 400, 700 + 100);
          if(this.opacity < 1) {
            this.opacity += 0.01;
          }
          this.endCount = this.endCount + 1;
          if(this.endCount > 100) {
            this.dAchievementX = this.dAchievementX - 20;
          }

        }

      //ctx.drawImage(this.img, 200, 0, 89, 143, 0, 0, 500, 200);
      // context.drawImage(img,sx,sy,swidth,sheight,x,y,width,height)
    }



}
}
