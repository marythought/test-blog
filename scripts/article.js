function Article(object) {
  this.title = object['title'];
  this.category = object['category'];
  this.author = object['author'];
  this.authorUrl = object['authorUrl'];
  this.publishedOn = object['publishedOn'];
  this.body = object['body'];
}

Article.prototype.toHtml = function() {
  var template = Handlebars.compile($('#article-template').text());
  this.categoryStub = util.hypenate(this.category);
  this.authorStub = util.hypenate(this.author);
  this.body = marked(this.body);
  return template(this);
};

Article.loadAll = function(rawData){
  rawData.sort(function(a,b) {
    return (new Date(b.publishedOn)) - (new Date(a.publishedOn));
  });
  Article.all = rawData.map(function(ele) {
    return new Article(ele);
  });
};

Article.fetchAll = function() {
  if (localStorage.rawData) {
    $.ajax({
      type: 'HEAD',
      url: '/data/hackerIpsum.json',
      success: function(data, message, xhr) {
        var eTag = xhr.getResponseHeader('eTag');
        if (!localStorage.eTag || eTag !== localStorage.eTag) {
          localStorage.eTag = eTag;
          Article.getAll();
        } else {
          Article.loadAll(JSON.parse(localStorage.rawData));
          articleView.initIndexPage();
        }
      }
    });
  } else {
    Article.getAll();
  }
};

Article.getAll = function() {
  $.getJSON('/data/hackerIpsum.json', function(rawData) {
    Article.loadAll(rawData);
    localStorage.rawData = JSON.stringify(rawData);
    articleView.initIndexPage();
  });
};
