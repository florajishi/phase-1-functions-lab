// Code your solution in this file!
const scuberHeadquarters = 42

// Discovered Math.abs: Calculates the difference between numbers without any regard to whether it is positive or negative
function distanceFromHqInBlocks(streetNum) {
    return Math.abs(streetNum - scuberHeadquarters);
}

function distanceFromHqInFeet(streetNum) {
  return Math.abs(streetNum - scuberHeadquarters) * 264
}

function distanceTravelledInFeet(startStreet, endStreet) {
  return Math.abs(startStreet - endStreet) * 264
}

function calculatesFarePrice(startStreet, endStreet) {
  const dist = distanceTravelledInFeet(startStreet, endStreet)
  if(dist <= 400){
    return 0
  }else if(dist > 400 && dist <= 2000) {
    return (dist - 400) * .02
  }else if(dist > 2000 && dist <= 2500){
    return 25
  }else if(dist > 2500){
    return "cannot travel that far"
  }
}