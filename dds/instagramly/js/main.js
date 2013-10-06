// Why hello there, sexy.
// This is a javascript comment. Any line that begins with // will be like this.
// Comments have NO effect on your webpage. NONE! ZERO!
$(function() {

  var access_token = '198349558.f59def8.84479f9173f144df8374d6f0edefaf5d';

  $('#search').on('click', function() {
    var tag = $('#tag').val();
    search(tag);
  });

  var opts = {
  lines: 8, // The number of lines to draw
  length: 8, // The length of each line
  width: 4, // The line thickness
  radius: 5, // The radius of the inner circle
  corners: 1, // Corner roundness (0..1)
  rotate: 0, // The rotation offset
  direction: 1, // 1: clockwise, -1: counterclockwise
  color: '#000', // #rgb or #rrggbb or array of colors
  speed: 1, // Rounds per second
  trail: 60, // Afterglow percentage
  shadow: false, // Whether to render a shadow
  hwaccel: false, // Whether to use hardware acceleration
  className: 'spinner', // The CSS class to assign to the spinner
  zIndex: 2e9, // The z-index (defaults to 2000000000)
  top: 'auto', // Top position relative to parent in px
  left: 'auto' // Left position relative to parent in px
};
  var spinner = new Spinner(opts).spin();
  $('.spinner')[0].appendChild(spinner.el);

  $('#tag').on('keypress', function(e) {
    if (e.keyCode == 13) {
      var tag = $('#tag').val();
      search(tag);
    }
  })
 // $.getJSON('js/data.json', displayImages);
  function search(tag) {
    $('#images').empty();
    $('.spinner').show();
    $('#search-bar .container .row').hide()
    //$.getJSON('https://api.instagram.com/v1/tags/' + tag + '/media/recent?callback=?&access_token=' + access_token, displayImages);
    $.getJSON('js/data.json', displayImages);
  }

  function displayImages(response) {
    $('#search-bar .container .row').show()
    $('.spinner').hide();
    for(i in response.data) {
      var post = response.data[i];

      var postDiv = $('<div/>').addClass('post');
      var img     = $('<img/>').addClass('image').attr('src', post.images.standard_resolution.url);
      var user    = $('<img/>').addClass('user').attr('src', post.user.profile_picture);
      var meta    = $('<div/>')
                      .addClass('meta')
                      .append(user)
                      .append("<a target='_blank' href='http://instagram.com/" + post.user.username + "'>" + post.user.full_name + "</a>");


      postDiv.append(meta).append(img);
      $('#images').append(postDiv);
    }
  }

})