$( document ).ready(function() {
  Article.fetchAll();
  blog.showAbout();
  blog.showNew();
  blog.hide();
  articleView.showArticles();
  articleView.initNewArticlePage();
});
