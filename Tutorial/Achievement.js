/**
 * @author brendanhorlick1997@gmail.com (Brendan Horlick)
 * date: 08/11/2017
 */
var index = 0;
var imageX = 1100;
var imageWidth = 164;
var frameCount = 0;
class Achievement
{
  constructor()
  {
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
    frameCount = frameCount + 1;
    ctx.clearRect(0,0,1600,1600);
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
      imageWidth = imageWidth + 5;
      }

      //ctx.drawImage(this.img, 200, 0, 89, 143, 0, 0, 500, 200);
      // context.drawImage(img,sx,sy,swidth,sheight,x,y,width,height)
    }
    if(index > 500)
    {
      index = 0;
    }
    index = index + 1;


}
}
