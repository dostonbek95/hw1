

$(document).ready(function() {
    var originalFontSize = $('#text').css('font-size');

    $('#toggleButton').click(function() {
        var currentFontSize = $('#text').css('font-size');
        var newFontSize = currentFontSize === originalFontSize ? '24px' : originalFontSize;
        $('#text').animate({ fontSize: newFontSize }, 500);
    });
});


// Change the color after 2 seconds
setTimeout(function() {
    document.querySelector('h1').classList.remove('original-color');
    document.querySelector('h1').classList.add('new-color');
    $("#myImage").css("border", "2px solid red");
  }, 2000);

  // Revert the color after 4 seconds
  setTimeout(function() {
    document.querySelector('h1').classList.remove('new-color');
    document.querySelector('h1').classList.add('original-color');
  }, 3000);

  $(document).ready(function () {
    // Add a border to the image with jQuery
    // $("#myImage").css("border", "2px solid red");
  });