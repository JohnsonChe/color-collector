
function getCSS() {

  // alert('ALERT outside')
  console.log("TESTING OUTSIDE")
  const bodyElement = document.querySelector('body')
  console.log(window.getComputedStyle(bodyElement))
}

function getAllColors() {
  // regex via http://stackoverflow.com/a/7543829/149636
  const rgbRegex = /^rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*(\d+(?:\.\d+)?))?\)$/;

  const allColors = [];

  //gets all elements and stores onto an array elems
  const allElements = document.getElementsByTagName('*');

  var elementStyles, styleName, styleValue, rgbVal;

  for (let i = 0; i < allElements.length; i++) {
    //for each element get the computed style, returns an array
    elementStyles = window.getComputedStyle(allElements[i]);

    //iterate through the elementStyles
    for (let y = 0; y < elementStyles.length; y++) {
      styleName = elementStyles[y];
      styleValue = elementStyles[styleName];

      //if style value doesn't exist, move onto next style
      if (styleValue === undefined) {
        continue;
      }

      // convert to string to avoid match exceptions
      styleValue += "";

      rgbVal = styleValue.match(rgbRegex);
      if (!rgbVal) { // property does not contain a color
        continue;
      }

      if (allColors.indexOf(rgbVal.input) == -1) { // avoid duplicate entries
        allColors.push(rgbVal.input);
      }

    }

  }

  return allColors;
}
const arrOfColors = getAllColors()
// renderColors(arrOfColors)

console.log(getAllColors())


chrome.runtime.sendMessage(JSON.stringify(arrOfColors), function (response) {
  console.log(response.farewell);
});



// chrome.action.onClicked.addListener((tab) => {
//   chrome.scripting.executeScript({
//     target: { tabId: tab.id },
//     function: getCSS
//   });
// });

// document.addEventListener('DOMContentLoaded', () => {
//   alert('ALERT on DOM LOADED')
//   console.log("TESTING")
//   const bodyElement = document.querySelector('body')
//   console.log(window.getComputedStyle(bodyElement))


// });