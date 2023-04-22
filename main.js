var timer = document.querySelector('.timer');
var quizbox = document.querySelector('.quiz-box');
const btn = document.querySelector('.btn');
const que = document.querySelector('.que');
const one = document.querySelectorAll('.one');
const labe = document.querySelectorAll('label');
const kya = document.querySelectorAll('.kya');
const cor = document.querySelectorAll('.cor');
const start = document.querySelector('.start');
const container = document.querySelector('.container');
const startquiz = document.querySelector('.start-quiz');
const sct = document.querySelector('.sct');
const blur = document.querySelector('.blur');
const last = document.querySelector('.last');
const answer = document.querySelector('.answer');

timer.innerHTML = "";
var b;
var m = 0;
var sample = 1;
var dew = 1;
var bad = 0;
var d = 0;
var z;
var x;
var a;
var score = 0;
var dead=-1;
var len = quiz.length;
var perc = (score * 20).toFixed(2) + '%';
var more;
window.onload = ras;

function ras() {
  startquiz.style.transform = 'scale(1)';
}


btn.addEventListener('click', function() {

    if (bad > quiz.length-2) {
        sct.style.transform = 'scale(1)';
        container.style.transform = 'scale(0)';
        last.innerHTML = `Time Taken ${timer.innerHTML}<br> Your Score ${score} / ${len} <br>Total Question = ${len}<br>Correct = ${score}<br>Wrong = ${len-score}<br> Percentege = ${(score * 20).toFixed(2) + '%'}`;
    }

    bad++;
    que.innerHTML = quiz[bad].q;
    one[0].innerHTML = quiz[bad].options[0];
    one[1].innerHTML = quiz[bad].options[1];
    one[2].innerHTML = quiz[bad].options[2];
    one[3].innerHTML = quiz[bad].options[3];
   

  one[0].classList.remove('active');
        one[1].classList.remove('active');
           one[2].classList.remove('active');
              one[3].classList.remove('active');
    });
   var check;

for (var i = 0; i < one.length; i++) {
one[i].addEventListener('click', function () {
    dead++;
check = this.innerHTML;

  console.log(check);

if (check == quiz[dead].answer) {

   score++;
   kya[dead].style.background = 'green';

    cor[dead].style.transform = 'scale(1)';
   cor[dead].src = "correct.png";

 
    console.log('right');
     one[0].classList.add('active');
        one[1].classList.add('active');
           one[2].classList.add('active');
              one[3].classList.add('active');
}

else{
      kya[dead].style.background = 'red';
         cor[dead].style.transform = 'scale(1)';
   cor[dead].src = "wrong.png";

    one[0].classList.add('active');
       one[1].classList.add('active');
          one[2].classList.add('active');
             one[3].classList.add('active');
}

   });    
}

btn.addEventListener('click', function () {
        if (x==quiz[0].answer) {
    }
    if (x==quiz[1].answer) {
    }
      if (x==quiz[2].answer) {
    }
});


start.addEventListener('click', function() {
    startquiz.style.transform = 'scale(0)';
    container.style.transform = 'scale(1)';
    var mim = setInterval(function() {
    m = dew++;
}, 60000);

setInterval(function() {
    b = sample++;
    timer.innerHTML = `${m}:0${b}`;
    if (b > 9) {
        timer.innerHTML = `${m}:${b}`;
    }
    if (b >= 59) {
        sample = 0;
    }
}, 1000);
});

que.innerHTML = quiz[bad].q;
one[0].innerHTML = quiz[bad].options[0];
one[1].innerHTML = quiz[bad].options[1];
one[2].innerHTML = quiz[bad].options[2];
one[3].innerHTML = quiz[bad].options[3];


