// app.js is the main JS file which you should define your Angular module
angular
  .module('gin-app' );

// ['ui.router', 'ngResource', 'satellizer', 'ui.bootstrap', 'ngAnimate', 'ngSanitize']

function myFunction() {
  var x = document.getElementById('myTopnav');
  if (x.className === 'topnav') {
    x.className += ' responsive';
  } else {
    x.className = 'topnav';
  }
}
