
document.addEventListener('DOMContentLoaded', function () {
  document.querySelector('#color-button').addEventListener('click', onClick, false)

  function onClick() {
    chrome.tabs.query({ currentWindow: true, active: true },
      function (tabs) {
        chrome.tabs.sendMessage(tabs[0].id, renderColors)
      })

    //FIX Curly bracees
    function renderColors(colorsArr) {
      colorsArr = JSON.parse(colorsArr)
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

  }


})

