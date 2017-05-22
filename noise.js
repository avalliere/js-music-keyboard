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
});
