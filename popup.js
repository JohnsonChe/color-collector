
chrome.runtime.onMessage.addListener(
  function (request, sender, sendResponse) {
    console.log(sender.tab ?
      "from a content script:" + sender.tab.url :
      "from the extension");
    if (request.greeting === "hello")
      sendResponse({ farewell: "goodbye" });
  }
);



// const colorsDiv = document.querySelector('.modal-popup__colors')


// console.log(colorsDiv)


function renderColors(colorsArr) {
  const colorsDiv = document.querySelector('.modal-popup__colors')

  colorsArr.forEach(element => {
    const colorWrapper = document.createElement('div')
    colorWrapper.setAttribute('class', 'color-wrapper')

    const colorDisplay = document.createElement('div')
    colorDisplay.setAttribute('class', 'color-display')
    colorDisplay.style.backgroundColor = element

    const colorValue = document.createElement('span')
    colorValue.setAttribute('class', 'color-value')
    colorValue.innerText = element

    colorWrapper.appendChild(colorDisplay)
    colorWrapper.appendChild(colorValue)

    colorsDiv.appendChild(colorWrapper)

  })

}