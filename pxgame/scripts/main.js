var myHeading = document.querySelector('h2');
var myImage = document.querySelector('img');
var myButton = document.querySelector('button');
var myHeading0 = document.querySelector('h1');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/black-50pixels.png') {
      myImage.setAttribute('src', 'images/black-pixel.png');
      myHeading.textContent = 'Ouch! Stop poking me!I\'m smaller!';
    } else {
      myImage.setAttribute('src', 'images/black-50pixels.png');
      myHeading.textContent = 'I\'m a black 50-pixel.';
    }
}

function setUserName() {
  var myName = prompt('Please enter your name.');
  localStorage.setItem('name', myName);
  myHeading0.textContent = 'Pixel ' + myName;
}

//初始化模块
if(!localStorage.getItem('name')) {
  setUserName();
} else {
  var storedName = localStorage.getItem('name');
  myHeading0.textContent = 'Pixel ' + storedName;
}
myButton.onclick = function() {
  setUserName();
}
