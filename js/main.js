// Google Analytics
// (function (i, s, o, g, r, a, m) {
//     i['GoogleAnalyticsObject'] = r;
//     i[r] = i[r] || function () {
//         (i[r].q = i[r].q || []).push(arguments)
//     }, i[r].l = 1 * new Date();
//     a = s.createElement(o),
//         m = s.getElementsByTagName(o)[0];
//     a.async = 1;
//     a.src = g;
//     m.parentNode.insertBefore(a, m)
// })(window, document, 'script', 'https://www.google-analytics.com/analytics.js', 'ga');
//
// // TODO add your tracking id here
// ga('create', 'tracking-id', 'auto');
// ga('send', 'pageview');

$(document).ready(function() {
  // ScrollReveal settings
  window.sr = ScrollReveal({duration: 600, delay: 150});
  sr.reveal('#how .step', {distance: '50px'});
  sr.reveal('.when-1', {});
  sr.reveal('.when-2', {delay: 300});
  sr.reveal('.when-3', {delay: 450});
  sr.reveal('#real .explanation', {distance: '100px'});

});
