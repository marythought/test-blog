var blog = {};
blog.articles = [];
blog.categories = [];
blog.authors = [];

blog.render = function(array) {
  for (var i = 0; i < array.length; i++) {
    var article = new Article(array[i]);
    article.toHtml();
    blog.articles.push(article);
    blog.populateFilters(article);
  }
};

blog.populateFilters = function(article) {
  if (blog.categories.indexOf(article.category) < 0) {
    blog.categories.push(article.category);
    $('#categoryFilter').append('<option value =' + article.category + '>' + article.category + '</option>');
  }
  var authorStub = util.hypenate(article.author);
  if (blog.authors.indexOf(article.author) < 0) {
    blog.authors.push(article.author);
    $('#authorFilter').append('<option value =' + authorStub + '>' + article.author + '</option>');
  }
};

blog.filter = function() {

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

blog.hideAbout = function() {
  $('#about').hide();
};

blog.showAbout = function() {
  $('#aboutTab').on('click', function() {
    $('#blogPosts').hide();
    $('#about').show();
  });
};

blog.showArticles = function(){
  $('#articlesTab').on('click', function() {
    $('#about').hide();
    $('#blogPosts').show();
  });
  $('#homeTab').on('click', function() {
    $('#about').hide();
    $('#blogPosts').show();
  });
};

blog.setup = function(){
  blog.truncate();
  blog.hideAbout();
  blog.showAbout();
  blog.showArticles();
};
