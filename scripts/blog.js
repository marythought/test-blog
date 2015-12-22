var blog = {};

blog.render = function(array) {
  for (var i = 0; i < array.length; i++) {
    var article = new Article(array[i]);
    article.toHtml();
  }
};

blog.truncate = function() {
  $('div.article-body p:not(:first-child)').hide();
  var $readMore = '<p><br></p><p class="continue btn btn-default">Read More</p>';
  $('div.article-body').append($readMore);
  $('#blogPosts').on('click', '.continue', (function(e) {
    $(this).siblings().show();
    $(this).hide();
  }));
};
