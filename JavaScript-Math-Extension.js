//Written for the JavaScript Math Extension Project on 2/29/16 for Version 1.1
//General Functions
//Convert radians to degrees
function Math.radToDeg(radians) 
{
	return radians * (180 / Math.PI);
}

//Convert degrees to radians
function Math.degToRad(degrees) 
{
	return degrees * (Math.PI / 180);
}

function Math.degRadConversion(n, type) {
	if(type == 0 || type = 'degToRad') { //If the conversion should be degrees to radians
		Math.degToRad(n); //Convert n (degrees) to radians
	}
	
	else if(type == 1 || type = 'radToDeg') { //If the conversion should be radians to degrees
		Math.radToDeg(n); //Convert n (radians) to degrees
	}
}

//Rounds a number to the specified decimal.
function Math.roundToDecimal(n, d) {
	//n is the number getting rounded
	//d is the decimal point getting rounded to. (10 = tenth, 100 = hundreth, 1000 = thousandth, and so on).
	Math.round(n * d) / d;
}

//Takes 10 to the power of a specified number.
function Math.tenToPowerOf(n) {
	//n is the number that 10 is multiplied to the power of.
	Math.pow(10, n);
}

//COSINE SECTION
//Cosine degree functions.  While JavaScript has a Cosine function, it is in radians.  This is conversion to degrees.
// Custom cos function for degrees opposed to default radian cos.
function Math.cosDegrees = function(degrees) //Original label was radians
{
	return Math.cos(degrees / 180 * Math.PI);
};

//Inverse cosine in degrees.
function Math.acosDegrees = function(radians)
{
	return Math.acos(radians) * 180 / Math.PI; //Convert radians to 
};

//Law of Cosine
//Makes use of custom cos functions above.
//For finding missing side when 1 angle and 2 sides are known.  (Uses law of cosine)
function Math.lawCosSide(a, b, d)
{
	//a = side a
	//b = side b
	//d = known angle
	
	var aSqr = a * a; //a squared
	var bSqr = b * b; //b squared
	var abSqr = aSqr + bSqr; //Add squared angle sides together.
	var convD = Math.cosDegrees(d); //Convert angle to degrees.
	
	var secondPart = 2 * a * b * convD; //The second part of the problem.
	
	var equation = abSqr - secondPart; //Equation is main chunk of problem.
	var ans = Math.sqrt(equation); //Answer is square root of output of equation.

	lastAnswer = ans; //The final answer is...
	
	return ans;
}

//Law of cosine for finding angle when all sides are known (Uses law of cos)
function Math.lawCosAngle(a, b, c)
{
	//a, b and c are all sides.
	
	var aSqr = a * a; //a squared
	var bSqr = b * b; //b squared
	var cSqr = c * c; //c squared
	var firstStep = (aSqr + bSqr - cSqr) / (2 * a * b ); //Add a squared + b squared - c squared to get majority of equation.
	var ans = Math.acosDegrees(firstStep); //Inverse Cosine (Degrees)
	
	lastAnswer = ans; //Answer is in degrees.
	
	return ans;
}

//CIRCLES SECTION
//Find an arc in a circle.  Note this is an untested function.
function Math.findArc(x, r) {
	//x is ratio of arc to circle
	//r is degree measure of arc
	var equation = 360 / x * 2 * Math.PI * r;
	
	return equation;
}

//CORDINATE PLANES SECTION
//Find the distance between two points
function Math.distTwoDimension(a, b, x, y) {
	//a and b are coords for point 1
	//x and y are coords for point 2
	var abSqr = Math.sqr(a - b);
	var xySqr = Math.sqr(x - y);
	var ans = Math.sqrt(abSqr + xySqr);
	
	return ans;
}
