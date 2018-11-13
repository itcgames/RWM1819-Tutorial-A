/**
 * @author brendanhorlick1997@gmail.com (Brendan Horlick)
 * date: 31/10/2018
 */
class Text
{
  constructor(text, textX, textY) {
    this.textString = text;
    this.img = new Image();   // Create new img element
    this.img.id = "person";
    this.loaded = false;
    var that = this;
    var ctx = document.getElementById("mycanvas").getContext("2d");
    this.imageX = textX;
    this.imageY = textY;
    this.i = 0;
    this.img.addEventListener('load', function() {
      console.log('Image loaded: ' + this.toString);
      that.loaded = true;

    }, false);
    this.img.src = 'speachbubble.png'; // Set source path
  }

  render(){}
  /**
   * Draws an image after it is loaded.
   */
  drawText(){
  var ctx = document.getElementById("mycanvas").getContext("2d");
  ctx.font = "40px Comic Sans MS";
  ctx.fillStyle = "#ffffff";
  console.log(this.imageX);
  ctx.fillText("Amazing", 100, this.imageY);
  ctx.globalCompositeOperation = "source-in";
  ctx.fillStyle = "#ff0000";
  ctx.fillRect(this.imageX, this.imageY - 40, this.i, 400);
  this.i++;
  }
  drawBackground(){
    var ctx = document.getElementById("mycanvas").getContext("2d");
    //ctx.restore();
    ctx.globalCompositeOperation = "destination-over";
    //console.log(ctx.globalCompositeOperation);
    // context.drawImage(img,sx,sy,swidth,sheight,x,y,width,height)
    ctx.drawImage(this.img,this.imageX - 100,this.imageY - 100);
  }
}
