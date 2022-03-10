import { games } from "./config.js";

$(function () {
  // iterate over the JSON array
  $.each(games, function (index, item) {
    // create a brand new HTML element JUST with code
    var el = `<div class='card text-center mx-auto bg-dark blue' style="width: 200px"> \
  <button class='cardOpen2 btn btn-outline-info'> ${item.title} </button> \
   <div class='cardHide'> \
       <br> \
       <a href="${item.link}" target="_blank" class="link-info" >GAME LINK</a> \
       <p class="text-white">Create by: ${item.author} </p> \
       <br> \
       <button class='btn btn-outline-info cardClose2'>Close</button> \
   </div>
 </div>`;

    $("#cards").append(el);
    $(".nav-dropdown").append($(`<li><a href="#!"> ${item.author} </a></li>`));
  });
});
