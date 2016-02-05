var blog = {};
blog.articles = [];
blog.categories = [];
blog.authors = [];

blog.render = function() {
  blog.processRawData();
  blog.populate();
  articleView.populateFilters();
  articleView.handleFilters();
};

blog.processRawData = function(){
  blog.rawData.forEach(function(ele) {
    blog.articles.push(new Article(ele));
  });
};

blog.populate = function(){
  blog.articles.forEach(function(a){
    $('#blogPosts').append(a.toHtml());
  });
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
