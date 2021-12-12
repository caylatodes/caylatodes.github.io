function getRandomColor() {

  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}


function assignRandomColor() {

  $("#about").css("color", getRandomColor());

}

document.getElementById('about').addEventListener("mouseover", assignRandomColor());
