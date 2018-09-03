//DoubleCLick Function
var myName = document.getElementsByClassName('span1');
console.log (myName);
myName[0].addEventListener("dblclick",function () {
	this.style.color = 'white';
})

//Mouseover Function
var myImage = document.getElementById('milli');
myImage.addEventListener('mouseover', function(){
	this.setAttribute('src', 'images/milli.png');
})
//Mouseout Function
var myImage = document.getElementById('milli');
myImage.addEventListener('mouseout', function(){
	this.setAttribute('src', 'images/logotransparent.png');
})