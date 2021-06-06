(function() {
  $('.white-arrow').on('click', function(e){
    e.preventDefault();
    $('html,body').animate({scrollTop: $('#content').offset().top}, 400);
  });

  $('.black-arrow').on('click', function(e){
    e.preventDefault();
    $('html,body').animate({scrollTop: 0}, 400);
  });

  $('.max img').on('click', () => {
    window.location = "https://beekeeper-cli.github.io";
  })
})();
