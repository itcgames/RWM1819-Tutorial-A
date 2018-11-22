/**
 * @author brendanhorlick1997@gmail.com (Brendan Horlick)
 * date: 31/10/2018
 */
class Highlight
{
  constructor(x,y,width,height) {
    this.img = new Image();   // Create new img element
    this.img.id = "arrow";
    this.loaded = false;
    var that = this;
    this.imageXStart = x;
    this.imageYStart = y;
    this.imageWStart = width;
    this.imageHStart = height;
    this.opacity = 0;
    this.endCount = 0;
    this.imgCount = 0;

    // Change these values to alter image movement
    this.maxImgMove = 50;
    this.imgMoveSpeed = 2;

    this.imgIn = true;
    this.img.addEventListener('load', function() {
      console.log('Image loaded: ' + this.toString);
      that.loaded = true;

    }, false);
    this.img.src = 'highlight.png'; // Set source path
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
        //ctx.drawImage(this.img,this.imageX -224,this.imageY -82);
        this.imageH = this.imageHStart + this.imgCount;
        this.imageW = this.imageWStart + this.imgCount;
        this.imageX = this.imageXStart - (this.imageW/2);
        this.imageY = this.imageYStart - (this.imageH/2);
        ctx.drawImage(this.img,this.imageX,this.imageY,this.imageW,this.imageH);


      }

      //ctx.drawImage(this.img, 200, 0, 89, 143, 0, 0, 500, 200);
      // context.drawImage(img,sx,sy,swidth,sheight,x,y,width,height)
    }
}
