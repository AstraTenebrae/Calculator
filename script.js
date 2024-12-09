window.onload = function(){
	let a = ''
	let b = ''
	let expressionResult = ''
	let selectedOperation = null
	// окно вывода результата
	outputElement = document.getElementById("result")
	// список объектов кнопок циферблата (id которых начинается с btn_digit_)
	digitButtons = document.querySelectorAll('[id ^= "btn_digit_"]')
	function onDigitButtonClicked(digit) {
		if (!selectedOperation) {
			if ((digit != '.') || (digit == '.' && !a.includes(digit))) {
				a += digit
			}
			outputElement.innerHTML = a
		} else {
			if ((digit != '.') || (digit == '.' && !b.includes(digit))) {
				b += digit
				outputElement.innerHTML = b
			}
		}
	}
	// устанавка колбек-функций на кнопки циферблата по событию нажатия
	digitButtons.forEach(button => {
		button.onclick = function() {
			const digitValue = button.innerHTML
			onDigitButtonClicked(digitValue)
		}});
	// установка колбек-функций для кнопок операций
	document.getElementById("btn_op_mult").onclick = function() {
		if (a === '') return
		selectedOperation = 'x'
	}
	document.getElementById("btn_op_plus").onclick = function() {
		if (a === '') return
		selectedOperation = '+'
	}
	document.getElementById("btn_op_minus").onclick = function() {
		if (a === '') return
		selectedOperation = '-'
	}
	document.getElementById("btn_op_div").onclick = function() {
		if (a === '') return
		selectedOperation = '/'
	}
	// кнопка очищения
	document.getElementById("btn_op_clear").onclick = function() {
		a = ''
		b = ''
		selectedOperation = ''
		expressionResult = ''
		outputElement.innerHTML = 0
	}



	document.getElementById("btn_op_sign").onclick = function() {
		var num = document.getElementById('result');
		if (num.innerHTML[0] !== '0') {
			if (num.innerHTML[0] !== '-') {
				num.innerHTML = '-' + num.innerHTML
				if (b==='') {a = '-' + a}
				else {b = '-' + b}
			} 
			else {
				num.innerHTML = num.innerHTML.slice(1)
				if (b==='') {a = a.slice(1)}
				else {b = b.slice(1)}
			}
		}

	}

	document.getElementById("btn_op_percent").onclick = function() {
		if (b === '') { 
			a = ((+a) / 100).toString()
			outputElement.innerHTML = a
		}
		else { 
			b = ((+b) / 100).toString()
			outputElement.innerHTML = b
		}
	}
	
	document.getElementById("btn_op_sqrt").onclick = function() {
		if (b === '') { 
			a = (Math.sqrt((+a))).toString()
			outputElement.innerHTML = a
		}
		else { 
			b = (Math.sqrt((+b))).toString()
			outputElement.innerHTML = b
		}
	}
	
	document.getElementById("btn_op_pow").onclick = function() {
		if (b === '') { 
			a = (Math.pow((+a),2)).toString()
			outputElement.innerHTML = a
		}
		else { 
			b = (Math.pow((+b),2)).toString()
			outputElement.innerHTML = b
		}
	}
	
	document.getElementById("btn_op_fact").onclick = function() {
		if (b === '') { 
			let x = (+a);
			let fact = 1;
			for (let i = 2; i <= x; i++) {
				fact *= i;
			}
			outputElement.innerHTML = fact
			a = fact.toString()
		}
		else { 
			let x = (+b);
			let fact = 1;
			for (let i = 2; i <= x; i++) {
				fact *= i;
			}
			outputElement.innerHTML = fact;
			b = fact.toString();
			outputElement.innerHTML = b;
		}
	}
	
	// кнопка расчѐта результата
	document.getElementById("btn_op_equal").onclick = function() {
		if (a === '' || b === '' || !selectedOperation)
		return

		switch(selectedOperation) {
			case 'x':
				expressionResult = (+a) * (+b)
				break;
			case '+':
				expressionResult = (+a) + (+b)
				break;
			case '-':
				expressionResult = (+a) - (+b)
				break;
			case '/':
				expressionResult = (+a) / (+b)
				break;
		}

		a = expressionResult.toString()
		b = ''
		selectedOperation = null
		outputElement.innerHTML = a
	}

	document.getElementById("btn_backspace").onclick = function() {
		if (b === '') { 
			a = a.slice(0, -1)
			outputElement.innerHTML = a
		} else { 
			b = b.slice(0, -1)
			outputElement.innerHTML = b
		}
	}
	
	document.getElementById("btn_change_background").onclick = function() {
		let r = Math.floor(Math.random() * 255);
		let g = Math.floor(Math.random() * 255);
		let b = Math.floor(Math.random() * 255);
		let colour = "rgb(" + r + ", " + g + ", " + b + ")";
		document.querySelector("body").style.backgroundColor = colour;
	}

	document.getElementById("btn_change_screen").onclick = function() {
		let r = Math.floor(Math.random() * 255);
		let g = Math.floor(Math.random() * 255);
		let b = Math.floor(Math.random() * 255);
		let color = "rgb(" + r + ", " + g + ", " + b + ")";
		document.getElementById("result").style.backgroundColor = color;
	}
};