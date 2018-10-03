window.onload=function(){
	let count = 0;
	let times = document.getElementById("times");
	let cat = document.getElementById("paw");
	let question = document.getElementById("question");

	cat.addEventListener('click', function() {
		count += 1;
  	times.innerHTML = "Times Clicked: " + count;
  	question.innerHTML = "You Clicked the Cat!";
});

};
