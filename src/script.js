import restaurants from "./dataSet/venu.js";
import messages from "./dataSet/message.js";

document.addEventListener("DOMContentLoaded", () => {
  const mainImage = document.getElementById("mainImage");
  const otherImages = document.querySelectorAll(".otherImage");
  const venuHeading = document.getElementById("venu-heading");
  const venudec = document.getElementById("venu-dec");
  const messageHeading = document.getElementById("messageHeading");
  const AutherName = document.getElementById("AutherName");
  const AutherPlace = document.getElementById("AutherPlace");
  const AutherImage = document.getElementById("AutherImage");
  const cardVideo = document.getElementById("cardVideo");

  // console.log(venuHeading.textContent);
  // console.log(restaurants);
  // venu changer ------------------------------------------------------
  const updateRestaurant = (index) => {
    const restaurant = restaurants[index];
    console.log(restaurant);
    mainImage.src = restaurant.mainImage;
    venuHeading.textContent = restaurant.heading;
    venudec.textContent = restaurant.desc;
  };

  otherImages.forEach((image, index) => {
    image.addEventListener("click", () => {
      updateRestaurant(index);
    });
  });
  //------------------------------------------------------------------------
  // video------------------------------------------------------------------
  const cardChanger = (index) => {
    const card = messages[index];
    messageHeading.textContent = card.message;
    AutherName.textContent = card.name;
    AutherPlace.textContent = card.address;
    AutherImage.src = card.img;
    cardVideo.src = card.video;
  };
  let increment = 1;
  const changer = setInterval(() => {
    cardChanger(increment);
    if (increment < 4) {
      increment++;
    } else if (increment === 4) {
      increment = 1;
    }
  }, 5000);

  changer();

  
});
