(function(module) {
  var blog = {};
  blog.categories = [];
  blog.authors = [];
  blog.tabs = ['#homeTab', '#newTab', '#statsTab', '#aboutTab'];
  blog.sections = ['#blogPosts', '#newArticle', '#stats', '#about'];

  blog.populate = function(){
    Article.all.forEach(function(a){
      if (a.publishedOn != null) {
        $('#blogPosts').append(a.toHtml());
      }
    });
  };

  blog.hide = function() {
    blog.sections.forEach(function(section){
      $(section).hide();
    });
    $('#blogPosts').show();
  };

  // refactor these functions to populate from blog.tabs & blog.sections instead
  blog.showAbout = function() {
    $('#aboutTab').on('click', function() {
      $('#homeTab').removeClass('active');
      $('#newTab').removeClass('active');
      $('#statsTab').removeClass('active');
      $(this).addClass('active');
      $('#blogPosts').hide();
      $('#newArticle').hide();
      $('#stats').hide();
      $('#about').show();
      $('#article-sort').hide();
    });
  };

  blog.showNew = function() {
    $('#newTab').on('click', function() {
      $('#homeTab').removeClass('active');
      $('#aboutTab').removeClass('active');
      $('#statsTab').removeClass('active');
      $(this).addClass('active');
      $('#blogPosts').hide();
      $('#about').hide();
      $('#stats').hide();
      $('#newArticle').show();
      $('#article-sort').hide();
    });
  };

  blog.showStats = function() {
    $('#statsTab').on('click', function() {
      $('#homeTab').removeClass('active');
      $('#aboutTab').removeClass('active');
      $('#newTab').removeClass('active');
      $(this).addClass('active');
      $('#blogPosts').hide();
      $('#about').hide();
      $('#newArticle').hide();
      $('#stats').show();
      $('#article-sort').hide();
    });
  };
  module.blog = blog;
})(window);
