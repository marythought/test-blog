(function(module) {
  var util = {};

  util.hypenate = function(string){
    return string.replace(/ /g, '-');
  };

  util.parseDate = function() {
    now = new Date();
    var yyyy = now.getFullYear().toString();
    var mm = (now.getMonth()+1).toString();
    var dd  = now.getDate().toString();
    return yyyy + '-' + (mm[1] ? mm : '0'+mm[0]) + '-' + (dd[1]?dd:'0'+ dd[0]);
  };
  
  // http://stackoverflow.com/a/2901298/5100791
  util.commas = function(num) {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  };

  module.util = util;
})(window);
