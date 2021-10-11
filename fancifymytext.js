
function bigger(){

  document.getElementById("text").style.fontSize = "2em";
}

function giveStyle(){

  document.getElementById("text").style.fontWeight = "900";
  document.getElementById("text").style.color = "blue";
  document.getElementById("text").style.textDecoration = "underline";
}



function noStyle(){

  document.getElementById("text").style.color = "black";
  document.getElementById("text").style.fontWeight = "400";
  document.getElementById("text").style.textDecoration = "none"
}

function moo(){

  text = document.getElementById('text');
  text.style.textTransform="uppercase";
  var str = document.getElementById('text').value.split('.');
  str = str.join("-Moo.");
  text.value = str;
}
