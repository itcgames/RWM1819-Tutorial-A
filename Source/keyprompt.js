/**
 * @author brendanhorlick1997@gmail.com (Brendan Horlick)
 * date: 31/10/2018
 */
class KeyPrompt
{
  constructor(x,y,prompt) {
    this.img = new Image();   // Create new img element
    this.img.id = "mouseClick";
    this.loaded = false;
    this.drawBool = true;
    var that = this;
    this.X = x;
    this.Y = y;
    this.opacity = 0;
    this.endCount = 0;
    this.prompt = prompt;
    this.imgCount = 0;
    this.imgIn = true;

    this.spaceWidth = 160;
    this.spaceHeight = 30;
    this.spaceStartX = 160;
    this.spaceStartY = 162;

    this.arrowUpWidth = 32;
    this.arrowUpHeight = 30;
    this.arrowUpStartX = 384;
    this.arrowUpStartY = 130;

    this.arrowDownWidth = 32;
    this.arrowDownHeight = 30;
    this.arrowDownStartX = 384;
    this.arrowDownStartY = 162;

    this.arrowLeftWidth = 32;
    this.arrowLeftHeight = 30;
    this.arrowLeftStartX = 352;
    this.arrowLeftStartY = 162;

    this.arrowRightWidth = 32;
    this.arrowRightHeight = 30;
    this.arrowRightStartX = 416;
    this.arrowRightStartY = 162;

    // Change these values to alter image movement
    this.maxImgMove = 30;
    this.imgMoveSpeed = 2;

    this.img.addEventListener('load', function() {
      console.log('Image loaded: ' + this.toString);
      that.loaded = true;

    }, false);
    this.img.src = '../assets/keys.jpg'; // Set source path


  }

  render(){}
  setDrawFalse(){
    this.drawBool = false;
  }
  getKey(that,e){
    that.keyPressed = e.key;
    console.log(e.key)
    if(that.keyPressed == that.prompt)
    {
    that.setDrawFalse();
  }
  if(that.keyPressed == " " && that.prompt == "Space")
  {
    that.setDrawFalse();
  }
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
    var that = this;
    window.addEventListener("keydown", this.getKey.bind(null,that));
    if (this.loaded === true && this.drawBool === true) {
        //ctx.drawImage(this.img,this.imageX -224,this.imageY -82);
        if(this.prompt == "Space"){
        if(this.imgIn == false){
          ctx.drawImage(this.img,this.spaceStartX,this.spaceStartY,this.spaceWidth,
          this.spaceHeight,this.X,this.Y,this.spaceWidth,this.spaceHeight);
        }else if(this.imgIn == true){
          ctx.drawImage(this.img,192,358,128,
          26,this.X + 16,this.Y + 4,128,26);
        }
      }
        if(this.prompt == "ArrowUp"){
        if(this.imgIn == false){
          ctx.drawImage(this.img,this.arrowUpStartX,this.arrowUpStartY,this.arrowUpWidth,
          this.arrowUpHeight,this.X,this.Y,this.arrowUpWidth,this.arrowUpHeight);
        }else if(this.imgIn == true){
          ctx.drawImage(this.img,this.arrowUpStartX,this.arrowUpStartY + 196,this.arrowUpWidth,
          this.arrowUpHeight,this.X,this.Y + 4,this.arrowUpWidth,this.arrowUpHeight);
        }
      }
        if(this.prompt == "ArrowDown"){
        if(this.imgIn == false){
          ctx.drawImage(this.img,this.arrowDownStartX,this.arrowDownStartY,this.arrowDownWidth,
          this.arrowDownHeight,this.X,this.Y,this.arrowDownWidth,this.arrowDownHeight);
        }else if(this.imgIn == true){
          ctx.drawImage(this.img,this.arrowDownStartX,this.arrowDownStartY + 196,this.arrowDownWidth,
          this.arrowDownHeight,this.X,this.Y + 4,this.arrowDownWidth,this.arrowDownHeight);
        }
      }
        if(this.prompt == "ArrowLeft"){
        if(this.imgIn == false){
          ctx.drawImage(this.img,this.arrowLeftStartX,this.arrowLeftStartY,this.arrowLeftWidth,
          this.arrowLeftHeight,this.X,this.Y,this.arrowLeftWidth,this.arrowLeftHeight);
        }else if(this.imgIn == true){
          ctx.drawImage(this.img,this.arrowLeftStartX,this.arrowLeftStartY + 196,this.arrowLeftWidth,
          this.arrowLeftHeight,this.X,this.Y + 4,this.arrowLeftWidth,this.arrowLeftHeight);
        }
      }
        if(this.prompt == "ArrowRight"){
        if(this.imgIn == false){
          ctx.drawImage(this.img,this.arrowRightStartX,this.arrowRightStartY,this.arrowRightWidth,
          this.arrowRightHeight,this.X,this.Y,this.arrowRightWidth,this.arrowRightHeight);
        }else if(this.imgIn == true){
          ctx.drawImage(this.img,this.arrowRightStartX,this.arrowRightStartY + 196,this.arrowRightWidth,
          this.arrowRightHeight,this.X,this.Y + 4,this.arrowRightWidth,this.arrowRightHeight);
        }
      }
    }

      //ctx.drawImage(this.img, 200, 0, 89, 143, 0, 0, 500, 200);
      // context.drawImage(img,sx,sy,swidth,sheight,x,y,width,height)
    }
}
