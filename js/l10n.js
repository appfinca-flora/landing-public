/* browser locale detection */
var language = navigator.language || navigator.browserLanguage; // for IE
if (language.toLowerCase().indexOf('zh-tw') > -1) {
  if (document.location.href.indexOf('zh-tw') < 0) {
    // document.location.href = '/zh-tw/index.html?' + location.search.substring(1);
    document.location.href = '/zh-tw' + location.pathname + location.search.substring(0);
  }
}
