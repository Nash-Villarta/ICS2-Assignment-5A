let radiusFindC = 0
let radiusFindA = 0
let cCircle = 0
let aCircle = 0

document.getElementById('button').addEventListener('click', calculatecircumference)

function calculatecircumference () {
  radiusFindC = document.getElementById('radiusc').value
  radiusFindC = parseInt(radiusFindC)
  cCircle = 2 * Math.PI * radiusFindC
  alert('Circumference is ' + cCircle + '. Press Ok to dissmiss alert.')
}

document.getElementById('buttontwo').addEventListener('click', calculatearea)

function calculatearea () {
  radiusFindA = document.getElementById('radiusa').value
  radiusFindA = parseInt(radiusFindA)
  aCircle = Math.PI * radiusFindA * radiusFindA
  alert('Area is ' + aCircle + '. Press Ok to dissmiss alert.')
}
