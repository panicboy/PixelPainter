var canvas = document.getElementById('pp-canvas');
var colorArr = ['FF0000','FF6666','FF9999','FFCCCC','FF8000','FFB266','FFE5CC','FFFF00','FFFF66','FFFF99','FFFFCC','00CC00','33FF33','99FF99','0000CC','4C0099','7F00FF','9933FF','CC99FF','FF00FF','000000','404040','808080','C0C0C0','FFFFFF'];
var colorPalette = document.getElementById('paletteDiv');
var selectedColor = '';

var clearDiv = document.getElementById('clearDiv');
clearDiv.innerHTML = 'Clear';

var eraseDiv = document.getElementById('eraseDiv');
eraseDiv.innerHTML = 'Erase';

for( var i = 1; i <= 400; i++ ){
  var newPixel = document.createElement('div');
  newPixel.className = 'pixels'

  canvas.appendChild(newPixel);
  newPixel.addEventListener('mousedown', setColor);
  if( i % 20 === 0 ){
    var lineBreak = document.createElement('br');
    canvas.appendChild(lineBreak);
  }
}

for( var i = 0; i < colorArr.length; i++ ){
  if( i % 5 === 0){
    var lineBreak = document.createElement('br')
    paletteDiv.appendChild(lineBreak);
  }
  var colorPixel = document.createElement('div');
  colorPixel.className = 'colors';
  colorPixel.style.backgroundColor = colorArr[i];
  colorPalette.appendChild(colorPixel);
  colorPixel.addEventListener('click', selectColor)

}

function selectColor(){
  selectedColor = this.style.backgroundColor
}

function setColor(){
  this.style.backgroundColor = selectedColor;
}

colorPalette.appendChild(clearDiv);
colorPalette.appendChild(eraseDiv);

eraseDiv.addEventListener('click', function(){
  selectedColor = 'white';
})

clearDiv.addEventListener('click',function(){
  var allPixels = document.getElementsByClassName('pixels');
  // document.getElementsByClassName('pixels').setAttribute(backgroundColor, 'white');
  for(var i = 0; i < allPixels.length; i++){
    allPixels[i].style.backgroundColor = 'white';
  }
})