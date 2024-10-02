module.exports = {
  chromeSelector: '.wrapper > *, #root > *, .story-decorator > *',
  diffingEngine: 'pixelmatch',
  configurations: {
    'chrome.laptop': {
      target: 'chrome.headless',
      width: 1366,
      height: 768,
    },
    'chrome.iphone7': {
      target: 'chrome',
      preset: 'iPhone 7',
    },
  },
  fetchFailIgnore: 'localhost:1234/get',
};	