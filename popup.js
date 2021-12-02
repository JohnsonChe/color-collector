const sendMessageButton = document.querySelector('#color-button')
sendMessageButton.onclick = async function (e) {
  let queryOptions = { active: true, currentWindow: true };
  let tab = await chrome.tabs.query(queryOptions);

  chrome.tabs.sendMessage(tab[0].id, { data: "colors-array" }, function (response) {
    renderColors(response);
  });
}



//FIX Curly bracees
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



// document.addEventListener('DOMContentLoaded', function () {
//   document.querySelector('#color-button').addEventListener('click', onClick, false)

//   async function onClick() {
//     alert('button working')

//     chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
//       chrome.tabs.sendMessage(tabs[0].id, { greeting: "hello" }, function (response) {
//         console.log(response.farewell);
//       });
//     });




//   }


// }, false)

