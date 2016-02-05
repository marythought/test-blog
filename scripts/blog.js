var blog = {};
blog.articles = [];
blog.categories = [];
blog.authors = [];

blog.render = function(array) {
  for (var i = 0; i < array.length; i++) {
    var article = new Article(array[i]);
    article.toHtml();
    blog.articles.push(article);
    articleView.populateFilters(article);
    articleView.handleFilters();
  }
};

blog.hideAbout = function() {
  $('#about').hide();
};

blog.showAbout = function() {
  $('#aboutTab').on('click', function() {
    $('#homeTab').removeClass('active');
    $('#articlesTab').removeClass('active');
    $(this).addClass('active');
    $('#blogPosts').hide();
    $('#about').show();
    $('#article-sort').hide();
  });
};
