// Version 1
// document.getElementById('menu').addEventListener('click', function() {
//     document.getElementById('list').classList.toggle('nav__linkFlex--show');
//     console.log('Button was clicked.');
// });

// Version 2
document.getElementById('menu').addEventListener('click', buttonClicked);

function buttonClicked() {
   document.getElementById('list').classList.toggle('nav__linkFlex--show');
   console.log('Button was clicked.');
}