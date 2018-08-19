let Alength = parseFloat(prompt('Length a', 10));
let Blength = parseFloat(prompt('Length b', 20));
let angle = parseFloat(prompt('Angle', 30));
const maxAngle = 180;

let output;

if (Alength <= 0 || Blength <= 0) {
	output = 'Invalid data'; 
} else {

    let Clength = getClength(Alength, Blength, angle);
    let perimetr = Alength + Blength + Clength;
    let square = getSquare(perimetr/2, Alength, Blength, Clength);

 	output = 'c lenght: ' + Clength.toFixed(2) + '\n' + 'Triangle square: ' + square.toFixed(2) 
	+ '\n' + 'Triangle perimeter: ' + perimetr.toFixed(2);
}
function getClength(Alength, Blength, angle) {    
    let cLen = Math.PI / maxAngle * angle;
    return Math.sqrt(Alength*Alength + Blength*Blength - 2 * Alength * Blength * Math.cos(cLen));
}


function getSquare(perimetr, Alength, Blength, Clength) {
    return Math.sqrt(perimetr * ((perimetr - Alength) * (perimetr - Blength) * (perimetr - Clength)));
}

console.log(output);