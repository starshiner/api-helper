var localStorageKey = 'api-proxy-store';

chrome.webRequest.onBeforeRequest.addListener(
    dealRequest,
    { urls: ["<all_urls>"] },
    ["blocking"]
);

chrome.webRequest.onCompleted.addListener(dealInject,{ urls: ["<all_urls>"] })

function dealRequest(detail) {
  var localData = getData(localStorageKey);
  var currentURL = detail.url.split('?')[0];
  var queryString = detail.url.split('?')[1];
  if (localData[currentURL]) {
    var redirectUrl = localData[currentURL] + (queryString ? '?' + queryString : '')
    return { redirectUrl: redirectUrl };
  }
}

function dealInject (detail) {
  // chrome.tabs.executeScript(null, {
  //   file: 'inject.js',
  //   allFrames: false,
  //   run_at : "document_start"
  // });
}

function getData (key) {
  var data = window.localStorage.getItem(key);
  if (data) return JSON.parse(window.localStorage.getItem(key));
  return {};
}
