import Navigo from 'navigo';
import HomePage from "./page/home";
const router = new Navigo("/", { linksSelector: "a" });
const print = (content) => {
  document.getElementById("app").innerHTML = content
};
router.on({
  "/": () => {
   print(HomePage.render());
  },
  "/about": () => {
    print("About Page");
  },
  "/product": () => {
    print("Product Page");
  },
});
router.notFound(() => print("Not Found Page"));
router.resolve();



// const menuList = ["menu1", "menu2", "menu3"];

// const menuElement = document.querySelector('#menu');
// if (menuElement) {
//   for (let i = 0; i < menuList.length; i++) {
//     menuElement.innerHTML += `<li>${menuList[i]}</li>`;
//   }
// }

