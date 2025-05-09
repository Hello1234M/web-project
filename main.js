function scrollSlider(direction) {
    var $slider = $('#productSlider'); // get the slider
    var scrollAmount = 220; 

    // scroll left or right
    $slider.animate({
      scrollLeft: $slider.scrollLeft() + direction * scrollAmount
    }, 400); // 400ms = smooth scroll



  }
  // Double-click on the icon to toggle search bar
  $('#searchIcon').click(function () {
    $('#search-container').fadeToggle(200);
    $('#searchInput').focus(); // still focuses for convenience
  });