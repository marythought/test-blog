var blog = {};
blog.categories = [];
blog.authors = [];

blog.populate = function(){
  Article.all.forEach(function(a){
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
