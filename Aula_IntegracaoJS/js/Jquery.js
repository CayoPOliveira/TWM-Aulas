$(document).ready(function()
{
  $("#hide").click(function()
  {
    $("p").hide();
    console.log("Hide!!");
  });
});

$(document).ready(function()
{
  $("#show").click(function()
  {
      $("p").show();
      console.log("Show!!");
  });
});

$(document).ready(function()
{
  $("#toggle").click(function()
  {
    $("p").toggle();
    console.log("Toggle!!");
  });
});

$(document).ready(function()
{
  let data = new Date();
  alert('Hoje é dia ' + data);
});