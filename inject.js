var url = chrome.extension.getURL('inline.js')
var script = document.createElement('script')
script.src=url
script.async=false;
// script.onload = function() { this.remove(); };
(document.head || document.documentElement).appendChild(script)
// console.log('1', document.documentElement.outerHTML)
// document.documentElement.appendChild(script)
// console.log('2', document.documentElement.outerHTML)
// // document.querySelector('html').insertBefore(script, null)
// // document.write('<script src=' + url + '></script>')
// // set
// window.XMLHttpRequest = function () {
//   console.log(1)
// }
