var nombreColores = ['White', 'LightYellow',
  'LemonChiffon', 'LightGoldenrodYellow', 'PapayaWhip', 'Moccasin', 'PeachPuff', 'PaleGoldenrod', 'Bisque', 'NavajoWhite', 'Wheat', 'BurlyWood', 'Tan',
  'Khaki', 'Yellow', 'Gold', 'Orange', 'DarkOrange', 'OrangeRed', 'Tomato', 'Coral', 'DarkSalmon', 'LightSalmon', 'LightCoral', 'Salmon', 'PaleVioletRed',
  'Pink', 'LightPink', 'HotPink', 'DeepPink', 'MediumVioletRed', 'Crimson', 'Red', 'FireBrick', 'DarkRed', 'Maroon',
  'Brown', 'Sienna', 'SaddleBrown', 'IndianRed', 'RosyBrown',
  'SandyBrown', 'Goldenrod', 'DarkGoldenrod', 'Peru',
  'Chocolate', 'DarkKhaki', 'DarkSeaGreen', 'MediumAquaMarine',
  'MediumSeaGreen', 'SeaGreen', 'ForestGreen', 'Green', 'DarkGreen', 'OliveDrab', 'Olive', 'DarkOliveGreen', 'YellowGreen', 'LawnGreen',
  'Chartreuse', 'GreenYellow', 'Lime', 'SpringGreen', 'LimeGreen',
  'LightGreen', 'PaleGreen', 'PaleTurquoise',
  'AquaMarine', 'Cyan', 'Turquoise', 'MediumTurquoise', 'DarkTurquoise', 'DeepSkyBlue',
  'LightSeaGreen', 'CadetBlue', 'DarkCyan', 'Teal', 'Steelblue', 'LightSteelBlue', 'Honeydew', 'LightCyan',
  'PowderBlue', 'LightBlue', 'SkyBlue', 'LightSkyBlue',
  'DodgerBlue', 'CornflowerBlue', 'RoyalBlue', 'SlateBlue',
  'MediumSlateBlue', 'DarkSlateBlue', 'Indigo', 'Purple', 'DarkMagenta', 'Blue',
  'MediumBlue', 'DarkBlue', 'Navy', 'Thistle',
  'Plum', 'Violet', 'Orchid', 'DarkOrchid', 'Fuchsia', 'Magenta', 'MediumOrchid',
  'BlueViolet', 'DarkViolet', 'DarkOrchid',
  'MediumPurple', 'Lavender', 'Gainsboro', 'LightGray', 'Silver', 'DarkGray', 'Gray',
  'DimGray', 'LightSlateGray', 'DarkSlateGray', 'Black'
];

// Variable para guardar el elemento 'color-personalizado'
// Es decir, el que se elige con la rueda de color.
var colorPersonalizado = document.getElementById('color-personalizado');
var paleta = document.getElementById('paleta');
var grillaPixeles = document.getElementById('grilla-pixeles');
var colorActual;
var flag = false;

function paletaDeColores() {
  for (var i = 0; i < nombreColores.length; i++) {
    var color = document.createElement("div");
    color.className = "color-paleta";
    color.id = nombreColores[i];
    color.addEventListener("click", mostrarColor);
    color.style.backgroundColor = nombreColores[i];
    paleta.appendChild(color);

  }
}

document.getElementById('piker').addEventListener('click', function(){
  flag = true
  grillaPixeles.addEventListener('click', buscarColor);
});

function buscarColor(e){
  colorActual = e.target.style.backgroundColor;
  console.log(colorActual);
  if(colorActual === " "){
    colorActual = 'white';
  } else {
    colorActual = colorActual;
  }
  document.getElementById('color-piker').style.backgroundColor = colorActual;
  flag = false;

}



function crearGrilla(){
  for (var i = 0; i <1751; i++) {
  var pixel = document.createElement('div');
  pixel.className = "pixel";
  pixel.addEventListener("click", pintar);
  pixel.addEventListener("mouseover", pintarEnMovimiento);
  grillaPixeles.appendChild(pixel);
  }
}

function mostrarColor(){
  var indicador = document.getElementById('indicador-de-color');
  indicador.className = this.id;
  indicador.style.backgroundColor = this.id;
}

function colorComienzo(){
  var pincel = document.getElementById('indicador-de-color');
  var numero = Math.floor(Math.random() * 120);
  pincel.className = nombreColores[numero];
  pincel.style.backgroundColor = nombreColores[numero];
}

function pintar(){
if (!flag) {
  var color = document.getElementById('indicador-de-color').classList;
  this.style.backgroundColor =  color ;
}
}

colorPersonalizado.addEventListener('change',
  (function() {
     colorActual = colorPersonalizado.value;
    console.log(colorActual);
    var indicador = document.getElementById('indicador-de-color');
    indicador.className = colorActual;
    indicador.style.backgroundColor = colorActual;


  })
);

var mouse = false;
$(document).mousedown(function() {
    mouse = true;
}).mouseup(function() {
    mouse = false;
});

function pintarEnMovimiento(){
  if(mouse){
    var color = document.getElementById('indicador-de-color').classList;
    this.style.backgroundColor =  color ;
  }
}

$("#borrar").click (function(){
  let $pixelBorrado = $("#grilla-pixeles div").animate({"background-color": "white"},1000);
});

function cagadorDeImagenes(){
  
}

function comenzar(){
  paletaDeColores();
  crearGrilla();
  colorComienzo();
}
comenzar();
