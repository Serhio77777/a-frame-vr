
var box = document.querySelector('a-box');
var sphere = document.querySelector('a-sphere');
var cylinder = document.querySelector('a-cylinder');
var box2 = document.querySelector('#box');
console.log([box]);
let xBox = 0
let yBox = 45
let zBox = 0
function rotateAll(element) {
  if (xBox === 180) {
    xBox = 0
  }
  if (yBox === 180) {
    yBox = 0
  }
  if (zBox === 180) {
    zBox = 0
  }
  switch (Math.floor(Math.random() * (4 - 1)) + 1) {
    case 1: xBox += 2
      break;
    case 2: yBox += 2
      break;
    case 3: zBox += 2
      break;
    default: console.log(1);

  }
  element.setAttribute('rotation', {
    x: xBox,
    y: yBox,
    z: zBox
  });
  setTimeout(() => rotateAll(element), 100)
}

var xBox2 = 0
function rotateX(element) {
  if (xBox2 === 180) {
    xBox2 = 0
  }
  xBox2 += 2
  element.setAttribute('rotation', {
    x: xBox2,
    y: 45,
    z: 0
  });
  setTimeout(() => rotateX(element), 100)
}


function colorChange(element) {
  element.setAttribute('color', 'rgb(' + Math.floor(Math.random() * (255 - 1)) + 1 + ',' + Math.floor(Math.random() * (255 - 1)) + 1 + ',' + Math.floor(Math.random() * (255 - 1)) + 1 + ')');
  setTimeout(() => colorChange(element), 500)
}

rotateAll(box)

rotateX(box2)

colorChange(cylinder)


AFRAME.registerComponent('cursor-listener', {
  init: function () {
    var COLORS = ['red', 'green', 'blue'];
    this.el.addEventListener('click', function (evt) {
      var randomIndex = Math.floor(Math.random() * COLORS.length);
      this.setAttribute('material', 'color', COLORS[randomIndex]);
      console.log('I was clicked at: ', evt.detail.intersection.point);
    });
  }
});
