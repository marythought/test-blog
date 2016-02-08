$( document ).ready(function() {
  Article.fetchAll();
  blog.showAbout();
  blog.showStats();
  blog.showNew();
  blog.hide();
  articleView.showArticles();
});
