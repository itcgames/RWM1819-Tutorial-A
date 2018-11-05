/**
 * @author brendanhorlick1997@gmail.com (Brendan Horlick)
 * date: 31/10/2018
 */
var index = 0;
var imageX = 1100;
var imageWidth = 164;
var frameCount = 0;
var opacity = 0;
class Achievement
{
  constructor(achievementText)
  {
    this.textString = achievementText;
    this.img = new Image();   // Create new img element
    this.img.id = "person";
    this.loaded = false;
    var that = this;
    this.img.addEventListener('load', function() {
      console.log('Image loaded: ' + this.toString);
      that.loaded = true;

    }, false);
    this.img.src = 'achievement.png'; // Set source path
  }

  render()
  {

  }
  /**
   * Draws an image after it is loaded.
   * Draws a second image half the time.
   */
  drawImage() {
    var ctx = document.getElementById("mycanvas").getContext("2d");
    //var image = this.img;
    if (this.loaded === true)
    {
      // draw the image

      if(imageX > 600)
      {
        ctx.drawImage(this.img,42,202,imageWidth,162,imageX,700,imageWidth,162);
        imageX = imageX - 20;
      }
      else
      {
        ctx.drawImage(this.img,42,26,imageWidth,162,imageX,700,imageWidth,162);
        if(imageWidth < 700)
          {
            imageWidth = imageWidth + 10;
          }
      }
      if (imageWidth > 699)
      {
        ctx.font = "40px Comic Sans MS";
        var colorString = "rgba(255,255,255,"+opacity+")";
        ctx.fillStyle = colorString;
        ctx.textAlign = "center";
        ctx.fillText(this.textString, imageX + 400, 700 + 100);
        if(opacity < 1)
        {
          opacity += 0.01;
        }

      }

      //ctx.drawImage(this.img, 200, 0, 89, 143, 0, 0, 500, 200);
      // context.drawImage(img,sx,sy,swidth,sheight,x,y,width,height)
    }



}
}
