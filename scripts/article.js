function Article(object) {
  this.title = object['title'];
  this.category = object['category'];
  this.categoryStub = util.hypenate(this.category);
  this.author = object['author'];
  this.authorStub = util.hypenate(this.author);
  this.authorUrl = object['authorUrl'];
  this.publishedOn = object['publishedOn'];
  this.body = object['body'];
}

Article.prototype.toHtml = function() {
  var template = Handlebars.compile($('#article-template').text());

  return template(this);
};
