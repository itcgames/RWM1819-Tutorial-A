/**
 * @author brendanhorlick1997@gmail.com (Brendan Horlick)
 * date: 31/10/2018
 */
class tutorialText
{
  constructor(text, textX, textY) {
    this.textString = text;
    this.textLength = this.textString.length;
    this.img = new Image();   // Create new img element
    this.img.id = "speachBubble";
    this.loaded = false;
    var that = this;
    var ctx = document.getElementById("mycanvas").getContext("2d");
    this.textX = textX;
    this.textY = textY;
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
  ctx.font = "30px Comic Sans MS";
  ctx.fillStyle = "#ffffff";
  ctx.textAlign = "left";
  var length = this.textString.length;
  ctx.fillText(this.textString, this.textX, this.textY);
  ctx.globalCompositeOperation = "source-in";
  ctx.fillStyle = "#000000";
  ctx.fillRect(this.textX, this.textY - 40, this.i, 400);
  this.i = this.i + 2;
  }
  drawBackground(){
    var ctx = document.getElementById("mycanvas").getContext("2d");
    //ctx.restore();
    ctx.globalCompositeOperation = "destination-over";
    //console.log(ctx.globalCompositeOperation);
    // context.drawImage(img,sx,sy,swidth,sheight,x,y,width,height)
    ctx.drawImage(this.img,this.textX - (40 + this.textLength)
    ,this.textY - (60 + this.textLength * 1.1),70 + (this.textLength * 17)
    ,150 + (this.textLength * 1.1));

    ctx.globalCompositeOperation = "source-over";
  }
}
