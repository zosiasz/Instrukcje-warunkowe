var a = prompt('wpisz dowolną liczbę');
var	b = prompt('wpisz dowolną liczbę');
var value = (a * a) + (2 * a * b) - (b * b);


if (value < 0) {
	console.log('wynik ujemny');
} else if (value > 0) {
 	console.log('wynik dodatni');
} else { value == 0
	alert('wynik równy zero');
}