var canvas = document.getElementById('pp-canvas');
var colorArr = ['red', 'orange', 'yellow','green','blue','violet','magenta'];
var colorPalette = document.getElementById('paletteDiv');
var selectedColor = '';


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


