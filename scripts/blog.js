var blog = {}

blog.render = function(array) {
  for (var i = 0; i < array.length; i++) {
    var article = new Article(array[i]);
    article.toHtml();
  }
};
