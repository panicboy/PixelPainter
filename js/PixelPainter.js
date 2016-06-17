var canvas = document.getElementById('pp-canvas');
var colorArr = ['red', 'orange', 'yellow','green','blue','violet','magenta'];
var colorPalette = document.getElementById('paletteDiv');
var selectedColor = '';

var clearDiv = document.getElementById('clearDiv');
clearDiv.innerHTML = 'Clear';

var eraseDiv = document.getElementById('eraseDiv');
eraseDiv.innerHTML = 'Erase';

for( var i = 1; i <= 25; i++ ){
  var newPixel = document.createElement('div');
  newPixel.className = 'pixels'
  newPixel.innerHTML = i;
  canvas.appendChild(newPixel);
  newPixel.addEventListener('mousedown', setColor);
  if( i % 5 === 0 ){
    var lineBreak = document.createElement('br');
    canvas.appendChild(lineBreak);
  }
}

for( var i = 0; i < colorArr.length; i++ ){
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