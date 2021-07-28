$(function() {

	// counter js
  $('#counter-block').ready(function(){
        $('.clients').animationCounter({
          start: 0,
          end: 1000,
          step: 1,
          delay:20,
        });
        $('.projects').animationCounter({
          start: 0,
          end: 156,
          step: 1,
          delay:50,
                  });
        $('.Customers').animationCounter({
          start: 0,
          end: 80,
          step: 1,
          delay: 80,
        });
        $('.Finished').animationCounter({
          start: 0,
          end: 1482,
          step: 1,
          delay: 20,
          
        });
    });




});