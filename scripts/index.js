$( document ).ready(function() {
  blog.render(blog.rawData);
  $('.blog-post:first-child').hide();
  articleView.truncate();
  blog.hideAbout();
  blog.showAbout();
  articleView.showArticles();
  $('div.template').remove();
});
