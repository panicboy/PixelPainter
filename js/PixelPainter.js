function pixelPainter(width, height){
var colorArr = ['FF0000','FF6666','FF9999','FFCCCC',
'FF8000','FFB266','FFE5CC','FFFF00','FFFF66','FFFF99'
,'FFFFCC','00CC00','33FF33','99FF99','0000CC','4C0099'
,'7F00FF','9933FF','CC99FF','FF00FF','000000'
,'404040','808080','C0C0C0','FFFFFF'];
var body = document.body;
var masterDiv = document.createElement('div');
masterDiv.id = 'pp-canvas';
body.appendChild(masterDiv);
var colorPalette = document.createElement('div');
colorPalette.id = 'paletteDiv';
masterDiv.appendChild(colorPalette);
var canvas = document.createElement('div');
canvas.id = 'canvas';
masterDiv.appendChild(canvas);
var eraseDiv = document.createElement('div');
eraseDiv.id = 'eraseDiv';
eraseDiv.className = 'buttons'
colorPalette.appendChild(eraseDiv);
var clearDiv = document.createElement('div');
clearDiv.id = 'clearDiv';
clearDiv.className = 'buttons'
colorPalette.appendChild(clearDiv);
var erasing = false;

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


for( var i = 1; i <= (width * height); i++ ){
  var newPixel = document.createElement('div');
  newPixel.className = 'pixels';
  newPixel.style.backgroundColor = 'white';
  canvas.appendChild(newPixel);
  //newPixel.addEventListener('mousedown', setColor);

  //event listeners to change color when clicking
  newPixel.addEventListener('mousedown', function(){
    this.style.backgroundColor = selectedColor;
    this.style.opacity = 1.0;
    holdDown = true;
  });
  newPixel.addEventListener('mouseup', function(){
    holdDown = false;
  });
  newPixel.addEventListener('mouseenter', function(){
    if( holdDown === true ){
      this.style.backgroundColor = selectedColor;
      this.style.opacity = 1.0;
    } else if( erasing === true && holdDown === true ){
      this.style.backgroundColor = selectedColor;
      this.style.opacity = 0.5;
      console.log('hey listen');
    }
  });
  if( i % width === 0 ){
    var lineBreak = document.createElement('br');
    canvas.appendChild(lineBreak);
  }
}

for( var i = 0; i < colorArr.length; i++ ){
  if( i % 5 === 0){
    var lineBreak = document.createElement('br')
    paletteDiv.appendChild(lineBreak);
  }
  erasing = false;
  var colorPixel = document.createElement('div');
  colorPixel.className = 'colors';
  colorPixel.style.backgroundColor = colorArr[i];
  colorPalette.appendChild(colorPixel);
  colorPixel.addEventListener('click', selectColor);
//  colorPixel.addEventListener('mouseenter', setInterval(makeItBigger, 1000/30));
  // colorPixel.addEventListener('mouseenter', function(){
  //   setInterval(function(){
  //   this.style.width = (parseFloat(this.style.width) + 1 ) + 'px';
  //   this.style.height = (parseFloat(this.style.height) + 1 ) + 'px';

  //   }, 1000/30)
  // })
}


colorPalette.appendChild(clearDiv);
colorPalette.appendChild(eraseDiv);

eraseDiv.addEventListener('click', function(){
  selectedColor = 'white';
  erasing = true;
})

clearDiv.addEventListener('click',function(){
  var allPixels = document.getElementsByClassName('pixels');
  // document.getElementsByClassName('pixels').setAttribute(backgroundColor, 'white');
  for(var i = 0; i < allPixels.length; i++){
    allPixels[i].style.backgroundColor = 'white';
    holdDown = false;
    allPixels[i].style.opacity = 0.5;
  }
})

function makeItBigger(){
    this.style.width = (parseFloat(this.style.width) + 1) + 'px';
    this.style.height = (parseFloat(this.style.height) + 1 ) + 'px';
  }
}
pixelPainter(10 , 10);