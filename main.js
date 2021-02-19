const menu = document.querySelector(".menu");
const navContents = document.querySelector("#nav_contents");

menu.addEventListener("click", () => {
  navContents.classList.toggle("toggle");
});

const services = document.querySelector("#services .contents");

const renderServices = async () => {
  try {
    const data = await fetch("data/services.json");
    const response = await data.json();
    let item = "";
    for (let i = 0; i < response.length; i++) {
      item += `
          <div class="card">
            <h3>${response[i].title}</h3>
            <p class="subtitle">${response[i].subtitle}</p>
            <p class="description">
              ${response[i].description}
            </p>
            <button class="more-details">More</button>
          </div>`;
    }
    services.innerHTML = item;
  } catch (error) {
    console.log("services error ===>>>", error);
  }
};

window.addEventListener("load", () => {
  renderServices();
});
