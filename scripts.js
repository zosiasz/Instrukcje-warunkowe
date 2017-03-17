var a = prompt('wpisz dowolną liczbę');
var	b = prompt('wpisz dowolną liczbę');
var value = (a * a) + (2 * a * b) - (b * b);

console.log('Delta: ' + value);

if (value < 0) {
	console.log('wynik ujemny');
} else if (value > 0) {
	console.log('wynik dodatni');
} else if (value === 0) { 
	alert('wynik równy zero');
} else {
	console.log('nieprawidłowe dane - wynik nieokreślony');
}