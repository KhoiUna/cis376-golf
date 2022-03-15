$(function () {
  $(".cardClose").click(function () {
    $(this).parent().hide();
  });  

  $(".cardOpen").click(function () {
    $(this).parent().children().show();
  });
});
