
$(document).ready(function(){
  $('#elephantClick').click(function(){
    $('.elephant').show();
    $('.tiger').hide();
    $('.whale').hide();
    $('#pic2').hide();
    $('#pic3').hide();
  })
  $('#tigerClick').click(function(){
    $('.tiger').show();
    $('.whale').hide();
    $('.elephant').hide();
    $('#pic1').hide();
    $('#pic3').hide();
  })
  $('#whaleClick').click(function(){
    $('.whale').show();
    $('.elephant').hide();
    $('.tiger').hide();
    $('#pic2').hide();
    $('#pic1').hide();
  })
});
