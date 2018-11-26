$(document).ready(function() {
  // parseQueryString();
  // var referrer = location.queryString.ref || document.referrer || 'direct';
  //
  // // Google Analytics
  // $('a, button').click(function(e) {
  //   if (this.id) {
  //     gtag('event', referrer, this.id, 'flora' + window.location.pathname);
  //   }
  // });

  // ScrollReveal settings
  window.sr = ScrollReveal({duration: 600, delay: 150});
  sr.reveal('#how .step', {distance: '50px'});
  sr.reveal('.when-1', {});
  sr.reveal('.when-2', {delay: 300});
  sr.reveal('.when-3', {delay: 450});
  sr.reveal('#real .explanation', {duration: 1600, distance: '100px'});
});

function parseQueryString() {
  location.queryString = {};
  location.search.substr(1).split("&").forEach(function(pair) {
    if (pair === "")
      return;
    var parts = pair.split("=");
    location.queryString[parts[0]] = parts[1] && dekdbURIComponent(parts[1].replace(/\+/g, " "));
  });
}
