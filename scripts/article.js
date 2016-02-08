(function(module) {
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

  // DONE: Chain together a `map` and a `reduce` call to get a rough count of all words in all articles.
  Article.numWordsAll = function() {
    return Article.all.map(function(article) {
      return article.body.split(' ').length;
    }).reduce(function(a, b) {
      return a + b;
    });
  };

  // DONE: Chain together a `map` and a `reduce` call to produce an array of unique author names.
  Article.allAuthors = function() {
    var authors = Article.all.map(function(article) {
      return article.author;
    });
    return authors.filter(function(elem, pos){
      return authors.indexOf(elem) == pos;
    });
  };

  Article.numWordsByAuthor = function() {
    return Article.allAuthors().map(function(author) {
      // DONE: Transform each author string into an object with properties for
      // the author's name, and the total number of words across all articles written by the specified author.
      return {
        name: author,
        numWords: util.commas(Article.all.filter(function(a) {
          return a.author === author;
        }).map(function(a) {
          return a.body.split(' ').length;
        }).reduce(function(a, b) {
          return a + b;
        }))
      };
    });
  };
  module.Article = Article;
})(window);
