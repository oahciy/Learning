function makeSound(value) {
  switch (value) {
    case 'w':
      var tom1 = new Audio('sounds/tom-1.mp3');
      tom1.play();
      break;
    case 'a':
      var tom2 = new Audio('sounds/tom-2.mp3');
      tom2.play();
      break;
    case 's':
      var tom3 = new Audio('sounds/tom-3.mp3');
      tom3.play();
      break;
    case 'd':
      var tom4 = new Audio('sounds/tom-4.mp3');
      tom4.play();
      break;
    case 'j':
      var snare = new Audio('sounds/snare.mp3');
      snare.play();
      break;
    case 'k':
      var crash = new Audio('sounds/crash.mp3');
      crash.play();
      break;
    case 'l':
      var kick = new Audio('sounds/kick-bass.mp3');
      kick.play();
      break;
    default:
      console.log(value);
  }
}

// detect button press
// document.querySelectorAll('.drum').forEach((button) => {
//   button.addEventListener('click', function () {
//     makeSound(this.innerHTML);
//   });
// });

document.querySelectorAll('.drum').forEach((button) => {
  button.addEventListener('click', (e) => {
    makeSound(e.target.innerHTML);
    addAnimation(e.target.innerHTML);
  });
});
//What is the event object?
// It is an object that contains information about the event.
// in this case the event is the click.
// When we call target on the event object which is click, we get the button that was clicked.

// document.querySelectorAll('.drum').forEach((button) => {
//   button.addEventListener('click', () => {
//     makeSound(this.innerHTML);
//   });
// });

// When you use "this" inside an arrow function, it refers to the window object. In this case it refers to the button.

// Why the code above makes the sound when the page loads?
// Because the function is being called when the event listener is added to the button.
// Why was the function called when the event listener was added?
// Because of the parenthesis at the end of the function name.
// what is the solution?
// remove the parenthesis at the end of the function name.
// but how can I pass the button.innerHTML to the function?
// use an anonymous function to call the function with the parameter.
// the following code has the parenthesis at the end of the function name. Why it works?
// because the function is being called inside an anonymous function.

// detect keyboard press
document.addEventListener('keydown', (event) => {
  makeSound(event.key);
  addAnimation(event.key);
});

// help me refactor the code above:
// document.addEventListener('keydown', function (event) {
//   makeSound(event.key);
// });
const addAnimation = (key) => {
  document.querySelector(`.${key}`).classList.add('pressed');
  setTimeout(() => {
    document.querySelector(`.${key}`).classList.remove('pressed');
  }, 100);
};
