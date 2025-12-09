// const btn = document.getElementById("langBtn");

// // تهيئة Swiper عالمياً
// let swiperInstance = new Swiper(".swiper", {
//   slidesPerView: 3,
//   spaceBetween: 25,
//   loop: true,
//   centeredSlides: true,
//   grabCursor: true,
//   pagination: {
//     el: ".swiper-pagination",
//     clickable: true,
//     dynamicBullets: true,
//   },
//   navigation: {
//     nextEl: ".swiper-button-next",
//     prevEl: ".swiper-button-prev",
//   },
//   breakpoints: {
//     0: { slidesPerView: 1 },
//     520: { slidesPerView: 2 },
//     950: { slidesPerView: 3 },
//   },
//   rtl: document.documentElement.getAttribute("dir") === "rtl",
// });

// btn.addEventListener("click", () => {
//   const html = document.documentElement;
//   const elements = document.querySelectorAll("[data-ar]");
//   const header = document.getElementById("header");
//   const navMenu = document.querySelector(".nav-menu");
//   const dropdownMenus = document.querySelectorAll(".dropdown-menu");

//   const isEnglish = btn.textContent.includes("ENGLISH");

//   if (isEnglish) {
//     // تحويل إلى الإنجليزية
//     btn.innerHTML = '<i class="bi bi-globe2"></i> العربية';
//     html.setAttribute("dir", "ltr");
//     html.setAttribute("lang", "en");

//     header.style.flexDirection = "row";
//     navMenu.style.textAlign = "left";

//     dropdownMenus.forEach(menu => {
//       menu.style.float = "left";
//       menu.style.textAlign = "left";
//     });

//     elements.forEach(el => {
//       const icon = el.querySelector("i");
//       el.innerHTML = el.getAttribute("data-en") + (icon ? " " + icon.outerHTML : "");
//       el.style.textAlign = "left"; // مهم لتحريك النص
//     });

//   } else {
//     // تحويل إلى العربية
//     btn.innerHTML = '<i class="bi bi-globe2"></i> ENGLISH';
//     html.setAttribute("dir", "rtl");
//     html.setAttribute("lang", "ar");

//     header.style.flexDirection = "row-reverse";
//     navMenu.style.textAlign = "center";

//     dropdownMenus.forEach(menu => {
//       menu.style.float = "right";
//       menu.style.textAlign = "right";
//     });

//     elements.forEach(el => {
//       const icon = el.querySelector("i");
//       el.innerHTML = el.getAttribute("data-ar") + (icon ? " " + icon.outerHTML : "");
//       el.style.textAlign = "right"; // مهم لتحريك النص
//     });
//   }

//   // 🔹 إعادة تهيئة Swiper بعد تغيير اللغة
//   if (swiperInstance) swiperInstance.destroy(true, true);

//   swiperInstance = new Swiper(".swiper", {
//     slidesPerView: 3,
//     spaceBetween: 25,
//     loop: true,
//     centeredSlides: true,
//     grabCursor: true,
//     pagination: {
//       el: ".swiper-pagination",
//       clickable: true,
//       dynamicBullets: true,
//     },
//     navigation: {
//       nextEl: ".swiper-button-next",
//       prevEl: ".swiper-button-prev",
//     },
//     breakpoints: {
//       0: { slidesPerView: 1 },
//       520: { slidesPerView: 2 },
//       950: { slidesPerView: 3 },
//     },
//     rtl: html.getAttribute("dir") === "rtl",
//   });
// });

// // تغيير الكلاس عند التمرير
// document.addEventListener("scroll", () => {
//   const header = document.getElementById("header");
//   if (window.scrollY > 100) {
//     header.classList.add("scrolled");
//   } else {
//     header.classList.remove("scrolled");
//   }
// });



const btn = document.getElementById("langBtn");

// تهيئة Swiper عالمياً
let swiperInstance = new Swiper(".swiper", {
  slidesPerView: 3,
  spaceBetween: 25,
  loop: true,
  centeredSlides: true,
  grabCursor: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    0: { slidesPerView: 1 },
    520: { slidesPerView: 2 },
    950: { slidesPerView: 3 },
  },
  rtl: document.documentElement.getAttribute("dir") === "rtl",
});

btn.addEventListener("click", () => {
  const html = document.documentElement;
  const elements = document.querySelectorAll("[data-ar]");
  const header = document.getElementById("header");
  const navMenu = document.querySelector(".nav-menu");
  const dropdownMenus = document.querySelectorAll(".dropdown-menu");
  const inputs = document.querySelectorAll("input[data-ar]"); // ✔ إضافة الفورم

  const isEnglish = btn.textContent.includes("ENGLISH");

  if (isEnglish) {
    // تحويل إلى الإنجليزية
    btn.innerHTML = '<i class="bi bi-globe2"></i> العربية';
    html.setAttribute("dir", "ltr");
    html.setAttribute("lang", "en");

    header.style.flexDirection = "row";
    navMenu.style.textAlign = "left";

    dropdownMenus.forEach(menu => {
      menu.style.float = "left";
      menu.style.textAlign = "left";
    });

    elements.forEach(el => {
      const icon = el.querySelector("i");
      el.innerHTML = el.getAttribute("data-en") + (icon ? " " + icon.outerHTML : "");
      el.style.textAlign = "left";
    });

    // تحديث الفورم للغة الإنجليزية
    inputs.forEach(input => {
      input.placeholder = input.getAttribute("data-en");
      input.setAttribute("dir", "ltr");
      input.style.textAlign = "left";
    });

  } else {
    // تحويل إلى العربية
    btn.innerHTML = '<i class="bi bi-globe2"></i> ENGLISH';
    html.setAttribute("dir", "rtl");
    html.setAttribute("lang", "ar");

    header.style.flexDirection = "row-reverse";
    navMenu.style.textAlign = "center";

    dropdownMenus.forEach(menu => {
      menu.style.float = "right";
      menu.style.textAlign = "right";
    });

    elements.forEach(el => {
      const icon = el.querySelector("i");
      el.innerHTML = el.getAttribute("data-ar") + (icon ? " " + icon.outerHTML : "");
      el.style.textAlign = "right";
    });

    // تحديث الفورم للغة العربية
    inputs.forEach(input => {
      input.placeholder = input.getAttribute("data-ar");
      input.setAttribute("dir", "rtl");
      input.style.textAlign = "right";
    });
  }

  // 🔹 إعادة تهيئة Swiper بعد تغيير اللغة
  if (swiperInstance) swiperInstance.destroy(true, true);

  swiperInstance = new Swiper(".swiper", {
    slidesPerView: 3,
    spaceBetween: 25,
    loop: true,
    centeredSlides: true,
    grabCursor: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      dynamicBullets: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      0: { slidesPerView: 1 },
      520: { slidesPerView: 2 },
      950: { slidesPerView: 3 },
    },
    rtl: html.getAttribute("dir") === "rtl",
  });
});

// تغيير الكلاس عند التمرير
document.addEventListener("scroll", () => {
  const header = document.getElementById("header");
  if (window.scrollY > 100) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});
