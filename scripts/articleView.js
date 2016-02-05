var articleView = {};

articleView.resetArticles = function(){
  $('div.blog-post').fadeIn();
  // $('div.template').hide();
  $('#categoryFilter').val('');
  $('#authorFilter').val('');
};

articleView.truncate = function() {
  $('div.article-body p:not(:first-child)').hide();
  var $readMore = '<p><br></p><p class="continue btn btn-default">Read More</p>';
  $('div.article-body').append($readMore);
  $('#blogPosts').on('click', '.continue', (function(e) {
    $(this).siblings().show();
    $(this).hide();
  }));
};

articleView.showArticles = function(){
  $('#articlesTab').on('click', function() {
    blog.hideAbout();
    articleView.resetArticles();
  });
  $('#homeTab').on('click', function() {
    $('#about').hide();
    $('#blogPosts').show();
    articleView.resetArticles();
  });
};

articleView.populateFilters = function(article) {
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

articleView.handleFilters = function() {
  $('#authorFilter').on('change', function() {
    if ($(this).val()) {
      $('div.blog-post').hide();
      $('div.blog-post[data-author="' + $(this).val() + '"]').fadeIn();
    } else {
      blog.resetArticles();
    }
    $('#categoryFilter').val('');
  });

  $('#categoryFilter').on('change', function() {
    if ($(this).val()) {
      $('div.blog-post').hide();
      $('div.blog-post[data-category="' + $(this).val() + '"]').fadeIn();
    } else {
      $('div.blog-post').fadeIn();
      blog.resetArticles();
    }
    $('#authorFilter').val('');
  });
};
