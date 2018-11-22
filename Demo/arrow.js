/**
 * @author brendanhorlick1997@gmail.com (Brendan Horlick)
 * date: 31/10/2018
 */
class Arrow
{
  constructor(x,y,direction) {
    this.img = new Image();   // Create new img element
    this.img.id = "arrow";
    this.loaded = false;
    var that = this;
    this.imageX = x;
    this.imageY = y;
    this.opacity = 0;
    this.endCount = 0;
    this.direction = direction;
    this.imgCount = 0;
    this.imgIn = true;

    // Change these values to alter image movement
    this.maxImgMove = 30;
    this.imgMoveSpeed = 1;

    this.img.addEventListener('load', function() {
      console.log('Image loaded: ' + this.toString);
      that.loaded = true;

    }, false);
    this.img.src = 'arrow.png'; // Set source path
  }

  render(){}
  /**
   * Draws an image after it is loaded.
   */
  drawImage() {
    if(this.imgCount > this.maxImgMove){
      this.imgIn = true;
    }
    if(this.imgCount <= 0){
      this.imgIn = false;
    }
    if(this.imgIn == false){
      this.imgCount = this.imgCount + this.imgMoveSpeed;
    }
    if(this.imgIn == true){
      this.imgCount = this.imgCount - this.imgMoveSpeed;
    }
    var ctx = document.getElementById("mycanvas").getContext("2d");
    if (this.loaded === true) {
      // draw the image
      if(this.direction == "right"){
        //ctx.drawImage(this.img,this.imageX -224,this.imageY -82);
        ctx.drawImage(this.img,this.imageX - (224 + this.imgCount),this.imageY - 82);
        }
      if(this.direction == "down"){
        //ctx.drawImage(this.img,this.imageX -224,this.imageY -82);
        var x = ctx.width / 2;
        var y = ctx.height / 2;
        var width = this.img.width;
        var height = this.img.height;
        var angleInRadians = 1.5708;
        ctx.translate(x, y);
        ctx.rotate(angleInRadians);
        ctx.drawImage(this.img, -width / 2 + (this.imageY -112 - this.imgCount), -height / 2 - (this.imageX), width, height);
        ctx.rotate(-angleInRadians);
        ctx.translate(-x, -y);
          }
      if(this.direction == "left"){
        //ctx.drawImage(this.img,this.imageX -224,this.imageY -82);
        var x = ctx.width / 2;
        var y = ctx.height / 2;
        var width = this.img.width;
        var height = this.img.height;
        var angleInRadians = 3.1416;
        ctx.translate(x, y);
        ctx.rotate(angleInRadians);
        ctx.drawImage(this.img, -width / 2 - (this.imageX + 112 + this.imgCount), -height / 2 - (this.imageY), width, height);
        ctx.rotate(-angleInRadians);
        ctx.translate(-x, -y);
          }
          if(this.direction == "up"){
            //ctx.drawImage(this.img,this.imageX -224,this.imageY -82);
            var x = ctx.width / 2;
            var y = ctx.height / 2;
            var width = this.img.width;
            var height = this.img.height;
            var angleInRadians = -1.5708;
            ctx.translate(x, y);
            ctx.rotate(angleInRadians);
            ctx.drawImage(this.img, -width / 2 - (this.imageY + 112 + this.imgCount), -height / 2 + (this.imageX), width, height);
            ctx.rotate(-angleInRadians);
            ctx.translate(-x, -y);
              }
      }

      //ctx.drawImage(this.img, 200, 0, 89, 143, 0, 0, 500, 200);
      // context.drawImage(img,sx,sy,swidth,sheight,x,y,width,height)
    }
}
