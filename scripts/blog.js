var blog = {};
blog.categories = [];
blog.authors = [];

blog.render = function() {
  blog.processRawData();
  blog.populate();
  articleView.populateFilters();
  articleView.handleFilters();
};

blog.processRawData = function(){
  blog.rawData.sort(function(a,b) {
    return (new Date(b.publishedOn)) - (new Date(a.publishedOn));
  });
  blog.articles = blog.rawData.map(function(ele) {
    return new Article(ele);
  });
};

blog.populate = function(){
  blog.articles.forEach(function(a){
    if (a.publishedOn != null) {
      $('#blogPosts').append(a.toHtml());
    }
  });
};

blog.hide = function() {
  $('#about').hide();
  $('#newArticle').hide();
};

blog.showAbout = function() {
  $('#aboutTab').on('click', function() {
    $('#homeTab').removeClass('active');
    $('#newTab').removeClass('active');
    $(this).addClass('active');
    $('#blogPosts').hide();
    $('#newArticle').hide();
    $('#about').show();
    $('#article-sort').hide();
  });
};

blog.showNew = function() {
  $('#newTab').on('click', function() {
    $('#homeTab').removeClass('active');
    $('#aboutTab').removeClass('active');
    $(this).addClass('active');
    $('#blogPosts').hide();
    $('#about').hide();
    $('#newArticle').show();
    $('#article-sort').hide();
  });
};
