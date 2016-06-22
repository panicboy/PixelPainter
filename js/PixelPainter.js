function pixelPainter(width, height){
var colorArr = ['FFA07A','FA8072','E9967A','F08080','CD5C5C','DC143C','B22222','FF0000','8B0000','FF7F50','FF6347','FF4500','FFD700','FFA500','FF8C00','FFFFE0','FFFACD','FFEFD5','FFE4B5','FFDAB9','EEE8AA','F0E68C','BDB76B','FFFF00','7FFF00','32CD32','00FF00','228B22','008000','006400','ADFF2F','9ACD32','00FF7F','00FA9A','90EE90','98FB98','8FBC8F','3CB371','2E8B57','808000','556B2F','6B8E23','E0FFFF','00FFFF','7FFFD4','66CDAA','AFEEEE','40E0D0','48D1CC','00CED1','20B2AA','5F9EA0','008B8B','008080','B0E0E6','ADD8E6','87CEFA','87CEEB','00BFFF','B0C4DE','1E90FF','6495ED','4682B4','4169E1','0000FF','0000CD','00008B','000080','191970','7B68EE','6A5ACD','483D8B','E6E6FA','D8BFD8','DDA0DD','EE82EE','DA70D6','FF00FF','BA55D3','9370DB','8A2BE2','9400D3','9932CC','8B008B','800080','4B0082','FFC0CB','FFB6C1','FF69B4','FF1493','DB7093','C71585','FFFFFF','FFFAFA','F0FFF0','F5FFFA','F0FFFF','F0F8FF','F8F8FF','F5F5F5','FFF5EE','F5F5DC','FDF5E6','FFFAF0','FFFFF0','FAEBD7','FAF0E6','FFF0F5','FFE4E1','DCDCDC','D3D3D3','C0C0C0','A9A9A9','808080','696969','778899','708090','2F4F4F','000000','FFF8DC','FFEBCD','FFE4C4','FFDEAD','F5DEB3','DEB887','D2B48C','BC8F8F','F4A460','DAA520','CD853F','D2691E','8B4513','A0522D','A52A2A','800000'];

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

//canvas
var canvas = document.createElement('div');
canvas.id = 'canvas';
canvas.addEventListener('mouseup', function(){
  holdDown = false;
});
masterDiv.appendChild(canvas);

//buttons
var eraseDiv = document.createElement('div');
eraseDiv.id = 'eraseDiv';
eraseDiv.className = 'buttons';
var clearDiv = document.createElement('div');
clearDiv.id = 'clearDiv';
clearDiv.className = 'buttons';
var erasing = false;
var pixelSize = 20;

var preview = document.createElement('div');
preview.id = 'preview';

var lineBreak = document.createElement('br');
var pixelId = 1;
var swatchId = 1;
var statusText1 = String;
var statusText2 = String;
var nextActionText = String;


var selectedColor = '';
clearDiv.innerHTML = 'Clear';
eraseDiv.innerHTML = 'Erase';

var holdDown = false;

function selectColor(){
  //selectedColor = this.style.backgroundColor;
  selectedColor = this.id;
}

function setColor(){
  this.style.backgroundColor = selectedColor;
}


for(var y = 1; y <= height; y++ ){
  //create new row
  for(var x = 1; x <= width; x++) {
    var newPixel = document.createElement('div');
    newPixel.className = 'pixels';
    newPixel.x = x;
    newPixel.y = y;
    newPixel.id = pixelId;
    newPixel.style.height = pixelSize + 'px';
    newPixel.style.width = pixelSize + 'px';
    pixelId++;
    canvas.appendChild(newPixel);

    //event listeners to change color when clicking
    newPixel.addEventListener('mousedown', function(){
      //only change color if selected color is different
      if(this.style.backgroundColor !== selectedColor){
        this.style.backgroundColor = selectedColor;
      }
      holdDown = true;
    });
    newPixel.addEventListener('mouseenter', function(){
      if(holdDown){
        if(this.style.backgroundColor !== selectedColor){
          this.style.backgroundColor = selectedColor;
        }
      }
    });
  }
  //new row created
  appendLinebreak(canvas);
}

var statusDiv1 = document.createElement('div');
statusDiv1.id = 'statusDiv1';
statusDiv1.className = 'statusdisplay';
statusDiv1.innerHTML = '1';
canvas.appendChild(statusDiv1);
var statusDiv2 = document.createElement('div');
statusDiv2.id = 'statusDiv2';
statusDiv2.innerHTML = '2';
statusDiv2.className = 'statusdisplay';
canvas.appendChild(statusDiv2);
var actionDiv = document.createElement('div');
actionDiv.id = 'actionDiv';
actionDiv.innerHTML = 'x';
actionDiv.className = 'statusdisplay';
canvas.appendChild(actionDiv);

for( var i = 0; i < colorArr.length; i++ ){
  if( i % 9 === 0){
    appendLinebreak(paletteDiv);
  }
  erasing = false;
  var colorPixel = document.createElement('div');
  colorPixel.className = 'colors';
  colorPixel.style.backgroundColor = colorArr[i];
  colorPixel.id = colorArr[i];
  colorPalette.appendChild(colorPixel);
  colorPixel.addEventListener('click', selectColor);
  colorPixel.addEventListener('click', function(){
    let previewSwatch = document.getElementById('preview');
    previewSwatch.style.backgroundColor = selectedColor;
    previewSwatch.innerHTML = this.id;
    let actionDiv = document.getElementById('actionDiv');
    actionDiv.innerHTML = 'paint mode';
  });
}
colorPalette.appendChild(clearDiv);
colorPalette.appendChild(eraseDiv);
colorPalette.appendChild(preview);

eraseDiv.addEventListener('click', function(){
  erasing = true;
  selectedColor = 'transparent';
  let actionDiv = document.getElementById('actionDiv');
  actionDiv.innerHTML = 'erase mode';

});

clearDiv.addEventListener('click',function(){
  var allPixels = document.getElementsByClassName('pixels');
  for(var i = 0; i < allPixels.length; i++){
    allPixels[i].style.backgroundColor = 'transparent';
    holdDown = false;
  }
});

function appendLinebreak(theElement){
    var lineBreak = document.createElement('br');
    theElement.appendChild(lineBreak);
  }
}




pixelPainter(32, 16);
