"use strict"


$(document).ready(function()
{
	o2.init();

});


var o2 =
{

	init: function()
	{
		this.checkButton();
		this.checkButton('.calc__numbers');
		this.checkButton('.calc__operands');
	},
	checkButton(elem)
	{
		$(elem).delegate('.button', 'click', function() 
		{  
			let inputVal = $('.calc__input').val();
			inputVal += $(this).text()
			$('.calc__input').val(inputVal);
		})
	},
	equalClick()
	{
		this.takeInputValue()
	},
	takeInputValue()
	{
		let values = $('.calc__input').val().match(/^\d{1,}(\.\d{1,})?[-+*/]\d{1,}(\.\d{1,})?$/);
		console.log(values);
	}
}


let sum = 0;
let arr = ['25','-','17','-','1','+','2','/','3'];
const functions = 
{
    '+': (a, b) => a + b,
    '-': (a, b) => a - b,
    '*': (a, b) => a * b,
    '/': (a, b) => a / b
};

for(let i = 0; i < arr.length; i++)
{
	if(i == 1 || i % 2 != 0)
	{
		if (arr[i] == '-')
		{
			if(sum == 0)
			{
				sum  = arr[i - 1] - arr[i + 1]
			}
			else
			{
				sum = sum - arr[i + 1]
			}
		}

		if (arr[i] == '+')
		{
			if(sum == 0)
			{
				sum  = +arr[i - 1] + +arr[i + 1]
			}
			else
			{
				sum = +sum + +arr[i + 1]
			}
		}
		if (arr[i] == '/')
		{
			if(sum == 0)
			{
				sum  = +arr[i - 1] / +arr[i + 1]
			}
			else
			{
				sum = +sum / +arr[i + 1]
			}
		}
	}
}

