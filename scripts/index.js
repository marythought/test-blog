$( document ).ready(function() {
  blog.render();
  articleView.truncate();
  blog.showAbout();
  blog.showNew();
  blog.hide();
  articleView.showArticles();
  articleView.initNewArticlePage();
});
