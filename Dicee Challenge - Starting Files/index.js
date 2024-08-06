// var randomNumber1=Math.floor(Math.random()*6)+1; 
// var randomNumber2=Math.floor(Math.random()*6)+1; 
//  var image1="images/dice"+randomNumber1+".png";
//  var image2="images/dice"+randomNumber2+".png";

//  document.querySelector(".dice .img1").setAttribute("src",image1);
//  document.querySelector(".dice .img2").setAttribute("src",image2);
// var randomNum1=Math.floor(Math.random()*6)+1;
// document.querySelector(".img1").setAttribute("src", "images/dice" + randomNum1 + ".png");
// var randomNum2=Math.floor(Math.random()*6)+1;
// document.querySelector(".img1").setAttribute("src", "images/dice" + randomNum2 + ".png");
var randomNum1=Math.floor(Math.random()*6)+1;
var randomdice="dice"+randomNum1+".png";
var randomImageSource="images/"+randomdice;
document.querySelectorAll("img")[0].setAttribute("src",randomImageSource);

var randomNumber2=Math.floor(Math.random()*6)+1;
var randomdice2="dice"+randomNumber2+".png";
var randomImageSource2="images/"+randomdice2;
document.querySelectorAll("img")[1].setAttribute("src",randomImageSource2);

if (randomNum1>randomNumber2){
    document.querySelector("h1").innerHTML="🏆player1 wins";
}
else if(randomNum1<randomNumber2){
    document.querySelector('h1').innerHTML="player2 wins🏆 ";
}
else{
    document.querySelector("h1").innerHTML="🏆Draw match🏆";
}