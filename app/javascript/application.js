// Configure your import map in config/importmap.rb. Read more: https://github.com/rails/importmap-rails
import "@hotwired/turbo-rails"
import "controllers"
import 'bootstrap'

document.addEventListener("DOMContentLoaded", () => {
    console.log("hello from application.js");
    // Example DOM manipulation
    const button = document.getElementById("check-button");
    button.addEventListener("click", () => {
      const element = document.getElementById("hello");
      element.textContent = "You clicked the button!";
    });
  });