const menuList = ["menu1", "menu2", "menu3"];

const menuElement = document.querySelector('#menu');
if (menuElement) {
  for (let i = 0; i < menuList.length; i++) {
    menuElement.innerHTML += `<li>${menuList[i]}</li>`;
  }
}

