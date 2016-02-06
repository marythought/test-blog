var articleView = {};

articleView.resetArticles = function(){
  $('div.blog-post').fadeIn();
  $('#categoryFilter').val('');
  $('#authorFilter').val('');
};

articleView.truncate = function() {
  $('div.article-body h2:not(:first-child)').hide();
  $('div.article-body p:not(:nth-child(2))').hide();
  var readMore = '<a href="#" class="continue btn btn-default">Read on &rarr;</a>';
  $('div.article-body').append(readMore);
  $('div.article-body').on('click', '.continue', (function(e) {
    event.preventDefault();
    $(this).siblings().show();
    $(this).hide();
  }));
};

articleView.showArticles = function(){
  $('#homeTab').on('click', function() {
    $('#newTab').removeClass('active');
    $('#aboutTab').removeClass('active');
    $(this).addClass('active');
    $('#about').hide();
    $('#newArticle').hide();
    $('#blogPosts').show();
    $('#article-sort').show();
    articleView.resetArticles();
  });
};

articleView.populateFilters = function() {
  Article.all.forEach(function(article){
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

articleView.initNewArticlePage = function() {
  $('#export-field').hide();
  $('#article-json').on('focus', function(){
    this.select();
  });
  $('#new-form').on('change', 'input, textarea', articleView.create);
};

articleView.create = function() {
  var article;
  $('#articlePreview').empty();

  article = new Article({
    title: $('#article-title').val(),
    author: $('#article-author').val(),
    authorUrl: $('#article-author-url').val(),
    category: $('#article-category').val(),
    body: marked($('#article-body').val()),
    publishedOn: $('#article-published:checked').length ? util.parseDate() : null
  });

  $('#articlePreview').append(article.toHtml());

  $('pre code').each(function(i, block) {
    hljs.highlightBlock(block);
  });

  $('#export-field').show();
  $('#article-json').val(JSON.stringify(article) + ',');
};

articleView.initIndexPage = function() {
  blog.populate();
  articleView.populateFilters();
  articleView.handleFilters();
  articleView.truncate();
};
