function Article(object) {
  this.title = object['title'];
  this.category = object['category'];
  this.author = object['author'];
  this.authorUrl = object['authorUrl'];
  this.publishedOn = object['publishedOn'];
  this.body = object['body'];
}

Article.prototype.toHtml = function() {
  var $art = $('div.blog-post').clone().first();
  $art.find('h2').html(this.title);
  $art.find('.author-url').html(this.author).attr('href', this.authorUrl);
  $art.find('.article-date').html(this.publishedOn);
  $art.find('.article-body').html(this.body);
  $art.appendTo('#blogPosts');
};
