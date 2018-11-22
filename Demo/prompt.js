/**
 * @author brendanhorlick1997@gmail.com (Brendan Horlick)
 * date: 31/10/2018
 */
 var drawBool = true
class Prompt
{
  constructor(x,y,prompt) {
    this.img = new Image();   // Create new img element
    this.img.id = "prompt";
    this.img2 = new Image();   // Create new img element
    this.img2.id = "promptArrow";
    this.loaded = false;
    this.loaded2 = false;
    var that = this;
    this.imageX = x;
    this.imageY = y;
    this.arrowX = 140;
    this.arrowY = 20;
    this.opacity = 0;
    this.endCount = 0;
    this.prompt = prompt;
    this.imgCount = 0;
    this.imgIn = true;

    // Change these values to alter image movement
    this.maxImgMove = 30;
    this.imgMoveSpeed = 1;

    this.img.addEventListener('load', function() {
      console.log('Image loaded: ' + this.toString);
      that.loaded = true;

    }, false);
    if(this.prompt == "leftClick"){
      this.img.src = 'leftclick.png'; // Set source path
    }
    if(this.prompt == "rightClick"){
      this.img.src = 'rightclick.png'; // Set source path
    }
    this.img2.addEventListener('load', function() {
    console.log('Image loaded: ' + this.toString);
    that.loaded2 = true;
    }, false);
    if(this.prompt == "leftClick"){
      this.img2.src = 'clickArrow.png'; // Set source path
    }
    if(this.prompt == "rightClick"){
      this.img2.src = 'rightClickArrow.png'; // Set source path
    }
  }

  render(){}
  setDrawFalse(){
    drawBool = false;
    console.log(drawBool);
  }
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
    if(this.prompt == "leftClick"){
    document.addEventListener("click", this.setDrawFalse);
    }
    if(this.prompt == "rightClick"){
    document.addEventListener("click", this.setDrawFalse);
    }
    if (this.loaded === true && drawBool === true) {
        //ctx.drawImage(this.img,this.imageX -224,this.imageY -82);
      ctx.drawImage(this.img,this.imageX,this.imageY);
      if(this.prompt == "leftClick"){
        ctx.drawImage(this.img2,this.imageX - this.arrowX - this.imgCount, this.imageY + this.arrowY)
      }
      if(this.prompt == "rightClick"){
        ctx.drawImage(this.img2,this.imageX + this.arrowX - 15 + this.imgCount, this.imageY + this.arrowY)
      }



      }

      //ctx.drawImage(this.img, 200, 0, 89, 143, 0, 0, 500, 200);
      // context.drawImage(img,sx,sy,swidth,sheight,x,y,width,height)
    }
}
