const cowsblock = document.querySelector('.cows');
const trysblock = document.querySelector('.trys');

function insert(num) {
	document.form.textview.value = 
	document.form.textview.value + num;
	a = document.form.textview.value;
}

a = document.form.textview.value;

function four(num){
	if (a.length < 4) {
		insert(num);
	}
}

function back(){
	document.form.textview.value = a.substring(0, a.length -1)
	a = document.form.textview.value; 
}
let b;
let rand;
function randomInteger(min, max) {
		b = min + Math.random() * (max - min + 1);
		rand = b.toFixed();
		console.log(rand);
		return Math.round(rand);
}
let trycount = 0;

function check(){
	let i = 0;
	let biks = 0;
	let cows = 0;
	while (i < 4){
		if (a[i] == rand[i]) {
			biks += 1;
			cows -= 1;
		}
		if (a[i] == rand[0]){
			cows +=1;
		} else if (a[i] == rand[1]){
			cows +=1;
		} else if (a[i] == rand[2]){
			cows +=1;
		} else if (a[i] == rand[3]){
			cows +=1;
		}
	i = i+1;
	}
	c = document.form.textview.value;
	trycount += 1;
	console.log(biks + ' быка');
	console.log(cows + ' коров');
	document.form.textview.value = '';
	a = document.form.textview.value;
	if (biks == 4) {
		cowsblock.textContent = 'Победа!';
	} else if (trycount >= 10) {
		cowsblock.textContent = 'Вы проиграли';

		let texti = '10) Правильный ответ:' + rand;

		let lose = document.createElement('p');
		lose.className = "trynumber";
  		lose.innerHTML = texti;
  		trysblock.append(lose);
	} else {
		cowsblock.textContent = cows + '🐮' + biks + '🐂';
		
		let text = trycount + ') ' + c + ' ' + cows + '🐮' + biks + '🐂';

		let tryi = document.createElement('p');
		tryi.className = "trynumber";
  		tryi.innerHTML = text;
  		trysblock.append(tryi);

	}


}
function startcheck(){
	if (a.length == 4 & trycount <= 10){
		check();
	}
}

randomInteger(1000, 9998)