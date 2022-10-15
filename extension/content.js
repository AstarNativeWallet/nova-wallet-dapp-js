const script = document.createElement('script')

script.src = chrome.runtime.getURL('index.js')

script.onload = () => {
  if (script.parentNode) {
    script.parentNode.removeChild(script)
  }
}
;(document.head || document.documentElement).appendChild(script)
