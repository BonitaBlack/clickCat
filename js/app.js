window.onload=function(){
let count1=0;
let count2=0;
	let times = document.getElementById("times");
	let cat = document.getElementById("paw");
	let question = document.getElementById("question");

	cat.addEventListener('click', function() {
		count1 += 1;
  	times.innerHTML = "Times Clicked: " + count1;
  	question.innerHTML = "You Clicked This Cat!";
});
//add name of cat1
let freya = document.createElement("p");
let name1 = document.createTextNode("This cat's name is Freya");
freya.appendChild(name1);
let cat1 = document.getElementById("paw");
cat1.appendChild(freya);

//add cat2
let cat2 = document.getElementById("whisker");
let hannah_img = document.createElement("img");
hannah_img.src ="images/cat2.jpg";
cat2.appendChild(hannah_img);

let hannah = document.createElement("p");
let name2 = document.createTextNode("This cat's name is Hannah");
hannah.appendChild(name2);
cat2.appendChild(hannah);

let cln1 = question.cloneNode(true);
cat2.appendChild(cln1).setAttribute("id", "question2");

let cln2 = times.cloneNode(true);
cat2.appendChild(cln2).setAttribute("id", "times2");

//cat2.getElementTagName("h3").setAttribute("id", "times2");
//cat2.getElementTagName("p").setAttribute("id", "question2");

cat2.addEventListener('click', function()
{
	count2 +=1;
	times2.innerHTML = "Times Clicked:" + count2;
	question2.innerHTML = "You Clicked This Cat!";


});
};
