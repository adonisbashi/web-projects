const myImage = document.querySelector('img');

myImage.addEventListener('click', () => {
  const mySrc = myImage.getAttribute('src');
  if (mySrc === 'images/halal-logo.png') {
    myImage.setAttribute('src', 'images/halal-logo-red.png');
  } else {
    myImage.setAttribute('src', 'images/halal-logo.png');
  }
});

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
  const myName = prompt('Please enter your name.');
  if (!myName) {
    setUserName();
  } else {
    localStorage.setItem('name', myName);
    myHeading.textContent = `Papas is amazing, ${myName}`;
  }
}

if (!localStorage.getItem('name')) {
  setUserName();
} else {
  const storedName = localStorage.getItem('name');
  myHeading.textContent = `Papas is amazing, ${storedName}`;
}

myButton.addEventListener('click', () => {
  setUserName();
});
