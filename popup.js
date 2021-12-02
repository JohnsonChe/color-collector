alert('ALERT outside')

document.addEventListener('DOMContentLoaded', () => {
  alert('ALERT on DOM LOADED')
  console.log("TESTING")
  const bodyElement = document.querySelector('body')
  console.log(window.getComputedStyle(bodyElement))


});