


	count = 0;
	let times = document.getElementById("times");
	let cat = document.images["cat"];
	let question = document.getElementById("question");
	
cat.onclick = function() {
	count += 1;
  times.innerHTML = "Times Clicked: " + count;
  question.innerHTML = "You Clicked the Cat!";
};
	
