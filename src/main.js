import './css/main.scss';
import { template, someData } from './firstComponent';

document.addEventListener("DOMContentLoaded", function() {
	var div = document.createElement('div');
	div.innerHTML = template(someData);
	document.body.appendChild(div);
});
