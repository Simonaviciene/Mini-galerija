"use strict";

console.log("JS DOM");


$('[data-fancybox="scroll"]').fancybox({
  loop: true,
  animationDuration: 100,

  
});
$(document).ready(function() {
    $('.pgwSlider').pgwSlider();
    
});
var pgwSlider = $('.pgwSlider').pgwSlider();

pgwSlider.reload({
    maxHeight : 200,
    intervalDuration : 4000
});