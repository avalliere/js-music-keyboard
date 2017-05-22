// $(document).ready( function() {
//   $('.class').click(function(event) {
//
//   })
// });

// plays sound when clicked
$(document).ready(function() {
  $('.instrument').on('click', 'button', function(event) {
    var note = $(this).html();
    console.log(note);
    var sound = document.getElementById(note + "Audio");
    console.log(sound);
    sound.load();
    sound.play();
  });

  $('body').keydown(function(event){
    // var note = $(this).html();
    // console.log(note);
    // var sound = document.getElementById(note + "Audio");
    // console.log(sound);
    if (event.key == 'a'|| event.key == 'b' || event.key == 'c' || event.key == 'd' || event.key == 'e' || event.key == 'f' || event.key == 'g') {
      var sound = document.getElementById(event.key + "Audio");
      sound.load();
      sound.play();
    }
  });
});
