$(function() {
  

const games = [
  {
    title: "007",
    link: "James Bond", 
    author: "Games Bond"
  },
  {
    title: "Name Game",
    link: "https://zanemoon13.github.io/lab-echo/index.html", 
    author: "Zane Mooney"
  },
  {
    title: "Macey's Game",
    link: "https://maceyraejones.github.io/cautious-couscous/",
    author: "Macey Jones"
    },
    {
title: "EchoGame",
link: "https://brandoncoplen.github.io/EchoLab1/",
author: "Brandon Coplen"
},
{
  title: "NameGame",
  link: "https://nkerstiens.github.io/Echo-Lab-376/",
  author: "Noah Kerstiens"
  },
  {
    title: "game4happiness",
    link: "https://vanpham2000.github.io/game4happiness/",
    author: "Van Pham"
    },
    {
      title: "namePage",
      link: "https://2fortdev.github.io/Echo-lab/",
      author: "Sam Aaron"
      }
];
// iterate over the JSON array
$.each(games, function (index, item) {
  console.log("Game Title: " + item.title);
  console.log("Game URL: " + item.link);
  console.log("Game Author: " + item.author);

  // create a brand new HTML element JUST with code

var el = `<div class='card text-center mx-auto bg-dark blue' style="width: 200px"> \
  <button class='cardOpen2 btn btn-outline-info'> ${ item.title } </button> \
   <div class='cardHide'> \
       <br> \
       <a href="${ item.link }" target="_blank" class="link-info" >GAME LINK</a> \
       <p class="text-white">Create by: ${ item.author } </p> \
       <br> \
       <button class='btn btn-outline-info cardClose2'>Close</button> \
   </div>
 </div>`; 

 console.log(el); 


$('#firstCard').append(el);

$('.nav-dropdown').append($(`<li><a href="#!"> ${item.author} </a></li>`));

});


});
