function pixelPainter(width, height){
var colorArr = ['FF0000','FF6666','FF9999','FFCCCC',
'FF8000','FFB266','FFE5CC','FFFF00','FFFF66','FFFF99'
,'FFFFCC','00CC00','33FF33','99FF99','0000CC','4C0099'
,'7F00FF','9933FF','CC99FF','FF00FF','000000'
,'404040','808080','C0C0C0','FFFFFF'];

//define document parts

//body
var body = document.body;

//PixelPainter element
var masterDiv = document.createElement('div');
masterDiv.id = 'pp-canvas';
body.appendChild(masterDiv);

//palette box
var colorPalette = document.createElement('div');
colorPalette.id = 'paletteDiv';
masterDiv.appendChild(colorPalette);
var canvas = document.createElement('div');

//canvas
canvas.id = 'canvas';
masterDiv.appendChild(canvas);
var eraseDiv = document.createElement('div');

//buttons
eraseDiv.id = 'eraseDiv';
colorPalette.appendChild(eraseDiv);
var clearDiv = document.createElement('div');
clearDiv.id = 'clearDiv';
colorPalette.appendChild(clearDiv);
var pixelSize = 20;

var selectedColor = '';
clearDiv.innerHTML = 'Clear';
eraseDiv.innerHTML = 'Erase';

var holdDown = false;

function selectColor(){
  selectedColor = this.style.backgroundColor
}

function setColor(){
  this.style.backgroundColor = selectedColor;
}


for(var y = 1; y <= height; y++ ){
  //create new row
  for(var x = 1; x <= width; x++) {
    var newPixel = document.createElement('div');
    newPixel.className = 'pixels';
    newPixel.loc = {x, y};
    newPixel.style.height = pixelSize + 'px';
    newPixel.style.width = pixelSize + 'px';
    canvas.appendChild(newPixel);

    //event listeners to change color when clicking
    newPixel.addEventListener('mousedown', function(){
      this.style.backgroundColor = selectedColor;
      holdDown = true;
    });
    newPixel.addEventListener('mouseup', function(){
      holdDown = false;
    });
    newPixel.addEventListener('mouseenter', function(){
      if( holdDown === true ){
        this.style.backgroundColor = selectedColor;
      }
    });
  }
  //new row created
  var lineBreak = document.createElement('br');
  canvas.appendChild(lineBreak);
}

for( var i = 0; i < colorArr.length; i++ ){
  if( i % 5 === 0){
    var lineBreak = document.createElement('br');
    paletteDiv.appendChild(lineBreak);
  }
  var colorPixel = document.createElement('div');
  colorPixel.className = 'colors';
  colorPixel.style.height = pixelSize * 1.5;
  colorPixel.style.width = pixelSize * 1.5;
  colorPixel.style.backgroundColor = colorArr[i];
  colorPalette.appendChild(colorPixel);
  colorPixel.addEventListener('click', selectColor);
}


colorPalette.appendChild(clearDiv);
colorPalette.appendChild(eraseDiv);

eraseDiv.addEventListener('click', function(){
  selectedColor = 'transparent';
})

clearDiv.addEventListener('click',function(){
  var allPixels = document.getElementsByClassName('pixels');
  // document.getElementsByClassName('pixels').setAttribute(backgroundColor, 'white');
  for(var i = 0; i < allPixels.length; i++){
    allPixels[i].style.backgroundColor = 'transparent';
    holdDown = false;
  }
})

function makeItBigger(){
    this.style.width = (parseFloat(this.style.width) + 1) + 'px';
    this.style.height = (parseFloat(this.style.height) + 1 ) + 'px';
  }
}
pixelPainter(12, 10);