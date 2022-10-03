var ran1 = Math.floor(Math.random()*4+1);
var ran2 = Math.floor(Math.random()*4+1);
var ran3 = Math.floor(Math.random()*4+1);
var ran4 = Math.floor(Math.random()*4+1);
var round = 1;
var pressed;

function game(){
  document.getElementById('1').addEventListener('click', prs1);
  document.getElementById('2').addEventListener('click', prs2);
  document.getElementById('3').addEventListener('click', prs3);
  document.getElementById('4').addEventListener('click', prs4);
}

function prs1(){
pressed = 1;
}
function prs2(){
pressed = 2;
}
function prs3(){
pressed = 3;
}
function prs4(){
pressed = 4;
}

const htmlP = document.querySelector('html');
htmlP.addEventListener("keypress", keyPrss);

function keyPrss(){
    if (round === 1){
        $("#"+ran1).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
        game();
      if (pressed===ran1){
        round = round + 1;
      } else if (pressed!==ran1){
        setTimeout(KeyPrs, 100);
      }

    } else if (round === 2){
      $("#"+ran1).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
      game();
      if (pressed===ran2){
        round = round + 1;
      } else if (pressed!==ran2){
        setTimeout(KeyPrs, 100);
      }

    } else if (round === 3){
      $("#"+ran1).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
      game();
      if (pressed===ran3){
        round = round + 1;
      } else if (pressed!==ran3){
        setTimeout(KeyPrs, 100);
      }

    } else if (round === 4){
      $("#"+ran1).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
      game();
      if (pressed===ran4){
        round = round + 1;
      } else if (pressed!==ran4){
        setTimeout(KeyPrs, 100);
      }
    }
}
