// 'use strict'
// no se requiere cuando type="module"
import Helpers from "./helpers.js";

document.addEventListener("DOMContentLoaded", async () => {
  const mainNav = document.querySelector(".main-nav");
  const navBarToggle = document.querySelector("#navbar-toggle");

  navBarToggle.addEventListener("click", function (e) {mainNav.classList.toggle("hidden");});

  const options = document.querySelectorAll(".main-nav a");
  options.forEach((option) => option.addEventListener("click", manageOptions));
  
  //Cargo pantalla de inicio
  await Helpers.loadPage("./resources/views/inicio.html", "main");
});

async function manageOptions(event) {
  event.preventDefault();
   
  const option = event.target.text;
  switch (option) {
    case "Formulario":
      await Helpers.loadPage("./resources/views/form.html", "main");      
      break;
    case "Registros":
      await Helpers.loadPage("./resources/views/records.html", "main");      
      break;
    default:
      if (option !== "Inicio") {
        console.log(`No hay definido un caso para la opción '${option}'`);
      }
      await Helpers.loadPage("./resources/views/inicio.html", "main");
      break;
  }
  document.querySelector(".main-nav").classList.add("hidden");
}

