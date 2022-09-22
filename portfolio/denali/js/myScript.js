document.getElementById('button1').addEventListener('click', function() {
   document.getElementById('section5__img').src = "images/s5-img1.png";
   document.getElementById('section5__dot1').classList.add('section5__dotColor');
   document.getElementById('section5__dot2').classList.remove('section5__dotColor');
   document.getElementById('section5__dot3').classList.remove('section5__dotColor');
   document.getElementById('section5__dot4').classList.remove('section5__dotColor');
   document.getElementById('section5__dot5').classList.remove('section5__dotColor');
   document.getElementById('section5__test').innerHTML = 'Warsaw, PL';
});

document.getElementById('button2').addEventListener('click', function() {
   document.getElementById('section5__img').src = "images/s5-img2.png";
   document.getElementById('section5__dot2').classList.add('section5__dotColor');
   document.getElementById('section5__dot1').classList.remove('section5__dotColor');
   document.getElementById('section5__dot3').classList.remove('section5__dotColor');
   document.getElementById('section5__dot4').classList.remove('section5__dotColor');
   document.getElementById('section5__dot5').classList.remove('section5__dotColor');
   document.getElementById('section5__test').innerHTML = 'London, UK';
});

document.getElementById('button3').addEventListener('click', function() {
   document.getElementById('section5__img').src = "images/s5-img3.png";
   document.getElementById('section5__dot3').classList.add('section5__dotColor');
   document.getElementById('section5__dot1').classList.remove('section5__dotColor');
   document.getElementById('section5__dot2').classList.remove('section5__dotColor');
   document.getElementById('section5__dot4').classList.remove('section5__dotColor');
   document.getElementById('section5__dot5').classList.remove('section5__dotColor');
   document.getElementById('section5__test').innerHTML = 'Munich, De';
});

document.getElementById('button4').addEventListener('click', function() {
   document.getElementById('section5__img').src = "images/s5-img4.png";
   document.getElementById('section5__dot4').classList.add('section5__dotColor');
   document.getElementById('section5__dot1').classList.remove('section5__dotColor');
   document.getElementById('section5__dot2').classList.remove('section5__dotColor');
   document.getElementById('section5__dot3').classList.remove('section5__dotColor');
   document.getElementById('section5__dot5').classList.remove('section5__dotColor');
   document.getElementById('section5__test').innerHTML = 'Turin, IT';
});

document.getElementById('button5').addEventListener('click', function() {
   document.getElementById('section5__img').src = "images/s5-img5.png";
   document.getElementById('section5__dot5').classList.add('section5__dotColor');
   document.getElementById('section5__dot1').classList.remove('section5__dotColor');
   document.getElementById('section5__dot2').classList.remove('section5__dotColor');
   document.getElementById('section5__dot3').classList.remove('section5__dotColor');
   document.getElementById('section5__dot4').classList.remove('section5__dotColor');
   document.getElementById('section5__test').innerHTML = 'Cairo, EG';
});


// Carousel
var ic = 0;
function carousel(){
   document.getElementById('section1__circle1').classList.remove('section1__circle--full');
   document.getElementById('section1__circle2').classList.remove('section1__circle--full');
   document.getElementById('section1__circle3').classList.remove('section1__circle--full');
   document.getElementById('section1__circle4').classList.remove('section1__circle--full');
   document.getElementById('section1__circle5').classList.remove('section1__circle--full');
   document.getElementById('section1__circle6').classList.remove('section1__circle--full');
   document.getElementById('section1__circle7').classList.remove('section1__circle--full');
   document.getElementById('section1__img1').classList.remove('section1__downImg--full');
   document.getElementById('section1__img2').classList.remove('section1__downImg--full');
   document.getElementById('section1__img3').classList.remove('section1__downImg--full');
   document.getElementById('section1__img4').classList.remove('section1__downImg--full');
   document.getElementById('section1__img5').classList.remove('section1__downImg--full');
   document.getElementById('section1__img6').classList.remove('section1__downImg--full');
   document.getElementById('section1__img7').classList.remove('section1__downImg--full');
   ic = ic + 1;

   if (ic == 8) {
      ic = 1;
   }

   document.getElementById('section1__circle' + ic).classList.add('section1__circle--full');
   document.getElementById('section1__img' + ic).classList.add('section1__downImg--full');
   document.getElementById('section1__upImg').src = "images/s1-img" + ic + ".png"

   setTimeout(carousel, 2000)
}
setTimeout(carousel, 2000)

// I am selecting the image element with the ID - section1-upimg
// carousel() - I am calling the function carousel
// window.alert('function carousel called');


document.getElementById('section6__allItems').addEventListener('click', function(){
   remove();

   var blocks =  document.getElementsByClassName('section6__block');
   for ( var i = 0; i < blocks.length; i++) {
      blocks[i].style.display = 'block';
   }

   document.getElementById('section6__allItems').classList.add('section6__button-active');


});

document.getElementById('section6__preset1').addEventListener('click', function() {
   hide();
   remove();

   var blocksShow = document.getElementsByClassName('section6__preset1');
   for (var j = 0; j < blocksShow.length; j++) {
      blocksShow[j].style.display = 'block';
   }
  
   document.getElementById('section6__preset1').classList.add('section6__button-active');
});

document.getElementById('section6__preset2').addEventListener('click', function() {
   hide();
   remove();

   var blocksShow = document.getElementsByClassName('section6__preset2');
   for (var j = 0; j < blocksShow.length; j++) {
      blocksShow[j].style.display = 'block';
   }
   
   document.getElementById('section6__preset2').classList.add('section6__button-active');
});

document.getElementById('section6__preset3').addEventListener('click', function() {
   hide();
   remove();

   var blocksShow = document.getElementsByClassName('section6__preset3');
   for (var j = 0; j < blocksShow.length; j++) {
      blocksShow[j].style.display = 'block';
   }
   
   document.getElementById('section6__preset3').classList.add('section6__button-active');
});

document.getElementById('section6__preset4').addEventListener('click', function() {
   hide();
   remove();

   var blocksShow = document.getElementsByClassName('section6__preset4');
   for (var j = 0; j < blocksShow.length; j++) {
      blocksShow[j].style.display = 'block';
   }
   
   document.getElementById('section6__preset4').classList.add('section6__button-active');
});

document.getElementById('section6__preset5').addEventListener('click', function() {
   hide();
   remove();

   var blocksShow = document.getElementsByClassName('section6__preset5');
   for (var j = 0; j < blocksShow.length; j++) {
      blocksShow[j].style.display = 'block';
   }
   
   document.getElementById('section6__preset5').classList.add('section6__button-active');
});

function hide() {
   var blocksHide = document.getElementsByClassName('section6__block');
   for (var i = 0; i < blocksHide.length; i++) {
      blocksHide[i].style.display = 'none';
   }
}

function remove() {
   document.getElementById('section6__allItems').classList.remove('section6__button-active');
   document.getElementById('section6__preset1').classList.remove('section6__button-active');
   document.getElementById('section6__preset2').classList.remove('section6__button-active');
   document.getElementById('section6__preset3').classList.remove('section6__button-active');
   document.getElementById('section6__preset4').classList.remove('section6__button-active');
   document.getElementById('section6__preset5').classList.remove('section6__button-active');
}