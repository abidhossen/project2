(function($){
  $(document).ready(function () {
    $('.user-name .name-field input').focus(function(){
      $('.name-field label').hide();
    });
    $('.user-name .email-field input').focus(function(){
      $('.email-field label').hide();
    });
    $('.text-field textarea').focus(function(){
      $('.text-field label').hide();
    });
    $('#1').pieChart({
      barColor:'#30bae7',
      lineWidth: 15,
      size: 170,
    });
    $('#2').pieChart({
      barColor:'#d74680',
      lineWidth: 15,
      size: 170,
    });
    $('#3').pieChart({
      barColor:'#15c7a8',
      lineWidth: 15,
      size: 170,
    });
    $('#4').pieChart({
      barColor:'#eb7d4b',
      lineWidth: 15,
      size: 170,
    });
    var mixing = mixitup('.work-boxes')
  });
})(jQuery);
