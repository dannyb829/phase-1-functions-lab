// Code your solution in this file!
function distanceFromHqInBlocks(addy){
   return Math.abs(42 - addy)
}

function distanceFromHqInFeet(addy) {
    return distanceFromHqInBlocks(addy) * 264
}

function distanceTravelledInFeet(start, fin) {
    return Math.abs(start - fin) * 264
}

function calculatesFarePrice(start, fin) {
   const feet = distanceTravelledInFeet(start, fin)
    if (feet <= 400) {
         return 0;
    }
    else if (feet > 400 && feet <= 2000) {
         return (feet - 400) * .02; 
    }
    else if (feet > 2000 && feet <= 2500) {
         return 25
    }
    else if (feet > 2500) {
         return 'cannot travel that far'
    }        
}