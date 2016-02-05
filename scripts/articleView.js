var articleView = {};

articleView.resetArticles = function(){
  $('div.blog-post').fadeIn();
  $('#categoryFilter').val('');
  $('#authorFilter').val('');
};

articleView.truncate = function() {
  $('div.article-body p:not(:first-child)').hide();
  $('div.article-body').on('click', '.continue', (function(e) {
    event.preventDefault();
    $(this).siblings().show();
    $(this).hide();
  }));
};

articleView.showArticles = function(){
  $('#homeTab').on('click', function() {
    $('#articlesTab').removeClass('active');
    $('#aboutTab').removeClass('active');
    $(this).addClass('active');
    $('#about').hide();
    $('#blogPosts').show();
    $('#article-sort').show();
    articleView.resetArticles();
  });
};

articleView.populateFilters = function() {
  blog.articles.forEach(function(article){
    if (blog.categories.indexOf(article.category) < 0) {
      blog.categories.push(article.category);
      $('#categoryFilter').append('<option value =' + article.category + '>' + article.category + '</option>');
    }
    var authorStub = util.hypenate(article.author);
    if (blog.authors.indexOf(article.author) < 0) {
      blog.authors.push(article.author);
      $('#authorFilter').append('<option value =' + authorStub + '>' + article.author + '</option>');
    }
  });
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
